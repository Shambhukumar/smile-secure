import { createContext } from "react";

const SelectedToothContext = createContext();

export const SelectedToothProvider = SelectedToothContext.Provider;

export default SelectedToothContext;