from .serializers import EventSerializer
from events.models import EventModel

from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import generics, permissions

class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'slug'

    # Send the events created by that user only
    def get_queryset(self):
        return self.request.user.events.all()
    
    def perform_create(self, serializer):
        serializer.save(user = self.request.user)