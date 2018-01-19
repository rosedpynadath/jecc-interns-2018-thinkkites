from django.contrib.auth.models import User
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from .serializers import UserSerializer


class UserListCreateAPIView(ListCreateAPIView):
    """
    Create new user or get the list of users
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    Perform Read, Update, Delete on top of users
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
