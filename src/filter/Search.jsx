import React, { createContext, useContext, useState } from "react";

export const SearchContext = createContext();
const SearchProvider = ({children}) => {
    const [auth, setAuth] = useState({
        keyword :'',
        results:[]
    })

    return(
        <div>

        <SearchContext.Provider value={[auth, setAuth]}>
            {children}
        </SearchContext.Provider>
        </div>
    )
}

//custom hook

const useSearch = () => useContext(SearchContext)
export {useSearch, SearchProvider}