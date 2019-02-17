from django.conf import settings
from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField
import uuid

from apps.users.models.profile import Profile


class Account(TimeStampedModel):
    """
    Represents a user on the platform
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # Change to one to one relationship with User model
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    # type enum{player, team, media, admin, superuser}
    type = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Account"
        verbose_name_plural = "Accounts"
        db_table = 'account'

    def __unicode__(self):
        return '%s %s' % (self.type, self.description)
