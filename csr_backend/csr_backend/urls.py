from django.urls import path, include
from django.contrib import admin

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token-auth/', obtain_jwt_token),
    path('api/', include('core.api.urls')),
]
