from django.contrib import admin
from .models import EventModel


class EventAdmin(admin.ModelAdmin):

    class Meta:
        model = EventModel
        fields = ('__all__')

admin.site.register(EventModel, EventAdmin)
