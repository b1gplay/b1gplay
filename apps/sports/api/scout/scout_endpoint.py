from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.scout import Scout


class ScoutSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Scout
        fields = '__all__'


class ScoutViewSet(ModelViewSet):
    queryset = Scout.objects.all()
    serializer_class = ScoutSerialiser
    permission_class = [DjangoModelPermissions]


scoutRouter = DefaultRouter()
scoutRouter.register(r'scouts', ScoutViewSet)
