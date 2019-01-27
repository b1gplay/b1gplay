from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.users.models.account import Account


class AccountSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


class AccountViewSet(ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerialiser
    permission_class = [DjangoModelPermissions]


accountRouter = DefaultRouter()
accountRouter.register(r'accounts', AccountViewSet)
