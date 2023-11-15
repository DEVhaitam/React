import { useState } from "react";

const Delete = () => {

    const [id,setId] = useState("");
    const [found, setFound] = useState(true);
    const [data, setData] = useState(null);

    
    const handleDelete = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/blogs/'+id)
        .then(res => {
            if(!res.ok){
                throw Error("couldn't fetch data from the resource");
            }
            return res.json();
        })
        .then(data => setData(data))
        .catch((err) => {
            console.log(err.name);
        });

        fetch('http://localhost:8000/blogs/'+id, {
            method: "DELETE"
        })
        .then(()=>{
            console.log(data.title + " is deleted");
        })
        .catch((err) => {
            console.log(id  + " Not found");
            console.log(err.name);
            setFound(false);
        });
        
    }
    
    return ( 
    <div>
        <h1>Delete blog</h1>
        <br/>
        <form >
            <label style={{marginRight:20}}>Blog's id </label>
            <input 
                type="text"
                required
                value={id}
                onChange={(e)=>setId(e.target.value)}
                 />
            <br/><br/>
            <button onClick={handleDelete}>delete</button>
        </form>
        {!found && <p>{id} doesn't exist</p>}
        {found && <p>{id} deleted</p>}

    </div>
    );
         
    

}
 
export default Delete;