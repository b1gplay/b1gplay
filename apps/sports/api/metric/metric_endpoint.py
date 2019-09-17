from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.sports.models.metric import Metric


class MetricSerialiser(serializers.ModelSerializer):
    account_type = serializers.ReadOnlyField()

    class Meta:
        model = Metric
        fields = '__all__'


class MetricViewSet(ModelViewSet):
    queryset = Metric.objects.all()
    serializer_class = MetricSerialiser
    permission_class = [DjangoModelPermissions]
    filterset_fields = ('player', 'ratedBy')


metricRouter = DefaultRouter()
metricRouter.register(r'metrics', MetricViewSet)
