from rest_framework import serializers
from django.contrib.auth import authenticate 
from django.contrib.auth.models import User
from .models import Car, Order, User, CarCustomization

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        #fields = '__all__'
        fields = ['id', 'make', 'model', 'year', 'price', 'image', 'description']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email']

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email']  # Add more fields if needed

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'user', 'car', 'customizations', 'payment_type', 'delivery_date']

class CarCustomizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarCustomization
        fields = ['id', 'car', 'color', 'additional_features', 'price']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
            
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")
        user = authenticate(username=username, password=password)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid credentials")
