from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

from apps.sports.models.team import Team
from apps.sports.models.agent import Agent
from apps.sports.models.scout import Scout
from apps.users.models.profile import Profile


class Player(TimeStampedModel):
    """
    A person who plays a sport
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE
    )
    position = models.PositiveIntegerField()
    club = models.CharField(max_length=150, blank=True, null=True)
    country_of_residence = CountryField(blank_label='(select country)')
    weight = models.PositiveIntegerField()
    height = models.PositiveIntegerField()
    wingspan = models.PositiveIntegerField()
    vertical_leap = models.PositiveIntegerField()
    time_to_run_40m = models.PositiveIntegerField()
    time_to_run_100m = models.PositiveIntegerField()

    class Meta:
        verbose_name = "Player"
        verbose_name_plural = "Players"
        db_table = 'player'

    def __str__(self):
        return self.name
