import asyncio
import python_weather
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
import agml

@api_view(['GET'])
def get_weather(request, city):
    async def get_weather_data():
        async with python_weather.Client(unit=python_weather.IMPERIAL) as client:
            weather = await client.get(city)
            return {
                "temperature": weather.current.temperature,
                "description": weather.current.description
            }
    
    weather_data = asyncio.run(get_weather_data())
    return Response(weather_data)

@api_view(['POST'])
def predict_crop(request):
    try:
        temperature = float(request.data.get('temperature'))
        humidity = float(request.data.get('humidity'))
        rainfall = float(request.data.get('rainfall'))
        
        # Ejemplo simplificado de predicción
        prediction = {
            "recommended_crop": "corn",
            "confidence": 0.85,
            "factors": {
                "temperature": temperature,
                "humidity": humidity,
                "rainfall": rainfall
            }
        }
        return Response(prediction)
    except Exception as e:
        return Response({"error": str(e)}, status=400)