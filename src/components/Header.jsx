import { Link } from "react-router-dom"

function Header (){

    return <div className="header">
        <h1> <Link to="/">Nooty</Link> </h1>
        <Link className="btn" to="/addnote">Add Note</Link>
    </div>
}

export default Header