from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/login', TokenObtainPairView.as_view(), name='login'),
    path('api/login/refresh', TokenRefreshView.as_view(), name='login_refresh'),
    path('api/register', views.register, name='register'),
    path('api/logout', views.logout, name='logout')
]