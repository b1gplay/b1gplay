from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid


class Education(TimeStampedModel):
    """
    Formal training acquired by a sports person
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    school = models.CharField(max_length=100)
    country = CountryField(blank_label='(select country)')

    class Meta:
        verbose_name = "Education Experience"
        verbose_name_plural = "Education Experiences"
        db_table = 'education'

    def __str__(self):
        return self.school
