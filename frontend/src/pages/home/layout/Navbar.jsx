import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { categories } from '~/data/categories';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const sliderSettings = {
        variableWidth: true,
        infinite: false,
        slidesToShow: categories.length >= 10 ? 10 : categories.length,
        slidesToScroll: 2,
        speed: 1000,
        responsive: [
                {
                        breakpoint: 1100,
                        settings: {
                                slidesToShow: categories.length >= 8 ? 8 : categories.length,
                                slidesToScroll: 5,
                        }
                },
                {
                        breakpoint: 900,
                        settings: {
                                slidesToShow: categories.length >= 6 ? 6 : categories.length,
                                slidesToScroll: 6,
                        }
                },
                {
                        breakpoint: 600,
                        settings: {
                                slidesToShow: categories.length >= 4 ? 4 : categories.length,
                                slidesToScroll: 6,
                        }
                }
        ],
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />,

}


const Navbar = () => {
        return (

                <div className='md:flex px-5 bg-white float justify-between items-center shadow-lg '>
                        <div className='hidden md:inline-flex items-center gap-5 text-sm text-gray-500'>
                                <span className='py-4 cursor-pointer hover:text-black border-b-2 border-transparent hover:border-black'><Link to="/">Editorial</Link></span>
                                <span className='py-4 cursor-pointer hover:text-black border-b-2 border-transparent hover:border-black'>Following</span>
                        </div>
                        <div className='hidden md:inline-block mx-5 '>
                                <div className='w-[0.8px] h-8 bg-gray-300'></div>
                        </div>
                        <div className='block overflow-hidden'>
                                <Slider {...sliderSettings}>
                                        {
                                                categories.map((cate, i) => (
                                                        <React.Fragment key={i}>
                                                                <div
                                                                        className={`${cate?.mobile && 'md:hidden'} mr-5 py-4 text-sm text-gray-500 cursor-pointer hover:text-black border-b-2 border-transparent hover:border-black`}
                                                                >
                                                                        <Link to={cate.path}>
                                                                                {cate.name}
                                                                        </Link>
                                                                </div>
                                                        </React.Fragment>
                                                ))
                                        }
                                </Slider>
                        </div>

                </div>

        )
}

export default Navbar


function PreviousArrow(props) {
        const { className, onClick, currentSlide } = props;

        return (
                <>
                        {currentSlide !== 0 && (
                                <div className={className} onClick={onClick} style={{ display: 'flex', alignItems: 'center', left: '0', zIndex: '10' }} >
                                        <button type='button' className='bg-white'>
                                                <ArrowBackIos style={{ color: 'black', fontSize: '15px' }} />
                                        </button>
                                </div>
                        )}
                </>
        );
}

function NextArrow(props) {
        const { className, onClick, currentSlide, slideCount } = props;

        return (
                <>
                        {slideCount - currentSlide > sliderSettings.slidesToShow && (
                                <div className={className} onClick={onClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', right: '0', zIndex: '10' }}>
                                        <button type='button' className='bg-white'>
                                                <ArrowForwardIos style={{ color: 'black', fontSize: '15px' }} />
                                        </button>
                                </div>
                        )}
                </>
        );
}