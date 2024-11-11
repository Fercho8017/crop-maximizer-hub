import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PredictionCard } from './PredictionCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('PredictionCard', () => {
  it('muestra el estado de carga inicialmente', () => {
    render(<PredictionCard />, { wrapper });
    expect(screen.getByText('Cargando predicciones...')).toBeInTheDocument();
  });
});