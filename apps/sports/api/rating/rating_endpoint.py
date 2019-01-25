from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.rating import Rating


class RatingSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'


class RatingViewSet(ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerialiser
    permission_class = [DjangoModelPermissions]


ratingRouter = DefaultRouter()
ratingRouter.register(r'ratings', RatingViewSet)
