import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DataManagementTab } from './DataManagementTab';

describe('DataManagementTab', () => {
  it('renderiza los botones de importar y exportar', () => {
    render(<DataManagementTab />);
    expect(screen.getByText('Importar Datos')).toBeInTheDocument();
    expect(screen.getByText('Exportar Datos')).toBeInTheDocument();
  });

  it('muestra la tabla con las columnas correctas', () => {
    render(<DataManagementTab />);
    expect(screen.getByText('Fecha')).toBeInTheDocument();
    expect(screen.getByText('Tipo')).toBeInTheDocument();
    expect(screen.getByText('Estado')).toBeInTheDocument();
    expect(screen.getByText('Acciones')).toBeInTheDocument();
  });
});