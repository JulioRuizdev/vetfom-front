import { useContext } from "react";
import QuiscoContext from "../context/QuiscoContext";


const useQuisco = () => {
    return useContext(QuiscoContext);
}

export default useQuisco;