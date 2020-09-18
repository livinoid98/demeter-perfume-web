import React from 'react'
import Link from 'next/link'

const Cs = () => {
    return(
        <>
            <div className="cs_main"></div>
            <div className="faq">
                <div className="faq_title">
                    <h3>DEMETER FAQ</h3>
                </div>
                <div className="faq_content clearfix">
                    <table>
                        <thead>
                            <tr>
                                <td>번호</td>
                                <td>제목</td>
                                <td>작성자</td>
                                <td>작성일</td>
                                <td>조회</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>[배송문의] 주문한 상품 - 배송은 언제 될까요?</td>
                                <td>관리자</td>
                                <td>2020-08-21</td>
                                <td>100098</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>[배송문의] 배송전 취소/주소/컬러/사이즈를 변경하고 싶어요!</td>
                                <td>관리자</td>
                                <td>2020-08-28</td>
                                <td>48233</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>[배송문의] 묶음배송을 히고 싶어요</td>
                                <td>관리자</td>
                                <td>2020-08-28</td>
                                <td>23507</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>[배송문의] 받아온 상품의 불량이나 오배송이 된 경우</td>
                                <td>관리자</td>
                                <td>2020-08-28</td>
                                <td>20573</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>[배송문의] 주문한 상품이 다 오지 않았어요</td>
                                <td>관리자</td>
                                <td>2020-08-28</td>
                                <td>15512</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>[배송문의] 무료배송은 얼마부터인가요?</td>
                                <td>관리자</td>
                                <td>2020-08-28</td>
                                <td>57179</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>[배송문의] 해외배송 주문은 어떻게 하나요?</td>
                                <td>관리자</td>
                                <td>2020-08-28</td>
                                <td>10127</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>[교환/환불] 교환신청은 어떻게 하나요?</td>
                                <td>관리자</td>
                                <td>2020-08-28</td>
                                <td>20183</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>[교환/환불] 취소한 금액이 달라요</td>
                                <td>관리자</td>
                                <td>2020-08-28</td>
                                <td>12217</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>[교환/환불] 환불 절차가 달라요</td>
                                <td>관리자</td>
                                <td>2020-08-28</td>
                                <td>30958</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="find clearfix">
                        <select>
                            <option>제목</option>
                            <option>내용</option>
                        </select>
                        <input type="text"/>
                        <button>검색</button>
                    </div>
                    <Link href="/cs/create"><a><button className="submit">글쓰기</button></a></Link>
                </div>
            </div>
        </>
    );
};

export default Cs;