import React from 'react';
import { useState } from 'react';
const Pagination = ({page,setPage,max}) => {



    const [input,setInput] = useState(1)
    

    const nextPage = () => {
        setInput(input+1)
        setPage(page+1)
    }
    
    return (
        <div>
            <button>Preview</button>
            <input value={input} autoComplete='off'/>
            <p> de {max}</p>
            <button onClick={nextPage}>Next</button>
        </div>
    );
};

export default Pagination;