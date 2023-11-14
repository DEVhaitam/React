import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {error && <div>error : {error} </div>}
            {isPending && <div>Data is loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="all blogs"/>}
        </div>
     );
}
 
export default Home;