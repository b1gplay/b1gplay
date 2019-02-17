from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid


from apps.sports.models.player import Player


class Achievement(TimeStampedModel):
    """
    Something a player did that had a lasting impact for his/ her team
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    publish_time = models.DateTimeField(blank=True, null=True)
    description = models.TextField(blank=True)
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to='assets/images/achievement/',
        default='assets/images/achievement/None/no-img.jpg'
    )
    url = models.URLField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = "Achievement"
        verbose_name_plural = "Achievements"
        db_table = 'achievement'

    def __str__(self):
        return "{}".format(self.title)
