from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.message import Message


class MessageSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'


class MessageViewSet(ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerialiser
    permission_class = [DjangoModelPermissions]


messageRouter = DefaultRouter()
messageRouter.register(r'messages', MessageViewSet)
