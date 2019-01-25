from django.db import models
from django_extensions.db.models import TimeStampedModel


class Sport(TimeStampedModel):
    name = models.CharField(max_length=50)
    description = models.TextField()
    picture = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name = "Sport"
        verbose_name_plural = "Sports"

    def __unicode__(self):
        return '%s %s' % (self.name, self.description)
