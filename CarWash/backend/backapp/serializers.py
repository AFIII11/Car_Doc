from rest_framework import serializers
from .models import login
from .models import register,booking,tag





class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model =login
        fields = '__all__'
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model =register
        fields = '__all__'
class bookingserializer(serializers.ModelSerializer):
    class Meta:
        model=booking
        fields='__all__'
class tagserializer(serializers.ModelSerializer):
    class Meta:
        model=tag
        fields='__all__'