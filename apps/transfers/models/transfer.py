from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

from apps.sports.models.player import Player
from apps.sports.models.team import Team
from apps.sports.models.agent import Agent


class Transfer(TimeStampedModel):
    """
        Action taken whenever a player under contract moves between clubs/ teams
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    transferTo = models.ForeignKey(Team, on_delete=models.CASCADE)
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE)
    location_from = CountryField(blank_label='(select country)')
    location_to = CountryField(blank_label='(select country)')

    class Meta:
        verbose_name = "Transfer"
        verbose_name_plural = "Transfers"
