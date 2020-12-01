import { createContext, useContext, useState } from "react";

const HoverContext = createContext();
const UpdateHoverContext = createContext();

export function useHover() {
  return useContext(HoverContext);
}

export function useUpdateHover() {
  return useContext(UpdateHoverContext);
}

export function HoverProvider({ children }) {
  const [isHover, setIsHover] = useState(false);

  const updateContext = () => {
    setIsHover(!isHover);
  };

  return (
    <HoverContext.Provider value={isHover}>
      <UpdateHoverContext.Provider value={updateContext}>
        {children}
      </UpdateHoverContext.Provider>
    </HoverContext.Provider>
  );
}
