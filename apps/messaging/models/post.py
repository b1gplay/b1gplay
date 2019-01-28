from django.db import models
from django_extensions.db.models import TimeStampedModel


class Post(TimeStampedModel):
    event = models.CharField(max_length=50)  # Link to event model
    message = models.TextField()
    place = models.CharField(max_length=50)  # Link to location model
    privacy = models.CharField(max_length=50)  # Privacy setting of the post
    postType = models.CharField(max_length=50)  # enum{link, photo, video}
    source = models.CharField(max_length=50)  # Link to user model
    target = models.CharField(max_length=50)  # Link to user model
    message_tags = models.TextField()  # Link to user model
    link = models.CharField(max_length=50)  # Link to link model
    likes = models.PositiveIntegerField()

    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posts"

    def __unicode__(self):
        return '%s' % (self.message)
