from django.shortcuts import render
from django.db.models import query

from rest_framework import generics, serializers
from django_filters.rest_framework import DjangoFilterBackend
from apps.users.mixins import CustomLoginRequiredMixin
from apps.products.serializers import ProductSerializer
from rest_framework import filters

from apps.logo.serializers import LogoSerializer

from .models import Logo


class LogoList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = Logo.objects.all()
    serializer_class = LogoSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category_id']
    search_fields = ['name']
