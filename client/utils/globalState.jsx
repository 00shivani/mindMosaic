import { from } from "@apollo/client";
import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        user: [],
        tile: [],
        gallery: [],
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };