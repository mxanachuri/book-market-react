import { Link } from 'react-router-dom';

function Sidebar() {

    const linkColor = {
        color: "white",
        textDecoration: "none"
    }

    return (
        <>
            {/* Sidebar */}
            <ul className="navbar-nav sidebar sidebar-dark accordion fondo"
                id="accordionSidebar">
                

                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    {/* <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard - DH movies</span>
                    </a> */}
                    <Link to='/'style={linkColor}>
                        <i className="fas fa-fw fa-tachometer-alt"/>
                        <img src="logo.jpeg" style={{ width: '90%' }} alt='img'></img>
                        <span >Dashboard Book-Market</span>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">Actions</div>
                {/* Nav Item - Pages */}
                <li className="nav-item">
                    {/* <Link to='/pages' style={linkColor}>
                        <i className="fas fa-fw fa-folder" />
                        <span >Pages</span>
                    </Link> */}
                    <Link to={'/products/categories'}  style={linkColor}>
                        <i className="fas fa-fw fa-folder" />
                            <span >Tematicas</span>
                    </Link>
                    {/* <a className="nav-link collapsed" href="/pages">
                        <i className="fas fa-fw fa-folder" />
                        <span>Pages</span>
                    </a> */}
                </li>
                {/* Nav Item - Charts */}
                <li className="nav-item">
                    {/* <a className="nav-link" href="/charts">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>Charts</span>
                    </a> */}
                    <Link to='/products/lastFiveProducts' style={linkColor}>
                        <i className="fas fa-fw fa-chart-area" />
                        <span>Last 5 Books</span>
                    </Link>
                </li>
                {/* Nav Item - Tables */}
                <li className="nav-item">
                    {/* <a className="nav-link" href="/tables">
                        <i className="fas fa-fw fa-table" />
                        <span>Tables</span>
                    </a> */}
                    <Link to='/user/lastUser' style={linkColor}>
                        <i className="fas fa-fw fa-table" />
                        <span>Last user</span>
                    </Link>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="/tables">
                        <i className="fas fa-fw fa-table" />
                        <span>Tables</span>
                    </a> */}
                    <Link to='/users' style={linkColor}>
                        <i className="fas fa-fw fa-table" />
                        <span>Users</span>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/* End of Sidebar */}
        </>
    )
}

export default Sidebar;