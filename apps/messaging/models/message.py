from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.users.models.profile import Profile


class Message(TimeStampedModel):
    """
            A communication in writing or media
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    message = models.TextField()
    recipient = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = "Message"
        verbose_name_plural = "Messages"

    def __unicode__(self):
        return '%s' % (self.message)
