from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.basketball_ratings import BasketballRatings

from django.db.models import Avg, Max, Min, Sum


class BasketballRatingsSerialiser(serializers.ModelSerializer):
    account_type = serializers.ReadOnlyField()
    total_score = serializers.ReadOnlyField()

    class Meta:
        model = BasketballRatings
        fields = '__all__'


class BasketballRatingsViewSet(ModelViewSet):
    queryset = BasketballRatings.objects.all()
    serializer_class = BasketballRatingsSerialiser
    permission_class = [DjangoModelPermissions]
    filterset_fields = ('ratedBy', )


basketballRatingsRouter = DefaultRouter()
basketballRatingsRouter.register(
    r'basketball-ratings', BasketballRatingsViewSet)
