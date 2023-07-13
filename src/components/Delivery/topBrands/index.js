import React from 'react';
import "./topBrands.css";
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';

const topBrandsList = [
    {
        id: 1,
        time: "35min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611376239.png?output-format=webp'
    },
    {
        id: 2,
        time: "15min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/3bd971b1a5783e208a9782c3604fa9f3_1601885754.png?output-format=webp'
    },
    {
        id: 3,
        time: "30min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/d26cedd52fc09c7a72174a36340a4a6e_1573638778.png?output-format=webp'
    },
    {
        id: 4,
        time: "19min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/4d016eeff686a88becd56bba073f18cd_1605111085.png?output-format=webp'
    },
    {
        id: 5,
        time: "12min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp'
    },
    {
        id: 6,
        time: "26min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/0619ae0b489d44dd3562538f7768e48a_1658818124.png?output-format=webp'
    },
    {
        id: 7,
        time: "26min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187636.png?output-format=webp'
    },
    {
        id: 8,
        time: "26min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/e47dec3eb2950cde399b62b48c5645f6_1675832544.png?output-format=webp'
    },
    {
        id: 9,
        time: "26min",
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/03599494c6aa23782f85b9dc127548d8_1605092896.png?output-format=webp'
    },
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
            <div className='collection-title'>Top brands for you</div>
            <Slider {...settings}>
                {topBrandsList.map((brand) => {
                    return (
                        <div>
                            <div className='top-brands-cover'>
                                <img src={brand.cover} className='top-brands-image' alt={brand.time} />
                            </div>
                        </div>
                    )
                })}
            </Slider>

        </div>
    )
}

export default TopBrands;
