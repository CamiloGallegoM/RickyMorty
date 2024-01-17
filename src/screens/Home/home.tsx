import React from "react";
import { useProfileAllFetch } from "../../hooks/useData";
import { LoadingScreen } from "../../components/loading_component";
import { ErrorComponent } from "../../components/error_component";
import { ProfileComponent } from "./components/profiles";

interface Props {
    search?: string
}

export const FetchApiData: React.FC<Props> = (props) => {
    const {data,loading, error, getNextPage } = useProfileAllFetch({search:props.search})
    if(error) return <ErrorComponent/>
    if(data !== null){
       return <ProfileComponent data={data} nextPage={getNextPage}loading={loading} />
    }
    return null
}