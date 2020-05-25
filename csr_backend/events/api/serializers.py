from rest_framework import serializers

from .models import EventModel
from accounts.serializers import UserSerializer



class EventSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=True)
    class Meta:
        model = EventModel
        fields = ('user', 'title', '')
