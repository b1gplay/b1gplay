from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField

from apps.transfers.models.transfer import Transfer

class Payment(TimeStampedModel):
    amount = models.PositiveIntegerField(blank=True, null=True) 
    status = models.CharField(max_length=50) 
    transfer = models.ForeignKey(Transfer, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True, blank=True)
    
    class Meta:
        verbose_name = "Payment"
        verbose_name_plural = "Payments"

    





        

