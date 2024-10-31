import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Weather Conditions</h2>
            <p className="text-gray-600">Weather data will be displayed here</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Distribution Centers</h2>
            <p className="text-gray-600">Distribution center map will be displayed here</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Supply Chain Metrics</h2>
            <p className="text-gray-600">Key metrics will be displayed here</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Data Input</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Location and crop type input form will be added here</p>
            <Button>Add New Data</Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;