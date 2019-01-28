from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.notification import Notification


class NotificationSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'


class NotificationViewSet(ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerialiser
    permission_class = [DjangoModelPermissions]


notificationRouter = DefaultRouter()
notificationRouter.register(r'notifications', NotificationViewSet)
