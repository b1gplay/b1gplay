from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

class Achievement(TimeStampedModel):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=100) 
	publish_time = models.DateTimeField(blank=True, null=True)
	description = models.TextField(blank=True)
	image = models.CharField(max_length=200) 
	url = models.URLField(max_length=200) 
    

	class Meta:
		verbose_name = "Achievement"
		verbose_name_plural = "Achievements"

	def __unicode__(self):
		return '%s' % (self.title)









        

