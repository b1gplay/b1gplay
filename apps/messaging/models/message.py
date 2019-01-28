from django.db import models
from django_extensions.db.models import TimeStampedModel


class Message(TimeStampedModel):
    message = models.TextField()
    sender = models.CharField(max_length=50)  # Link to User model
    recipient = models.CharField(max_length=50)  # Link to User model

    class Meta:
        verbose_name = "Message"
        verbose_name_plural = "Messages"

    def __unicode__(self):
        return '%s' % (self.message)
