from rest_framework import routers

from django.urls import path, include
from .views import (
    EventViewSet
)


router = routers.DefaultRouter()
router.register('', EventViewSet)


urlpatterns = router.urls
