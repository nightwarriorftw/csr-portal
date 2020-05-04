from django.urls import path,include

from .views import (
    RegisterAPI,
    LoginAPI
)

from knox import views as knox_views

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', RegisterAPI.as_view()),
    path('auth/login', LoginAPI.as_view()),
]
