import React from 'react'
import Link from 'next/link'
import {useSelector} from 'react-redux'

const LoginBar = () => {
    const {isLogged,userInfo} = useSelector(state => state.user);
    return(
        <>
            {isLogged ?
            <div className="login">
                <ul className="clearfix" style={{'fontSize':'15px'}}>
                    <h2><Link href="/login"><a><li style={{'marginLeft':'1040px'}}>{userInfo.name}님</li></a></Link></h2>
                    <h2><Link href="/sign_up"><a><li>LOGOUT</li></a></Link></h2>
                </ul>
            </div>
            :
            <div className="login">
                <ul className="clearfix">
                    <h2><Link href="/login"><a><li>LOGIN</li></a></Link></h2>
                    <h2><Link href="/sign_up"><a><li>JOIN US</li></a></Link></h2>
                </ul>
            </div>}
        </>
    );
};

export default LoginBar;