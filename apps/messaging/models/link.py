from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Link(TimeStampedModel):
    """
    A feature that allows you to jump to a new location when you click or tap it
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.TextField(max_length=50, blank=True, null=True)
    link = models.URLField()
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True, null=True)
    source = models.CharField(max_length=50)  # user who created the link

    class Meta:
        verbose_name = "Link"
        verbose_name_plural = "Links"

    def __unicode__(self):
        return '%s' % (self.description)


