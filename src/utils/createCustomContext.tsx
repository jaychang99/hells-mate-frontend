import { createContext, ReactNode, useContext } from "react";

export function createCustomContext<T>() {
  const Context = createContext<T | null>(null);

  const Provider = ({ value, children }: { value: T; children: ReactNode }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useCustomContext = () => {
    const context = useContext(Context);

    if (context === null) {
      throw new Error("Wrong Usage");
    }

    return context;
  };

  return { Provider, useCustomContext };
}
