'use client';

import React from 'react';

import { FaqBreadCrumbs } from '@/components';

const FaqUserAgreement: React.FC = () => {
    return (
        <section className="faq">
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html: '\n            .faq-text h1 {\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: bold;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            .p,\n            p {\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n                margin: 0pt;\n            }\n            .a {\n                color: #00f;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: underline;\n                font-size: 14px;\n            }\n            .s1 {\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            .s2 {\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            .s3 {\n                color: #00f;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            .faq-text li {\n                display: block;\n            }\n            #l1 {\n                padding-left: 0pt;\n                counter-reset: c1 1;\n            }\n            #l1 > li > *:first-child:before {\n                counter-increment: c1;\n                content: counter(c1, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: bold;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l1 > li:first-child > *:first-child:before {\n                counter-increment: c1 0;\n            }\n            #l2 {\n                padding-left: 0pt;\n                counter-reset: c2 1;\n            }\n            #l2 > li > *:first-child:before {\n                counter-increment: c2;\n                content: counter(c1, decimal) "." counter(c2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l2 > li:first-child > *:first-child:before {\n                counter-increment: c2 0;\n            }\n            #l3 {\n                padding-left: 0pt;\n                counter-reset: c2 1;\n            }\n            #l3 > li > *:first-child:before {\n                counter-increment: c2;\n                content: counter(c1, decimal) "." counter(c2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l3 > li:first-child > *:first-child:before {\n                counter-increment: c2 0;\n            }\n            #l4 {\n                padding-left: 0pt;\n                counter-reset: c3 1;\n            }\n            #l4 > li > *:first-child:before {\n                counter-increment: c3;\n                content: counter(c1, decimal) "." counter(c2, decimal) "."\n                    counter(c3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l4 > li:first-child > *:first-child:before {\n                counter-increment: c3 0;\n            }\n            #l5 {\n                padding-left: 0pt;\n                counter-reset: c2 1;\n            }\n            #l5 > li > *:first-child:before {\n                counter-increment: c2;\n                content: counter(c1, decimal) "." counter(c2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l5 > li:first-child > *:first-child:before {\n                counter-increment: c2 0;\n            }\n            #l6 {\n                padding-left: 0pt;\n                counter-reset: c2 1;\n            }\n            #l6 > li > *:first-child:before {\n                counter-increment: c2;\n                content: counter(c1, decimal) "." counter(c2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l6 > li:first-child > *:first-child:before {\n                counter-increment: c2 0;\n            }\n            #l7 {\n                padding-left: 0pt;\n                counter-reset: c3 1;\n            }\n            #l7 > li > *:first-child:before {\n                counter-increment: c3;\n                content: counter(c1, decimal) "." counter(c2, decimal) "."\n                    counter(c3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l7 > li:first-child > *:first-child:before {\n                counter-increment: c3 0;\n            }\n            #l8 {\n                padding-left: 0pt;\n                counter-reset: c3 1;\n            }\n            #l8 > li > *:first-child:before {\n                counter-increment: c3;\n                content: counter(c1, decimal) "." counter(c2, decimal) "."\n                    counter(c3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l8 > li:first-child > *:first-child:before {\n                counter-increment: c3 0;\n            }\n            #l9 {\n                padding-left: 0pt;\n                counter-reset: c2 1;\n            }\n            #l9 > li > *:first-child:before {\n                counter-increment: c2;\n                content: counter(c1, decimal) "." counter(c2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l9 > li:first-child > *:first-child:before {\n                counter-increment: c2 0;\n            }\n            #l10 {\n                padding-left: 0pt;\n                counter-reset: c2 1;\n            }\n            #l10 > li > *:first-child:before {\n                counter-increment: c2;\n                content: counter(c1, decimal) "." counter(c2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l10 > li:first-child > *:first-child:before {\n                counter-increment: c2 0;\n            }\n            #l11 {\n                padding-left: 0pt;\n                counter-reset: c2 1;\n            }\n            #l11 > li > *:first-child:before {\n                counter-increment: c2;\n                content: counter(c1, decimal) "." counter(c2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l11 > li:first-child > *:first-child:before {\n                counter-increment: c2 0;\n            }\n            #l12 {\n                padding-left: 0pt;\n                counter-reset: c2 1;\n            }\n            #l12 > li > *:first-child:before {\n                counter-increment: c2;\n                content: counter(c1, decimal) "." counter(c2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l12 > li:first-child > *:first-child:before {\n                counter-increment: c2 0;\n            }\n            #l13 {\n                padding-left: 0pt;\n                counter-reset: c2 1;\n            }\n            #l13 > li > *:first-child:before {\n                counter-increment: c2;\n                content: counter(c1, decimal) "." counter(c2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l13 > li:first-child > *:first-child:before {\n                counter-increment: c2 0;\n            }\n        ',
                }}
            />

            <div className="container">
                <div className="faq-wrapper">
                    <FaqBreadCrumbs title="Пользовательское соглашение" />

                    <div className="faq-text">
                        <h3 className="faq-text__title">Пользовательское соглашение</h3>

                        <p className="faq-text__description">
                            Привет! Спасибо, что зашли на The Cultt! Пожалуйста, ознакомьтесь с текстом настоящего
                            Пользовательского соглашения (далее – Соглашение). Оно регулирует правила пользования сайтом
                            https://thecultt.com, которые Компания The Cultt установила для всех Пользователей,
                            пришедших на сайт и использующих его. Чтобы начать пользоваться сайтом, Вам необходимо
                            ознакомиться с настоящим Соглашением и принять его условия. В случае, если Вы не согласны с
                            условиями Соглашения, Вы не можете использовать сайт и любой его функционал. Начало
                            использования сайта означает Ваше согласие с положениями настоящего Соглашения и их
                            безоговорочное принятие.
                        </p>

                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'justify',
                            }}
                        >
                            ПОНЯТИЯ, ИСПОЛЬЗУЕМЫЕ В ДАННОМ СОГЛАШЕНИИ:
                        </h1>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            Компания{' '}
                            <span className="p">– ООО «КУЛЬТ», ОГРН 1227700002936, являющееся владельцем Сайта. </span>
                        </h1>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            Сайт{' '}
                            <a href="https://thecultt.com/" className="s1" target="_blank" rel="noreferrer">
                                – веб-сайт Компании, расположенный в сети Интернет по адресу{' '}
                            </a>
                            <a href="https://thecultt.com/" className="a" target="_blank" rel="noreferrer">
                                https://thecultt.com
                            </a>
                        </h1>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            Бот{' '}
                            <span className="p">
                                - бот по ссылке{' '}
                                <a href="https://t.me/thecultt_bot" className="a" target="_blank" rel="noreferrer">
                                    https://t.me/thecultt_bot
                                </a>{' '}
                                в мессенджере Telegram.
                            </span>
                        </h1>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            Администрация{' '}
                            <span className="p">
                                — Компания и/или уполномоченные ей лица, осуществляющие управление Сайтом и обработку
                                данных, Заказов и Заявок.
                            </span>
                        </h1>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            Пользователь{' '}
                            <span className="p">
                                - лицо, пришедшее на Сайт, осуществляющее просмотр Контента и использующее Сайт и его
                                функционал.
                            </span>
                        </h1>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            Личный кабинет{' '}
                            <span className="p">
                                — учетная запись Пользователя на Сайте, с помощью которого Пользователь может
                                реализовывать функционал Сайта по оформлению Заказов и Заявок.{' '}
                            </span>
                            Товар{' '}
                            <span className="p">
                                — товары, предлагаемые Компанией к покупке физическими лицами исключительно для личных
                                нужд, не связанных с осуществлением предпринимательской деятельности, ассортимент и
                                характеристики которых представлены на Сайте.
                            </span>
                        </h1>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'justify',
                            }}
                        >
                            Заказ{' '}
                            <span className="p">
                                — должным образом оформленный и размещённый̆ на Сайте запрос Пользователя на покупку
                                выбранного им Товара.
                            </span>
                        </h1>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'justify',
                            }}
                        >
                            Заявка{' '}
                            <span className="p">
                                – должным образом оформленная и размещённая на Сайте заявка Пользователя на продажу
                                своего имущества Компании или передачу его Компании для реализации по договору комиссии
                                или на обмен.
                            </span>
                        </h1>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'justify',
                            }}
                        >
                            Контент{' '}
                            <span className="p">
                                — охраняемые результаты интеллектуальной деятельности, составляющие наполнение Сайта
                                (включая, но не ограничиваясь: тексты, программное обеспечение, структуры, базы данных,
                                анимация, фотографии, иллюстрации, звуки, статьи, таблицы, диаграммы, логотипы, товарные
                                знаки, дизайн, формы, сервисы, верстка, графические, текстовые, фотографические,
                                производные, составные и иные произведения и другие объекты интеллектуальной
                                собственности все вместе и/или по отдельности, содержащиеся на Сайте).
                            </span>
                        </h1>
                        <ol id="l1">
                            <li data-list-text={1}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '22pt',
                                        textIndent: '-17pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ
                                </h1>
                                <ol id="l2">
                                    <li data-list-text="1.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Сайт, а также любой содержащийся на Сайте Контент, являются объектами
                                            интеллектуальной собственности, правообладателем которых является Компания
                                            или которые предоставлены Компании третьими лицами для использования их на
                                            соответствующих правовых основаниях.
                                        </p>
                                    </li>
                                    <li data-list-text="1.2.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Запрещается использование всего Сайта и/или его части, его сервисов и
                                            функционала, а также Контента в коммерческих или иных целях, не связанных с
                                            личным некоммерческим использованием, включая (но не ограничиваясь)
                                            загрузку, копирование, воспроизведение, передачу, представление,
                                            распространение и другие способы использования, перечисленные в п. 2 ст.
                                            1270 Гражданского кодекса Российской Федерации (далее – ГК РФ).
                                        </p>
                                    </li>
                                    <li data-list-text="1.3.">
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Размещение ссылок на Сайт, цитирование материалов Сайта может осуществляться
                                            только с предварительного письменного разрешения Компании. Такое разрешение
                                            может быть отозвано Компанией в любое время. При цитировании материалов
                                            Сайта ссылка на Сайт обязательна, если с Компанией не согласовано иное.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={2}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '22pt',
                                        textIndent: '-17pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    РЕГИСТРАЦИЯ ЛИЧНОГО КАБИНЕТА НА САЙТЕ
                                </h1>
                                <ol id="l3">
                                    <li data-list-text="2.1.">
                                        <p
                                            style={{
                                                paddingTop: '5pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Оформлять Заказы Пользователь вправе через Личный кабинет или без такового.
                                            Подавать Заявки пользователь вправе только через Личный кабинет или Бот.
                                            Чтобы получить доступ к Личному кабинету, Пользователю необходимо оформить
                                            первый Заказ или заполнить специальную регистрационную форму на Сайте.
                                        </p>
                                    </li>
                                    <li data-list-text="2.2.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            При оформлении первого Заказа Личный кабинет Пользователя регистрируется
                                            автоматически. На электронную почту, указанную Пользователем при оформлении
                                            Заказа, приходит письмо со ссылкой для активации Личного кабинета, а также,
                                            информация о логине и пароле к нему. После активации ссылки Пользователь
                                            получает доступ в Личный кабинет.
                                        </p>
                                    </li>
                                    <li data-list-text="2.3.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Личный кабинет может быть также зарегистрирован Пользователем путем отправки
                                            заявки на регистрацию Личного кабинета через специальную форму. После
                                            заполнения регистрационной формы на указанную электронную почту Пользователя
                                            направляется ссылка для активации Личного кабинета, а также, информация о
                                            логине и пароле к нему. После активации ссылки Пользователь получает доступ
                                            в Личный кабинет.
                                        </p>
                                    </li>
                                    <li data-list-text="2.4.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Последующий доступ к Личному кабинету осуществляется при указании логина и
                                            пароля.
                                        </p>
                                        <ol id="l4">
                                            <li data-list-text="2.4.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '5pt',
                                                        paddingLeft: '5pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Связка «логин-пароль» является ключом простой электронной подписи и
                                                    позволяет подписывать договоры, акты и любые иные документы,
                                                    необходимые для оформления Заказа/Заявки и исполнения заключенных
                                                    Пользователем с Компанией договоров и соглашений. Пользователь
                                                    соглашается, что любой документ или информация, переданная через
                                                    Личный кабинет в электронной форме, а также, по номеру телефона или
                                                    адресу электронной почты, указанными Пользователем при регистрации
                                                    или оформлении Заказа/Заявки, считаются подписанными простой
                                                    электронной подписью и признаются электронным документом,
                                                    равнозначным документу на бумажном носителе, подписанному
                                                    собственноручной подписью по смыслу ст. 6 Федерального закона от
                                                    06.04.2011 N 63-ФЗ (ред. от 11.06.2021) "Об электронной подписи".
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="2.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Все действия, совершаемые в Личном кабинете, считаются совершенными
                                            Пользователем лично. Пользователь вправе зарегистрироваться на Сайте только
                                            один раз, т.е. может иметь только один Личный кабинет.
                                        </p>
                                    </li>
                                    <li data-list-text="2.6.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            При регистрации Личного кабинета Пользователь обязан предоставить полную,
                                            достоверную информацию о себе.
                                        </p>
                                    </li>
                                    <li data-list-text="2.7.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Регистрируясь на Сайте, оформляя Заказы/Заявки Пользователь соглашается с
                                            получением сообщений сервисного характера о состоянии Заказа/Заявки, деталях
                                            доставки и т.д. посредством смс-сообщений/электронных
                                            писем/мессенджеров/иным образом на номер телефона или на адрес электронной
                                            почты, указанный Пользователем при регистрации и/или оформлении
                                            Заказа/Заявки.
                                        </p>
                                    </li>
                                    <li data-list-text="2.8.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователь самостоятельно несет ответственность за сохранность своего
                                            логина и пароля, а также самостоятельно несет риск последствий в случае
                                            утери и/или разглашения логина и пароля третьим лицам.
                                        </p>
                                    </li>
                                    <li data-list-text="2.9.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            <span className="p">
                                                Сайт не предназначен и не может использоваться лицами в возрасте до 16
                                                лет. Проходя регистрацию, Пользователь гарантирует, что ему исполнилось
                                                16 лет. Если возраст Пользователя меньше 18 лет, он гарантирует, что он
                                                получил согласие своего законного представителя на использование Сайта и
                                                заключение сделок с Компанией в соответствии с условиями Соглашения и{' '}
                                            </span>
                                            <span className="s2">Публичной оферты</span>
                                            <span className="p">.</span>
                                        </p>
                                    </li>
                                    <li data-list-text="2.10.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В случае, если Пользователь неправильно указал регистрационные данные или
                                            ему не пришло сообщение на электронную почту о регистрации Личного кабинета
                                            со ссылкой
                                        </p>
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            <a
                                                href="mailto:hey@thecultt.com"
                                                className="s1"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                на его активацию, или он утратил доступ к Личному кабинету, он обязан
                                                немедленно уведомить об этом Администрацию по контактам, указанным на
                                                Сайте или по e-mail:{' '}
                                            </a>
                                            <a
                                                href="mailto:hey@thecultt.com"
                                                className="a"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                hey@thecultt.com
                                            </a>
                                            <a
                                                href="mailto:hey@thecultt.com"
                                                className="s1"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                .
                                            </a>
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={3}>
                                <h1
                                    style={{
                                        paddingTop: '5pt',
                                        paddingLeft: '22pt',
                                        textIndent: '-17pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    ПРАВА АДМИНИСТРАЦИИ
                                </h1>
                                <p
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '5pt',
                                        textIndent: '0pt',
                                        lineHeight: '14pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Администрация вправе:
                                </p>
                                <ol id="l5">
                                    <li data-list-text="3.1.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В любое время и без предварительного уведомления изменять содержание Сайта,
                                            в том числе, Контента и правовой документации, и свои контактные данные,
                                            содержащейся на Сайте.
                                        </p>
                                    </li>
                                    <li data-list-text="3.2.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Уступать и/или иным способом передавать свои права и обязанности, вытекающие
                                            из отношений с Пользователем, полностью или частично, третьим лицам без
                                            ограничений и без уведомлений Пользователя.
                                        </p>
                                    </li>
                                    <li data-list-text="3.3.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Привлекать любых третьих лиц для исполнения своих обязательств перед
                                            Пользователем.
                                        </p>
                                    </li>
                                    <li data-list-text="3.4.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Без предварительного уведомления Пользователя прекратить и/или заблокировать
                                            ему доступ к Сайту, если Пользователь нарушил условия настоящего Соглашения
                                            или положения правовых документов, содержащихся на Сайте, а также в случае
                                            прекращения действия Сайта либо по причине технической неполадки или
                                            проблемы.
                                        </p>
                                    </li>
                                    <li data-list-text="3.5.">
                                        <p
                                            style={{
                                                paddingLeft: '40pt',
                                                textIndent: '-35pt',
                                                lineHeight: '14pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Устанавливать любые ограничения на использование Сайта.
                                        </p>
                                    </li>
                                    <li data-list-text="3.6.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Осуществлять запись телефонных разговоров с Пользователем. Запись
                                            телефонного разговора может храниться Компанией (или третьим лицом по
                                            поручению Компании) не более 3 (трех) лет и после истечения этого срока
                                            подлежит уничтожению. При этом Компания обязуется предотвращать попытки
                                            несанкционированного доступа к информации, полученной в ходе телефонных
                                            переговоров и/или передачу ее третьим лицам, не уполномоченных Компанией или
                                            не имеющим непосредственного отношения к исполнению принятых на себя
                                            Администрацией обязательств, за исключением запроса об этом в порядке,
                                            предусмотренном действующим законодательством Российской Федерации.
                                        </p>
                                    </li>
                                    <li data-list-text="3.7.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Изменить условия настоящего Соглашения в одностороннем порядке в любое
                                            время. Измененное Соглашение публикуется на Сайте и вступает в силу с
                                            момента публикации на Сайте. Продолжая использовать Сайт после внесения
                                            изменений и/или дополнений в Соглашение, Пользователь выражает этим своё
                                            принятие и согласие с такими изменениями и/или дополнениями Соглашения.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={4}>
                                <h1
                                    style={{
                                        paddingTop: '5pt',
                                        paddingLeft: '22pt',
                                        textIndent: '-17pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    ОТВЕТСТВЕННОСТЬ, ГАРАНТИИ И ОГРАНИЧЕНИЯ
                                </h1>
                                <ol id="l6">
                                    <li data-list-text="4.1.">
                                        <p
                                            style={{
                                                paddingTop: '5pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Сопровождающие Товар фотографии являются простыми иллюстрациями к нему и
                                            могут незначительно отличаться от фактического внешнего вида Товара.
                                            Сопровождающие Товар описания/характеристики могут содержать
                                            опечатки/пробелы. Учитывая специфику передачи изображения Товара при
                                            фотографировании, а также визуального отображения на экране технических
                                            устройств, через которых Пользователь осуществляет пользование Сайтом, цвет
                                            Товара, а также иные характеристики Товара могут незначительно отличаться от
                                            реальных характеристик. Для уточнения информации о Товаре Пользователь
                                            должен обратиться к Администрации по телефону или электронной почте,
                                            указанным на Сайте.
                                        </p>
                                    </li>
                                    <li data-list-text="4.2.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Администрация не дает никаких гарантий, явных или подразумеваемых, в
                                            отношении всего Сайта или его части, а также Контента.
                                        </p>
                                    </li>
                                    <li data-list-text="4.3.">
                                        <p
                                            style={{
                                                paddingLeft: '40pt',
                                                textIndent: '-35pt',
                                                lineHeight: '14pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Администрация не несет ответственности:
                                        </p>
                                        <ol id="l7">
                                            <li data-list-text="4.3.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '5pt',
                                                        paddingLeft: '40pt',
                                                        textIndent: '-35pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    за безопасность логина и/или пароля Пользователя;
                                                </p>
                                            </li>
                                            <li data-list-text="4.3.2.">
                                                <p
                                                    style={{
                                                        paddingLeft: '5pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    перед Пользователями за любой прямой или косвенный ущерб, независимо
                                                    от его причин, происхождения, характера и последствий, полученный в
                                                    результате просмотра или использования Сайта;
                                                </p>
                                            </li>
                                            <li data-list-text="4.3.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '5pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    за полное или частичное неисполнение своих обязательств, если
                                                    неисполнение является следствием таких обстоятельств непреодолимой
                                                    силы, которые возникли независимо от воли Администрации.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="4.4.">
                                        <p
                                            style={{
                                                paddingTop: '5pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Администрация не обязана оказывать консультационную и техническую поддержку
                                            Пользователю.
                                        </p>
                                    </li>
                                    <li data-list-text="4.5.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Сайт может быть временно частично или полностью недоступен по причине
                                            проведения профилактических или иных работ или по любым другим причинам
                                            технического характера. Администрация имеет право периодически проводить
                                            необходимые профилактические или иные работы с предварительным уведомлением
                                            Пользователей или без такового.
                                        </p>
                                    </li>
                                    <li data-list-text="4.6.">
                                        <p
                                            style={{
                                                paddingLeft: '40pt',
                                                textIndent: '-35pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователю запрещается:
                                        </p>
                                        <ol id="l8">
                                            <li data-list-text="4.6.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '5pt',
                                                        paddingLeft: '5pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    использовать любые устройства, программы, процедуры, алгоритмы и
                                                    методы, автоматические устройства или эквивалентные ручные процессы
                                                    для доступа, приобретения, копирования или отслеживания содержания
                                                    Сайта;
                                                </p>
                                            </li>
                                            <li data-list-text="4.6.2.">
                                                <p
                                                    style={{
                                                        paddingLeft: '5pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    предпринимать действия, прямо или косвенно направленные на
                                                    причинение вреда Сайту и/или Администрации.
                                                </p>
                                            </li>
                                            <li data-list-text="4.6.3.">
                                                <p
                                                    style={{
                                                        paddingLeft: '5pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    использовать Сайт, Контент в любых целях, запрещенных
                                                    законодательством Российской Федерации.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="4.7.">
                                        <p
                                            style={{
                                                paddingTop: '5pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователь соглашается с тем, что в случае нарушения им условий настоящего
                                            Соглашения, каких-либо требований законодательства или прав третьих лиц,
                                            повлекшего убытки Компании вследствие предъявления к ней претензий, исков
                                            и/или прямых и косвенных требований о возмещении ущерба/выплаты штрафов,
                                            Пользователь обязуется возместить любые такие убытки и расходы Компании, в
                                            том числе, на юридическую помощь.
                                        </p>
                                    </li>
                                    <li data-list-text="4.8.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Администрация предпринимает необходимые меры, предназначенные для
                                            обеспечения безопасности данных, предоставляемых Пользователями через Сайт.
                                            Тем не менее, Администрация не может контролировать все риски, связанные с
                                            работой сети Интернет. Пользователь понимает и соглашается, что предоставляя
                                            свои данные через Сайт, он осознаёт все потенциальные риски, которые могут
                                            возникнуть по независящим от Администрации причинам.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={5}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '22pt',
                                        textIndent: '-17pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    ПЕРСОНАЛЬНЫЕ ДАННЫЕ И ФАЙЛЫ COOKIE
                                </h1>
                                <ol id="l9">
                                    <li data-list-text="5.1.">
                                        <p
                                            style={{
                                                paddingTop: '5pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            <span className="p">
                                                Положения, касающиеся обработки персональных данных и файлов cookie,
                                                содержатся в{' '}
                                            </span>
                                            <span className="s2">«Положении об обработке персональных данных».</span>
                                        </p>
                                    </li>
                                    <li data-list-text="5.2.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если Администрации становится известно, что Пользователь передал данные
                                            третьих лиц, то Администрация вправе отказаться от обработки таких данных и
                                            от заключения и исполнения каких-либо договоров и соглашений с их
                                            использованием.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={6}>
                                <h1
                                    style={{
                                        paddingTop: '5pt',
                                        paddingLeft: '22pt',
                                        textIndent: '-17pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    ЦЕНЫ И АКЦИИ
                                </h1>
                                <ol id="l10">
                                    <li data-list-text="6.1.">
                                        <p
                                            style={{
                                                paddingTop: '5pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Цены на Товары, указанные на Сайте, могут быть изменены Администрацией в
                                            одностороннем порядке без предварительного уведомления (до подтверждения
                                            Администрацией оформления Заказа).
                                        </p>
                                    </li>
                                    <li data-list-text="6.2.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Условия в покупки Товаров, оформления Заказов и Заявок, содержатся в
                                            Публичной оферте. Пользователь, желающий оформить Заказ или Заявку, обязан
                                            ознакомиться и принять условия Публичной оферты.
                                        </p>
                                    </li>
                                    <li data-list-text="6.3.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Администрация вправе организовывать любые акции, размещать скидки, проводить
                                            конкурсы, устанавливать систему бонусов и т.д. на Сайте, в том числе, в
                                            маркетинговых целях и целях стимулирования покупательского спроса. Виды
                                            акций, скидок, бонусов, конкурсов, порядок и условия их
                                            проведения/начисления определяются Администрацией самостоятельно,
                                            размещаются на Сайте и могут быть изменены Администрацией в одностороннем
                                            порядке. Если не указано иное, акции/скидки/специальные предложения,
                                        </p>
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            размещенные на Сайте, не суммируются, а условия их проведения/предоставления
                                            имеют превалирующую силу над условиями, содержащимися в правовых документах
                                            на Сайте. Если не указано иное, всё, что не урегулировано в правилах
                                            проведения таких акций/конкурсов и т.д., регулируется положениями настоящего
                                            Соглашения и Публичной оферты, размещенной на Сайте.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={7}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '22pt',
                                        textIndent: '-17pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ДЕЙСТВИТЕЛЬНОСТЬ ПОЛОЖЕНИЙ СОГЛАШЕНИЯ
                                </h1>
                                <ol id="l11">
                                    <li data-list-text="7.1.">
                                        <p
                                            style={{
                                                paddingTop: '5pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В случае, если любой из пунктов настоящего Соглашения станет
                                            недействительным, в том числе, из-за изменения законодательства или решения
                                            суда, это никак не влияет на действительность других условий настоящего
                                            Соглашения.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={8}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '22pt',
                                        textIndent: '-17pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ПРИМЕНИМОЕ ЗАКОНОДАТЕЛЬСТВО И СПОРЫ
                                </h1>
                                <ol id="l12">
                                    <li data-list-text="8.1.">
                                        <p
                                            style={{
                                                paddingTop: '5pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Использование Сайта, его сервисов и функционала, использование Контента, а
                                            также, передача Пользователем каких-либо данных и материалов в адрес
                                            Компании, регулируется нормами действующего законодательства Российской
                                            Федерации без учета коллизионных норм вне зависимости от места
                                            нахождения/жительства/гражданства Пользователя.
                                        </p>
                                    </li>
                                    <li data-list-text="8.2.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Любые споры, связанные с использованием Сайта, исполнением настоящего
                                            Соглашения, разрешаются ими путем переговоров. При недостижении Сторонами
                                            соглашения споры подлежат рассмотрению и разрешению в соответствии с
                                            законодательством Российской Федерации.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={9}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '22pt',
                                        textIndent: '-17pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ПРОЧИЕ УСЛОВИЯ
                                </h1>
                                <ol id="l13">
                                    <li data-list-text="9.1.">
                                        <p
                                            style={{
                                                paddingTop: '5pt',
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Ничто в рамках настоящего Соглашения не может пониматься как установление
                                            между Пользователем и Администрацией отношений, прямо не предусмотренных
                                            Соглашением.
                                        </p>
                                    </li>
                                    <li data-list-text="9.2.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Обращения и сообщения в адрес Компании направляются по телефону или
                                            электронной почте, указанным на Сайте.
                                        </p>
                                    </li>
                                    <li data-list-text="9.3.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Общение Пользователя с Администрацией должно строиться на принципах
                                            общепринятой морали и коммуникационного этикета. Строго запрещено
                                            использование нецензурных слов, брани, оскорбительных выражений вне
                                            зависимости от того, в каком виде и кому они адресованы.
                                        </p>
                                    </li>
                                    <li data-list-text="9.4.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователь вправе связаться с Администрацией по вопросам работы Сайта,
                                            Компании, о Товарах и условиях их приобретения, оформления Заказов и Заявок.
                                            Администрация предоставляет информацию, предоставление которой необходимо в
                                            соответствии с действующим законодательством Российской Федерации.
                                        </p>
                                    </li>
                                    <li data-list-text="9.5.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания освобождается от ответственности за неисполнение или ненадлежащее
                                            исполнение обязательств, если оно вызвано действием обстоятельств
                                            непреодолимой силы. Под обстоятельствами непреодолимой силы понимаются
                                            чрезвычайные и непредотвратимые при данных условиях обстоятельства,
                                            препятствующие исполнению своих обязательств Компанией. Пользователь не
                                            вправе требовать компенсацию и/или возмещение ущерба, причиненного ему в
                                            результате невозможности исполнения обязательств ввиду наступления
                                            обстоятельств непреодолимой силы.
                                        </p>
                                    </li>
                                    <li data-list-text="9.6.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В случае нарушения Пользователем любого из положений настоящего Соглашения,
                                            Пользователь обязан прекратить использование Сайта, его функционала и
                                            сервисов и покинуть его. Администрация вправе заблокировать доступ к Сайту и
                                            Личному кабинету такого Пользователя.
                                        </p>
                                    </li>
                                    <li data-list-text="9.7.">
                                        <p
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Помимо настоящего Соглашения, отношения между Пользователем и Администрацией
                                            регулируются прочими правовыми положениями, расположенными на Сайте.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
                            <br />
                        </p>
                        <p
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'justify',
                            }}
                        >
                            Контактная информация и реквизиты Администрации:
                        </p>
                        <p
                            className="s3"
                            style={{
                                paddingTop: '3pt',
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            <a href="mailto:hey@thecultt.com" className="s1" target="_blank" rel="noreferrer">
                                E-mail:{' '}
                            </a>
                            <a href="mailto:hey@thecultt.com" className="a" target="_blank" rel="noreferrer">
                                hey@thecultt.com
                            </a>{' '}
                            <span style={{ color: '#000' }}>Телефон: +7 499 992 80 47</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqUserAgreement;
