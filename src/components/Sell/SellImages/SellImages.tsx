import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CabinetSellTypes, CabinetSellStepKeys } from '@/redux/types/ICabinetSell';
import { setCabinetSellCurrentStep, sendCreateCabinetSellImage } from '@/redux/actions/cabinet_sell';
import { SellBackBtn, SellImagesBlock } from '@/components';
import { getClassNames } from '@/functions/getClassNames';

import SellImagesImageBag1 from '@/assets/images/sell/sell-images-image-bag-1.jpg';
import SellImagesImageBag2 from '@/assets/images/sell/sell-images-image-bag-2.jpg';
import SellImagesImageBag3 from '@/assets/images/sell/sell-images-image-bag-3.jpg';
import SellImagesImageBag4 from '@/assets/images/sell/sell-images-image-bag-4.jpg';

import SellImagesImageShoes1 from '@/assets/images/sell/sell-images-image-shoes-1.jpg';
import SellImagesImageShoes2 from '@/assets/images/sell/sell-images-image-shoes-2.jpg';
import SellImagesImageShoes3 from '@/assets/images/sell/sell-images-image-shoes-3.jpg';
import SellImagesImageShoes4 from '@/assets/images/sell/sell-images-image-shoes-4.jpg';

import SellImagesImageAccess1 from '@/assets/images/sell/sell-images-image-access-1.jpg';
import SellImagesImageAccess2 from '@/assets/images/sell/sell-images-image-access-2.jpg';
import SellImagesImageAccess3 from '@/assets/images/sell/sell-images-image-access-3.jpg';
import SellImagesImageAccess4 from '@/assets/images/sell/sell-images-image-access-4.jpg';

import SellImagesImageJewerly1 from '@/assets/images/sell/sell-images-image-jewerly-1.jpg';
import SellImagesImageJewerly2 from '@/assets/images/sell/sell-images-image-jewerly-2.jpg';
import SellImagesImageJewerly3 from '@/assets/images/sell/sell-images-image-jewerly-3.jpg';
import SellImagesImageJewerly4 from '@/assets/images/sell/sell-images-image-jewerly-4.jpg';

import SellImagesImageHat1 from '@/assets/images/sell/sell-images-image-hat-1.jpg';
import SellImagesImageHat2 from '@/assets/images/sell/sell-images-image-hat-2.jpg';
import SellImagesImageHat3 from '@/assets/images/sell/sell-images-image-hat-3.jpg';
import SellImagesImageHat4 from '@/assets/images/sell/sell-images-image-hat-4.jpg';

import SellImagesImageBelt1 from '@/assets/images/sell/sell-images-image-belt-1.jpg';
import SellImagesImageBelt2 from '@/assets/images/sell/sell-images-image-belt-2.jpg';
import SellImagesImageBelt3 from '@/assets/images/sell/sell-images-image-belt-3.jpg';
import SellImagesImageBelt4 from '@/assets/images/sell/sell-images-image-belt-4.jpg';

import SellImagesImageClock1 from '@/assets/images/sell/sell-images-image-clock-1.jpg';
import SellImagesImageClock2 from '@/assets/images/sell/sell-images-image-clock-2.jpg';
import SellImagesImageClock3 from '@/assets/images/sell/sell-images-image-clock-3.jpg';
import SellImagesImageClock4 from '@/assets/images/sell/sell-images-image-clock-4.jpg';

import SellImagesImageHand1 from '@/assets/images/sell/sell-images-image-hand-1.jpg';
import SellImagesImageHand2 from '@/assets/images/sell/sell-images-image-hand-2.jpg';
import SellImagesImageHand3 from '@/assets/images/sell/sell-images-image-hand-3.jpg';
import SellImagesImageHand4 from '@/assets/images/sell/sell-images-image-hand-4.jpg';

