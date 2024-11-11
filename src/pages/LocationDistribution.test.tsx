import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LocationDistribution from './LocationDistribution';

describe('LocationDistribution', () => {
  it('renderiza el formulario con todos los campos requeridos', () => {
    render(<LocationDistribution />);
    
    expect(screen.getByLabelText(/Dirección/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ciudad/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Estado\/Provincia/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Código Postal/i)).toBeInTheDocument();
  });

  it('permite seleccionar un tipo de cultivo', () => {
    render(<LocationDistribution />);
    expect(screen.getByText(/Seleccione un tipo de cultivo/i)).toBeInTheDocument();
  });

  it('muestra el botón de búsqueda', () => {
    render(<LocationDistribution />);
    expect(screen.getByText(/Buscar Centro de Distribución/i)).toBeInTheDocument();
  });
});