from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.sports.models.sport import Sport
from apps.sports.models.team import Team


class Fan(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)  # Link to User model
    sport_of_interest = models.ForeignKey(Sport, on_delete=models.CASCADE)
    team_supported = models.ForeignKey(Team, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Fan"
        verbose_name_plural = "Fans"

    def __unicode__(self):
        return '%s %s' % (self.name, self.sport_of_interest)
