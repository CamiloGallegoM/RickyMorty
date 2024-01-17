export type ResultType = {
    id: number,
    name:string,
    status: 'unknown' | 'Dead' | 'Alive',
    species: string,
    type:string ,
    gender: string,
    origin: {
        name: string,
        url: string,
    }
    location: {
        name: string,
        url: string
    },
    episode: Array<string>,
    image:string,
    url: string,
    created: string
}
export type InfoType = {
    count: null | number,
    pages: null | number,
    next: null | string,
    prev: null | string
}
export type DataType = {
    info:InfoType
    results: Array<ResultType>
}