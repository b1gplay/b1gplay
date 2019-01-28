from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.conversation_reply import ConversationReply


class ConversationReplySerialiser(serializers.ModelSerializer):
    class Meta:
        model = ConversationReply
        fields = '__all__'


class ConversationReplyViewSet(ModelViewSet):
    queryset = ConversationReply.objects.all()
    serializer_class = ConversationReplySerialiser
    permission_class = [DjangoModelPermissions]


conversationReplyRouter = DefaultRouter()
conversationReplyRouter.register(
    r'conversation-replies', ConversationReplyViewSet)
