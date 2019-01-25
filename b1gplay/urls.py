from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers

from apps.sports.api.sport.sport_endpoint import sportRouter
from apps.sports.api.metric.metric_endpoint import metricRouter
from apps.sports.api.rating.rating_endpoint import ratingRouter
from apps.sports.api.player.player_endpoint import playerRouter
from apps.sports.api.coach.coach_endpoint import coachRouter
from apps.sports.api.team.team_endpoint import teamRouter
from apps.sports.api.fan.fan_endpoint import fanRouter
from apps.sports.api.agent.agent_endpoint import agentRouter
from apps.sports.api.scout.scout_endpoint import scoutRouter
from apps.sports.api.media.media_endpoint import mediaRouter
from apps.sports.api.event.event_endpoint import eventRouter
from apps.sports.api.achievement.achievement_endpoint import achievementRouter


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include(sportRouter.urls)),
    url(r'^api/', include(metricRouter.urls)),
    url(r'^api/', include(ratingRouter.urls)),
    url(r'^api/', include(playerRouter.urls)),
    url(r'^api/', include(coachRouter.urls)),
    url(r'^api/', include(teamRouter.urls)),
    url(r'^api/', include(fanRouter.urls)),
    url(r'^api/', include(agentRouter.urls)),
    url(r'^api/', include(scoutRouter.urls)),
    url(r'^api/', include(mediaRouter.urls)),
    url(r'^api/', include(eventRouter.urls)),
    url(r'^api/', include(achievementRouter.urls)),

]
