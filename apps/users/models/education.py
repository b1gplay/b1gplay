from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid


class Education(TimeStampedModel):
    """
    Formal training acquired by a sports person
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(max_length=100)  # Link to User model
    school = models.CharField(max_length=100)
    joined = models.DateField(blank=True)
    finished = models.DateField(blank=True)
    # Type of educational institution
    institutionType = models.CharField(max_length=100)
    school = models.CharField(max_length=100)
    concentration = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    # Use location model to find place
    place = models.CharField(max_length=100)
    country = CountryField(blank_label='(select country)')

    class Meta:
        verbose_name = "Agent"
        verbose_name_plural = "Agents"

    def __unicode__(self):
        return '%s %s' % (self.school, self.institutionType)
