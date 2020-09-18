import React, {useEffect,useCallback} from 'react'
import {useSelector} from 'react-redux'
import $ from 'jquery'

const Signature = () => {
    useEffect(()=>{
        $('.collection_title li').on('click', function(){
            $('.collection_title li').removeAttr('id','none');
            $(this).attr('id','on');
        });
    });
    const onBlockCitrus = useCallback(() => {
        $('.collection_title li').on('click', function(){
            $('.citrus, .floral, .fruity, .green, .woody, .musk').css('display','none');
            $('.citrus').css('display','block');
        });
    });
    const onBlockFloral = useCallback(() => {
        $('.collection_title li').on('click', function(){
            $('.citrus, .floral, .fruity, .green, .woody, .musk').css('display','none');
            $('.floral').css('display','block');
        });
    });
    const onBlockFruity = useCallback(() => {
        $('.collection_title li').on('click', function(){
            $('.citrus, .floral, .fruity, .green, .woody, .musk').css('display','none');
            $('.fruity').css('display','block');
        });
    });
    const onBlockGreen = useCallback(() => {
        $('.collection_title li').on('click', function(){
            $('.citrus, .floral, .fruity, .green, .woody, .musk').css('display','none');
            $('.green').css('display','block');
        });
    });
    const onBlockWoody = useCallback(() => {
        $('.collection_title li').on('click', function(){
            $('.citrus, .floral, .fruity, .green, .woody, .musk').css('display','none');
            $('.woody').css('display','block');
        });
    });
    const onBlockMusk = useCallback(() => {
        $('.collection_title li').on('click', function(){
            $('.citrus, .floral, .fruity, .green, .woody, .musk').css('display','none');
            $('.musk').css('display','block');
        });
    });
    const onCitrus = useCallback(() => {
        $('.choice img:nth-child(2)').on('click', function(){
            $('.citrus_info').css('display','block');
            $('.perfume_collection').css('margin-top','540px');
        });
    });
    const onFloral = useCallback(() => {
        $('.choice img:nth-child(3)').on('click', function(){
            $('.floral_info').css('display','block');
            $('.perfume_collection').css('margin-top','540px');
        });
    });
    const onFruity = useCallback(() => {
        $('.choice img:nth-child(4)').on('click', function(){
            $('.fruity_info').css('display','block');
            $('.perfume_collection').css('margin-top','540px');
        });
    });
    const onGreen = useCallback(() => {
        $('.choice img:nth-child(8)').on('click', function(){
            $('.green_info').css('display','block');
            $('.perfume_collection').css('margin-top','540px');
        });
    });
    const onWoody = useCallback(() => {
        $('.choice img:nth-child(9)').on('click', function(){
            $('.woody_info').css('display','block');
            $('.perfume_collection').css('margin-top','540px');
        });
    });
    const onMusk = useCallback(() => {
        $('.choice img:nth-child(10)').on('click', function(){
            $('.musk_info').css('display','block');
            $('.perfume_collection').css('margin-top','540px');
        });
    });
    const closeInfo = useCallback(() => {
        $('.info_close').on('click', function(){
            $('.citrus_info, .floral_info, .fruity_info, .green_info, .woody_info, .musk_info').css('display','none');
            $('.perfume_collection').css('margin-top','82px');
        });
    });
    const {citrus1,citrus2,citrus3,citrus4} = useSelector(state => state.perfume);
    const {floral1,floral2,floral3,floral4} = useSelector(state => state.perfume);
    const {fruity1,fruity2,fruity3,fruity4} = useSelector(state => state.perfume);
    const {green1,green2,green3,green4} = useSelector(state => state.perfume);
    const {woody1,woody2,woody3,woody4} = useSelector(state => state.perfume);
    const {musk1,musk2,musk3,musk4} = useSelector(state => state.perfume);
    return(
        <>
            <div className="choice">
                <div className="choice_wrap">
                    <img src="/img/choice_first.png" alt=""/>
                    <img src="/img/citrus_img.png" onClick={onCitrus} alt=""/>
                    <img src="/img/floral_img.png" onClick={onFloral} alt=""/>
                    <img src="/img/fruity_img.png" onClick={onFruity} alt=""/>
                    <span>Citrus / 레몬향</span>
                    <span>Floral / 꽃향기</span>
                    <span>Fruity / 과일향</span>
                    <img src="/img/green_img.png" onClick={onGreen} alt=""/>
                    <img src="/img/woody_img.png" onClick={onWoody} alt=""/>
                    <img src="/img/musk_img.png" onClick={onMusk} alt=""/>
                    <span>Green / 풀 향</span>
                    <span>Woody / 로즈우드향</span>
                    <span>Musk / 사향여우털향</span>
                </div>
                <div className="citrus_info info clearfix">
                    <div className="info_img">
                        <img src="/img/citrus_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={closeInfo}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Citrus</h3>
                        <p>오렌지, 레몬, 라임, 자몽 등의 향과 풍미를 느낄 수 있다. 풋풋하고 싱싱하며, 청량감 있는 Dry White Wine에서 맡을 수 있는 가장 기본적인 아로마</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
                <div className="floral_info info clearfix">
                    <div className="info_img">
                        <img src="/img/floral_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={closeInfo}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Floral</h3>
                        <p>자연에서 살아 숨쉬는 꽃 시계 (Floral Clock)에서 영감을 받아 탄생한 제품으로, 밤이 되면 꽃잎을 오므려 스스로를 보호하고, 아침이 되면 눈부시고 밝게 빛나는 본연의 모습을 드러내는 마법과도 같은 자연의 원리를 포착하여 아침의 아름다움과 밤을 품은 달콤한 꽃의 정수를 관능적인 느낌을 담아낸 향</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
                <div className="fruity_info info clearfix">
                    <div className="info_img">
                        <img src="/img/fruity_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={closeInfo}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Fruity</h3>
                        <p>사과, 살구, 복숭아 등 citrus note를 제외한 과일 향조, 달콤하고 신선하며 대중에게 가장 친밀하고 가벼운 향기 주로 citrus, floral, green 노트와 함께 사용하기도 한다.</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
                <div className="green_info info clearfix">
                    <div className="info_img">
                        <img src="/img/green_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={closeInfo}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Green</h3>
                        <p>고요한 숲 속의 한 가운데에서 명상하는 듯한 기분을 주는 맑고 청량한 향, 심적 스트레스까지 씻어내는 은은하고 상쾌한 풀 내음이 주는 안정감</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
                <div className="woody_info info clearfix">
                    <div className="info_img">
                        <img src="/img/woody_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={closeInfo}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Woody</h3>
                        <p>'나무의, 우거진 숲의'라는 뜻을 지닌 우디의 말 그대로 녹음이 짙은 여름 숲의 상쾌함이 느껴지며, 낙엽이 물든 가을 숲의 중후함이 전해지기도 한다.</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
                <div className="musk_info info clearfix">
                    <div className="info_img">
                        <img src="/img/musk_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={closeInfo}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Musk</h3>
                        <p>사향노루 수컷의 생식선 부근 분비선에서 생성되는 유향물질, 일종의 사랑의 미약으로 은은한 살겹냄새가 나서 따뜻하고 포근한 느낌을 받을 수 있다.</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
            </div>
            <div className="perfume_collection">
                <div className="collection_title">
                    <img src="/img/perfume_collection_title.png" alt=""/>
                    <ul className="clearfix">
                        <li id="on" onClick={onBlockCitrus}>Citrus</li>
                        <li onClick={onBlockFloral}>Floral</li>
                        <li onClick={onBlockFruity}>Fruity</li>
                        <li onClick={onBlockGreen}>Green</li>
                        <li onClick={onBlockWoody}>Woody</li>
                        <li onClick={onBlockMusk}>Musk</li>
                    </ul>
                </div>
                <div className="collection_content">
                    <ul className="citrus clearfix">
                        <li>
                            <img src={citrus1.img} alt=""/>
                            <span>{citrus1.name}</span>
                            <p>{citrus1.description}</p>
                            <span>{citrus1.price}</span>
                        </li>
                        <li>
                            <img src={citrus2.img} alt=""/>
                            <span>{citrus2.name}</span>
                            <p>{citrus2.description}</p>
                            <span>{citrus2.price}</span>
                        </li>
                        <li>
                            <img src={citrus3.img} alt=""/>
                            <span>{citrus3.name}</span>
                            <p>{citrus3.description}</p>
                            <span>{citrus3.price}</span>
                        </li>
                        <li>
                            <img src={citrus4.img} alt=""/>
                            <span>{citrus4.name}</span>
                            <p>{citrus4.description}</p>
                            <span>{citrus4.price}</span>
                        </li>
                    </ul>
                    <ul className="floral clearfix">
                        <li>
                            <img src={floral1.img} alt=""/>
                            <span>{floral1.name}</span>
                            <p>{floral1.description}</p>
                            <span>{floral1.price}</span>
                        </li>
                        <li>
                            <img src={floral2.img} alt=""/>
                            <span>{floral2.name}</span>
                            <p>{floral2.description}</p>
                            <span>{floral2.price}</span>
                        </li>
                        <li>
                            <img src={floral3.img} alt=""/>
                            <span>{floral3.name}</span>
                            <p>{floral3.description}</p>
                            <span>{floral3.price}</span>
                        </li>
                        <li>
                            <img src={floral4.img} alt=""/>
                            <span>{floral4.name}</span>
                            <p>{floral4.description}</p>
                            <span>{floral4.price}</span>
                        </li>
                    </ul>
                    <ul className="fruity clearfix">
                        <li>
                            <img src={fruity1.img} alt=""/>
                            <span>{fruity1.name}</span>
                            <p>{fruity1.description}</p>
                            <span>{fruity1.price}</span>
                        </li>
                        <li>
                            <img src={fruity2.img} alt=""/>
                            <span>{fruity2.name}</span>
                            <p>{fruity2.description}</p>
                            <span>{fruity2.price}</span>
                        </li>
                        <li>
                            <img src={fruity3.img} alt=""/>
                            <span>{fruity3.name}</span>
                            <p>{fruity3.description}</p>
                            <span>{fruity3.price}</span>
                        </li>
                        <li>
                            <img src={fruity4.img} alt=""/>
                            <span>{fruity4.name}</span>
                            <p>{fruity4.description}</p>
                            <span>{fruity4.price}</span>
                        </li>
                    </ul>
                    <ul className="green clearfix">
                        <li>
                            <img src={green1.img} alt=""/>
                            <span>{green1.name}</span>
                            <p>{green1.description}</p>
                            <span>{green1.price}</span>
                        </li>
                        <li>
                            <img src={green2.img} alt=""/>
                            <span>{green2.name}</span>
                            <p>{green2.description}</p>
                            <span>{green2.price}</span>
                        </li>
                        <li>
                            <img src={green3.img} alt=""/>
                            <span>{green3.name}</span>
                            <p>{green3.description}</p>
                            <span>{green3.price}</span>
                        </li>
                        <li>
                            <img src={green4.img} alt=""/>
                            <span>{green4.name}</span>
                            <p>{green4.description}</p>
                            <span>{green4.price}</span>
                        </li>
                    </ul>
                    <ul className="woody clearfix">
                        <li>
                            <img src={woody1.img} alt=""/>
                            <span>{woody1.name}</span>
                            <p>{woody1.description}</p>
                            <span>{woody1.price}</span>
                        </li>
                        <li>
                            <img src={woody2.img} alt=""/>
                            <span>{woody2.name}</span>
                            <p>{woody2.description}</p>
                            <span>{woody2.price}</span>
                        </li>
                        <li>
                            <img src={woody3.img} alt=""/>
                            <span>{woody3.name}</span>
                            <p>{woody3.description}</p>
                            <span>{woody3.price}</span>
                        </li>
                        <li>
                            <img src={woody4.img} alt=""/>
                            <span>{woody4.name}</span>
                            <p>{woody4.description}</p>
                            <span>{woody4.price}</span>
                        </li>
                    </ul>
                    <ul className="musk clearfix">
                        <li>
                            <img src={musk1.img} alt=""/>
                            <span>{musk1.name}</span>
                            <p>{musk1.description}</p>
                            <span>{musk1.price}</span>
                        </li>
                        <li>
                            <img src={musk2.img} alt=""/>
                            <span>{musk2.name}</span>
                            <p>{musk2.description}</p>
                            <span>{musk2.price}</span>
                        </li>
                        <li>
                            <img src={musk3.img} alt=""/>
                            <span>{musk3.name}</span>
                            <p>{musk3.description}</p>
                            <span>{musk3.price}</span>
                        </li>
                        <li>
                            <img src={musk4.img} alt=""/>
                            <span>{musk4.name}</span>
                            <p>{musk4.description}</p>
                            <span>{musk4.price}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Signature;