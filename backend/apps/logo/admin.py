from django.contrib import admin
from .models import Logo

@admin.register(Logo)
class LogoModel(admin.ModelAdmin):
    fields = ['image']
    list_filter = []
    list_display = fields
    search_fields = ['name']