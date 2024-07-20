import { Link } from "react-router-dom"
import './sidebar.css'

function Sidebar(){
    return (
      <>
        <div className="sidebar">
            <h4>Empresa XYX</h4>
            <legend>MENU</legend>
            <Link to='/home'>OverView</Link>
            <Link to='/bicicletas'>Bicicletas</Link>
        </div>
      </>
    )
}

export default Sidebar