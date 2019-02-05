from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

from apps.users.models.profile import Profile


class Education(TimeStampedModel):
    """
    Formal training acquired by a sports person
    """

    UNIVERSITY = 1
    COLLEGE = 2
    VOCATION = 3
    HIGH_SCHOOL = 4
    INSTITUTION_TYPE_CHOICES = (
        (UNIVERSITY, 'university'),
        (COLLEGE, 'college'),
        (VOCATION, 'vocation'),
        (HIGH_SCHOOL, 'high school'),
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE
    )
    school = models.CharField(max_length=100)
    joined = models.DateField(blank=True, null=True)
    finished = models.DateField(blank=True, null=True)
    institutionType = models.PositiveSmallIntegerField(
        choices=INSTITUTION_TYPE_CHOICES
    )
    school = models.CharField(max_length=100)
    concentration = models.CharField(max_length=100, blank=True, null=True)
    qualification = models.CharField(max_length=100, blank=True, null=True)
    # Use location model to find place
    place = models.CharField(max_length=100)
    country = CountryField(blank_label='(select country)')

    class Meta:
        verbose_name = "Education Experience"
        verbose_name_plural = "Education Experiences"

    def __str__(self):
        return self.school
