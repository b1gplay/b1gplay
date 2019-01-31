from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Message(TimeStampedModel):
    """
            A communication in writing or media
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    message = models.TextField()
    sender = models.CharField(max_length=50)  # Link to User model
    recipient = models.CharField(max_length=50)  # Link to User model

    class Meta:
        verbose_name = "Message"
        verbose_name_plural = "Messages"

    def __unicode__(self):
        return '%s' % (self.message)
