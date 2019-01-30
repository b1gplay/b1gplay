from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Notification(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    source = models.CharField(max_length=50, blank=True, null=True)
    recipient = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=100, blank=True, null=True)
    link = models.URLField()
    is_read = models.BooleanField()

    class Meta:
        verbose_name = "Notification"
        verbose_name_plural = "Notifications"

    def __unicode__(self):
        return '%s' % (self.title)
