from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import routers

from OmicronProject import views as omicron_views
from projects.views import ProjectsViewSet
from authentication.views import register, login, logout

router = routers.SimpleRouter()
router.register(r'projects', ProjectsViewSet)

urlpatterns = patterns('',
    url(r'^api/', include(router.urls)),
    url(r'^api/register/$', register),
    url(r'^api/login/$', login),
    url(r'^api/logout/$', logout),
    url(r'^dashboard/', omicron_views.dashboard, name='dashboard'),
    url(r'^userdash/', omicron_views.userdash, name='userdash'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', omicron_views.cover, name='cover'),
)


