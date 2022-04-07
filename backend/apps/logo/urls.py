from django.urls import path
from . import views

urlpatterns = [
    path('', views.LogoList.as_view(), name='logo-list')
]
