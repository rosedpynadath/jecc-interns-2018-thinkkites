from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'is_superuser', 'is_active', 'username', 'first_name', 'last_name',
                  'email', 'is_active', 'full_name')

    def get_full_name(self, obj):
        """ Compute full name from first name and last name """
        return '{} {}'.format(obj.first_name, obj.last_name)
