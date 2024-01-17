import React from "react";
import { DataType } from "../screens/Home/types/profile";


const urlApiGeneral = "https://rickandmortyapi.com/api/character"


export function useProfileAllFetch (props:{search:string | undefined}){
    const [data, setData] = React.useState<DataType| null >(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    
    const getData = async ()=>{
        setLoading(true)
        setError(false)
        let url = urlApiGeneral
        if (  props.search &&  props.search.length >0) url = `${urlApiGeneral}/?name=${props.search}`
        fetch(url)
            .then((response)=> response.json())
            .then((data:any)=> {
                setLoading(false)
                setData(data)
            })
            .finally(()=> setLoading(false))
            .catch(()=> setError(true))
    }
    const getNextPage = async ()=>{
        setError(false)
        if(data && data.info && data.info.next !==null){
            setLoading(true)
            let url = data.info.next
            fetch(url)
                .then((response)=> response.json())
                .then((nextResult: DataType)=> {
                    setLoading(false)
                    setData({
                        info: nextResult.info,
                        results: [...data.results, ...nextResult.results]
                    })
                })
                .finally(()=> setLoading(false))
                .catch(()=> setError(true))
        }
        
    }

    React.useEffect(()=>{
        getData()
    },[props.search])
    
    return {data, loading, error, getNextPage}
}