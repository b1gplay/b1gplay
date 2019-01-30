from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

from apps.sports.models.sport import Sport


class Media(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)  # Link to User model
    affiliate = models.CharField(max_length=100)
    sports_of_interest = models.ForeignKey(Sport, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Media"
        verbose_name_plural = "Media"

    def __unicode__(self):
        return '%s %s' % (self.name, self.affiliate)
