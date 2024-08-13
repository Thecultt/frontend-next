import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from '@/constants/styles';
import { getClassNames } from '@/functions/getClassNames';

import ConciergeMainImage from '@/assets/images/concierge/concierge-main.jpg';

interface Props {
	scrollToForm: () => void;
}

const ConciergeMainBanner: React.FC<Props> = ({ scrollToForm }) => {
	const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

	return (
		<div
			className="concierge-main"
			style={{
				backgroundImage: `url("${isMobile ? ConciergeMainImage.src : ''}")`,
			}}
		>
			<div className="concierge-main-text">
				<h2 className="title mb concierge-main-text__title">Вы выберете, мы доставим</h2>
				<p className="description concierge-main-text__description">
					Консьерж-сервис THE CULTT доставит для вас из&nbsp;Европы и&nbsp;США любые позиции с&nbsp;официальных сайтов Herm&egrave;s, Chanel, Cartier, Panerai и&nbsp;других культовых брендов.
				</p>
				<button
					className={getClassNames('concierge-main-text__btn', {
						btn: !isMobile,
						'btn-light': isMobile,
					})}
					onClick={scrollToForm}
				>
					Заказать сейчас
				</button >
			</div >

			<div
				className="concierge-main-image"
				style={{
					backgroundImage: `url("${!isMobile ? ConciergeMainImage.src : ''}")`,
				}}
			></div >
		</div >
	);
};

export default ConciergeMainBanner;
