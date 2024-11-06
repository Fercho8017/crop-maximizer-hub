import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { MapPin } from "lucide-react";

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
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Información de Ubicación y Cultivo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  {...register("address")}
                  placeholder="Ingrese su dirección"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Ciudad</Label>
                <Input
                  id="city"
                  {...register("city")}
                  placeholder="Ingrese su ciudad"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">Estado/Provincia</Label>
                <Input
                  id="state"
                  {...register("state")}
                  placeholder="Ingrese su estado o provincia"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode">Código Postal</Label>
                <Input
                  id="zipCode"
                  {...register("zipCode")}
                  placeholder="Ingrese su código postal"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
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