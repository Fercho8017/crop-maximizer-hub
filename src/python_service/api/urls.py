from django.urls import path
from . import views

urlpatterns = [
    path('weather/<str:city>/', views.get_weather, name='weather'),
    path('crop-prediction/', views.predict_crop, name='crop-prediction'),
    path('advanced-prediction/', views.predict_crop, name='advanced-prediction'),
    path('historical-data/', views.get_historical_data, name='historical-data'),
]