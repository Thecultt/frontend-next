'use client';

import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { BaseImage } from '@/components';
import { MEDIA_SIZES } from '@/constants/styles';

import CinemaArtisticExhibit1Cover from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-1-cover.jpg';
import CinemaArtisticExhibit1CoverMedia from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-1-cover-media.jpg';
import CinemaArtisticExhibit1Image from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-1-image.jpg';

import CinemaArtisticExhibit2Cover from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-2-cover.jpg';
import CinemaArtisticExhibit2CoverMedia from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-2-cover-media.jpg';
import CinemaArtisticExhibit2Image from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-2-image.jpg';

import CinemaArtisticExhibit3Cover from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-3-cover.jpg';
import CinemaArtisticExhibit3CoverMedia from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-3-cover-media.jpg';
import CinemaArtisticExhibit3Image from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-3-image.jpg';

import CinemaArtisticExhibit4Cover from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-4-cover.jpg';
import CinemaArtisticExhibit4CoverMedia from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-4-cover-media.jpg';
import CinemaArtisticExhibit4Image from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-4-image.jpg';

import CinemaArtisticExhibit5Cover from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-5-cover.jpg';
import CinemaArtisticExhibit5CoverMedia from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-5-cover-media.jpg';
import CinemaArtisticExhibit5Image from '@/assets/images/cinema-artistic/cinema-artistic-exhibit-5-image.jpg';

