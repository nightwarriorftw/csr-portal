from rest_framework import serializers

from django.contrib.auth.models import User

from core.models import UserModel

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
