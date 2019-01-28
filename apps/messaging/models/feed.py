from django.db import models
from django_extensions.db.models import TimeStampedModel


class Feed(TimeStampedModel):
    link = models.URLField()

    class Meta:
        verbose_name = "Link"
        verbose_name_plural = "Links"

    def __unicode__(self):
        return '%s' % (self.link)
