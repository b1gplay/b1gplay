from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers

from knox import views as knox_views

from django.conf import settings
from django.conf.urls.static import static

from apps.sports.api.sport.sport_endpoint import sportRouter
from apps.sports.api.basketball_ratings.basketball_ratings_endpoint import basketballRatingsRouter
from apps.sports.api.player.player_endpoint import playerRouter
from apps.sports.api.coach.coach_endpoint import coachRouter
from apps.sports.api.team.team_endpoint import teamRouter
from apps.sports.api.fan.fan_endpoint import fanRouter
from apps.sports.api.agent.agent_endpoint import agentRouter
from apps.sports.api.scout.scout_endpoint import scoutRouter
from apps.sports.api.media.media_endpoint import mediaRouter
from apps.sports.api.event.event_endpoint import eventRouter
from apps.sports.api.achievement.achievement_endpoint import achievementRouter

from apps.transfers.api.transfer.transfer_endpoint import transferRouter
from apps.transfers.api.payment.payment_endpoint import paymentRouter

from apps.users.api.user.user_endpoint import UserAPI, LoginAPI, RegisterAPI
from apps.users.api.education.education_endpoint import educationRouter
from apps.users.api.address.address_endpoint import addressRouter
from apps.users.api.profile.profile_endpoint import profileRouter


from apps.messaging.api.message.message_endpoint import messageRouter
from apps.messaging.api.photo.photo_endpoint import photoRouter
from apps.messaging.api.video.video_endpoint import videoRouter
from apps.messaging.api.album.album_endpoint import albumRouter
from apps.messaging.api.post.post_endpoint import postRouter
from apps.messaging.api.comment.comment_endpoint import commentRouter
from apps.messaging.api.conversation.conversation_endpoint import conversationRouter
from apps.messaging.api.conversation_reply.conversation_reply_endpoint import conversationReplyRouter
from apps.messaging.api.link.link_endpoint import linkRouter
from apps.messaging.api.notification.notification_endpoint import notificationRouter
from apps.messaging.api.feed.feed_endpoint import feedRouter
from apps.messaging.api.page.page_endpoint import pageRouter


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include(sportRouter.urls)),
    url(r'^api/', include(basketballRatingsRouter.urls)),
    url(r'^api/', include(playerRouter.urls)),
    url(r'^api/', include(coachRouter.urls)),
    url(r'^api/', include(teamRouter.urls)),
    url(r'^api/', include(fanRouter.urls)),
    url(r'^api/', include(agentRouter.urls)),
    url(r'^api/', include(scoutRouter.urls)),
    url(r'^api/', include(mediaRouter.urls)),
    url(r'^api/', include(eventRouter.urls)),
    url(r'^api/', include(achievementRouter.urls)),

    url(r'^api/', include(transferRouter.urls)),
    url(r'^api/', include(paymentRouter.urls)),

    url(r'^api/', include(addressRouter.urls)),
    url(r'^api/', include(educationRouter.urls)),
    url(r'^api/', include(profileRouter.urls)),

    url(r'^api/', include(messageRouter.urls)),
    url(r'^api/', include(photoRouter.urls)),
    url(r'^api/', include(videoRouter.urls)),
    url(r'^api/', include(albumRouter.urls)),
    url(r'^api/', include(postRouter.urls)),
    url(r'^api/', include(commentRouter.urls)),
    url(r'^api/', include(conversationRouter.urls)),
    url(r'^api/', include(conversationReplyRouter.urls)),
    url(r'^api/', include(linkRouter.urls)),
    url(r'^api/', include(notificationRouter.urls)),
    url(r'^api/', include(feedRouter.urls)),
    url(r'^api/', include(pageRouter.urls)),

    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')








] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
