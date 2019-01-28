from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.comment import Comment


class CommentSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerialiser
    permission_class = [DjangoModelPermissions]


commentRouter = DefaultRouter()
commentRouter.register(r'comments', CommentViewSet)
