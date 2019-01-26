from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.transfers.models.transfer import Transfer


class TransferSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Transfer
        fields = '__all__'


class TransferViewSet(ModelViewSet):
    queryset = Transfer.objects.all()
    serializer_class = TransferSerialiser
    permission_class = [DjangoModelPermissions]


transferRouter = DefaultRouter()
transferRouter.register(r'transfers', TransferViewSet)
