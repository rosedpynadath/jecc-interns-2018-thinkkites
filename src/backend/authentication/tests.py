import json

from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.status import HTTP_200_OK
from rest_framework.test import APIRequestFactory

from . import views


class AuthenticationTestCase(TestCase):
    """ test cases for the authentication module """

    def setUp(self):
        """ setup sample data needed for the tests to work """
        self.factory = APIRequestFactory()
        self.user = User.objects.create_user(
            username='sam',
            email='sam@lntinfotech.com',
            password='bred567caw970'
        )

    def test_user_can_login(self):
        """ make sure users are able to login successfully """

        # prepare data
        data = json.dumps({'username': 'sam', 'password': 'bred567caw970'})

        # hit api
        request = self.factory.post('/authentication/login', data, content_type='application/json')
        response = views.LoginAPIView.as_view()(request)

        # verify response
        self.assertEqual(response.status_code, HTTP_200_OK)

        # verify response content
        self.assertTrue('user' in response.data, 'User is not present in the response')
        self.assertTrue('token' in response.data, 'Token is not present in the response')
        self.assertEqual('sam', response.data['user']['username'], 'Response is having wrong username')
        self.assertEqual('sam@lntinfotech.com', response.data['user']['email'], 'Response is having wrong email')
