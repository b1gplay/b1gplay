from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.messaging.models.post import Post
from apps.users.models.profile import Profile


class Comment(TimeStampedModel):
    """
    An opinion or reaction to a text, image or video
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    post = models.ForeignKey(
        'Post', on_delete=models.CASCADE, related_name='comments', null=True)
    message = models.TextField(null=True)
    author = models.ForeignKey(Profile,
                               related_name='profiles',
                               on_delete=models.CASCADE,
                               null=True)

    @property
    def author_name(self):
        return self.author.firstname + " " + self.author.lastname

    @property
    def avatar(self):
        return self.author.profile_photo

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"
        db_table = 'comment'
