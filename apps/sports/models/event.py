from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid
import pytz


class Event(TimeStampedModel):
    """
    Sports contest happening at a particular time and place
    """

    TIMEZONES = tuple(zip(pytz.all_timezones, pytz.all_timezones))

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)  # Type of event
    description = models.TextField()
    # Link to profile that created the event
    owner = models.CharField(max_length=50)
    place = models.CharField(max_length=100)  # Link to Location model
    start_time = models.DateTimeField(blank=True)
    end_time = models.DateTimeField(blank=True)
    timezone = models.CharField(
        max_length=32, choices=TIMEZONES, default='UTC')

    class Meta:
        verbose_name = "Event"
        verbose_name_plural = "Events"
        db_table = 'event'

    def __unicode__(self):
        return '%s %s' % (self.name)
