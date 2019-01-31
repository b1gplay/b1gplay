from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

from apps.sports.models.sport import Sport


class Scout(TimeStampedModel):
    """
    Someone who works for a professional sports agency, 
    a sports team or a college or university,
    and helps identify talent to fill spots on rosters
    and also may help with contract negotiations.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)  # Link to User model
    affiliate = models.CharField(max_length=100)
    country_of_residence = CountryField(blank_label='(select country)')
    sport_of_interest = models.ForeignKey(Sport, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Scout"
        verbose_name_plural = "Scouts"

    def __unicode__(self):
        return '%s %s' % (self.name, self.sport_of_interest)
