from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.users.models.profile import Profile
from apps.messaging.models.post import Post


class Comment(TimeStampedModel):
    """
    An opinion or reaction to a text, image or video
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )
    message = models.TextField()
    """ source = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE
    ) """
    #fists = models.PositiveIntegerField(blank=True, null=True)

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"
        db_table = 'comment'

    def __str__(self):
        return self.message
