import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface LocationFormData {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cropType: string;
}

const LocationDistribution = () => {
  const { toast } = useToast();
  const { register, handleSubmit, setValue } = useForm<LocationFormData>();

  const onSubmit = (data: LocationFormData) => {
    // Here we would typically make an API call to find the nearest distribution center
    // For now, we'll just show a toast with the submitted data
    toast({
      title: "Información recibida",
      description: "Procesando ubicación y buscando centro de distribución más cercano...",
    });
    console.log(data);
  };

  const cropTypes = [
    "Maíz",
    "Trigo",
    "Soja",
    "Arroz",
    "Frijoles",
    "Tomates",
    "Papa",
  ];

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Información de Ubicación y Cultivo</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  {...register("address")}
                  placeholder="Ingrese su dirección"
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="city">Ciudad</Label>
                <Input
                  id="city"
                  {...register("city")}
                  placeholder="Ingrese su ciudad"
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="state">Estado/Provincia</Label>
                <Input
                  id="state"
                  {...register("state")}
                  placeholder="Ingrese su estado o provincia"
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="zipCode">Código Postal</Label>
                <Input
                  id="zipCode"
                  {...register("zipCode")}
                  placeholder="Ingrese su código postal"
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="cropType">Tipo de Cultivo</Label>
                <Select onValueChange={(value) => setValue("cropType", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione un tipo de cultivo" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropTypes.map((crop) => (
                      <SelectItem key={crop} value={crop}>
                        {crop}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Buscar Centro de Distribución
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationDistribution;