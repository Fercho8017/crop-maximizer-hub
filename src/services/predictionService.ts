import axios from 'axios';

export interface PredictionFactors {
  temperature: number;
  humidity: number;
  rainfall: number;
  soilPh?: number;
  nitrogen?: number;
  phosphorus?: number;
  potassium?: number;
}

export interface PredictionResult {
  recommended_crop: string;
  confidence: number;
  factors: PredictionFactors;
  alternative_crops: string[];
  sustainability_score: number;
  water_requirements: number;
  expected_yield: number;
}

export const getPrediction = async (factors: PredictionFactors): Promise<PredictionResult> => {
  const response = await axios.post('http://localhost:8000/api/advanced-prediction/', factors);
  return response.data;
};

export const getHistoricalData = async () => {
  const response = await axios.get('http://localhost:8000/api/historical-data/');
  return response.data;
};