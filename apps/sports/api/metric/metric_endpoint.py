from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.metric import Metric


class MetricSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Metric
        fields = '__all__'


class MetricViewSet(ModelViewSet):
    queryset = Metric.objects.all()
    serializer_class = MetricSerialiser
    permission_class = [DjangoModelPermissions]


metricRouter = DefaultRouter()
metricRouter.register(r'metrics', MetricViewSet)
