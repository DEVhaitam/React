import { Link , useParams } from "react-router-dom";

const BlogList = ({blogs,title}) => {



    //const blogs = props.blogs;
    //console.log(props,blogs);
    return ( 
    <div>
        <h1>{title}</h1>
        {blogs.map((blog) => (
            <div key={blog.id}>
                <br/>
                <Link to={"/blogs/"+blog.id}>
                <h3>this is {blog.title}</h3>
                <p>title : {blog.author}</p>
                </Link>
                <br/>
            </div>                
        ))}
    </div>
    );
}
 
export default BlogList;