const EXHIBITS = [
    {
        cover: CinemaArtisticExhibit1Cover.src,
        coverMedia: CinemaArtisticExhibit1CoverMedia.src,
        option: {
            title: 'HERMÈS BIRKIN',
            year: '1984',
            film: '«СЕМЕЙКА ТЕНЕБАНБАУМ», 2001',
        },
        description1: `В&nbsp;1984-м певица, актриса и&nbsp;главная it-girl 70-х, Джейн Биркин, летела в&nbsp;Париж.Когда она попыталась поставить свою корзинку на&nbsp;пол, все содержимое рассыпалось по&nbsp;салону. Рядом сидел представитель Herm&egrave;s Жан-Луи Дюма, который предложил Джейн Биркин поучаствовать в&nbsp;создании новой вместительной модели. Прямо в&nbsp;самолете они набросали эскиз сумки, основываясь на&nbsp;культовой модели Kelly, и&nbsp;вскоре посылка с&nbsp;готовым аксессуаром, названным в&nbsp;честь Биркин, оказалась у&nbsp;ее&nbsp;порога.`,
        image: CinemaArtisticExhibit1Image.src,
        description2: `Сумка Birkin, с&nbsp;которой ходит Марго Тененбаум (Гвинет Пэлтроу) в&nbsp;фильме &laquo;Семейка Тененбаум&raquo;, была, вероятнее всего, подарена ей&nbsp;матерью, появившейся в&nbsp;фильме с&nbsp;более строгой и&nbsp;взрослой Herm&egrave;s Kelly. Стиль Марго отражает ее&nbsp;драму ребенка-вундеркинда. Став взрослой, она все еще носит свою дорогую детскую униформу: шубу Fendi, платье для тенниса Lacoste, лоферы Gucci и&nbsp;сумку Birkin. Независимо от&nbsp;возраста, Марго как будто чувствует себя неуместной: ребенок в&nbsp;шубе выглядит так&nbsp;же странно, как и&nbsp;взрослая женщина с&nbsp;заколкой и&nbsp;в&nbsp;платье для тенниса.`,
    },

    {
        cover: CinemaArtisticExhibit2Cover.src,
        coverMedia: CinemaArtisticExhibit2CoverMedia.src,
        option: {
            title: 'GUCCI JACKIE 1961',
            year: '1961, ПЕРЕВЫПУСК — 2020',
            film: '«ДОМ GUCCI», 2021',
        },
        description1: `Jackie Bag можно назвать одной из&nbsp;самых культовых сумок за&nbsp;всю историю Gucci. Она появилась в&nbsp;ассортименте бренда в&nbsp;1950-х годах, при Альдо и&nbsp;Родольфо Гуччи, но&nbsp;тогда называлась Constance. В&nbsp;1963-м экс-первая леди США, Жаклин Кеннеди, зашла в&nbsp;бутик Gucci и&nbsp;купила сразу шесть сумок Constance. С&nbsp;тех пор Жаклин и&nbsp;сумка Gucci были неразлучны, а&nbsp;бренд увековечил их&nbsp;крепкую дружбу в&nbsp;названии Jackie. За&nbsp;60&nbsp;лет сумка неоднократно подвергалась изменениям. В&nbsp;2020 году креативный директор Gucci Алессандро Микеле перевыпустил Jackie практически в&nbsp;оригинальном виде, сделав ее&nbsp;главным объектом желания модниц всего мира.`,
        image: CinemaArtisticExhibit2Image.src,
        description2: `У&nbsp;сумки Jackie есть камео в&nbsp;фильме &laquo;Дом Gucci&raquo;. Единственный раз, когда Патриция Гуччи в&nbsp;исполнении Леди Гаги появилась на&nbsp;экране в&nbsp;total Gucci look с&nbsp;сумкой Jackie из&nbsp;архивов модного дома, был в&nbsp;самый счастливый период ее&nbsp;жизни&nbsp;&mdash; в&nbsp;шумном и&nbsp;богемном Нью-Йорке 70-х.`,
    },

    {
        cover: CinemaArtisticExhibit3Cover.src,
        coverMedia: CinemaArtisticExhibit3CoverMedia.src,
        option: {
            title: 'CHANEL TIMELESS CLASSIC',
            year: '1983',
            film: '«СПЕНСЕР», 2021',
        },
        description1: `Сумку Chanel Timeless Classic Карл Лагерфельд придумал и&nbsp;показал в&nbsp;своей первой коллекции для Chanel весна-лето 1983. В&nbsp;основе дизайна&nbsp;&mdash; узнаваемая сумка-легенда 2.55, созданная самой Габриэль Шанель в&nbsp;1955-м. Четкая прямоугольная форма, ромбовидная стежка, ремень-цепочка, &laquo;СС&raquo;-застежка и&nbsp;контрастная бордовая подкладка, которая по&nbsp;задумке самой Габриэль позволит легко найти вещи в&nbsp;недрах сумки&nbsp;&mdash; из&nbsp;этих и&nbsp;состоит сумка Chanel Timeless Classiс.`,
        image: CinemaArtisticExhibit3Image.src,
        description2: `В&nbsp;драме Пабло Ларраина &laquo;Спенсер&raquo; принцесса Диана в&nbsp;исполнении Кристен Стюарт появляется с&nbsp;сумкой Chanel Timeless Classic уже в&nbsp;первые 5&nbsp;минут фильма. Художник по&nbsp;костюмам, двукратная обладательница Оскара Жаклин Дюрран проанализировала стиль Дианы периода 1982-1992 годов и&nbsp;решила, что основой ее&nbsp;гардероба станут одежда и&nbsp;аксессуары Chanel. Черная Chanel Timeless Classic действительно была одной из&nbsp;любимых сумок принцессы. &laquo;В&nbsp;Chanel она всегда была самой собой. Довольно часто Chanel возникает в&nbsp;кадре именно в&nbsp;моменты силы Дианы&raquo;,&nbsp;&mdash; объяснила Кристен Стюарт, которая с&nbsp;большим интересом принимала участие в&nbsp;работе над костюмами.`,
    },

    {
        cover: CinemaArtisticExhibit4Cover.src,
        coverMedia: CinemaArtisticExhibit4CoverMedia.src,
        option: {
            title: 'HERMÈS KELLY',
            year: '1930-Е',
            film: '«ИДЕАЛЬНОЕ УБИЙСТВО», 1998',
        },
        description1: `Героиня Гвинет Пэлтроу&nbsp;&mdash; воспитанная в&nbsp;богатстве, скучающая жена менеджера-маньяка с&nbsp;Уолл-стрит&nbsp;&mdash; олицетворение термина &laquo;тихая роскошь&raquo;. &laquo;Она элегантна, и&nbsp;ничего в&nbsp;ней не&nbsp;бросается в&nbsp;глаза, ничего не&nbsp;кричит о&nbsp;деньгах&raquo;,&nbsp;&mdash; говорила о&nbsp;персонаже художница по&nbsp;костюмам Эллен Мирожник. Хотя, конечно, сумку Herm&egrave;s Kelly, с&nbsp;которой героиня появляется на&nbsp;экране, безмолвной никак не&nbsp;назвать. Лаконичная черная сумка в&nbsp;коже Box идеально вписалась в&nbsp;образ богатой жительницы Нью-Йорка 1990-х. И&nbsp;главная &laquo;пасхалка&raquo;: этот фильм вдохновлен триллером Хичкока &laquo;В&nbsp;случае убийства набирайте &bdquo;М&ldquo;&raquo;, с&nbsp;Грейс Келли в&nbsp;главной роли.`,
        image: CinemaArtisticExhibit4Image.src,
        description2: `На&nbsp;самом деле сумка Kelly родилась в&nbsp;1930-х годах и&nbsp;тогда была известна как Sac &agrave;&nbsp;D&eacute;p&ecirc;ches, прежде чем в&nbsp;середине 1950-х годов была переименована в&nbsp;Kelly&nbsp;&mdash; в&nbsp;честь звезды Голливуда Грейс Келли. Княгиня Монако была большой поклонницей этой модели Herm&egrave;s и&nbsp;однажды прикрылась ей&nbsp;от&nbsp;папарацци, чтобы не&nbsp;афишировать свою беременность. Фото Грейс с&nbsp;Sac &agrave;&nbsp;D&eacute;p&ecirc;ches в&nbsp;руках попало на&nbsp;обложки журналов, а&nbsp;ее&nbsp;репутация иконы стиля помогла сумке моментально приобрести культовый статус.`,
    },

    {
        cover: CinemaArtisticExhibit5Cover.src,
        coverMedia: CinemaArtisticExhibit5CoverMedia.src,
        option: {
            title: 'GUCCI BAMBOO',
            year: '1947, ПЕРЕВЫПУСК — 2021',
            film: '«ФОТОУВЕЛИЧЕНИЕ», 1966',
        },
        description1: `Фильм Микеланджело Антониони &laquo;Фотоувеличение&raquo;&nbsp;&mdash; это кинопритча об&nbsp;успешном фотографе Томасе, который в&nbsp;перерыве между модными съемками и&nbsp;тусовками случайно запечатлел на&nbsp;пленку убийство в&nbsp;городском парке. Вокруг гедонизм лондонских &laquo;свингующих 60-х&raquo;, так что в&nbsp;кадре появятся такие звезды эпохи, как Верушка, Джейн Биркин и&nbsp;Ванесса Редгрейв. У&nbsp;последней в&nbsp;руках можно заметить хит тех лет&nbsp;&mdash; сумку Gucci Bamboo. Эта модель достаточно классическая, чтобы оказаться в&nbsp;гардеробе утонченной героини Джейн в&nbsp;исполнении Редгрейв, но&nbsp;и&nbsp;достаточно знаковая, чтобы художник по&nbsp;костюмам Джоселин Рикардс остановила свой выбор на&nbsp;ней.`,
        image: CinemaArtisticExhibit5Image.src,
        description2: `Сумка Gucci Bamboo, которую принято считать самой первой it-bag в&nbsp;истории, появилась в&nbsp;1947&nbsp;году. Она стала своеобразным ответом бренда кризису послевоенной Италии, когда государство занесло кожу в&nbsp;список &laquo;контролируемых товаров&raquo;. В&nbsp;целях экономии семья Гуччи экспериментировала с&nbsp;пенькой, парусиной и&nbsp;джутом, но&nbsp;именно сумка с&nbsp;ручками из&nbsp;обожженного бамбука в&nbsp;итоге принесла бренду огромный успех. Сумка символизировала возрождение Италии&nbsp;&mdash; экзотическая бамбуковая деталь словно давала людям надежду на&nbsp;новые путешествия в&nbsp;дальние страны.`,
    },
];

