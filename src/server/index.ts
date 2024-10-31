import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Configuración de variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas básicas
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Ruta de autenticación
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // TODO: Implementar lógica de autenticación real
  if (email && password) {
    res.json({
      success: true,
      user: { email },
      token: 'dummy-token'
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Email y contraseña son requeridos'
    });
  }
});

// Manejo de errores
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});