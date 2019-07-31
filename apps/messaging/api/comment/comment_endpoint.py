from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.comment import Comment
from apps.users.models.profile import Profile


class CommentSerialiser(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField()
    avatar = serializers.ImageField(required=False,)

    class Meta:
        model = Comment
        fields = '__all__'


class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerialiser
    permission_class = [DjangoModelPermissions]
    filterset_fields = ('author', )


commentRouter = DefaultRouter()
commentRouter.register(r'comments', CommentViewSet)
