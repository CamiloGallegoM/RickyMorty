import React from "react";
import { useProfileAllFetch } from "../../hooks/useData";
import { LoadingScreen } from "../../components/loading_component";
import { ErrorComponent } from "../../components/error_component";
import { ProfileComponent } from "./components/profiles";

export const HomeView: React.FC = () => {
    const {data,loading, error } = useProfileAllFetch()
    if(loading) return <LoadingScreen/>
    if(error) return <ErrorComponent/>
    if(data !== null){
       return <ProfileComponent data={data}/>
    }
    return null
}