from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Feed(TimeStampedModel):
    """
        A list of updates on your page that shows updates about those people who you are following
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    link = models.URLField()

    class Meta:
        verbose_name = "Feed"
        verbose_name_plural = "Feeds"
        db_table = 'feed'

    def __unicode__(self):
        return '%s' % (self.link)
