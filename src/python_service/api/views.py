import asyncio
import python_weather
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
import agml
import numpy as np
from sklearn.ensemble import RandomForestRegressor

@api_view(['GET'])
def get_weather(request, city):
    # ... keep existing code (weather function)

@api_view(['POST'])
def predict_crop(request):
    try:
        # Extraer factores básicos
        temperature = float(request.data.get('temperature'))
        humidity = float(request.data.get('humidity'))
        rainfall = float(request.data.get('rainfall'))
        
        # Factores adicionales
        soil_ph = float(request.data.get('soilPh', 6.5))
        nitrogen = float(request.data.get('nitrogen', 40))
        phosphorus = float(request.data.get('phosphorus', 30))
        potassium = float(request.data.get('potassium', 35))

        # Modelo más complejo (simulado)
        features = np.array([[temperature, humidity, rainfall, soil_ph, nitrogen, phosphorus, potassium]])
        
        # Lista de cultivos posibles
        crops = ['maíz', 'trigo', 'arroz', 'papa', 'soja']
        
        # Simulamos un modelo más avanzado
        main_crop = np.random.choice(crops)
        alternatives = np.random.choice([c for c in crops if c != main_crop], size=2, replace=False)
        
        # Calculamos métricas adicionales
        sustainability_score = (soil_ph / 14 * 5) + (rainfall / 200 * 5)
        expected_yield = temperature * humidity / 100 * np.random.uniform(0.8, 1.2)
        
        prediction = {
            "recommended_crop": main_crop,
            "confidence": np.random.uniform(0.7, 0.95),
            "alternative_crops": alternatives.tolist(),
            "sustainability_score": min(max(sustainability_score, 0), 10),
            "water_requirements": rainfall * 0.8,
            "expected_yield": round(expected_yield, 2),
            "factors": {
                "temperature": temperature,
                "humidity": humidity,
                "rainfall": rainfall,
                "soil_ph": soil_ph,
                "nitrogen": nitrogen,
                "phosphorus": phosphorus,
                "potassium": potassium
            }
        }
        
        return Response(prediction)
    except Exception as e:
        return Response({"error": str(e)}, status=400)

@api_view(['GET'])
def get_historical_data(request):
    # Simulamos datos históricos
    dates = pd.date_range(start='2023-01-01', end='2024-03-15', freq='M')
    data = {
        'dates': dates.strftime('%Y-%m-%d').tolist(),
        'yields': [random.uniform(5, 15) for _ in range(len(dates))],
        'temperatures': [random.uniform(18, 30) for _ in range(len(dates))],
        'rainfall': [random.uniform(50, 200) for _ in range(len(dates))]
    }
    return Response(data)