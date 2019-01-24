from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
#from apps.sports.api.sport.sport_endpoint import sportRouter
from apps.sports.api.sport.sport_endpoint import sportRouter


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include(sportRouter.urls)),

]