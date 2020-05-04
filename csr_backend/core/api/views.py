from rest_framework import permissions
from rest_framework import viewsets

from .serializers import UserSerializer
from core.models import UserModel


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    permission_classes = [permissions.AllowAny,]
    serializer_class = UserSerializer

