from .serializers import EventSerializer
from events.models import EventModel

from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import generics, permissions

class EventViewSet(viewsets.ModelViewSet):
    queryset = EventModel.objects.all()
    serializer_class = EventSerializer
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'slug'