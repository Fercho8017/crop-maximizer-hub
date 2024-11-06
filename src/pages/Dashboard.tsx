import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { DataManagementTab } from '@/components/data-management/DataManagementTab';
import { PredictionsTab } from '@/components/predictions/PredictionsTab';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const mockData = [
    { name: 'Ene', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Abr', value: 800 },
    { name: 'May', value: 500 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Supply Chain Optimizer</h1>
          <div className="flex items-center gap-4">
            <span>{user?.email}</span>
            <Button
              variant="secondary"
              onClick={() => {
                logout();
                navigate('/login');
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4 space-y-6">
        <Tabs defaultValue="predictions" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="predictions">Predicciones</TabsTrigger>
            <TabsTrigger value="optimization">Optimización</TabsTrigger>
            <TabsTrigger value="analysis">Análisis</TabsTrigger>
            <TabsTrigger value="data">Gestión de Datos</TabsTrigger>
          </TabsList>

          <TabsContent value="predictions">
            <PredictionsTab />
          </TabsContent>

          <TabsContent value="optimization" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Optimización de Cadena de Suministro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[300px]">
                  <LineChart width={800} height={300} data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Análisis de Resultados</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Métrica</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Tendencia</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Eficiencia</TableCell>
                      <TableCell>85%</TableCell>
                      <TableCell>↑</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Costos</TableCell>
                      <TableCell>$12,450</TableCell>
                      <TableCell>↓</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Producción</TableCell>
                      <TableCell>2,500 ton</TableCell>
                      <TableCell>↑</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <DataManagementTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;