const SellImages: React.FC = () => {
    const dispatch = useDispatch();

    const category = localStorage.getItem('sell-info-global-category');

    const { currentType } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);

    const [imageBlocksValue, setImageBlocksValue] = React.useState<{
        [key: string]: string;
    }>(localStorage.getItem('sell-images-form') ? JSON.parse(localStorage.getItem('sell-images-form') as any) : {});

    const imageBlocksBag: {
        image?: string;
        imageTitle?: string;
        imageDescription?: string;
        isMore?: any;
    }[] = [
        {
            image: SellImagesImageBag1.src,
            imageTitle: 'Лицевая сторона',
            imageDescription: 'Сфотографируйте сумку спереди при дневном свете',
        },

        {
            image: SellImagesImageBag2.src,
            imageTitle: 'Внутри',
            imageDescription: 'Сфотографируйте внутреннее пространство сумки',
        },

        {
            image: SellImagesImageBag3.src,
            imageTitle: 'Нюансы',
            imageDescription: 'Сфотографируйте наиболее ярко выраженные нюансы',
        },

        {
            image: SellImagesImageBag4.src,
            imageTitle: 'Размер',
            imageDescription: 'Cфотографируйте сумку на себе, чтобы был понятен размер',
        },
        {
            isMore: true,
        },
        {
            isMore: true,
        },
    ];

    const imageBlocksShoes: {
        image?: string;
        imageTitle?: string;
        imageDescription?: string;
        isMore?: any;
    }[] = [
        {
            image: SellImagesImageShoes1.src,
            imageTitle: 'Передняя часть',
            imageDescription: 'Сфотографируйте пару сверху при дневном свете',
        },

        {
            image: SellImagesImageShoes2.src,
            imageTitle: 'Нюансы',
            imageDescription: 'Сфотографируйте внутреннее пространство сумки',
        },

        {
            image: SellImagesImageShoes3.src,
            imageTitle: 'Подошва',
            imageDescription: 'Сфотографируйте подошвы обеих частей сверху',
        },

        {
            image: SellImagesImageShoes4.src,
            imageTitle: 'Комплект',
            imageDescription: 'Сфотографируйте пару рядом с полным комплектом (коробка, пыльник)',
        },
        {
            isMore: true,
        },
        {
            isMore: true,
        },
    ];

    const imageBlocksAccess: {
        image?: string;
        imageTitle?: string;
        imageDescription?: string;
        isMore?: any;
    }[] = [
        {
            image: SellImagesImageAccess1.src,
            imageTitle: 'Сверху',
            imageDescription: 'Сфотографируйте аксессуар сверху при дневном свете',
        },

        {
            image: SellImagesImageAccess2.src,
            imageTitle: 'Вблизи',
            imageDescription: 'Сфотографируйте аксессуар вблизи, подчеркивая бренд или нюансы',
        },

        {
            image: SellImagesImageAccess3.src,
            imageTitle: 'Размер',
            imageDescription: 'Сфотографируйте аксессуар на себе, чтобы был понятен размер',
        },

        {
            image: SellImagesImageAccess4.src,
            imageTitle: 'Комплект',
            imageDescription: 'Сфотографируйте аксесуар на фоне полного комплекта (коробка/чехол)',
        },
        {
            isMore: true,
        },
        {
            isMore: true,
        },
    ];

    const imageBlocksJewerly: {
        image?: string;
        imageTitle?: string;
        imageDescription?: string;
        isMore?: any;
    }[] = [
        {
            image: SellImagesImageJewerly1.src,
            imageTitle: 'Сверху',
            imageDescription: 'Сфотографируйте аксессуар сверху при дневном свете',
        },

        {
            image: SellImagesImageJewerly2.src,
            imageTitle: 'Вблизи',
            imageDescription: 'Сфотографируйте аксессуар вблизи, подчеркивая бренд или нюансы',
        },

        {
            image: SellImagesImageJewerly3.src,
            imageTitle: 'Размер',
            imageDescription: 'Сфотографируйте аксессуар на себе, чтобы был понятен размер',
        },

        {
            image: SellImagesImageJewerly4.src,
            imageTitle: 'Комплект',
            imageDescription: 'Сфотографируйте аксесуар на фоне полного комплекта (коробка/чехол)',
        },
        {
            isMore: true,
        },
        {
            isMore: true,
        },
    ];

    const imageBlocksHat: {
        image?: string;
        imageTitle?: string;
        imageDescription?: string;
        isMore?: any;
    }[] = [
        {
            image: SellImagesImageHat1.src,
            imageTitle: 'Сверху',
            imageDescription: 'Сфотографируйте аксессуар сверху при дневном свете',
        },

        {
            image: SellImagesImageHat2.src,
            imageTitle: 'Вблизи',
            imageDescription: 'Сфотографируйте аксессуар вблизи, подчеркивая бренд или нюансы',
        },

        {
            image: SellImagesImageHat3.src,
            imageTitle: 'Размер',
            imageDescription: 'Сфотографируйте аксессуар на себе, чтобы был понятен размер',
        },

        {
            image: SellImagesImageHat4.src,
            imageTitle: 'Комплект',
            imageDescription: 'Сфотографируйте аксесуар на фоне полного комплекта (коробка/чехол)',
        },
        {
            isMore: true,
        },
        {
            isMore: true,
        },
    ];

    const imageBlocksBelt: {
        image?: string;
        imageTitle?: string;
        imageDescription?: string;
        isMore?: any;
    }[] = [
        {
            image: SellImagesImageBelt1.src,
            imageTitle: 'Сверху',
            imageDescription: 'Сфотографируйте аксессуар сверху при дневном свете',
        },

        {
            image: SellImagesImageBelt2.src,
            imageTitle: 'Вблизи',
            imageDescription: 'Сфотографируйте аксессуар вблизи, подчеркивая бренд или нюансы',
        },

        {
            image: SellImagesImageBelt3.src,
            imageTitle: 'Размер',
            imageDescription: 'Сфотографируйте аксессуар на себе, чтобы был понятен размер',
        },

        {
            image: SellImagesImageBelt4.src,
            imageTitle: 'Комплект',
            imageDescription: 'Сфотографируйте аксесуар на фоне полного комплекта (коробка/чехол)',
        },
        {
            isMore: true,
        },
        {
            isMore: true,
        },
    ];

    const imageBlocksClock: {
        image?: string;
        imageTitle?: string;
        imageDescription?: string;
        isMore?: any;
    }[] = [
        {
            image: SellImagesImageClock1.src,
            imageTitle: 'Сверху',
            imageDescription: 'Сфотографируйте аксессуар сверху при дневном свете',
        },

        {
            image: SellImagesImageClock2.src,
            imageTitle: 'Вблизи',
            imageDescription: 'Сфотографируйте аксессуар вблизи, подчеркивая бренд или нюансы',
        },

        {
            image: SellImagesImageClock3.src,
            imageTitle: 'Размер',
            imageDescription: 'Сфотографируйте аксессуар на себе, чтобы был понятен размер',
        },

        {
            image: SellImagesImageClock4.src,
            imageTitle: 'Комплект',
            imageDescription: 'Сфотографируйте аксесуар на фоне полного комплекта (коробка/чехол)',
        },
        {
            isMore: true,
        },
        {
            isMore: true,
        },
    ];

    const imageBlocksHand: {
        image?: string;
        imageTitle?: string;
        imageDescription?: string;
        isMore?: any;
    }[] = [
        {
            image: SellImagesImageHand1.src,
            imageTitle: 'Сверху',
            imageDescription: 'Сфотографируйте аксессуар сверху при дневном свете',
        },

        {
            image: SellImagesImageHand2.src,
            imageTitle: 'Вблизи',
            imageDescription: 'Сфотографируйте аксессуар вблизи, подчеркивая бренд или нюансы',
        },

        {
            image: SellImagesImageHand3.src,
            imageTitle: 'Размер',
            imageDescription: 'Сфотографируйте аксессуар на себе, чтобы был понятен размер',
        },

        {
            image: SellImagesImageHand4.src,
            imageTitle: 'Комплект',
            imageDescription: 'Сфотографируйте аксесуар на фоне полного комплекта (коробка/чехол)',
        },
        {
            isMore: true,
        },
        {
            isMore: true,
        },
    ];

    const onChangeCustom = async (result: any, index: number) => {
        const image = await sendCreateCabinetSellImage(result);

        setImageBlocksValue({ ...imageBlocksValue, [index]: image });
    };

    const isValid = () => {
        if (category === 'Женские сумки' || category === 'Мужские сумки')
            return Object.keys(imageBlocksValue).length >= imageBlocksBag.filter((image) => !image.isMore).length;
        if (category === 'Обувь')
            return Object.keys(imageBlocksValue).length >= imageBlocksShoes.filter((image) => !image.isMore).length;
        if (category === 'Очки' || category === 'Другой аксессуар')
            return Object.keys(imageBlocksValue).length >= imageBlocksAccess.filter((image) => !image.isMore).length;
        if (category === 'Украшения')
            return Object.keys(imageBlocksValue).length >= imageBlocksJewerly.filter((image) => !image.isMore).length;
        if (category === 'Головные уборы')
            return Object.keys(imageBlocksValue).length >= imageBlocksHat.filter((image) => !image.isMore).length;
        if (category === 'Ремни')
            return Object.keys(imageBlocksValue).length >= imageBlocksBelt.filter((image) => !image.isMore).length;
        if (category === 'Часы')
            return Object.keys(imageBlocksValue).length >= imageBlocksClock.filter((image) => !image.isMore).length;
        if (category === 'Платки и шарфы')
            return Object.keys(imageBlocksValue).length >= imageBlocksHand.filter((image) => !image.isMore).length;

        return false;
    };

    const onSubmit = () => {
        localStorage.setItem('sell-images-form', JSON.stringify(imageBlocksValue));

        window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window?.dataLayer?.push({
            event: 'photo_complete',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
            },
        });

        dispatch(
            setCabinetSellCurrentStep(
                currentType === CabinetSellTypes.EXCHANGE ? CabinetSellStepKeys.PRODUCT : CabinetSellStepKeys.CONTACT,
            ),
        );
    };

    return (
        <div className="sell-block sell-block-images">
            <SellBackBtn onClick={() => dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.INFO))} />

            <h3 className="sell-block__title">Загрузка фотографий</h3>
            <p className="sell-block__subtitle">Загрузите 4 фотографии вашего товара согласно примерам ниже</p>

            <div className="sell-block-images-block-wrapper">
                {category === 'Женские сумки' || category === 'Мужские сумки'
                    ? imageBlocksBag.map((block, index) => (
                          <SellImagesBlock
                              {...block}
                              number={index + 1}
                              key={`sell-block-images-block-${index}`}
                              value={imageBlocksValue[index]}
                              onChangeCustom={(result: any) => onChangeCustom(result, index)}
                              disabled={block.isMore ? !isValid() : false}
                          />
                      ))
                    : null}

                {category === 'Обувь'
                    ? imageBlocksShoes.map((block, index) => (
                          <SellImagesBlock
                              {...block}
                              number={index + 1}
                              key={`sell-block-images-block-${index}`}
                              value={imageBlocksValue[index]}
                              onChangeCustom={(result: any) => onChangeCustom(result, index)}
                              disabled={block.isMore ? !isValid() : false}
                          />
                      ))
                    : null}

                {category === 'Очки' || category === 'Другой аксессуар'
                    ? imageBlocksAccess.map((block, index) => (
                          <SellImagesBlock
                              {...block}
                              number={index + 1}
                              key={`sell-block-images-block-${index}`}
                              value={imageBlocksValue[index]}
                              onChangeCustom={(result: any) => onChangeCustom(result, index)}
                              disabled={block.isMore ? !isValid() : false}
                          />
                      ))
                    : null}

                {category === 'Украшения'
                    ? imageBlocksJewerly.map((block, index) => (
                          <SellImagesBlock
                              {...block}
                              number={index + 1}
                              key={`sell-block-images-block-${index}`}
                              value={imageBlocksValue[index]}
                              onChangeCustom={(result: any) => onChangeCustom(result, index)}
                              disabled={block.isMore ? !isValid() : false}
                          />
                      ))
                    : null}

                {category === 'Головные уборы'
                    ? imageBlocksHat.map((block, index) => (
                          <SellImagesBlock
                              {...block}
                              number={index + 1}
                              key={`sell-block-images-block-${index}`}
                              value={imageBlocksValue[index]}
                              onChangeCustom={(result: any) => onChangeCustom(result, index)}
                              disabled={block.isMore ? !isValid() : false}
                          />
                      ))
                    : null}

                {category === 'Ремни'
                    ? imageBlocksBelt.map((block, index) => (
                          <SellImagesBlock
                              {...block}
                              number={index + 1}
                              key={`sell-block-images-block-${index}`}
                              value={imageBlocksValue[index]}
                              onChangeCustom={(result: any) => onChangeCustom(result, index)}
                              disabled={block.isMore ? !isValid() : false}
                          />
                      ))
                    : null}

                {category === 'Часы'
                    ? imageBlocksClock.map((block, index) => (
                          <SellImagesBlock
                              {...block}
                              number={index + 1}
                              key={`sell-block-images-block-${index}`}
                              value={imageBlocksValue[index]}
                              onChangeCustom={(result: any) => onChangeCustom(result, index)}
                              disabled={block.isMore ? !isValid() : false}
                          />
                      ))
                    : null}

                {category === 'Платки и шарфы'
                    ? imageBlocksHand.map((block, index) => (
                          <SellImagesBlock
                              {...block}
                              number={index + 1}
                              key={`sell-block-images-block-${index}`}
                              value={imageBlocksValue[index]}
                              onChangeCustom={(result: any) => onChangeCustom(result, index)}
                              disabled={block.isMore ? !isValid() : false}
                          />
                      ))
                    : null}

                <button
                    className={getClassNames('btn sell-block__btn', {
                        disabled: !isValid(),
                    })}
                    disabled={!isValid()}
                    onClick={onSubmit}
                >
                    Продолжить
                </button>
            </div>
        </div>
    );
};

export default SellImages;
