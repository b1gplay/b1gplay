from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.sports.models import Sport


class Metric(TimeStampedModel):
    """
    Represents a way of measuring a players attributes on a given sport
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)
    metric = models.CharField(max_length=50)
    description = models.TextField()

    class Meta:
        verbose_name = "Metric"
        verbose_name_plural = "Metrics"
        db_table = 'metric'

    def __str__(self):
        return self.description
