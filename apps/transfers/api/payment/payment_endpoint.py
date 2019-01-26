from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.transfers.models.payment import Payment


class PaymentSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'


class PaymentViewSet(ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerialiser
    permission_class = [DjangoModelPermissions]


paymentRouter = DefaultRouter()
paymentRouter.register(r'payments', PaymentViewSet)
