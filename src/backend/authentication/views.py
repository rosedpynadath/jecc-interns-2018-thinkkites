from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from users.serializers import UserSerializer


class LoginAPIView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        """
        Verify the credentials and authenticate the user
        """
        serializer = AuthTokenSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = authenticate(
                username=serializer.data.get('username'),
                password=serializer.data.get('password')
            )
            if user:
                Token.objects.filter(user=user).delete()
                token = Token.objects.create(user=user)
                response = {
                    'token': token.key,
                    'user': UserSerializer(user).data,
                }
                return Response(response, status=status.HTTP_200_OK)
            return Response(status=status.HTTP_404_NOT_FOUND)


class LogoutAPIView(APIView):

    def post(self, request, *args, **kwargs):
        """
        Logs out the user from the system
        """
        Token.objects.filter(user=request.user).delete()
        return Response(status=status.HTTP_200_OK)
