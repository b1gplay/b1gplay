from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.team import Team


class TeamSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'


class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerialiser
    permission_class = [DjangoModelPermissions]


teamRouter = DefaultRouter()
teamRouter.register(r'teams', TeamViewSet)
