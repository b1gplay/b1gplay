from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

from apps.sports.models.team import Team
from apps.sports.models.agent import Agent
from apps.sports.models.scout import Scout


class Player(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)  # Link to User model
    team = models.CharField(max_length=50)
    number = models.PositiveIntegerField()
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    nationality = CountryField(blank_label='(select country)')
    country_of_residence = CountryField(blank_label='(select country)')
    weight = models.PositiveIntegerField()
    height = models.PositiveIntegerField()
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE)
    scout = models.ForeignKey(Scout, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Player"
        verbose_name_plural = "Players"

    def __unicode__(self):
        return '%s %s' % (self.name, self.team)
