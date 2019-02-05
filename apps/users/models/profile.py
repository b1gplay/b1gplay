from django.conf import settings

from django.db import models
from apps.users.models.user import User
from django_extensions.db.models import TimeStampedModel
from django.db.models.signals import post_save
from django.dispatch import receiver
import uuid


class Profile(TimeStampedModel):
    """
    Description and summary of a user
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(
        max_length=30, blank=True)  # Link to location model
    birth_date = models.DateField(null=True, blank=True)

    avatar = models.URLField(blank=True, null=True)
    profile_photo = models.URLField(blank=True, null=True)
    cover_photo = models.URLField(blank=True, null=True)

    skype = models.CharField(max_length=30, blank=True)
    facebook_id = models.CharField(max_length=30, blank=True)
    instagram_id = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.user.get_full_name()


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
