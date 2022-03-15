import React,{useState} from 'react';
import './navbar.css'
function Navbar() {
    const menuclosestyle = {
        "display": "none"
    }

    const menuopenstyle = {
        "display": "block"
    }

    const [menuOpen, setMenuOpen] = useState();
    const [menubtnOpen, setMenubtnOpen] = useState();
    const [menubtnclose, setMenubtnclose] = useState();

    function closeMenu(){
        setMenubtnclose(menuclosestyle)
        setMenuOpen(menuclosestyle)
        setMenubtnOpen(menuopenstyle)
    }

    function openMenu(){ 
        setMenubtnclose(menuopenstyle)      
        setMenuOpen(menuopenstyle)
        setMenubtnOpen(menuclosestyle)
    }
    return (
        <>
        {/* navbar section start */}
            <div className='navbar'>
            <i onClick={closeMenu} style={menubtnclose} class="menu-close-btn bi bi-x"></i>
                <nav className='container'>
                    <div className='logo'>
                        <h3><a href='#'>One Page</a></h3>
                    </div>
                    <div>
                    <i onClick={openMenu} style={menubtnOpen} class="menu-open-btn bi bi-list"></i>
                    </div>
                    <div className='menu-container' style={menuOpen}>
                        <ul className='menu'>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#About'>About</a></li>
                            <li><a href='#Services'>Services</a></li>
                            <li><a href='#Portfolio'>Portfolio</a></li>
                            <li><a href='#Team'>Team</a></li>
                            <li><a href='#Pricing'>Pricing</a></li>
                            <li><a href='#'>Drop Down<i class="bi bi-chevron-compact-down"></i></a>
                                <div className='dropDown'>
                                    <ul>
                                        <li><a href='#'>Drop Down 1</a></li>
                                        <li  className='dropdown-menu-child'><a href='#'>Deep Drop Down<i class="bi bi-chevron-compact-right"></i></a>
                                            <div className='dropDown-sub-menu'>
                                                <ul>
                                                    <li ><a href='#'>Drop Down 1</a></li>
                                                    <li><a href='#'>Drop Down 2</a></li>
                                                    <li><a href='#'>Drop Down 3</a></li>
                                                    <li><a href='#'>Drop Down 4</a></li>
                                                    <li><a href='#'>Drop Down 5</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href='#'>Drop Down 2</a></li>
                                        <li><a href='#'>Drop Down 3</a></li>
                                        <li><a href='#'>Drop Down 4</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href='#Contact'>Contact</a></li>
                            <li className='getStart-button'><a href='#'>Get Started</a></li>
                        </ul>
                    </div>
                </nav>
                {/* <buttom>fgdg</buttom> */}
            </div>
        </>
    )
}

export default Navbar;