import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
         console.log("useEffect ran !!!");
         
        
         setTimeout(() => {

            fetch(url)
            .then(response => {

                if(!response.ok){
                    //throwing the error here
                    throw Error('Could not fetch data');
                }

                console.log(response);
                return response.json();
            })
            .then(data =>{
                console.log(data);
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error =>{
                //catching the error here and returning it to be displayed in the Dom
                console.log(error.message);
                setIsLoading(false);
                setError(error.message);
            })

         }, 500)



    }, [url])

    return { data, isLoading, error };
}
 
export default useFetch;