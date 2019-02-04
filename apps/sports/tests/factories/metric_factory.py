import factory
from apps.sports.models.sport import Sport


from apps.sports.tests.factories.sport_factory import SportFactory


class MetricFactory(factory.Factory):
    class Meta:
        model = Metric

    sport = factory.SubFactory(SportFactory)
    metric = factory.Faker('sentence', nb_words=2)
    description = factory.text()