const CinemaArtisticExhibits: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.mobile})`);

    return (
        <>
            {EXHIBITS.map((exhibit, index) => (
                <section className="cinema-artistic-exhibit" key={`cinema-artistic-exhibit-${index}`}>
                    <div className="cinema-artistic-exhibit-wrapper">
                        <p className="cinema-artistic-exhibit__number">{index + 1}</p>

                        <div
                            className="cinema-artistic-exhibit-cover"
                            style={{ backgroundImage: `url("${isMobile ? exhibit.coverMedia : exhibit.cover}")` }}
                        />

                        <div className="cinema-artistic-exhibit-info-wrapper border">
                            <div className="cinema-artistic-exhibit-info">
                                <div className="cinema-artistic-exhibit-info-options">
                                    <div className="cinema-artistic-exhibit-info-options-item">
                                        <p className="cinema-artistic-exhibit-info-options-item__title">СУМКА</p>

                                        <div className="cinema-artistic-exhibit-info-options-item-line"></div>

                                        <p className="cinema-artistic-exhibit-info-options-item__value">
                                            {exhibit.option.title}
                                        </p>
                                    </div>

                                    <div className="cinema-artistic-exhibit-info-options-item">
                                        <p className="cinema-artistic-exhibit-info-options-item__title">ГОД ВЫПУСКА</p>

                                        <div className="cinema-artistic-exhibit-info-options-item-line"></div>

                                        <p className="cinema-artistic-exhibit-info-options-item__value">
                                            {exhibit.option.year}
                                        </p>
                                    </div>

                                    <div className="cinema-artistic-exhibit-info-options-item">
                                        <p className="cinema-artistic-exhibit-info-options-item__title">ФИЛЬМ</p>

                                        <div className="cinema-artistic-exhibit-info-options-item-line"></div>

                                        <p className="cinema-artistic-exhibit-info-options-item__value">
                                            {exhibit.option.film}
                                        </p>
                                    </div>
                                </div>

                                <p
                                    className="cinema-artistic-exhibit-info__description"
                                    dangerouslySetInnerHTML={{
                                        __html: exhibit.description1,
                                    }}
                                ></p>
                            </div>
                        </div>

                        <BaseImage src={exhibit.image} alt="" className="cinema-artistic-exhibit-image" />

                        <div className="cinema-artistic-exhibit-info-wrapper">
                            <div className="cinema-artistic-exhibit-info">
                                <p
                                    className="cinema-artistic-exhibit-info__description"
                                    dangerouslySetInnerHTML={{
                                        __html: exhibit.description2,
                                    }}
                                ></p>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default CinemaArtisticExhibits;
