import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPrediction, PredictionFactors } from '@/services/predictionService';
import { PredictionCard } from './PredictionCard';

export const PredictionsTab = () => {
  const [factors, setFactors] = useState<PredictionFactors>({
    temperature: 25,
    humidity: 60,
    rainfall: 150,
    soilPh: 6.5,
    nitrogen: 40,
    phosphorus: 30,
    potassium: 35,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFactors(prev => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Variables de Predicción</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="temperature">Temperatura (°C)</Label>
              <Input
                id="temperature"
                name="temperature"
                type="number"
                value={factors.temperature}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="humidity">Humedad (%)</Label>
              <Input
                id="humidity"
                name="humidity"
                type="number"
                value={factors.humidity}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rainfall">Lluvia (mm)</Label>
              <Input
                id="rainfall"
                name="rainfall"
                type="number"
                value={factors.rainfall}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="soilPh">pH del Suelo</Label>
              <Input
                id="soilPh"
                name="soilPh"
                type="number"
                value={factors.soilPh}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nitrogen">Nitrógeno (kg/ha)</Label>
              <Input
                id="nitrogen"
                name="nitrogen"
                type="number"
                value={factors.nitrogen}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phosphorus">Fósforo (kg/ha)</Label>
              <Input
                id="phosphorus"
                name="phosphorus"
                type="number"
                value={factors.phosphorus}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <PredictionCard />
    </div>
  );
};