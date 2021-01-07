import React from 'react'
import{ NavLink } from 'react-router-dom'
const NavBar = (props) => {
    return(
        <nav>

        <NavLink to='/auctions'>Auctions  </NavLink>
       

        |


        <NavLink to='/auctions/new'>  Create an Auction</NavLink>

        |
        {
        props.currentUser ? (
          <>
            <span>{props.currentUser ? props.currentUser.first_name : ''}</span>
            {/* <button onClick={handleSignOutButtonClick}>Sign Out</button> */}
          </>
        )
        :
        <NavLink to='/sign_in'>Sign In</NavLink>
        |
        <NavLink to='/bids'>Sign In</NavLink>
      }
        </nav>
    )
}
export default NavBar