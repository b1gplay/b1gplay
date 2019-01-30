from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Photo(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    album = models.CharField(max_length=50)  # Link to album model
    event = models.CharField(max_length=50)  # Link to event model
    caption = models.TextField()
    name_tags = models.TextField()  # Link to user model
    source = models.CharField(max_length=50)  # Link to user model
    target = models.CharField(max_length=50)  # Link to user model
    link = models.CharField(max_length=50)  # Link to link model
    location = models.CharField(max_length=50)  # Link to location model
    width = models.PositiveIntegerField()
    height = models.PositiveIntegerField()
    picture = models.CharField(max_length=100)
    content_tags = models.TextField()

    class Meta:
        verbose_name = "Photo"
        verbose_name_plural = "Photos"

    def __unicode__(self):
        return '%s' % (self.caption)
