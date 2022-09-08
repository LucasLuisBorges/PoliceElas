import { createContext, ReactNode, useState } from 'react';

interface TableProps {
  blur: boolean;
  setBlur: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TableContext = createContext({} as TableProps);

interface TableContextProviderProps {
  children: ReactNode;
}

export function TableContextProvider({ children }: TableContextProviderProps) {
  const [blur, setBlur] = useState(false);

  return (
    <TableContext.Provider value={{ blur, setBlur }}>
      {children}
    </TableContext.Provider>
  );
}
