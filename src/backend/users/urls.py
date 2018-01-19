from django.urls import path, re_path

from . import views


urlpatterns = [
    path('', views.UserListCreateAPIView.as_view()),
    re_path('^(?P<pk>[0-9]+)$', views.UserRetrieveUpdateDestroyAPIView.as_view())
]
