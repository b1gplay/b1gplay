from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.event import Event


class EventSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class EventViewSet(ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerialiser
    permission_class = [DjangoModelPermissions]


eventRouter = DefaultRouter()
eventRouter.register(r'events', EventViewSet)
