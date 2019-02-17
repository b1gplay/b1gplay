from django.conf import settings
from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.sports.models.sport import Sport
from apps.sports.models.team import Team

from apps.users.models.profile import Profile


class Fan(TimeStampedModel):
    """
        A person who admires and supports a person, sport, sports team
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE
    )
    sport_of_interest = models.ForeignKey(Sport, on_delete=models.CASCADE)
    team_supported = models.ForeignKey(Team, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Fan"
        verbose_name_plural = "Fans"
        db_table = 'fan'

    def __str__(self):
        return self.name
