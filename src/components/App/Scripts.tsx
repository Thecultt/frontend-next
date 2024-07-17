'use client';

import React from 'react';
import Script from 'next/script';

import { GOOGLE_TAG_ID, YANDEX_METRIC_ID } from '@/constants/env';

export const Scripts = () => (
    <>
        {/* <!-- Start Google tag (gtag.js) --> */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`} strategy="lazyOnload" />
        <Script id="gtag">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', '${GOOGLE_TAG_ID}');
            `}
        </Script>
        {/* <!-- End Google tag (gtag.js) --> */}

        {/* <!-- Start Google Tag Manager --> */}
        <Script id="google-tag-manager">
            {`
                (function (w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js',
                    });
                    var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-KT8B5P4');
            `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Start Mindbox --> */}
        <Script
            src="https://api.mindbox.ru/scripts/v1/tracker.js"
            strategy="lazyOnload"
            onLoad={() => {
                const mindbox =
                    window.mindbox ||
                    function () {
                        // eslint-disable-next-line prefer-rest-params
                        mindbox.queue.push(arguments);
                    };
                mindbox.queue = mindbox.queue || [];
                mindbox('create');
            }}
        />
        {/* <!-- End Mindbox --> */}

        {/* <!-- Start Yandex.Metrika counter --> */}
        <Script id="yandex-metrika">
            {`
                (function (m, e, t, r, i, k, a) {
                    m[i] =
                    m[i] ||
                    function () {
                        (m[i].a = m[i].a || []).push(arguments);
                    };
                    m[i].l = 1 * new Date();
                    for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) {
                        return;
                    }
                    }
                    (k = e.createElement(t)),
                    (a = e.getElementsByTagName(t)[0]),
                    (k.async = 1),
                    (k.src = r),
                    a.parentNode.insertBefore(k, a);
                })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

                ym(${YANDEX_METRIC_ID}, 'init', {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                    ecommerce: 'dataLayer',
                });
            `}
        </Script>
        {/* <!-- End Yandex.Metrika counter --> */}

        {/* <!-- Start Varioqub experiments --> */}
        <Script id="yandex-varioqub">
            {`
                (function (e, x, pe, r, i, me, nt) {
                    (e[i] =
                    e[i] ||
                    function () {
                        (e[i].a = e[i].a || []).push(arguments);
                    }),
                    (me = x.createElement(pe)),
                    (me.async = 1),
                    (me.src = r),
                    (nt = x.getElementsByTagName(pe)[0]),
                    nt.parentNode.insertBefore(me, nt);
                })(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');

                ymab('metrika.${YANDEX_METRIC_ID}', 'init' /*, {clientFeatures}, {callback}*/);
            `}
        </Script>
        {/* <!-- End Varioqub experiments --> */}

        <Script
            src="https://pay.yandex.ru/sdk/v1/pay.js"
            strategy="lazyOnload"
            onLoad={() => console.log('YandexPay loaded')}
        />

        <Script
            src="https://widget.cloudpayments.ru/bundles/cloudpayments.js"
            strategy="lazyOnload"
            onLoad={() => console.log('CloudPayments loaded')}
        />

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-KT8B5P4"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        {/* <!-- Start Yandex.Metrika counter (noscript) --> */}
        <noscript>
            <div>
                <img src="https://mc.yandex.ru/watch/68184745" style={{ position: 'absolute', left: -9999 }} alt="" />
            </div>
        </noscript>
        {/* <!-- End Yandex.Metrika counter (noscript) --> */}
    </>
);
