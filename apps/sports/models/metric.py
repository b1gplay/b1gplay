from django.db import models
from django_extensions.db.models import TimeStampedModel


class Metric(TimeStampedModel):
    sport = models.CharField(max_length=50)
    metric = models.CharField(max_length=50)
    description = models.TextField()

    class Meta:
        verbose_name = "Metric"
        verbose_name_plural = "Metrics"

    def __unicode__(self):
        return '%s %s' % (self.sport, self.metric)
