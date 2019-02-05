from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.users.models.profile import Profile


class Comment(TimeStampedModel):
    """
    An opinion or reaction to a text, image or video
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    message = models.TextField()
    source = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE
    )
    user_likes = models.PositiveIntegerField()
    comment_count = models.PositiveIntegerField()

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"

    def __str__(self):
        return self.message
