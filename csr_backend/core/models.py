from django.db import models

class UserModel(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField()
    message = models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True)
