import React from 'react'
import Router from 'next/router'

const Collaborate = () => {
    const changePage = () => {
        Router.push('/product');
    };
    return(
        <>
            <div className="collaborate_main">
                <img src="/img/collaborate_main_title.png" alt=""/>
                <img src="/img/renew.png" alt=""/>
            </div>
            <div className="benefit">
                <img src="/img/department_text.png" alt=""/>
                <img src="/img/benefit_text.png" alt=""/>
                <img src="/img/hyundai_banner.png" alt=""/>
                <img src="/img/illust_perfume_main.png" alt=""/>
            </div>
            <div className="illust_collabo">
                <img src="/img/illust_perfume_text.png" alt=""/>
                <img src="/img/illust_more.png" alt="" onClick={changePage}/>
                <img src="/img/illust_perfume1.png" alt=""/>
                <img src="/img/illust_perfume2.png" alt=""/>
                <img src="/img/illust_perfume3.png" alt=""/>
            </div>
        </>
    );
};

export default Collaborate;