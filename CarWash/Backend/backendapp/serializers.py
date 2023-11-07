from rest_framework import serializers
from .models import login
from .models import register




class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model =login
        fields = '__all__'
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model =register
        fields = '__all__'