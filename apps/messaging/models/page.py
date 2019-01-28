from django.db import models
from django_extensions.db.models import TimeStampedModel


class Page(TimeStampedModel):
    name = models.CharField(max_length=50)
    description = models.TextField()
    link = models.CharField(max_length=50)  # Link to link model

    class Meta:
        verbose_name = "Page"
        verbose_name_plural = "Pages"

    def __unicode__(self):
        return '%s' % (self.description)
