from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.users.models import Profile


class Metric(TimeStampedModel):
    """
    Represents a way of measuring a players attributes on a given sport
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    rebounding = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    defence = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    scoring = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    leadership = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    discipline = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    basketballIQ = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    energy = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    determination = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    clutch = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    proPotential = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )

    player = models.ForeignKey(
        Profile,
        related_name='basketballratings',
        on_delete=models.CASCADE,
        null=True)

    ratedBy = models.ForeignKey(
        Profile,
        related_name='rated_by',
        on_delete=models.CASCADE,
        null=True)

    @property
    def account_type(self):
        """ Rater account type """
        return self.ratedBy.account_type

    class Meta:
        verbose_name = "Metric"
        verbose_name_plural = "Metrics"
        db_table = 'metric'

    def __str__(self):
        return self.player
