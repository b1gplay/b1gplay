from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.fan import Fan


class FanSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Fan
        fields = '__all__'


class FanViewSet(ModelViewSet):
    queryset = Fan.objects.all()
    serializer_class = FanSerialiser
    permission_class = [DjangoModelPermissions]


fanRouter = DefaultRouter()
fanRouter.register(r'fans', FanViewSet)
