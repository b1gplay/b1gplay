from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.agent import Agent


class AgentSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Agent
        fields = '__all__'


class AgentViewSet(ModelViewSet):
    queryset = Agent.objects.all()
    serializer_class = AgentSerialiser
    permission_class = [DjangoModelPermissions]


agentRouter = DefaultRouter()
agentRouter.register(r'agents', AgentViewSet)
