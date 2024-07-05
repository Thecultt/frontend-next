import React from 'react';

const BuyerTheCulttMainFaq: React.FC = () => {
    const items = [
        {
            title: 'Какие модели и бренды доступны?',
            description: `
			Вы можете оформить заявку на доставку Консьерж-сервисом украшений Cartier, Bvlgari, Messika, Van Cleef & Arpels. Также доступны часы Rolex, Cartier, Panerai, Audemars Piguet и других брендов первого эшелона.
			<br />
			<br />
			Если вы хотите модель, не представленную на сайте, напишите нам.`,
        },
        {
            title: 'Как происходит оформление услуги?',
            description: `Если выбранное изделие доступно, мы согласуем с вами условия и сроки доставки и заключим договор. Мы работаем по 100% предоплате за нашу услугу.`,
        },
        {
            title: 'Сколько это будет стоить?',
            description: `Стоимость изделия формируется из цены на итальянской версии сайта в евро и комиссии THE CULTT за услугу. Комиссия составит от 5% до 15% в зависимости от стоимости изделия. Ювелирные изделия и часы не подлежат обмену и возврату.`,
        },
        {
            title: 'Если посылка не будет доставлена, мне вернут деньги?',
            description: `Да, мы гарантируем безопасность услуги — если изделие не прибудет к вам, средства будут возвращены.`,
        },
        {
            title: 'У меня есть вопросы по моделям украшений или часов',
            description: `Мы с удовольствием ответим на все ваши вопросы в чате: о размере, материалах, доступности моделей, условиям доставки.`,
        },
    ];

    return (
        <div className="buyer-thecultt-faq">
            <h2 className="buyer-thecultt-faq__title">Вопросы и ответы</h2>

            <div className="buyer-thecultt-faq-items-wrapper">
                {items.map((item, index) => (
                    <div className="buyer-thecultt-faq-item" key={`buyer-thecultt-faq-item-${index}`}>
                        <h3 className="buyer-thecultt-faq-item__title">{item.title}</h3>

                        <p
                            className="buyer-thecultt-faq-item__description"
                            dangerouslySetInnerHTML={{
                                __html: item.description,
                            }}
                        ></p>
                    </div>
                ))}

                <a href="https://t.me/thecultthelp" className="btn buyer-thecultt-faq-item__btn">
                    Задать вопрос
                </a>
            </div>
        </div>
    );
};

export default BuyerTheCulttMainFaq;
