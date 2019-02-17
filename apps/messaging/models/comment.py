from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.users.models.profile import Profile
from apps.messaging.models.message import Message


class Comment(TimeStampedModel):
    """
    An opinion or reaction to a text, image or video
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    message = models.ForeignKey(
        Message,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    source = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE
    )
    user_likes = models.PositiveIntegerField(blank=True,
                                             null=True)
    comment_count = models.PositiveIntegerField(blank=True,
                                                null=True)

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"
        db_table = 'comment'

    def __str__(self):
        return self.message
