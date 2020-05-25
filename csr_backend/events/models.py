import os, random

from django.db import models
from django.db.models.signals import pre_save

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

def getName(file):
    baseName = os.path.basename(file)
    return os.path.splitext(baseName)


def image_upload(file, instance):
    name, ext = getName(file)
    middleName = random.randint(1000000)
    finalName = "{name}{middleName}.{ext}".format(
        name=name,
        middleName=middleName,
        ext=ext
    )
    return 'events/{finalName}'.format(finalName=finalName)

class Address(models.Model):
    line1 = models.CharField(max_length=150)
    line2 = models.CharField(max_length=150)
    postalCode = models.CharField(max_length=10)
    city = models.CharField(max_length=150)
    country=models.CharField(max_length=150)

class EventModel(models.Model):
    title = models.CharField(max_length=70)
    eventId = models.SlugField(max_length=50, blank=True, null=True)
    category = models.CharField(max_length=20, choices=EVENT_CATEGORY, default='health')
    description = models.TextField(max_length=1000)
    image = models.ImageField(upload_to=image_upload , blank=True, null=True)
    company = models.CharField(max_length=100)
    hostName = models.CharField(max_length=100)
    location = models.ForeignKey(Address, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_add=True)

    def __str__(self):
        return self.title


def pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

pre_save.connect(pre_save_receiver, sender=EventModel)
