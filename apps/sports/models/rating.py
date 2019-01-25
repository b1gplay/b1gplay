from django.db import models
from django_extensions.db.models import TimeStampedModel
from django.core.validators import MaxValueValidator, MinValueValidator

from apps.sports.models import Metric
from apps.sports.models.player import Player
from apps.sports.models.sport import Sport

class Rating(TimeStampedModel):
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)
    metric = models.ForeignKey(Metric, on_delete=models.CASCADE)
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(
        default=1,
        validators=[
            MaxValueValidator(10),
            MinValueValidator(1)
        ]
    )

    class Meta:
        verbose_name = "Rating"
        verbose_name_plural = "Ratings"

    def __unicode__(self):
        return '%s' % (self.rating)
