import axios from "axios";
import {useState, createContext, useEffect } from "react";

const ApiContext = createContext();

export const ApiProvider = ({children}) =>{
    const [pizzas, setPizzas] = useState([]);

    const getData = async ()=> {
        try {
            const res = await axios.get ('http://localhost:5000/api/pizzas')
            setPizzas(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);     
        }
      }

    useEffect(() => {
        getData();
    }, [])

    
    return (
        <ApiContext.Provider value={{pizzas, getData}}>
        {children}
        </ApiContext.Provider>
    )
    
}
export default ApiContext