import { useState } from 'react';
import useSWR from 'swr';

type PostValue = { id: number }
const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

export function SwrFetch({id} : PostValue) {
    const url = `https://dummyjson.com/posts/${id}`;
    const { data, error, isLoading } = useSWR(url, fetcher);

    if (isLoading) return  <div>chargement...</div>
    if (error) return <div>échec du chargement</div>

    return( 
    <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
    </div>)
}

const SwrFetchRender = () => {
    const [id, setId] = useState(1);

    return (
    <>
    <button onClick={() => setId(Math.floor((Math.random() * 100)))}>Autre post</button>
        <SwrFetch id={id}/>
    
    </>)
    
}

export default SwrFetchRender;