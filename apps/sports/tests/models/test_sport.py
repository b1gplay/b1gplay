from unittest import TestCase

from apps.sports.models.sport import Sport


class SportTest(TestCase):
    def tearDown(self):
        Sport.objects.all().delete()

    def test_string_representation_of_sport_is_sport_name(self):
        test_sport = 'Test Sport'
        sport = Sport(name=test_sport)
        self.assertEqual(test_sport, str(sport))
