from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid


class User(AbstractUser):
    """
        Person with an account on the system
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    #USERNAME_FIELD = 'email'

    def __str__(self):
        return self.get_full_name()
