from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Feed(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    link = models.URLField()

    class Meta:
        verbose_name = "Link"
        verbose_name_plural = "Links"

    def __unicode__(self):
        return '%s' % (self.link)
