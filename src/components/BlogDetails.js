import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const BlogDetail = () => {
    const {id} = useParams();
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs/'+id);
    const [deleted, setDeleted] = useState(false);
    const handleDelete = () => {
        if(data!==null){
            console.log(data.title + " is deleted");
            fetch('http://localhost:8000/blogs/'+id,{
                method: "DELETE"
            }).then(() => setDeleted(true))
            .catch((err) => console.log(err.message));
        }
       
    }
    return ( 
        <div className="blog-details">
            {isPending && <div> Loading ... </div>}
            {error && <div> {error} </div>}
            {data && !deleted && (
                <article>
                    <h2>{data.title} - {id}</h2>
                    <p>{data.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
            {deleted && (
                <div> 
                    <h2>{data.title} is deleted</h2>
                    <Link to="/"> Go to home</Link>
                </div>            
            )}
            <br/>
            
        </div>
     );
}
 
export default BlogDetail;