from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Conversation(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user1 = models.TextField()  # Link to user model
    user2 = models.TextField()   # Link to user model
    ip = models.GenericIPAddressField()
    time = models.DateTimeField()
    status = models.CharField(max_length=50)

    class Meta:
        verbose_name = "Conversation"
        verbose_name_plural = "Conversation"

    def __unicode__(self):
        return '%s' % (self.ip)
