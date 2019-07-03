from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class BasketballRatings(TimeStampedModel):
    """
    Represents a way of measuring a players attributes on a given sport
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    rebounding = models.PositiveSmallIntegerField()

    class Meta:
        verbose_name = "Basketball Ratings"
        verbose_name_plural = "Basketball Ratings"
        db_table = 'basketball_ratings'

    def __str__(self):
        return self.rebounding
