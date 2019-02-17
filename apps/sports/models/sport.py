from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Sport(TimeStampedModel):
    """
    A competitive game played for fun or as a professional activity
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    description = models.TextField()
    picture = models.ImageField(
        upload_to='assets/images/sports/',
        default='assets/images/sports/None/no-img.jpg'
    )

    class Meta:
        verbose_name = "Sport"
        verbose_name_plural = "Sports"
        db_table = 'sport'

    def __str__(self):
        return self.name
