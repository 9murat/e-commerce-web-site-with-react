import React from 'react'
import Slider from 'react-slick';

export default function SliderPage() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='slider-container'>
            <Slider {...settings} className='slider-page'>
                <div className='content-container'>
                    <div className='explanation-container'>
                        <h1 className='slider-content-header'>The Best Shoes Are Here</h1>
                        <div className='slider-content-body'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nostrum, voluptates excepturi laboriosam itaque vel delectus perspiciatis ad odit repellat similique eos enim ipsum sapiente veritatis, harum labore reiciendis quas.</div>
                        <div className='review-btn'>Review</div>
                    </div>
                    <div className='image-container'>
                        < img src="https://witcdn.lufian.com/tommy-erkek-deri-sneaker-ayakkabi-siyah-sneaker-lufian-290777-67-B.jpg" alt="Resim Yok" className='slider-image first' />
                    </div>
                </div>
                <div className='content-container'>
                    <div className='explanation-container'>
                        <h1 className='slider-content-header'>The Best Shoes Are Here</h1>
                        <div className='slider-content-body'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nostrum, voluptates excepturi laboriosam itaque vel delectus perspiciatis ad odit repellat similique eos enim ipsum sapiente veritatis, harum labore reiciendis quas.</div>
                        <div className='review-btn'>Review</div>
                    </div>
                    <div className='image-container'>
                        <img src="https://static.ticimax.cloud/12157/uploads/urunresimleri/thumb/kadin-keten-spor-ayakkabi-siyah-beyaz-32-956.jpg" alt="" className='slider-image second' />
                    </div>
                </div>
                <div className='content-container'>
                    <div className='explanation-container'>
                        <h1 className='slider-content-header'>The Best Shoes Are Here</h1>
                        <div className='slider-content-body'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nostrum, voluptates excepturi laboriosam itaque vel delectus perspiciatis ad odit repellat similique eos enim ipsum sapiente veritatis, harum labore reiciendis quas.</div>
                        <div className='review-btn'>Review</div>
                    </div>
                    <div className='image-container'>
                        <img src="https://static.ticimax.cloud/4183/uploads/urunresimleri/buyuk/beyaz-spor-ayakkabi-f-4ba9.jpg" alt="" className='slider-image third' />
                    </div>

                </div>
            </Slider>
        </div>
    )
}
