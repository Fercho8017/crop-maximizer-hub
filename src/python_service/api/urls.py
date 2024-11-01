from django.urls import path
from . import views

urlpatterns = [
    path('weather/<str:city>/', views.get_weather, name='weather'),
    path('crop-prediction/', views.predict_crop, name='crop-prediction'),
]