const BlogList = ({blogs,title}) => {

    //const blogs = props.blogs;
    //console.log(props,blogs);
    return ( 
    <div>
        <h1>{title}</h1>
        {blogs.map((blog) => (
            <div key={blog.id}>
                <h3>this is {blog.author}</h3>
                <p>title : {blog.title}</p>
            </div>                
        ))}
    </div>
    );
}
 
export default BlogList;