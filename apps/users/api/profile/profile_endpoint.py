from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.users.models.profile import Profile


class ProfileSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class ProfileViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerialiser
    permission_class = [DjangoModelPermissions]
    filterset_fields = ('user', )


profileRouter = DefaultRouter()
profileRouter.register(r'profiles', ProfileViewSet)
