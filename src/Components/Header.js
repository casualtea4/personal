import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/journal'>Journal</Link>
            <Link to='/profile'>Profile</Link>
        </div>
    )
}

export default Header;