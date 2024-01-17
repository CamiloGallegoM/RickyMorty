import React from "react";


const urlApiGeneral = "https://rickandmortyapi.com/api/character"

export function useProfileAllFetch (){
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    
    const getData = async ()=>{
        setLoading(true)
        fetch(urlApiGeneral)
            .then((response)=> response.json())
            .then((data:any)=> {
                setLoading(false)
                setData(data)
            })
            .finally(()=> setLoading(false))
            .catch(()=> setError(true))
    }

    React.useEffect(()=>{
        getData()
    },[])
    return {data, loading, error}
}