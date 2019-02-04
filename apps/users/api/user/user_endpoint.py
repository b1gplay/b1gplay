from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.users.models.user import User


class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        #fields = '__all__'
        fields = ('id', 'first_name', 'last_name', 'email', 'groups')


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerialiser
    permission_class = [DjangoModelPermissions]


userRouter = DefaultRouter()
userRouter.register(r'users', UserViewSet)
