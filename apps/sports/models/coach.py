from django.db import models
from django_extensions.db.models import TimeStampedModel

class Coach(TimeStampedModel):
    name = models.CharField(max_length=50) # Link to User model
    
    class Meta:
        verbose_name = "Coach"
        verbose_name_plural = "Coaches"

    def __unicode__(self):
        return '%s %s' % (self.name)

        

