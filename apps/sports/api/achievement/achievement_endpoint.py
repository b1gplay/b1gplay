from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.achievement import Achievement


class AchievementSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = '__all__'


class AchievementViewSet(ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerialiser
    permission_class = [DjangoModelPermissions]


achievementRouter = DefaultRouter()
achievementRouter.register(r'achievements', AchievementViewSet)
