import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate, useAsyncError } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e)  => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
        console.log(blog.title + " added");
        setIsPending(false)});
        history("/");
    }
    return ( 
        <div className="create">
            <h2>Create Blog</h2>
            <br/><br/>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br/>
                <br/>

                <label>Blog body</label>
                <textarea
                    type="text"
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />
                <br/>
                <br/>   

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}>

                    <option value="mario">Mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <br/>
                <br/>
                {!isPending && <button >Add blog</button> }
                {isPending && <button disabled>Pending ...</button>}
                <br/>
                
           </form>
           
        </div>       
    );
}
 
export default Create;