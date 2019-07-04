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
    
    # Bio data for all account types signing up
    firstname = models.CharField(max_length=30, blank=True)  
    lastname = models.CharField(max_length=30, blank=True)  
    gender = models.CharField(max_length=6, blank=True)  
    birth_date = models.DateField(null=True, blank=True)
    residence_country = models.CharField(max_length=100, blank=True)

    # type enum{player, team, media, coach, fan, admin, superuser}
    account_type = models.CharField(max_length=20, blank=True)

    # general info concerning either player, team, media, coach or fan... 
    affiliation = models.CharField(max_length=100, blank=True)
    media_house = models.CharField(max_length=100, blank=True)
 
    # Player details
    position = models.CharField(max_length=100, blank=True)
    height = models.DecimalField(max_digits=3,decimal_places=2, null=True)
    wingspan = models.DecimalField(max_digits=3,decimal_places=2, null=True)
    vertical_leap = models.DecimalField(max_digits=3,decimal_places=2, null=True)
    time_to_run_40m = models.DecimalField(max_digits=4,decimal_places=2, null=True)
    time_to_run_100m = models.DecimalField(max_digits=4,decimal_places=2, null=True)
    
    
    # Media related details for given account 
    bio = models.TextField(max_length=500, blank=True)
    avatar = models.URLField(blank=True, null=True)
    profile_photo = models.URLField(blank=True, null=True)
    cover_photo = models.URLField(blank=True, null=True)

    
    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"
        db_table = 'profile'

    def __str__(self):
        return self.user.get_full_name()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
