from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.conversation import Conversation


class ConversationSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = '__all__'


class ConversationViewSet(ModelViewSet):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerialiser
    permission_class = [DjangoModelPermissions]


conversationRouter = DefaultRouter()
conversationRouter.register(r'conversations', ConversationViewSet)
