from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField

from apps.sports.models.player import Player
from apps.sports.models.team import Team
from apps.sports.models.agent import Agent

class Transfer(TimeStampedModel):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    transferTo = models.ForeignKey(Team, on_delete=models.CASCADE)	
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE)	
    location_from = CountryField(blank_label='(select country)')
    location_to = CountryField(blank_label='(select country)')

    class Meta:
        verbose_name = "Transfer"
        verbose_name_plural = "Transfers"





