from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.media import Media


class MediaSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = '__all__'


class MediaViewSet(ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerialiser
    permission_class = [DjangoModelPermissions]


mediaRouter = DefaultRouter()
mediaRouter.register(r'media', MediaViewSet)
