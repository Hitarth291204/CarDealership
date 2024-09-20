from django.db import models
from django.conf import settings


class Car(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='cars/', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.make} {self.model} ({self.year})"

class User(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    # password = models.PasswordField(unique=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    customizations = models.JSONField()  # Or any other field type you prefer
    payment_type = models.CharField(max_length=50)
    delivery_date = models.DateField()

class CarCustomization(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    color = models.CharField(max_length=50)
    additional_features = models.JSONField()  # Or any other field type you prefer
    price = models.DecimalField(max_digits=10, decimal_places=2)
