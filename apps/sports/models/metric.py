from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.sports.models import Sport


class Metric(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)
    metric = models.CharField(max_length=50)
    description = models.TextField()

    class Meta:
        verbose_name = "Metric"
        verbose_name_plural = "Metrics"

    def __unicode__(self):
        return '%s' % (self.metric)
