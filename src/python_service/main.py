from fastapi import FastAPI
import asyncio
import python_weather
import os
from dotenv import load_dotenv
import agml

app = FastAPI()

@app.get("/weather/{city}")
async def get_weather(city: str):
    async with python_weather.Client(unit=python_weather.IMPERIAL) as client:
        weather = await client.get(city)
        return {
            "temperature": weather.current.temperature,
            "description": weather.current.description
        }

@app.get("/crop-prediction")
async def predict_crop(temperature: float, humidity: float, rainfall: float):
    # Este es un ejemplo simplificado. AgML requeriría más configuración
    # y datos reales para hacer predicciones precisas
    try:
        # Placeholder para la integración real de AgML
        prediction = {
            "recommended_crop": "corn",
            "confidence": 0.85,
            "factors": {
                "temperature": temperature,
                "humidity": humidity,
                "rainfall": rainfall
            }
        }
        return prediction
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)