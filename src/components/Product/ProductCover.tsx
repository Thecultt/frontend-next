import React from 'react';
import Slider from 'react-slick';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { getClassNames } from '@/functions/getClassNames';

interface ProductCoverProps {
    images: string[];
}

const ProductCover: React.FC<ProductCoverProps> = ({ images }) => {
    const [currentIndexImage, setCurrentIndexImage] = React.useState<number>(0);

    const SourceRef = React.useRef<any>(null);
    const TargetRef = React.useRef<any>(null);
    const ContainerRef = React.useRef<any>(null);
    const SliderSwiperRef = React.useRef<any>(null);

    const [isStartSlider, setIsStartSlider] = React.useState<boolean>(false);
    const [isEndSlider, setIsEndSlider] = React.useState<boolean>(false);

    const [isZoom, setIsZoom] = React.useState<boolean>(false);
    const [offset, setOffset] = React.useState<{ left: number; top: number }>({
        left: 0,
        top: 0,
    });

    const onClickNext = () => {
        if (currentIndexImage + 1 < images.length) {
            setCurrentIndexImage(currentIndexImage + 1);
        } else {
            setCurrentIndexImage(0);
            // SliderSwiperRef.current?.scrollBy(0)
        }

        if (currentIndexImage > 3) {
            onClickSwiperNext();
        }
    };

    const onClickPrev = () => {
        if (currentIndexImage > 0) {
            setCurrentIndexImage(currentIndexImage - 1);
        } else {
            setCurrentIndexImage(currentIndexImage - 1);
        }
    };

    const SliderRef = React.useRef<any>(null);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    const handleMouseEnter = () => {
        setIsZoom(true);
    };

    const handleMouseLeave = () => {
        setIsZoom(false);
    };

    const handleMouseMove = (e: any) => {
        const targetRect = TargetRef.current.getBoundingClientRect();
        const sourceRect = SourceRef.current.getBoundingClientRect();
        const containerRect = ContainerRef.current.getBoundingClientRect();

        const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
        const yRatio = (targetRect.height - containerRect.height) / sourceRect.height;

        const left = Math.max(Math.min(e.pageX - sourceRect.left, sourceRect.width), 0);
        const top = Math.max(Math.min(e.pageY - sourceRect.top, sourceRect.height), 0);

        setOffset({
            left: left * -xRatio,
            top: top * -yRatio,
        });
    };

    const onClickSwiperNext = () => {
        SliderSwiperRef.current?.slideNext();
    };

    const onClickSwiperPrev = () => {
        SliderSwiperRef.current?.slidePrev();
    };

    return (
        <>
            <div className="product-content-cover">
                <div className="product-content-cover-list-wrapper">
                    {!isStartSlider ? (
                        <button className="product-content-cover-list__nav top" onClick={onClickSwiperPrev}>
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="29.3999"
                                    width="29.4"
                                    height="29.4"
                                    rx="14.7"
                                    transform="rotate(90 29.3999 0)"
                                    fill="#F7F4F0"
                                />
                                <path d="M18.3491 16.5L13.8491 12.5L9.34912 16.5" fill="#F7F4F0" />
                                <path
                                    d="M18.3491 16.5L13.8491 12.5L9.34912 16.5"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    ) : null}

                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={5}
                        spaceBetween={10}
                        direction="vertical"
                        freeMode={true}
                        autoHeight={true}
                        onBeforeInit={(swiper: any) => {
                            SliderSwiperRef.current = swiper;
                        }}
                        className="product-content-cover-list"
                        onProgress={(e: any) => {
                            setIsStartSlider(e.isBeginning);
                            setIsEndSlider(e.isEnd);
                        }}
                        ref={SliderSwiperRef}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={`product-content-cover-list-item-${index}`}>
                                <div
                                    className={getClassNames('product-content-cover-list-item', {
                                        active: currentIndexImage === index,
                                    })}
                                    style={{
                                        backgroundImage: `url("${image}")`,
                                    }}
                                    onMouseEnter={() => setCurrentIndexImage(index)}
                                ></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {!isEndSlider ? (
                        <button className="product-content-cover-list__nav bottom" onClick={onClickSwiperNext}>
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    y="29.3984"
                                    width="29.4"
                                    height="29.4"
                                    rx="14.7"
                                    transform="rotate(-90 0 29.3984)"
                                    fill="#F7F4F0"
                                />
                                <path d="M11.0508 12.8984L15.5508 16.8984L20.0508 12.8984" fill="#F7F4F0" />
                                <path
                                    d="M11.0508 12.8984L15.5508 16.8984L20.0508 12.8984"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    ) : null}
                </div>

                <div className="product-content-cover-main-global-wrapper" ref={ContainerRef}>
                    <div
                        className="product-content-cover-main-wrapper"
                        onMouseEnter={handleMouseEnter}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            cursor: isZoom ? 'crosshair' : 'auto',
                        }}
                    >
                        <img
                            src={images[currentIndexImage]}
                            alt=""
                            className="product-content-cover-main__zoom"
                            ref={TargetRef}
                            style={{
                                display: 'block',
                                opacity: isZoom ? '1' : '0',
                                top: `${offset.top}px`,
                                left: `${offset.left}px`,
                            }}
                        />

                        <div
                            className="product-content-cover-main"
                            ref={SourceRef}
                            style={{
                                backgroundImage: `url("${images[currentIndexImage]}")`,
                            }}
                        ></div>
                    </div>

                    <div className="product-content-cover-main-nav">
                        <button className="product-content-cover-main-nav__item prev" onClick={onClickPrev}>
                            <svg
                                width="37"
                                height="36"
                                viewBox="0 0 37 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="0.25" width="36" height="36" rx="18" fill="#F7F4F0" />
                                <path d="M20.5 11.6094L14.9998 17.5227L20.5 23.4361" fill="#F7F4F0" />
                                <path
                                    d="M20.5 11.6094L14.9998 17.5227L20.5 23.4361"
                                    stroke="#838383"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button className="product-content-cover-main-nav__item next" onClick={onClickNext}>
                            <svg
                                width="37"
                                height="36"
                                viewBox="0 0 37 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="0.890625" width="36" height="36" rx="18" fill="#F7F4F0" />
                                <path d="M16.0039 23.4375L21.5041 17.5242L16.0039 11.6108" fill="#F7F4F0" />
                                <path
                                    d="M16.0039 23.4375L21.5041 17.5242L16.0039 11.6108"
                                    stroke="#838383"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="product-content-cover-media">
                <Slider {...settings} className="product-content-cover-media-slider" ref={SliderRef}>
                    {images.map((image, index) => (
                        <div
                            className="product-content-cover-media-slider-image-wrapper"
                            key={`product-content-cover-media-slider-image-${index}`}
                        >
                            <div
                                className="product-content-cover-media-slider-image"
                                style={{ backgroundImage: `url("${image}")` }}
                            ></div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default ProductCover;
