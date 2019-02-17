from django.conf import settings
from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

from apps.sports.models.coach import Coach
from apps.sports.models.sport import Sport


class Team(TimeStampedModel):
    """
    A group of individuals who play sports on the same team
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    coach = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    sport = models.ForeignKey(
        Sport,
        on_delete=models.CASCADE
    )
    location = models.CharField(
        max_length=50, null=True, blank=True)  # Link to Location model
    country = CountryField(blank_label='(select country)')

    class Meta:
        verbose_name = "Team"
        verbose_name_plural = "Teams"
        db_table = 'team'

    def __str__(self):
        return self.name
