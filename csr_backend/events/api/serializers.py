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
            'id',
            'title', 
            'slug', 
            'description',
            'image',
            'company',
            'hostName',
            'category',
            'address',
            'dateOfEvent',

        )
        lookup_field = 'slug'
        extra_kwargs: { 'id': { 'lookup_field': 'slug' } }

    def create(self, validated_data):
        print(validated_data.get('title'))
        return EventModel.objects.create(**validated_data)
