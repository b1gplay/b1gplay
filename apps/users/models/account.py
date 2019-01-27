from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField


class Account(TimeStampedModel):
    # Chnage to one to one relationship with User model
    user = models.CharField(max_length=100)
    # type enum{player, team, media, admin, superuser}
    type = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Account"
        verbose_name_plural = "Accounts"

    def __unicode__(self):
        return '%s %s' % (self.type, self.description)
