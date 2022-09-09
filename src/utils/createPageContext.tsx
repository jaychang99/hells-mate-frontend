import { createContext, ReactNode, useContext } from "react";

export function createPageContext<T>() {
  const Context = createContext<T | null>(null);

  const Provider = ({ value, children }: { value: T; children: ReactNode }) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const usePageContext = () => {
    const context = useContext(Context);

    if (context === null) {
      throw new Error("Wrong Usage");
    }

    return context;
  };

  return { Provider, usePageContext };
}
