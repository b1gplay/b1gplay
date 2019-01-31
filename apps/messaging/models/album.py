from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Album(TimeStampedModel):
    """
    A collection of videos or images
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # enum{cover, profile, mobile, wall, normal, album}
    albumType = models.CharField(max_length=50)
    name = models.CharField(max_length=50)  # Link to album model
    event = models.CharField(max_length=50)  # Link to event model
    caption = models.TextField()
    name_tags = models.TextField()  # Link to user model
    source = models.CharField(max_length=50)  # Link to user model
    target = models.CharField(max_length=50)  # Link to user model
    link = models.CharField(max_length=50)  # Link to link model
    location = models.CharField(max_length=50)  # Link to location model
    content_tags = models.TextField()
    content = models.CharField(max_length=50)

    class Meta:
        verbose_name = "Album"
        verbose_name_plural = "Albums"

    def __unicode__(self):
        return '%s' % (self.caption)
