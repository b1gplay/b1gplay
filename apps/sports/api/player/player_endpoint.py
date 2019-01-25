from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.player import Player


class PlayerSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'


class PlayerViewSet(ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerialiser
    permission_class = [DjangoModelPermissions]


playerRouter = DefaultRouter()
playerRouter.register(r'players', PlayerViewSet)
