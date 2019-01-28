from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.video import Video


class VideoSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'


class VideoViewSet(ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerialiser
    permission_class = [DjangoModelPermissions]


videoRouter = DefaultRouter()
videoRouter.register(r'videos', VideoViewSet)
