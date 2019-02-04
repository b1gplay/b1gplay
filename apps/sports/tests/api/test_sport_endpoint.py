from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework.status import HTTP_200_OK, HTTP_403_FORBIDDEN, HTTP_201_CREATED, HTTP_301_MOVED_PERMANENTLY, \
    HTTP_204_NO_CONTENT

from apps.sports.tests.api.authorization.authenticated_api_test_case import log_test_user_in
from apps.sports.models.sport import Sport


class SportEndpointTest(APITestCase):
    def setUp(self):
        super(SportEndpointTest, self).setUp()
        Sport.objects.all().delete()
