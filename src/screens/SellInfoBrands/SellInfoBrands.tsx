import React from 'react';
import { arrayChunkSplit } from 'array-chunk-split';

const categories: { [key: string]: string[] } = {
    'Женские сумки': [
        'Acne Studios',
        'Aesther Ekme',
        'Alaia',
        'Alexander McQueen',
        'Alexander Wang',
        'Amina Muaddi',
        'Ami Paris',
        'A.P.C.',
        'ATP Atelier',
        'A.W.A.K.E. MODE',
        'Balenciaga',
        'Bally',
        'Balmain',
        'Blumarine',
        'Bottega Veneta',
        'BOYY',
        'Brunello Cucinelli',
        'Burberry',
        'Bvlgari',
        'By Far',
        'Chanel',
        'Celine',
        'Charlotte Olympia',
        'Chloe',
        'Christian Dior',
        'Coach',
        'Coperni',
        'Cult Gaia',
        'Danse Lente',
        'DeMellier',
        'Dentro Studio',
        'Dior',
        'Dragon Diffussion',
        'Dries Van Noten',
        'Elie Saab',
        'Elleme',
        'Escada',
        'Fendi',
        'Ferragamo',
        'Ganni',
        'Givenchy',
        'Goyard',
        'Gucci',
        'Hereu',
        'Hermes',
        'Jacquemus',
        'Jil Sander',
        'Jimmy Choo',
        'Joseph',
        'JW Anderson',
        'Kara',
        'Kassl Editions',
        'Khaite',
        'Lanvin',
        'Lemaire',
        'Little Liffner',
        'Loewe',
        'Loro Piana',
        'Louis Vuitton',
        'M2Malletier',
        'Maison Margiela',
        'Mansur Gavriel',
        'Manu Atelier',
        'Marc Cross',
        'Marni',
        'Max Mara',
        'Medea',
        'Miu Miu',
        'MM6',
        'Mulberry',
        'N21',
        'Nanushka',
        'Neous',
        'Nico Giani',
        'Off-White',
        'Olympia Le-Tan',
        'Oroton',
        'Osoi',
        'Paco Rabbane',
        'Prada',
        'Proenza Schouler',
        'Rabbane',
        'Ralph Lauren',
        'Rejina Pyo',
        'Saint Laurent',
        'Salvatore Ferragamo',
        'Simone Rocha',
        'Staud',
        'Stella McCartney',
        'Studio Amelia',
        'Toteme',
        'Telfar',
        'The Attico',
        'The Row',
    ],
    'Мужские сумки': [
        'Acne Studios',
        'A.P.C',
        'Balenciaga',
        'Bottega Veneta',
        'Brunello Cucinelli',
        'Burberry',
        'Fendi',
        'Gucci',
        'JW Anderson',
        'Lemaire',
        'Loewe',
        'Louis Vuitton',
        'Maison Margiela',
        'MM6',
        'Prada',
        'Versace',
    ],
    'Ювелирные изделия': ['Bvlgari', 'Cartier', 'Chopard', 'Hermes', 'Messika', 'Tiffany & Co.', 'Van Cleef & Arpels'],
    Часы: [
        'Audemars Piguet',
        'Breguet',
        'Breitling',
        'Burberry',
        'Bvlgari',
        'Cartier',
        'Chanel',
        'Chopard',
        'Christian Dior',
        'Dior',
        'Fendi',
        'Franck Muller',
        'Grand Seiko',
        'Gucci',
        'Hermes',
        'Hublot',
        'IWC',
        'Jaeger-Lecoultre',
        'Longines',
        'Louis Vuitton',
        'Maurice Lacroix',
        'Omega',
        'Oris',
        'Panerai',
        'Patek Philippe',
        'Piaget',
        'Rolex',
        'TAG Heuer',
        'Tiffany & Co.',
        'Tudor',
        'Ulysse Nardin',
        'Vacheron Constantin',
        'Van Cleef & Arpels',
        'Zenith',
    ],
    Обувь: [
        'Acne Studios',
        'Alaia',
        'Balenciaga',
        'Bottega Veneta',
        'Burberry',
        'By Far',
        'Celine',
        'Chanel',
        'Christian Dior',
        'Coperni',
        'Dior',
        'Dries Van Noten',
        'Golden Goose',
        'Gucci',
        'Hereu',
        'Hermes',
        'Isabel Marant',
        'Jacquemus',
        'Jil Sander',
        'JW Anderson',
        'Khaite',
        'Loewe',
        'Loro Piano',
        'Louis Vuitton',
        'Magda Butrym',
        'Maison Margiela',
        'Miu Miu',
        'MM6',
        'Neous',
        'Paris Texas',
        'Prada',
        'Saint Laurent',
        'The Attico',
        'The Row',
        'Toteme',
        'Wandler',
    ],
    Украшения: [
        'Acne Studios',
        'Alexander McQueen',
        'Amina Muaddi',
        'Axenoff',
        'Balenciaga',
        'Bea Bongiasca',
        'Bottega Veneta',
        'Brunello Cucinelli',
        'Celine',
        'Chanel',
        'Chloe',
        'Christian Dior',
        'Dior',
        'Dries Van Noten',
        'Fendi',
        'Givenchy',
        'Gucci',
        'Hermes',
        'Heron Preston',
        'Isabel Marant',
        'Jacquemus',
        'Jil Sander',
        'JW Anderson',
        'Lanvin',
        'Lizzie Fortunato',
        'Loewe',
        'Louis Vuitton',
        'Magda Butrym',
        'Maison Margiela',
        'Miu Miu',
        'MM6',
        'Oscar de la Renta',
        'Paco Rabanne',
        'Peter Do',
        'Prada',
        'Rejina Pyo',
        'Saint Laurent',
        'Simone Rocha',
        'Valentino',
        'Versace',
        'Vetements',
    ],
    Ремни: [
        'Balenciaga',
        'Bottega Veneta',
        'Burberry',
        'Celine',
        'Chanel',
        'Christian Dior',
        'Dior',
        'Dries Van Noten',
        'Fendi',
        'Ferragamo',
        'Gucci',
        'Hermes',
        'Isabel Marant',
        'Jil Sander',
        'Loewe',
        'Louis Vuitton',
        'Marni',
        'Miu Miu',
        'Off-White',
        'Prada',
        'Saint Laurent',
        'Salvatore Ferragamo',
        'Valentino',
    ],
    Очки: [
        'Acne Studios',
        'Alexander McQueen',
        'Andy Wolf',
        'Balenciaga',
        'Bottega Veneta',
        'Burberry',
        'Celine',
        'Chanel',
        'Christian Dior',
        'Christian Roth',
        'Chrome Hearts',
        'Dior',
        'Doublet',
        'Dries Van Noten',
        'Elie Saab',
        'Fakoshima',
        'Fendi',
        'Gentle Monster',
        'Gucci',
        'Hermes',
        'Isabel Marant',
        'Jacquemus',
        'Jil Sander',
        'JW Anderson',
        'Le Specs',
        'Linda Farrow',
        'Loewe',
        'Louis Vuitton',
        'Maison Margiela',
        'Miu Miu',
        'Mykita',
        'Off-White',
        'Oliver Peoples',
        'Prada',
        'Retrosuperfuture',
        'Saint Laurent',
        'Salvatore Ferragamo',
        'Stella McCartney',
        'The Attico',
        'The Row',
        'Tom Ford',
        'Toteme',
        'Versace',
    ],
    'Платки и шарфы': [
        'Acne Studios',
        'Balenciaga',
        'Bottega Venetta',
        'Burberry',
        'Bvlgari',
        'Celine',
        'Chanel',
        'Chloe',
        'Christian Dior',
        'Dior',
        'Fendi',
        'Givenchy',
        'Gucci',
        'Hermes',
        'Isabel Marant',
        'Lanvin',
        'Loewe',
        'Loro Piana',
        'Louis Vuitton',
        'Miu Miu',
        'MM6',
        'Prada',
        'Saint Laurent',
        'Toteme',
        'Versace',
    ],
    'Головные уборы': [
        'Acne Studios',
        'Balenciaga',
        'Burberry',
        'Celine',
        'Chanel',
        'Chloe',
        'Christian Dior',
        'Dior',
        'Fendi',
        'Givenchy',
        'Gucci',
        'Hermes',
        'Isabel Marant',
        'Jacquemus',
        'Loewe',
        'Loro Piana',
        'Louis Vuitton',
        'Miu Miu',
        'Prada',
        'Saint Laurent',
        'Versace',
    ],
};

