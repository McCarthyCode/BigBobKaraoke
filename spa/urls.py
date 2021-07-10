from django.urls import re_path, include

from . import views

urlpatterns = [
    re_path(
        r'^iframe/(?P<page>home|about|songs|rates|contact)$',
        views.iframe,
        name='iframe',
    ),
    re_path(
        r'^(?P<page>about|songs|rates|contact)$',
        views.page,
        name='page',
    ),
    re_path(
        r'^$',
        views.index,
        name='index',
    ),
]
