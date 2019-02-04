from django.conf import settings
from django.db import models
from django_extensions.db.models import TimeStampedModel
from apps.users.models.user import User
from django_countries.fields import CountryField
import uuid

from apps.sports.models.team import Team
from apps.sports.models.agent import Agent
from apps.sports.models.scout import Scout


class Player(TimeStampedModel):
    """
    A person who plays a sport
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    number = models.PositiveIntegerField()
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    nationality = CountryField(blank_label='(select country)')
    country_of_residence = CountryField(blank_label='(select country)')
    weight = models.PositiveIntegerField()
    height = models.PositiveIntegerField()
    agent = models.ForeignKey(
        Agent, on_delete=models.CASCADE, blank=True, null=True)
    scout = models.ForeignKey(
        Scout, on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        verbose_name = "Player"
        verbose_name_plural = "Players"

    def __str__(self):
        return self.name
