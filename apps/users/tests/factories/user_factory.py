import factory
from django.contrib.auth.models import User


class UserFactory(factory.Factory):
    class Meta:
        model = User

    username = factory.Sequence(lambda n: "Username {0}".format(n))
    first_name = factory.Faker('first_name')
    last_name = factory.Faker('last_name')
    email_address = factory.Faker('email')
    groups = factory.Sequence(lambda n: "Group {0}".format(n))

    is_active = True
    is_superuser = False
    is_staff = False
    date_joined = factory.Faker('date', pattern="%Y-%m-%d", end_datetime=None)
