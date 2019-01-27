from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.users.models.address import Address


class AddressSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'


class AddressViewSet(ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerialiser
    permission_class = [DjangoModelPermissions]


addressRouter = DefaultRouter()
addressRouter.register(r'addresses', AddressViewSet)
