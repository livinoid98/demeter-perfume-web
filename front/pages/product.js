import React, { useEffect, useCallback } from 'react'
import $ from 'jquery'
import ProductPanel from '../component/productPanel'

const Product = () => {
    useEffect(() => {
        $('.memories_title li').on('click', function(){
            $('.memories_title li').removeAttr('id','none');
            $(this).attr('id','on');
        });
    });
    const onBlockMemory1 = useCallback(() => {
        $('.memories_content ul').css('display','none');
        $('.memory1').css('display','block');
    });
    const onBlockMemory2 = useCallback(() => {
        $('.memories_content ul').css('display','none');
        $('.memory2').css('display','block');
    });
    const onBlockMemory3 = useCallback(() => {
        $('.memories_content ul').css('display','none');
        $('.memory3').css('display','block');
    });
    const onBlockMemory4 = useCallback(() => {
        $('.memories_content ul').css('display','none');
        $('.memory4').css('display','block');
    });
    const onBlockMemory5 = useCallback(() => {
        $('.memories_content ul').css('display','none');
        $('.memory5').css('display','block');
    });
    const onBlockMemory6 = useCallback(() => {
        $('.memories_content ul').css('display','none');
        $('.memory6').css('display','block');
    });
    const onBlockMemory7 = useCallback(() => {
        $('.memories_content ul').css('display','none');
        $('.memory7').css('display','block');
    });
    const onBlockMemory8 = useCallback(() => {
        $('.memories_content ul').css('display','none');
        $('.memory8').css('display','block');
    });
    const onBlockMemory9 = useCallback(() => {
        $('.memories_content ul').css('display','none');
        $('.memory9').css('display','block');
    });
    
    return(
        <>
            <div className="product_main">
                <div className="main_title">
                    <h3>AUGUST PHOTO DIARY</h3>
                </div>
                <div className="product_main_img">
                    <img src="/img/unique_perfume.png" alt=""/>
                </div>
                <div className="separate_line"></div>
                <div className="main_circle">
                    <img src="/img/main_circle_img.png" alt=""/>
                    <img src="/img/main_circle_text.png" alt=""/>
                </div>
            </div>
            <div className="layering">
                <div className="layering_title">
                    <img src="/img/product_layering_title.png" alt=""/>
                </div>
                <ul className="clearfix">
                    <li>
                        <img src="/img/layering_img1.png" alt=""/>
                        <span>Funeral Home</span>
                        <p>30ml 픽미업 코롱향수</p>
                    </li>
                    <li>
                        <img src="/img/layering_img2.png" alt=""/>
                        <span>매력있솝, 사랑스럽솝</span>
                        <p>비누향기 SOAPY 향수 3종</p>
                    </li>
                    <li>
                        <img src="/img/layering_img3.png" alt=""/>
                        <span>씨티 에디션_파리</span>
                        <p>EDT Jumping Life</p>
                    </li>
                </ul>
            </div>
            <div className="memories">
                <div className="memories_title">
                    <img src="/img/memories_title.png" alt=""/>
                    <ul className="clearfix">
                        <li onClick={onBlockMemory1}>비눗방울의 기억</li>
                        <li onClick={onBlockMemory2}>꽃에 대한 기억</li>
                        <li onClick={onBlockMemory3}>음식에 대한 기억</li>
                        <li id="on" onClick={onBlockMemory4}>푸른 숲의 기억</li>
                        <li onClick={onBlockMemory5}>과일에 대한 기억</li>
                        <li onClick={onBlockMemory6}>사랑에 대한 기억</li>
                        <li onClick={onBlockMemory7}>자연에 대한 기억</li>
                        <li onClick={onBlockMemory8}>여행과 파티의 기억</li>
                        <li onClick={onBlockMemory9}>작업실에 대한 기억</li>
                    </ul>
                </div>
                <div className="memories_content">
                    <ProductPanel/>
                </div>
            </div>
        </>
    );
};

export default Product;