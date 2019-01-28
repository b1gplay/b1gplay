from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.photo import Photo


class PhotoSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'


class PhotoViewSet(ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerialiser
    permission_class = [DjangoModelPermissions]


photoRouter = DefaultRouter()
photoRouter.register(r'photos', PhotoViewSet)
