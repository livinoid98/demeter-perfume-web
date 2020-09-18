import React, { useCallback,useState } from 'react'
import Link from 'next/link'
import {useDispatch} from 'react-redux'
import { LOG_IN_REQUEST } from '../reducers/user';

const Login = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
    });
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    });
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        return dispatch({
            type:LOG_IN_REQUEST,
            data:{
                id:id,
                password:password,
            }
        });
    },[id,password]);
    return(
        <>
            <div className="login_wrap clearfix">
                <div className="login_title">
                    <h3>WELCOME TO DEMETER</h3>
                    <p>추억과 기억을 판매하는 데메테르에 오신 것을 환영합니다.</p>
                </div>
                <div className="login">
                    <form>
                        <h4>로그인</h4>
                        <input type="text" name="id" placeholder="ID" value={id} required onChange={onChangeId}/>
                        <input type="password" name="password" placeholder="PW" value={password} onChange={onChangePassword}/>
                        <input type="submit" value="LOGIN" onClick={onSubmit}/>
                    </form>
                    <ul className="clearfix">
                        <li>아이디 찾기</li>
                        <li>비밀번호 찾기</li>
                    </ul>
                </div>
                <div className="sign_up_inlogin">
                    <h4>회원가입</h4>
                    <p>데메테르 회원에 가입하시면 회원에게만 제공되는 다양한 혜택을 누리실 수 있습니다.</p>
                    <Link href="/sign_up"><a><button>JOIN US</button></a></Link>
                </div>
            </div>
        </>
    );
};

export default Login;