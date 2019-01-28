from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.messaging.models.page import Page


class PageSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = '__all__'


class PageViewSet(ModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerialiser
    permission_class = [DjangoModelPermissions]


pageRouter = DefaultRouter()
pageRouter.register(r'pages', PageViewSet)
