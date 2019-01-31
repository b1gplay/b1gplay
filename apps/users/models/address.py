from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid


class Address(TimeStampedModel):
    """
    A collection of information used to give the location 
    of a person in terms of political boundaries, 
    along with other identifiers such as street names, 
    buildings, house or apartment numbers.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(max_length=50)  # Link to User model
    # E.g billing, delivery, residential or work
    address_type = models.CharField(max_length=20)
    line_1 = models.CharField(max_length=100)
    line_2 = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    city_town = models.CharField(max_length=50)
    county_or_province = models.CharField(max_length=50)
    zip_or_postcode = models.CharField(max_length=100)
    country = CountryField(blank_label='(select country)')

    class Meta:
        verbose_name = "Address"
        verbose_name_plural = "Addresses"
