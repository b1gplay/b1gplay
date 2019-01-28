from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.link import Link


class LinkSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'


class LinkViewSet(ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerialiser
    permission_class = [DjangoModelPermissions]


linkRouter = DefaultRouter()
linkRouter.register(r'links', LinkViewSet)
