from rest_framework import serializers

from events.models import EventModel
from accounts.api.serializers import UserSerializer



class EventSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    address = serializers.SerializerMethodField()

    def get_address(self, instance):
        return "{line1} {line2} {city}-{postalCode}, {country}".format(
            line1=instance.line1,
            line2=instance.line2,
            postalCode=instance.postalCode,
            city=instance.city,
            country=instance.country
        )

    class Meta:
        model = EventModel
        fields = (
            'user', 
            'title', 
            'slug', 
            'description',
            'image',
            'company',
            'hostName',
            'category',
            'address',

        )
    
    
        
    def create(self, validated_data):
        user = UserSerializer(many=True).username
        return EventModel.objects.create(user=user, **validated_data)
