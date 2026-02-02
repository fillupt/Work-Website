'use client';

import { createContext, useContext, ReactNode } from 'react';
import { DesignVariant } from '@/app/design/tokens';

interface DesignContextType {
  variant: DesignVariant;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);
const LOCKED_VARIANT: DesignVariant = 'depth-bold';

export function DesignProvider({ children }: { children: ReactNode }) {
  return (
    <DesignContext.Provider value={{ variant: LOCKED_VARIANT }}>
      {children}
    </DesignContext.Provider>
  );
}

export function useDesign(): DesignContextType {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
}
