from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CarViewSet,
    OrderViewSet,
    create_payment_intent,
    LoginView,
    SignupView,
    OrderCreateView,
    UserDetailView,
    MyOrdersView,
    CarCustomizationView,
    CheckAuthView,
    LogoutView,
    UserProfileView,
)

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'cars', CarViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/users/', include('users.urls')), 
    path('api/', include(router.urls)),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('create-payment-intent/', create_payment_intent, name='create-payment-intent'),
    path('login/', LoginView.as_view(), name='login'),
    path('signup/', SignupView.as_view(), name='signup'),
    path('orders/', OrderCreateView.as_view(), name='create_order'),
    path('user/<int:pk>/', UserDetailView.as_view(), name='user_detail'),
    path('my-orders/', MyOrdersView.as_view(), name='my_orders'),
    path('customization/', CarCustomizationView.as_view(), name='car_customization'),
    path('check-auth/', CheckAuthView.as_view(), name='check-auth'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('user/profile/', UserProfileView.as_view(), name='user-profile'),
    # path('logout/', LoginView.as_view(),name='logoutaccount'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)