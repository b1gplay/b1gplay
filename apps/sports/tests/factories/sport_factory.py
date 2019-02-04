import factory
from apps.sports.models.sport import Sport


class SportFactory(factory.Factory):
    class Meta:
        model = Sport

    name = factory.Faker('name')
    description = factory.Faker('sentence', nb_words=4)
    picture = None
