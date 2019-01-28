from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.album import Album


class AlbumSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = '__all__'


class AlbumViewSet(ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerialiser
    permission_class = [DjangoModelPermissions]


albumRouter = DefaultRouter()
albumRouter.register(r'albums', AlbumViewSet)
