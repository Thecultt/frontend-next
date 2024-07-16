'use client';

import React from 'react';
import imageCompression from 'browser-image-compression';

import { getClassNames } from '@/functions/getClassNames';

interface SellImagesBlockProps {
    number: number;

    image?: string;
    imageTitle?: string;
    imageDescription?: string;
    value?: string;
    disabled?: boolean;

    onChangeCustom: (result: any) => void;
}

const SellImagesBlock: React.FC<SellImagesBlockProps> = ({
    number,
    image,
    imageTitle,
    imageDescription,
    value,
    disabled,
    onChangeCustom,
}) => {
    const [isSending, setIsSending] = React.useState<boolean>(false);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setIsSending(true);

            const file = e.target.files[0];

            if (file && (file.name.includes('.HEIC') || file.name.includes('.heic'))) {
                const reader = new FileReader();

                const blobURL = URL.createObjectURL(file);
                const blobRes = await fetch(blobURL);
                const blob = await blobRes.blob();

                let conversionResult: any = blob;

                if (typeof window !== 'undefined') {
                    // eslint-disable-next-line @typescript-eslint/no-var-requires
                    const heic2any = require('heic2any');
                    conversionResult = await heic2any({
                        blob,
                        quality: 0.5,
                        toType: 'image/jpeg',
                    });
                }

                reader.onload = async () => {
                    onChangeCustom(reader.result);
                    setIsSending(false);
                };

                reader.readAsDataURL(conversionResult);
            } else {
                const reader = new FileReader();

                const options = {
                    maxSizeMB: 1,
                    maxWidthOrHeight: 1920,
                    useWebWorker: true,
                };

                try {
                    const compressedFile = await imageCompression(file, options);

                    reader.onload = async () => {
                        onChangeCustom(reader.result);
                        setIsSending(false);
                    };

                    reader.readAsDataURL(compressedFile);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };

    return (
        <label
            className={getClassNames('sell-block-images-block', {
                disabled: !!disabled,
                loading: isSending,
            })}
            style={{ width: image ? '100%' : 'calc(50% - 7.5px)' }}
        >
            <input type="file" className="file" accept=".png, .jpg, .jpeg, .heic" onChange={onChange} />

            <div
                className={getClassNames('sell-block-images-block-text', {
                    fill: !!value,
                })}
                style={{
                    width: image ? 'calc(50% - 5px)' : '100%',
                    ...(value ? { backgroundImage: `url("${value}")` } : {}),
                }}
            >
                {value ? <div className="sell-block-images-block-text-plaecholder"></div> : null}

                {isSending ? <span className="sell-block-images-block-text__loader"></span> : null}

                <div className="sell-block-images-block-text-icon">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.001 7.91406V30.0807"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.91504 19H30.0817"
                            stroke="#838383"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <rect x="1" y="1" width="36" height="36" rx="18" strokeWidth="2" />
                    </svg>
                </div>

                <p className="sell-block-images-block-text__title">Загрузить фотографию</p>
                <p className="sell-block-images-block-text__description">Фотография {number}</p>
            </div>

            {image ? (
                <div className="sell-block-images-block-cover" style={{ backgroundImage: `url("${image}")` }}>
                    <h5 className="sell-block-images-block-cover__title">{imageTitle}</h5>
                    <p className="sell-block-images-block-cover__description">{imageDescription}</p>
                </div>
            ) : null}
        </label>
    );
};

export default SellImagesBlock;
