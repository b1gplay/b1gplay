from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

from apps.users.models.profile import Profile


class Address(TimeStampedModel):
    """
    A collection of information used to give the location 
    of a person in terms of political boundaries, 
    along with other identifiers such as street names, 
    buildings, house or apartment numbers.
    """

    RESIDENTIAL = 1
    WORK = 2
    DELIVERY = 3
    BILLING = 4
    ADDRESS_TYPE_CHOICES = (
        (RESIDENTIAL, 'residential'),
        (WORK, 'work'),
        (DELIVERY, 'delivery'),
        (BILLING, 'billing'),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(
        Profile,
        on_delete=models.CASCADE
    )
    address_type = models.PositiveSmallIntegerField(
        choices=ADDRESS_TYPE_CHOICES
    )
    line_1 = models.CharField(max_length=100)
    line_2 = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=20)  # Use django phonenumber field
    city_town = models.CharField(max_length=50)
    county_or_province = models.CharField(max_length=50, blank=True, null=True)
    zip_or_postcode = models.CharField(max_length=100, blank=True, null=True)
    country = CountryField(blank_label='(select country)')

    class Meta:
        verbose_name = "Address"
        verbose_name_plural = "Addresses"
