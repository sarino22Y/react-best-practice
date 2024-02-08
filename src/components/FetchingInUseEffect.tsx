import { useEffect, useState } from "react";

type PostBody = {
    id : number
}
const FetchingInUseEffect = () => {
    const [id, setId] = useState(1);
  return (
    <div>
        <button onClick={() => setId(Math.floor((Math.random() * 100)))}>
            Show me a different post
        </button>

        <PostBody id={id}/>
    </div>
  )
}

export function PostBody({id}: PostBody) {
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        fetch(`https://dummyjson.com/posts/${id}`, {
            signal: controller.signal
        })
            .then((res) => res.json())
            .then((data) => {
                setText(data.body);
                setLoading(false);
            });

        return () => {
            controller.abort();
        }
    }, [id]);

    return(
        <>
        {
            loading ? <p>Loading...</p> :  <p>{text}</p>
        }
           
        </>
    );
}

export default FetchingInUseEffect
