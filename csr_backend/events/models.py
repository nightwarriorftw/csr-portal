from django.db import models


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

def image_upload(file, instance):
    

class EventModel(models.Model):
    title = models.CharField(max_length=70)
    category = models.CharField(max_length=20, choices=EVENT_CATEGORY, default='health')
    description = models.TextField(max_length=1000)
    image = models.ImageField(upload_to= , blank=True, null=True)
