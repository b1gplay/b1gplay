from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid


class User(AbstractUser):
    """
        Person with an account on the system
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(unique=True, max_length=150)
    #email = models.EmailField(unique=True)

    REQUIRED_FIELDS = [ 'password' ]
    USERNAME_FIELD = 'username'

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        db_table = 'user'



    
