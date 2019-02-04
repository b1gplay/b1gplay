from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid


class Achievement(TimeStampedModel):
    """
    Something a player did that had a lasting impact for his/ her team
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    publish_time = models.DateTimeField(blank=True, null=True)
    description = models.TextField(blank=True)
    image = models.CharField(max_length=200)
    url = models.URLField(max_length=200)

    class Meta:
        verbose_name = "Achievement"
        verbose_name_plural = "Achievements"

    def __str__(self):
        return "{}".format(self.title)
