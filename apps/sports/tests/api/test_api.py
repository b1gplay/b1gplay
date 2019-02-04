from rest_framework.test import APITestCase

from apps.sports.tests.api.authorization.authenticated_api_test_case import log_test_user_in


BACKEND_URL = '/api/'


class GeneralApiTest(APITestCase):
    """Test the api can deny access to unauthenticated users to view."""

    def test_should_not_allow_unauthenticated_users_to_view_api(self):
        response = self.client.get(BACKEND_URL)
        self.assertEqual(response.status_code, 403)

    def test_should_allow_authenticated_users_to_view_api(self):
        """Test the api can grant access to authenticated users to view."""

        log_test_user_in(self)
        response = self.client.get(BACKEND_URL)
        self.assertEqual(response.status_code, 200)
