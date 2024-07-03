import React from 'react';
import { arrayChunkSplit } from 'array-chunk-split';

const categories: { [key: string]: string[] } = {
    'Женские сумки': [
        '1017 ALYX',
        'A.P.C.',
        'A.W.A.K.E. MODE',
        'Acne Studios',
        'Aester Ekme',
        'Alexander Mcqueen',
        'Alexander Wang',
        'Ami Paris',
        'Amina Muaddi',
        'Alaia',
        'ATP Atelier',
        'Balenciaga',
        'Brunello Cucinelli',
        'Blumarine',
        'Balmain',
        'Bally',
        'Benedetta Bruzziches',
        'Bottega Veneta',
        'BOYY',
        'Burberry',
        'Bvlgari',
        'By Far',
        'Celine',
        'Chanel',
        'Chloe',
        'Christian Dior',
        'Cartier',
        'Charlotte Olympia',
        'Coach',
        'Comme Des Garcons',
        'Coperni',
        'Cult Gaia',
        'Danse Lente',
        'Dragon diffusion',
        'Dior',
        'Dentro Studio',
        'DeMellier',
        'Dries Van Noten',
        'Elleme',
        'Elie Saab',
        'Emilio Pucci',
        'Escada',
        'Fendi',
        'Gabriela Hearst',
        'Ganni',
        'Goyard',
        'Givenchy',
        'Gucci',
        'Hereu',
        'Hermes',
        'Isabel Marant',
        'Jacquemus',
        'Jil Sander',
        'Jimmy Choo',
        'Joseph',
        'JW Anderson',
        'Kara',
        'Kassl Editions',
        'Khaite',
        'Lemaire',
        'Loro Piana',
        'Little Liffner',
        'Lanvin',
        'Loewe',
        'Louis Vuitton',
        'M2malletier',
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
        'Nico Giani',
        'N21',
        'Nanushka',
        'Neous',
        'Nico Giani',
        'Off-White',
        'Olimpia Le-Tan',
        'Oroton',
        'Osoi',
        'Paco Rabbane',
        'Phillip Lim',
        'Prada',
        'Proenza Schouler',
        'Roksanda',
        'Ralph Lauren',
        'Rejina Pyo',
        'Saint Laurent',
        'Studio Amelia',
        'Salvatore Ferragamo',
        'Simone Rocha',
        'Staud',
        'Stella Mccartney',
        'The Attico',
        'The Row',
        'Telfar',
        'The Volon',
        'Tom Ford',
        'Vetements',
        'Valextra',
        'Valentino',
        'Ulyana Sergeenko',
        'Versace',
        'Victoria Beckham',
        'Vivienne Westwood',
        'Wandler',
        'Yuzefi',
    ],
    'Мужские сумки': [
        'A.P.C',
        'Acne Studios',
        'Balenciaga',
        'Bottega Veneta',
        'Burberry',
        'Fendi',
        'Gucci',
        'JW Anderson',
        'Lemaire',
        'Loewe',
        'Louis Vuitton',
        'Maison Margiela',
        'Prada',
        'Versace',
    ],
    Обувь: [
        '1017 ALYX',
        'A.W.A.K.E. MODE',
        'Acne Studios',
        'Alaia',
        'Alexander McQueen',
        'Alexander Wang',
        'Amina Muaddi',
        'Atp Atelier',
        'Aquazzura',
        'Balenciaga',
        'Balmain',
        'Bottega Veneta',
        'Burberry',
        'By Far',
        'Celine',
        'Chanel',
        'Chloe',
        'Christian Dior',
        'Coperni',
        'Diemme',
        'Dries Van Noten',
        'Dior',
        'Emme Parsons',
        'Fendi',
        'Ganni',
        'Gia Borghini',
        'Gianvito Rossi',
        'Giuseppe Zanotti',
        'Givenchy',
        'Golden Goose',
        'Gucci',
        'Hereu',
        'Hermes',
        'Homies',
        'Isabel Marant',
        'Jacquemus',
        'Jil Sander',
        'Jimmy Choo',
        'Joseph',
        'JW Anderson',
        'Khaite',
        'Lanvin',
        'Legres',
        'Lemaire',
        'Le Monde Beryl',
        'Loewe',
        'Louis Vuitton',
        'Mach & Mach',
        'Magda Butrym',
        'Maison Margiela',
        'Manolo Blahnik',
        'Mansur Gavriel',
        'Marni',
        'Miu Miu',
        'MM6',
        'N21',
        'Nanushka',
        'Neous',
        'Nodaleto',
        'Nina Ricci',
        'Off-white',
        'Paris Texas',
        'Prada',
        'Proenza Schouler',
        'Rejina Pyo',
        'Roger Vivier',
        'Saint Laurent',
        'Salvatore Ferragamo',
        'Simone Rocha',
        'Staud',
        'Stella McCartney',
        'Studio Amelia',
        'Suicoke',
        'The Attico',
        'The Row',
        'Tom Ford',
        'Toteme',
        'Valentino',
        'Valextra',
        'Versace',
        'Vetements',
        'Victoria Beckham',
        'Wandler',
    ],
    Украшения: [
        '1017 ALYX',
        'Acne Studios',
        'Amina Muaddi',
        'Axenoff',
        'Alexander McQueen',
        'Balenciaga',
        'Bea Bongiasca',
        'Bottega Veneta',
        'Brunello Cucinelli',
        'Bvlgari',
        'Cartier',
        'Celine',
        'Chanel',
        'Chloe',
        'Chopard',
        'Christian Dior',
        'Dries Van Noten',
        'Dior',
        'Fendi',
        'Givenchy',
        'Gucci',
        'Hermes',
        'Heron Preston',
        'Isabel Marant',
        'Jacquemus',
        'Jil Sander',
        'JW Anderson',
        'Lalique',
        'Lanvin',
        'Lizzie Fortunato',
        'Loewe',
        'Louis Vuitton',
        'Magda Butrym',
        'Maison Margiela',
        'Marc Jacobs',
        'Marni',
        'Missoma',
        'Miu Miu',
        'MM6',
        'Monet Vintage',
        'Moonka',
        'Napier Vintage',
        'Oscar de la Renta',
        'Paco Rabanne',
        'Prada',
        'Rejina Pyo',
        'Saint Laurent',
        'Simone Rocha',
        'Peter Do',
        'Timeless Pearly',
        'Tiffany & Co.',
        'Tom Binns',
        'Valentino',
        'Van Cleef & Arpels',
        'Versace',
        'Vetements',
    ],
    Часы: [
        'Audemars Piguet',
        'A Lange & Sohne',
        'Arnold & Son',
        'Bell & Ross',
        'Blancpain',
        'Breguet',
        'Breitling',
        'Bovet',
        'Bvlgari',
        'Burberry',
        'Carl f. Bucherer',
        'Cartier',
        'Chopard',
        'Corum',
        'Chronoswiss',
        'Concord',
        'Cvstos',
        'Chanel',
        'Czapek',
        'Daniel Roth',
        'De Grisogono',
        'Dior',
        'Franc Vila',
        'Franck Muller',
        'F.P. Journe',
        'Fendi',
        'Girard-Perregaux',
        'Glashutte Original',
        'Gerald Genta',
        'Gucci',
        'Grand Seiko',
        'Harry Winston',
        'Hublot',
        'Hermes',
        'HYT',
        'IWC',
        'Jacob & co',
        'Jaeger-Lecoultre',
        'Jaquet Droz',
        'Longines',
        'Louis Vuitton',
        'Magellan',
        'Maurice Lacroix',
        'MB&F',
        'Omega',
        'Oris',
        'Panerai',
        'Parmigiani Fleurier',
        'Patek Philippe',
        'Piaget',
        'Roger Dubuis',
        'Rolex',
        'Romain Jerome',
        'Tag Heuer',
        'Tudor',
        'Tiffany & Co.',
        'Ulysse Nardin',
        'Vacheron Constantin',
        'Van Cleef & Arpels',
        'Zenith',
    ],
    Ремни: [
        'Balenciaga',
        'Bottega Veneta',
        'Brunello Cucinelli',
        'Burberry',
        'Cartier',
        'Celine',
        'Chanel',
        'Christian Dior',
        'Dries Van Noten',
        'Dior',
        'Escada',
        'Fendi',
        'Gucci',
        'Hermes',
        'Isabel Marant',
        'Jil Sander',
        'Loewe',
        'Louis Vuitton',
        'Marni',
        'Miu Miu',
        'Off-White',
        'Phillip Lim',
        'Prada',
        'Raf Simons',
        'Saint Laurent',
        'Salvatore Ferragamo',
        'Valentino',
    ],
    Очки: [
        'Acne Studios',
        'Alexander McQueen',
        'Andy Wolf',
        'Anne et Valentin',
        'Balenciaga',
        'Bottega Veneta',
        'Burberry',
        'Bvlgari',
        'Cartier',
        'Celine',
        'Chanel',
        'Chloе',
        'Christian Dior',
        'Christian Roth',
        'Chrome Hearts',
        'Dita',
        'Doublet',
        'Dries Van Noten',
        'Dsquared2',
        'Dior',
        'Elie Saab',
        'Emilio Pucci',
        'Fakoshima',
        'Fendi',
        'Francy&Mercury',
        'Gentle Monster',
        'Giorgio Armani',
        'Givenchy',
        'Gucci',
        'Haze',
        'Hermes',
        'Illesteva',
        'Isabel Marant',
        'J Plus',
        'Jacquemus',
        'Jil Sander',
        'Jimmy Choo',
        'JW Anderson',
        'Le Specs',
        'Linda Farrow',
        'Loewe',
        'Louis Vuitton',
        'Maison Margiela',
        'Marc Jacobs',
        'Marni',
        'Max Mara',
        'Miu Miu',
        'Moschino',
        'Mykita',
        'Off-white',
        'Oliver Peoples',
        'Palm Angels',
        'Phillip Lim',
        'Prada',
        'Ralph Lauren',
        'Retrosuperfuture',
        'Saint Laurent',
        'Salvatore Ferragamo',
        'Stella McCartney',
        'The Attico',
        'The Row',
        'Thierry Lasry',
        'Tods',
        'Tom Ford',
        'Toteme',
        'Valentino',
        'Versace',
        'Victoria Beckham',
    ],
    'Платки и шарфы': [
        'Acne Studios',
        'Alexander McQueen',
        'Ann Demeulemeester',
        'Balenciaga',
        'Balmain',
        'Bottega Venetta',
        'Brunello Cucinelli',
        'Burberry',
        'Bvlgari',
        'Cartier',
        'Celine',
        'Chanel',
        'Chloe',
        'Christian Dior',
        'Christian Lacroix',
        'Dior',
        'Escada',
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
        'Moschino',
        'Prada',
        'Saint Laurent',
        'Schiaparelli',
        'Toteme',
        'Trussardi',
        'Uma Wang',
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
        'Escada',
        'Fendi',
        'Givenchy',
        'Gucci',
        'Hermes',
        'Isabel Marant',
        'Lanvin',
        'Loewe',
        'Loro Piana',
        'Louis Vuitton',
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
