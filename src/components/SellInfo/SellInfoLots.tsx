import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';

const SellInfoLots: React.FC = () => {
    return (
        <div className="sell-info-lots">
            <div className="sell-info-lots-blocks-wrapper">
                <div className="sell-info-lots-block sell-info-lots-block-brands hover-scale">
                    <div className="sell-info-lots-block-top">
                        <h3 className="sell-info-lots-block-top__title">Бренд-лист и&nbsp;актуальность</h3>
                        <p className="sell-info-lots-block-top__description">
                            Мы&nbsp;работаем с&nbsp;определенным списком брендов. Наш селекционный подход помогает
                            продать ваши лоты максимально быстро.
                            <br />
                            <br />
                            Команда THE CULTT оставляет за&nbsp;собой право кураторского отбора.
                        </p>
                    </div>

                    <Link href={APP_ROUTE.sell.infoBrands} className="sell-info-lots-block__link">
                        Открыть бренд-лист
                    </Link>
                </div>

                <div className="sell-info-lots-block sell-info-lots-block-original hover-scale">
                    <div className="sell-info-lots-block-top">
                        <h3 className="sell-info-lots-block-top__title">Оригинал</h3>
                        <p className="sell-info-lots-block-top__description">
                            Мы&nbsp;не&nbsp;принимаем неоригинальные товары на&nbsp;продажу. Каждый лот проходит
                            проверку на&nbsp;подлинность. Если подлинность лота не&nbsp;подтвердится, вам нужно будет
                            оплатить стоимость аутентификации и&nbsp;самостоятельно забрать лот.
                        </p>
                    </div>
                </div>

                <div className="sell-info-lots-block sell-info-lots-block-state hover-scale">
                    <div className="sell-info-lots-block-top">
                        <h3 className="sell-info-lots-block-top__title">Состояние</h3>
                        <p className="sell-info-lots-block-top__description">
                            Мы&nbsp;принимаем новые товары, а&nbsp;также в&nbsp;отличном или хорошем состоянии. Это
                            означает, что изделие должно быть без сильных потертостей, дыр и&nbsp;пятен,
                            с&nbsp;исправной фурнитурой.
                        </p>
                    </div>
                </div>
            </div>

            <div className="sell-info-lots-faq">
                <h3 className="sell-info-lots-faq__title">Какие лоты принимает THE CULTT</h3>
                <p className="sell-info-lots-faq__description">
                    У&nbsp;нас действует селекционный подход. Сумки, обувь и&nbsp;аксессуары должны соответствовать трем
                    ключевым критериям. Мы&nbsp;трепетно относимся к&nbsp;нашей селекции и&nbsp;надеемся
                    на&nbsp;понимание, если предложенный товар не&nbsp;подойдет.
                </p>

                <Link href={APP_ROUTE.help.sellers} className="btn sell-info-lots-faq__btn">
                    Подробнее в&nbsp;FAQ
                </Link>
            </div>

            <Link href={APP_ROUTE.help.sellers} className="btn sell-info-lots__btn__media">
                Подробнее в&nbsp;FAQ
            </Link>
        </div>
    );
};

export default SellInfoLots;
