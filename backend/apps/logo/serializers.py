from .models import Logo
from rest_framework import serializers


class LogoSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(read_only = True)


    class Meta:
        model = Logo
        fields = '__all__'
        depth = 1