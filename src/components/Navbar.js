import { Link } from "react-router-dom";

const Navbar  = () => {
    return ( 
        <nav className="navbar">
            <h1>The djogo blog</h1>
            <div className="links">
                <a href="/">home</a>
                <a href="/create">new Blog</a>
            </div>
        </nav>

     );
}
 
export default Navbar ;