from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Comment(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    message = models.TextField()
    source = models.CharField(max_length=50)  # Link to user model
    user_likes = models.PositiveIntegerField()
    comment_count = models.PositiveIntegerField()

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"

    def __unicode__(self):
        return '%s' % (self.message)
