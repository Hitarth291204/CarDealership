from django.shortcuts import get_object_or_404
from rest_framework import status, permissions,generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth import authenticate, login,logout
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .models import Car, Order
from .serializers import (
    CarSerializer,
    OrderSerializer,
    UserSerializer,
    UserDetailSerializer,
    RegisterSerializer,
    LoginSerializer,
)
import stripe
from django.shortcuts import redirect
from rest_framework.permissions import AllowAny
import logging


logger = logging.getLogger(__name__)

# Set your secret key
stripe.api_key = 'your-stripe-secret-key'
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password

class SignupView(APIView):
    def get(self, request):
        users = User.objects.all()  # Get all users from the User model
        serializer = UserSerializer(users, many=True)  # Serialize the user data
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        print('Hii')
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        
        # Check if the username already exists
        if User.objects.filter(username=username).exists():
            return Response({'error': 'User already exists.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if the email already exists
        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email is already registered.'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create the user
        try:
            user = User.objects.create(
                username=username,
                email=email,
                password=make_password(password)  # Hashing the password before saving
            )
            user.save()

            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# class SignupView(APIView):
#     serializer_class = RegisterSerializer
#     permission_classes = [permissions.AllowAny]

#     def post(self, request):  # Removed *args and **kwargs
#         serializer = self.serializer_class(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         token = Token.objects.create(user=user)
#         return Response({
#             "user": UserSerializer(user).data,
#             "token": token.key
#         })

# class LoginView(APIView):
#     serializer_class = LoginSerializer
#     permission_classes = [permissions.AllowAny]

#     def post(self, request):
#         serializer = self.serializer_class(data=request.data)
#         serializer.is_valid(raise_exception=True)

#         user = serializer.validated_data  # Authenticated user from serializer
#         login(request, user)  # Log the user in using Django's login function

#         # Retrieve or create token for the user
#         token, _ = Token.objects.get_or_create(user=user)  # Ignore 'created' with _

#         # Return the user data and authentication token in the response
#         return Response({
#             "user": UserSerializer(user).data,
#             "token": token.key
#         }, status=status.HTTP_200_OK)


    
class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):  # Removed *args and **kwargs
        logout(request)
        return Response({"message": "Logged out successfully"})    

# class SignupView(APIView):
#     permission_classes = [AllowAny]  # Allow anyone to access this view

#     def post(self, request):
#         username = request.data.get('name')
#         email = request.data.get('email')
#         password = request.data.get('password')

#         if User.objects.filter(username=username).exists():
#             return Response({'error': 'User already exists.'}, status=status.HTTP_400_BAD_REQUEST)

#         user = User.objects.create_user(username=username, email=email, password=password)
#         Token.objects.create(user=user)  # Optionally create an authentication token for the user

#         return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

# def home_redirect(request):
#     return redirect('/admin/') 

from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        print(f"Username: {username}, password: {password}")

        try:
            # Look up the user by email first
            # user = User.objects.get(email=username)
            
            # Now use the username to authenticate with password
            user = authenticate(request, username=username, password=password)
            print(f"user: {user}")
            
            if user is not None:
                login(request, user)
                return Response({'id': user.id}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        
        except User.DoesNotExist:
            return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

# def logoutaccount(request):
#     logout(request)
#     return redirect('home')
# class SignupView(APIView):
#     def post(self, request):
#         username = request.data.get('username')
#         password = request.data.get('password')
#         email = request.data.get('email')
#         user = User.objects.create_user(username=username, password=password, email=email)
#         return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

class CheckAuthView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({'message': 'User is authenticated'}, status=200)

class UserDetailView(APIView):
    def get(self, request, pk):
        user = get_object_or_404(User, id=pk)
        serializer = UserDetailSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

class MyOrdersView(APIView):
    def get(self, request):
        user = request.user
        orders = Order.objects.filter(user=user)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class OrderCreateView(APIView):
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class CarCustomizationView(APIView):
#     def post(self, request):
#         # Handle car customization logic
#         # Save customization data if needed
#         return Response({'message': 'Customization saved'}, status=status.HTTP_200_OK)

class CarCustomizationView(APIView):
    def get(self, request):
        cars = Car.objects.all().values('id', 'name', 'make', 'model', 'year', 'price', 'description', 'image')
        return Response({'cars': list(cars)}, status=status.HTTP_200_OK)

    def post(self, request):
        # Handle car customization logic and save it if necessary
        # Add your customization saving logic here if applicable
        return Response({'message': 'Customization saved'}, status=status.HTTP_200_OK)

def create_payment_intent(request):
    try:
        amount = request.data.get('amount')
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency='usd',
            payment_method_types=['card'],
        )
        return Response({'client_secret': intent.client_secret}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

# class CarViewSet(ModelViewSet):
#     queryset = Car.objects.all()
#     serializer_class = CarSerializer

class CarViewSet(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [AllowAny]

    def list(self, request, *args, **kwargs):
        try:
            cars = self.get_queryset()
            logger.info(f"Fetched cars: {cars}")  # Log the cars being fetched
            return super().list(request, *args, **kwargs)
        except Exception as e:
            logger.error(f"Error fetching cars: {e}")
            return Response({'error': 'Unable to fetch cars'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

class LogoutView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

    def get(self, request):
        user = request.user  # Fetch the authenticated user
        print(f'Authenticated user: {user}')
        serializer = UserSerializer(user)  # Serialize user data
        return Response(serializer.data, status=status.HTTP_200_OK)
