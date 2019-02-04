from unittest import TestCase

from apps.sports.models.metric import Metric


class SportTest(TestCase):
    def tearDown(self):
        Metric.objects.all().delete()

    def test_string_representation_of_metric_is_metric_description(self):
        test_metric = 'Test Metric'
        metric = Metric(description=test_metric)
        self.assertEqual(test_metric, str(metric))
