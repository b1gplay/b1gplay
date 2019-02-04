from django.conf import settings
from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid


class Agent(TimeStampedModel):
    """
        A legal representative of a sports figure
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    affiliate = models.CharField(max_length=100)
    country_of_residence = CountryField(blank_label='(select country)')

    class Meta:
        verbose_name = "Agent"
        verbose_name_plural = "Agents"

    def __unicode__(self):
        return '%s %s' % (self.name)
