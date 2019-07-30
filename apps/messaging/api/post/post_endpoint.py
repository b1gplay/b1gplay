from rest_framework import serializers
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions, AllowAny, IsAuthenticated

from apps.messaging.models.post import Post
from apps.users.models.profile import Profile


class PostSerialiser(serializers.ModelSerializer):
    profile_name = serializers.ReadOnlyField()
    avatar = serializers.ImageField(required=False,)

    class Meta:
        model = Post
        fields = '__all__'

    parser_classes = (MultiPartParser, FormParser)


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerialiser
    permission_class = [DjangoModelPermissions]
    filterset_fields = ('owner', )

    #permission_class = [IsAuthenticated]
    #serializer_class = PostSerialiser

    # def get_queryset(self):
    #    return self.request.user.posts.all()

    # def perform_create(self, serializer):
    #    serializer.save(owner=self.request.user)


postRouter = DefaultRouter()
#postRouter.register(r'posts', PostViewSet, 'posts')
postRouter.register(r'posts', PostViewSet, basename='Post')
