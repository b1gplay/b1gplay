from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.feed import Feed


class FeedSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Feed
        fields = '__all__'


class FeedViewSet(ModelViewSet):
    queryset = Feed.objects.all()
    serializer_class = FeedSerialiser
    permission_class = [DjangoModelPermissions]


feedRouter = DefaultRouter()
feedRouter.register(r'feeds', FeedViewSet)
