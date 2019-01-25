from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.coach import Coach


class CoachSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = '__all__'


class CoachViewSet(ModelViewSet):
    queryset = Coach.objects.all()
    serializer_class = CoachSerialiser
    permission_class = [DjangoModelPermissions]


coachRouter = DefaultRouter()
coachRouter.register(r'coaches', CoachViewSet)
