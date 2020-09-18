import React, {useState, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import Link from 'next/link'

const Sign_up = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(''); 
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    },[]);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[]);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    },[password]);
    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    },[]);
    const onChangePhone = useCallback((e) => {
        setPhone(e.target.value);
    });
    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    });
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    },[]);
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        return dispatch({
            type:'SIGN_UP_REQUEST',
            data:{
                id : id,
                password : password,
                name : name,
                phone : phone,
                email : email,
            },
        });
    }, [id, password, name, phone, email]);
    return(
        <>
            <div className="login_title">
                <h3>JOIN US</h3>
                <p>회원가입을 환영합니다.</p>
            </div>
            <div className="sign_up">
                <div className="sign_up_title">
                    <h4>기본 정보</h4>
                    <p>회원가입을 위한 필수입력 항목</p>
                </div>
                <div className="sign_up_content">
                    <form>
                        <table>
                            <tr>
                                <td>아이디</td>
                                <td><input type="text" name="id" value={id} required onChange={onChangeId}/></td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td><input type="password" name="password" value={password} required onChange={onChangePassword}/></td>
                            </tr>
                            <tr>
                                <td>비밀번호 확인</td>
                                <td><input type="password" name="passwordCheck" value={passwordCheck} required onChange={onChangePasswordCheck}/>{passwordError && <span>비밀번호가 일치하지 않습니다.</span>}</td>
                            </tr>
                            <tr>
                                <td>이름</td>
                                <td><input type="text" name="name" value={name} required onChange={onChangeName}/></td>
                            </tr>
                            <tr>
                                <td>휴대전화</td>
                                <td><input type="tel" name="phone" value={phone} required onChange={onChangePhone}/></td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td><input type="email" name="email" value={email} required onChange={onChangeEmail}/></td>
                            </tr>
                        </table>
                        <h4>개인정보 수집 및 이용 동의</h4>
                        <textarea readOnly value="■ 개인정보 수집항목

이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 비밀번호 질문과 답변 , 자택 전화번호 , 자택 주소 , 휴대전화번호 , 이메일 , 기념일 , 사는지역



■ 개인정보의 수집 및 이용목적

회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다..

 ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
구매 및 요금 결제 , 물품배송 또는 청구지 등 발송
 ο 회원 관리
불만처리 등 민원처리
 ο 마케팅 및 광고에 활용
신규 서비스(제품) 개발 및 특화 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재



■ 개인정보 제공

회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.

- 이용자들이 사전에 동의한 경우

- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우



■ 수집한 개인정보의 위탁

럽미 쇼핑몰은 서비스 향상을 위해 관계법령에 따라 회원의 동의를 얻거나 관련 사항을 공개 또는 고지 후 회원의 개인정보를 외부에 위탁하여 처리하고 있습니다.
럽미 쇼핑몰 의 개인정보처리 수탁자와 그 업무의 내용은 다음과 같습니다.
 
- 수탁자 : (주)루나소프트
- 위탁 업무 내용 : 카카오 알림톡 발송 업무
- 수집항목 : 휴대폰버호, 주문정보, 배송정보
- 보유기간 : 회원 탈퇴 시 혹은 법정 보유기간

- 수탁자 : (주)셀메이트
- 위탁 업무 내용 : 배송 및 C/S처리 목적을 가지고, 셀메이트 프로그램에 일시적으로 제공
- 수집항목 : 회원정보, 주문정보, 배송정보, C/S상담내역
- 보유기간 : 회원 탈퇴 시 혹은 법정 보유기간
 
직송 등 일부 배송형태에 따라, 전자상거래소비자보호법 제 21조에 의거 협력사에 배송정보가 제공 됩니다.


■ 개인정보의 보유 및 이용기간

원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.


 보존 항목 : 이름 , 성별 , 로그인ID , 비밀번호 , 비밀번호 질문과 답변 , 자택 전화번호 , 자택 주소 , 휴대전화번호 , 이메일
 보존 근거 : 신용정보의 이용 및 보호에 관한 법률
 보존 기간 : 재구매시정보이용"></textarea>
                        <div className="check">
                            <span>개인정보 수집 및 이용에 동의하십니까?</span>
                            <input type="checkbox" name="agree" onChange={onChangeTerm} value={term}/>동의함
                        </div>
                        <div className="submit">
                            <Link href="/"><a><button>취소</button></a></Link>
                            <input type="submit" value="회원가입" onClick={onSubmit}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Sign_up;