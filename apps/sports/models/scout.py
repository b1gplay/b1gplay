from django.conf import settings
from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

from apps.sports.models.sport import Sport
from apps.users.models.profile import Profile


class Scout(TimeStampedModel):
    """
    Someone who works for a professional sports agency, 
    a sports team or a college or university,
    and helps identify talent to fill spots on rosters
    and also may help with contract negotiations.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE
    )
    affiliate = models.CharField(max_length=100)
    country_of_residence = CountryField(blank_label='(select country)')
    sport_of_interest = models.ForeignKey(
        Sport,
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = "Scout"
        verbose_name_plural = "Scouts"

    def __str__(self):
        return self.name
