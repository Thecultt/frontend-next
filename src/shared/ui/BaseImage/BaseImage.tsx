'use client';

import React from 'react';
import { default as Image, type ImageProps } from 'next/image';

import { getClassNames } from '@/functions/getClassNames';

interface Props extends ImageProps {
    cover?: boolean;
}

export const BaseImage: React.FC<Props> = ({
    alt,
    priority,
    className = '',
    fill = true,
    placeholder = 'empty',
    sizes = '100%',
    loading = 'lazy',
    draggable = false,
    cover = false,
    quality = 90,
    ...props
}) => (
    <div
        className={getClassNames('base-image', {
            'base-image--cover': cover,
            [className]: !!className,
        })}
    >
        <Image
            className="base-image__img"
            alt={alt}
            draggable={draggable}
            fill={fill}
            loading={priority ? 'eager' : loading}
            priority={priority}
            sizes={sizes}
            placeholder={placeholder}
            quality={quality}
            {...props}
        />
    </div>
);
