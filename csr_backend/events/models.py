import os
import random

from django.db import models
from django.db.models.signals import pre_save
from django.contrib.auth.models import User

from .utils import unique_slug_generator


EVENT_CATEGORY = (
    ('health', 'HEALTH'),
    ('armed_forces', 'ARMED_FORCES'),
    ('education', 'EDUCATION'),
    ('environment', 'ENVIRONMENT'),
    ('gender_equality', 'GENDER_QUALITY'),
    ('heritage', 'HERITAGE'),
    ('refief_fund', 'RELIEF_FUND'),
    ('rural_development', 'RURAL_DEVELOPMENT'),
    ('slum_area_development', 'SLUM_AREA_DEVELOPMENT'),
)


def getName(filename):
    baseName = os.path.basename(filename)
    return os.path.splitext(baseName)


def image_upload(instance, filename):
    name, ext = getName(filename)
    middleName = random.randint(1, 1000000)
    finalName = "{name}{middleName}.{ext}".format(
        name=name,
        middleName=middleName,
        ext=ext
    )
    return '{user}/events/{finalName}'.format(user=instance, finalName=finalName)


class EventModel(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=70)
    slug = models.SlugField(max_length=50, blank=True, null=True)
    category = models.CharField(
        max_length=25, choices=EVENT_CATEGORY, default='health')
    description = models.TextField(max_length=1000)
    image = models.ImageField(upload_to=image_upload, blank=True, null=True)
    company = models.CharField(max_length=100)
    hostName = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    # location
    line1 = models.CharField(max_length=150, blank=True)
    line2 = models.CharField(max_length=150, blank=True, null=True)
    postalCode = models.CharField(max_length=10, default='160031')
    city = models.CharField(max_length=150, default='Mumbai')
    country = models.CharField(max_length=150, default='India')

    def __str__(self):
        return self.title


def pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(pre_save_receiver, sender=EventModel)
