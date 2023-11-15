import { Link } from "react-router-dom";

const Navbar  = () => {
    return ( 
        <nav className="navbar">
            <h1>The djogo blog</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create">Create Blog</Link>
                <Link to="/delete">Delete Blog</Link>
            </div>
        </nav>

     );
}
 
export default Navbar ;