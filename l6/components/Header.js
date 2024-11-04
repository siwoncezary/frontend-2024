'use client'
import { useContext } from "react";
import { auth } from '@/firebase'

function Header() {
    return ( 
    <div>
        {auth.currentUser ? <>User logged" {auth.currentUser.displayName}</> : <>No user</>}
        {auth.currentUser.accessToken}
    </div>  
    );
}

export default Header;