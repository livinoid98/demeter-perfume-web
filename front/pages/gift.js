import React from 'react'
import Link from 'next/link'
import $ from 'jquery'

const Gift = () => {
    const toggle = () => {
        $('#nav-icon').on('click', function(){
            $(this).toggleClass('open');
            $('.side_menu ul').toggleClass('on');
        });
    }
    
    return(
        <>
            <div className="gift_wrap_sub clearfix">
                <div className="side_menu">
                    <div id="nav-icon" onClick={toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="clearfix">
                        <Link href="#"><a><li>Single Gift</li></a></Link>
                        <Link href="#"><a><li>Gift Set</li></a></Link>
                    </ul>
                </div>
                <div className="gift_main">
                    <div className="main_sort">
                        <ul className="clearfix">
                            <li>
                                <div className="gift1"></div>
                                <span>오 뜨로삐깔</span>
                                <p>신선한 플로럴 향기가 이국적인 정취와 열대의 소나기가 남기고 간 여운처럼 아련한 추억을 불러일으키는 오 드 뚜왈렛</p>
                            </li>
                            <li>
                                <div className="gift2"></div>
                                <span>오 드 깡빠뉴 오 드 뜨왈렛뜨 100ml</span>
                                <p>1976년 도르나노 가문의 특징에서 영감을 얻어 탄생한 오 드 깡빠뉴는 전설적인 향수</p>
                            </li>
                            <li>
                                <div className="gift3"></div>
                                <span>오 드 시슬리 1</span>
                                <p>햇살 아래 빛나는 여름 드레스처럼 싱그러운 오 드 시슬리 1이 담고 있는 초록빛 여름 정원의 신비로움을 만나보세요.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="with_image clearfix">
                        <div className="gift_main_img">
                            <div className="main_gift_img"></div>
                            <img src="/img/gift_main_text.png" alt=""/>
                        </div>
                        <div className="with_sort">
                            <ul className="clearfix">
                                <li>
                                    <div className="gift4"></div>
                                    <span>오 드 시슬리 2</span>
                                    <p>싱그러운 초록빛으로 물든 화이트 플라워 드레스 같은 오 드 시슬리 2를 만나보세요.</p>
                                </li>
                                <li>
                                    <div className="gift5"></div>
                                    <span>오 드 시슬리 3</span>
                                    <p>루비의 붉은 광채를 발산하는 관능적인 드레스를 연상시키는 오 드 시슬리 3를 만나보세요.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main_sort">
                        <ul className="clearfix">
                            <li>
                                <div className="gift6"></div>
                                <span>이지아</span>
                                <p>일 년에 한번, 특별한 시즌에만 잠깐 피어나는 장미로 탄생한 이지아는 시슬리의 새로운 여성 향수의 시작을 알리는 제품</p>
                            </li>
                            <li>
                                <div className="gift7"></div>
                                <span>오 뒤 스와르</span>
                                <p>위베르 도르나노는 영원한 사랑을 약속하며, 아내에게 시간을 초월한 우아하고 독특한 향기를 지닌 시슬리의 첫 번째 여성용 향수</p>
                            </li>
                            <li>
                                <div className="gift8"></div>
                                <span>스와르 드 륀</span>
                                <p>플로럴 부케 향과 상큼한 푸르티 향이 어우러진 향수, 스와르 드 륀</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gift;