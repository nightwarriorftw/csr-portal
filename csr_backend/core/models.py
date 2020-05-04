from django.db import models
from django.contrib.auth.models import User


class UserModel(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField(unique=True)
    message = models.CharField(max_length=250)
    owner = models.ForeignKey(
        User, related_name='leads', on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.request.user
