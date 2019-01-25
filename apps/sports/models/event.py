from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField

import pytz

class Event(TimeStampedModel):


    TIMEZONES = tuple(zip(pytz.all_timezones, pytz.all_timezones))

    name = models.CharField(max_length=50) 
    category = models.CharField(max_length=50) # Type of event
    description = models.TextField() 
    owner = models.CharField(max_length=50) # Link to profile that created the event
    place = models.CharField(max_length=100) # Link to Location model
    start_time = models.DateTimeField(blank=True)
    end_time = models.DateTimeField(blank=True)
    timezone = models.CharField(max_length=32, choices=TIMEZONES, default='UTC')
    
    class Meta:
        verbose_name = "Event"
        verbose_name_plural = "Events"

    def __unicode__(self):
        return '%s %s' % (self.name)










        

