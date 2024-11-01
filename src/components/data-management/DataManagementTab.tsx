import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { Download, Upload } from 'lucide-react';

export const DataManagementTab = () => {
  const { toast } = useToast();

  const handleImportData = async () => {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.csv,.xlsx';
      
      input.onchange = async (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          // Aquí simularemos el envío del archivo
          toast({
            title: "Datos importados",
            description: `Archivo ${file.name} importado exitosamente.`,
          });
        }
      };
      
      input.click();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudieron importar los datos.",
      });
    }
  };

  const handleExportData = async () => {
    try {
      // Aquí simularemos la exportación de datos
      const dummyData = "ID,Fecha,Tipo,Estado\n1,2024-03-15,Producción,Completado";
      const blob = new Blob([dummyData], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'datos_exportados.csv';
      a.click();
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "Datos exportados",
        description: "Los datos han sido exportados exitosamente.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudieron exportar los datos.",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestión de Datos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={handleImportData} className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Importar Datos
            </Button>
            <Button variant="outline" onClick={handleExportData} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Exportar Datos
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-03-15</TableCell>
                <TableCell>Producción</TableCell>
                <TableCell>Completado</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Ver</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};