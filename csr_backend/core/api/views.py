from rest_framework import permissions
from rest_framework import viewsets

from .serializers import UserSerializer
from core.models import UserModel


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)
