import React from 'react';
import Link from 'next/link';

import { ISelection } from '@/models/ISelection';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';

import './styles.sass';

interface Props {
    data: ISelection;
}

export const SelectionSliderCard: React.FC<Props> = ({ data }) => {
    const { id, title, background_image } = data;

    return (
        <Link
            href={getCatalogFiltersUrl({
                selection: id,
                sort: 'popular',
            })}
            className="selection-slider-card"
        >
            <div className="selection-slider-card__cover">
                {!!background_image && !!title && (
                    <img src={background_image} className="selection-slider-card__image" alt={title} />
                )}
            </div>
            <h3 className="selection-slider-card__title">{title}</h3>
        </Link>
    );
};