const SellInfoBrands: React.FC = () => {
    // const { categories, isLoaded } = useTypedSelector(
    // 	({ products_filters }) => products_filters
    // );

    // const [brands, setBrands] = React.useState<{ [key: string]: { [key: string]: string } }>({})

    // React.useEffect(() => {
    // 	if (isLoaded) {
    // 		const newBrands: { [key: string]: { [key: string]: string } } = {}

    // 		Object.keys(categories).map((category) => {
    // 			Object.keys(categories[category].subsubcategories).map(subsubcategory => (
    // 				Object.keys(categories[category].subsubcategories[subsubcategory]).map(brand => {
    // 					newBrands[category] = { ...newBrands[category], [brand]: brand }
    // 				})
    // 			))
    // 		})

    // 		setBrands(newBrands)
    // 	}
    // }, [isLoaded])

    return (
        <section className="sell-info-brands">
            <div className="container">
                <div className="sell-info-brands-wrapper">
                    {Object.keys(categories).map((category) => (
                        <div className="sell-info-brands-block" key={`sell-info-brands-block-${category}`}>
                            <h3 className="sell-info-brands-block__title">{category}</h3>

                            <div className="sell-info-brands-block-subblock-item-wrapper">
                                {arrayChunkSplit(categories[category], 4).map((col, index) => (
                                    <div
                                        className="sell-info-brands-block-subblock-item-col"
                                        key={`sell-info-brands-block-subblock-item-col-${index}`}
                                    >
                                        {col.map((brand) => (
                                            <p
                                                className="sell-info-brands-block-subblock-item-col__item"
                                                key={`sell-info-brands-block-subblock-${category}-col__item-${brand}`}
                                            >
                                                {brand}
                                            </p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="sell-info-brands-wrapper">
					{Object.keys(brands).map((category) => (
						<div className={`sell-info-brands-block`} key={`sell-info-brands-block-${category}`}>
							<h3 className="sell-info-brands-block__title">
								{category}
							</h3>

							<div className="sell-info-brands-block-subblock-item-wrapper">
								{Object.keys(brands[category]).map((brand) => (
									<p className={`sell-info-brands-block-subblock__item`} key={`sell-info-brands-block-${category}__item-${brand}`}>
										{brand}
									</p>
								))}
							</div>
						</div>
					))}
				</div> */}
            </div>
        </section>
    );
};

export default SellInfoBrands;
