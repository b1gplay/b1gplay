from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.sport import Sport


class SportSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = '__all__'


class SportViewSet(ModelViewSet):
    queryset = Sport.objects.all()
    serializer_class = SportSerialiser
    permission_class = [DjangoModelPermissions]


sportRouter = DefaultRouter()
sportRouter.register(r'sports', SportViewSet)
