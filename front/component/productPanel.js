import React from 'react'
import {useSelector} from 'react-redux'

const ProductPanel = () => {
    const products = useSelector(state=>state.memory);
    return(
        <>
            <ul className="clearfix memory1">
                <li>
                    <img src={products.juicy_shampoo.img} alt=""/>
                    <span>{products.juicy_shampoo.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.juicy_shampoo.price}</span>
                </li>
            </ul>
            <ul className="clearfix memory2">
                <li>
                    <img src={products.white_bouquet.img} alt=""/>
                    <span>{products.white_bouquet.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.white_bouquet.price}</span>
                </li>
                <li>
                    <img src={products.lilac.img} alt=""/>
                    <span>{products.lilac.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.lilac.price}</span>
                </li>
                <li>
                    <img src={products.magnolia.img} alt=""/>
                    <span>{products.magnolia.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.magnolia.price}</span>
                </li>
                <li>
                    <img src={products.tiger_lily.img} alt=""/>
                    <span>{products.tiger_lily.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.tiger_lily.price}</span>
                </li>
            </ul>
            <ul className="clearfix memory3">
                <li>
                    <img src={products.angel_food.img} alt=""/>
                    <span>{products.angel_food.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.angel_food.price}</span>
                </li>
                <li>
                    <img src={products.chocolate_chip_cookie.img} alt=""/>
                    <span>{products.chocolate_chip_cookie.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.chocolate_chip_cookie.price}</span>
                </li>
                <li>
                    <img src={products.cotton_candy.img}alt=""/>
                    <span>{products.cotton_candy.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.cotton_candy.price}</span>
                </li>
                <li>
                    <img src={products.between_the_sheets.img} alt=""/>
                    <span>{products.between_the_sheets.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.between_the_sheets.price}</span>
                </li>
                <li>
                    <img src={products.devils_food.img} alt=""/>
                    <span>{products.devils_food.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.devils_food.price}</span>
                </li>
                <li>
                    <img src={products.mojito.img} alt=""/>
                    <span>{products.mojito.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.mojito.price}</span>
                </li>
                <li>
                    <img src={products.chocolate_covered_cherry.img} alt=""/>
                    <span>{products.chocolate_covered_cherry.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.chocolate_covered_cherry.price}</span>
                </li>
                <li>
                    <img src={products.green_tea.img} alt=""/>
                    <span>{products.green_tea.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.green_tea.price}</span>
                </li>
            </ul>
            <ul className="clearfix memory4" style={{'display':'block'}}>
                <li>
                    <img src={products.fig_leaf.img} alt=""/>
                    <span>{products.fig_leaf.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.fig_leaf.price}</span>
                </li>
                <li>
                    <img src={products.wet_garden.img} alt=""/>
                    <span>{products.wet_garden.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.wet_garden.price}</span>
                </li>
                <li>
                    <img src={products.grass.img} alt=""/>
                    <span>{products.grass.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.grass.price}</span>
                </li>
                <li>
                    <img src={products.clover.img} alt=""/>
                    <span>{products.clover.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.clover.price}</span>
                </li>
                <li>
                    <img src={products.poison_ivy.img} alt=""/>
                    <span>{products.poison_ivy.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.poison_ivy.price}</span>
                </li>
                <li>
                    <img src={products.salt_air.img} alt=""/>
                    <span>{products.salt_air.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.salt_air.price}</span>
                </li>
                <li>
                    <img src={products.sugar_cane.img} alt=""/>
                    <span>{products.sugar_cane.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.sugar_cane.price}</span>
                </li>
                <li>
                    <img src={products.cypress.img} alt=""/>
                    <span>{products.cypress.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.cypress.price}</span>
                </li>
            </ul>
            <ul className="clearfix memory5">
                <li>
                    <img src={products.fuzzy_navel.img} alt=""/>
                    <span>{products.fuzzy_navel.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.fuzzy_navel.price}</span>
                </li>
                <li>
                    <img src={products.lime.img} alt=""/>
                    <span>{products.lime.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.lime.price}</span>
                </li>
                <li>
                    <img src={products.dragon_fruit.img} alt=""/>
                    <span>{products.dragon_fruit.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.dragon_fruit.price}</span>
                </li>
                <li>
                    <img src={products.tomato.img} alt=""/>
                    <span>{products.tomato.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.tomato.price}</span>
                </li>
                <li>
                    <img src={products.golden_delicious.img} alt=""/>
                    <span>{products.golden_delicious.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.golden_delicious.price}</span>
                </li>
                <li>
                    <img src={products.fresh_ginger.img} alt=""/>
                    <span>{products.fresh_ginger.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.fresh_ginger.price}</span>
                </li>
                <li>
                    <img src={products.papaya.img} alt=""/>
                    <span>{products.papaya.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.papaya.price}</span>
                </li>
            </ul>
            <ul className="clearfix memory6">
                <li>
                    <img src={products.hug_me.img} alt=""/>
                    <span>{products.hug_me.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.hug_me.price}</span>
                </li>
                <li>
                    <img src={products.kiss_me.img} alt=""/>
                    <span>{products.kiss_me.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.kiss_me.price}</span>
                </li>
                <li>
                    <img src={products.sweet_heart.img} alt=""/>
                    <span>{products.sweet_heart.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.sweet_heart.price}</span>
                </li>
            </ul>
            <ul className="clearfix memory7">
                <li>
                    <img src={products.moonbeam.img} alt=""/>
                    <span>{products.moonbeam.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.moonbeam.price}</span>
                </li>
                <li>
                    <img src={products.thunderstorm.img} alt=""/>
                    <span>{products.thunderstorm.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.thunderstorm.price}</span>
                </li>
            </ul>
            <ul className="clearfix memory8">
                <li>
                    <img src={products.funeral_home.img} alt=""/>
                    <span>{products.funeral_home.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.funeral_home.price}</span>
                </li>
                <li>
                    <img src={products.lava_rock.img} alt=""/>
                    <span>{products.lava_rock.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.lava_rock.price}</span>
                </li>
                <li>
                    <img src={products.red_soul.img} alt=""/>
                    <span>{products.red_soul.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.red_soul.price}</span>
                </li>
                <li>
                    <img src={products.new_zealand.img} alt=""/>
                    <span>{products.new_zealand.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.new_zealand.price}</span>
                </li>
                <li>
                    <img src={products.city_edition.img} alt=""/>
                    <span>{products.city_edition.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.city_edition.price}</span>
                </li>
                <li>
                    <img src={products.hawaiian_surf.img} alt=""/>
                    <span>{products.hawaiian_surf.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.hawaiian_surf.price}</span>
                </li>
                <li>
                    <img src={products.blue_hawaiian.img} alt=""/>
                    <span>{products.blue_hawaiian.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.blue_hawaiian.price}</span>
                </li>
            </ul>
            <ul className="clearfix memory9">
                <li>
                    <img src={products.crayon.img} alt=""/>
                    <span>{products.crayon.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.crayon.price}</span>
                </li>
                <li>
                    <img src={products.green_house.img} alt=""/>
                    <span>{products.green_house.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.green_house.price}</span>
                </li>
                <li>
                    <img src={products.clean_windows.img} alt=""/>
                    <span>{products.clean_windows.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.clean_windows.price}</span>
                </li>
                <li>
                    <img src={products.paperback.img} alt=""/>
                    <span>{products.paperback.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.paperback.price}</span>
                </li>
                <li>
                    <img src={products.vinyl.img} alt=""/>
                    <span>{products.vinyl.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.vinyl.price}</span>
                </li>
                <li>
                    <img src={products.paint.img} alt=""/>
                    <span>{products.paint.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.paint.price}</span>
                </li>
                <li>
                    <img src={products.mildew.img} alt=""/>
                    <span>{products.mildew.name}</span>
                    <p>픽미업 코롱향수</p>
                    <span>{products.mildew.price}</span>
                </li>
            </ul>
        </>
    );
};

export default ProductPanel;