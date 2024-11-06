import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useQuery } from '@tanstack/react-query';
import { getPrediction, PredictionFactors } from '@/services/predictionService';

export const PredictionCard = () => {
  const defaultFactors: PredictionFactors = {
    temperature: 25,
    humidity: 60,
    rainfall: 150,
    soilPh: 6.5,
    nitrogen: 40,
    phosphorus: 30,
    potassium: 35,
  };

  const { data: prediction, isLoading } = useQuery({
    queryKey: ['advanced-prediction'],
    queryFn: () => getPrediction(defaultFactors),
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Cargando predicciones...</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Predicción Avanzada de Cultivos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {prediction && (
          <>
            <div className="space-y-2">
              <h3 className="font-semibold">Cultivo Recomendado</h3>
              <p className="text-lg">{prediction.recommended_crop}</p>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Confianza</p>
                <Progress value={prediction.confidence * 100} />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold">Cultivos Alternativos</h3>
              <ul className="list-disc list-inside">
                {prediction.alternative_crops.map((crop, index) => (
                  <li key={index}>{crop}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Sostenibilidad</h3>
                <p>{prediction.sustainability_score.toFixed(1)}/10</p>
              </div>
              <div>
                <h3 className="font-semibold">Rendimiento Esperado</h3>
                <p>{prediction.expected_yield} ton/ha</p>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};