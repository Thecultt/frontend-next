'use client';

import React from 'react';

import { FaqBreadCrumbs } from '@/components';

const FaqPublicOfferte: React.FC = () => {
    return (
        <section className="faq">
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html: '\n\t\t\t.faq-text h1 {\n\t\t\t\tfont-size: 14px;\n\t\t\t\tmargin-bottom: 5px;\n\t\t\t}\n            .p,\n            p {\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n                margin: 0pt;\n            }\n            .a {\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            .s2 {\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: bold;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            .s3 {\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            .s4 {\n                color: #0462c1;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: underline;\n                font-size: 14px;\n            }\n            .faq .faq li {\n                display: block;\n            }\n            #l1 {\n                padding-left: 0pt;\n                counter-reset: c1 1;\n            }\n            #l1 > li > *:first-child:before {\n                counter-increment: c1;\n                content: counter(c1, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l1 > li:first-child > *:first-child:before {\n                counter-increment: c1 0;\n            }\n            .faq li {\n                display: block;\n            }\n            #l2 {\n                padding-left: 0pt;\n            }\n            #l2 > li > *:first-child:before {\n                content: "● ";\n                color: black;\n                font-family: Arial, sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n            }\n            .faq li {\n                display: block;\n            }\n            #l3 {\n                padding-left: 0pt;\n                counter-reset: e1 1;\n            }\n            #l3 > li > *:first-child:before {\n                counter-increment: e1;\n                content: counter(e1, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: bold;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l3 > li:first-child > *:first-child:before {\n                counter-increment: e1 0;\n            }\n            #l4 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l4 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l4 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l5 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l5 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l5 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l6 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l6 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l6 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l7 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l7 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l7 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l8 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l8 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l8 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l9 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l9 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l9 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l10 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l10 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l10 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l11 {\n                padding-left: 0pt;\n            }\n            #l11 > li > *:first-child:before {\n                content: "● ";\n                color: black;\n                font-family: Arial, sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l12 {\n                padding-left: 0pt;\n            }\n            #l12 > li > *:first-child:before {\n                content: "● ";\n                color: black;\n                font-family: Arial, sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l13 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l13 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l13 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l14 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l14 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l14 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l15 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l15 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l15 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l16 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l16 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l16 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l17 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l17 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l17 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l18 {\n                padding-left: 0pt;\n                counter-reset: g1 1;\n            }\n            #l18 > li > *:first-child:before {\n                counter-increment: g1;\n                content: counter(g1, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l18 > li:first-child > *:first-child:before {\n                counter-increment: g1 0;\n            }\n            #l19 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l19 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l19 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l20 {\n                padding-left: 0pt;\n            }\n            #l20 > li > *:first-child:before {\n                content: "● ";\n                color: black;\n                font-family: Arial, sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l21 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l21 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l21 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l22 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l22 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l22 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l23 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l23 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l23 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l24 {\n                padding-left: 0pt;\n            }\n            #l24 > li > *:first-child:before {\n                content: "● ";\n                color: black;\n                font-family: Arial, sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n            }\n            #l25 {\n                padding-left: 0pt;\n            }\n            #l25 > li > *:first-child:before {\n                content: "● ";\n                color: black;\n                font-family: Arial, sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n            }\n            #l26 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l26 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l26 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l27 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l27 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l27 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l28 {\n                padding-left: 0pt;\n            }\n            #l28 > li > *:first-child:before {\n                content: "● ";\n                color: black;\n                font-family: Arial, sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l29 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l29 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l29 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l30 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l30 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l30 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l31 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l31 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l31 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l32 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l32 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l32 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l33 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l33 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l33 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l34 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l34 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l34 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l35 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l35 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l35 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l36 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l36 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l36 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l37 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l37 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l37 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l38 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l38 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l38 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l39 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l39 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l39 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l40 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l40 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l40 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l41 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l41 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l41 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l42 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l42 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l42 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l43 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l43 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l43 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l44 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l44 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l44 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l45 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l45 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l45 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l46 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l46 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l46 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l47 {\n                padding-left: 0pt;\n            }\n            #l47 > li > *:first-child:before {\n                content: "● ";\n                color: black;\n                font-family: Arial, sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l48 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l48 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l48 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l49 {\n                padding-left: 0pt;\n                counter-reset: l1 1;\n            }\n            #l49 > li > *:first-child:before {\n                counter-increment: l1;\n                content: counter(l1, decimal) ") ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l49 > li:first-child > *:first-child:before {\n                counter-increment: l1 0;\n            }\n            #l50 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l50 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l50 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l51 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l51 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l51 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l52 {\n                padding-left: 0pt;\n                counter-reset: m1 1;\n            }\n            #l52 > li > *:first-child:before {\n                counter-increment: m1;\n                content: counter(m1, decimal) ") ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l52 > li:first-child > *:first-child:before {\n                counter-increment: m1 0;\n            }\n            #l53 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l53 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l53 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l54 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l54 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l54 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l55 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l55 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l55 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l56 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l56 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l56 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l57 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l57 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l57 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l58 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l58 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l58 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l59 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l59 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l59 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l60 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l60 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l60 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l61 {\n                padding-left: 0pt;\n            }\n            #l61 > li > *:first-child:before {\n                content: "● ";\n                color: black;\n                font-family: Arial, sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l62 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l62 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l62 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l63 {\n                padding-left: 0pt;\n                counter-reset: e3 2;\n            }\n            #l63 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l63 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l64 {\n                padding-left: 0pt;\n                counter-reset: o1 1;\n            }\n            #l64 > li > *:first-child:before {\n                counter-increment: o1;\n                content: counter(o1, decimal) ") ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l64 > li:first-child > *:first-child:before {\n                counter-increment: o1 0;\n            }\n            #l65 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l65 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l65 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l66 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l66 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l66 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l67 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l67 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l67 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l68 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l68 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l68 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l69 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l69 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l69 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l70 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l70 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l70 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l71 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l71 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l71 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l72 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l72 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l72 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l73 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l73 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l73 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l74 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l74 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l74 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l75 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l75 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l75 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l76 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l76 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l76 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l77 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l77 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l77 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l78 {\n                padding-left: 0pt;\n            }\n            #l78 > li > *:first-child:before {\n                content: "● ";\n                color: black;\n                font-family: Arial, sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l79 {\n                padding-left: 0pt;\n                counter-reset: e2 1;\n            }\n            #l79 > li > *:first-child:before {\n                counter-increment: e2;\n                content: counter(e1, decimal) "." counter(e2, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l79 > li:first-child > *:first-child:before {\n                counter-increment: e2 0;\n            }\n            #l80 {\n                padding-left: 0pt;\n                counter-reset: q1 1;\n            }\n            #l80 > li > *:first-child:before {\n                counter-increment: q1;\n                content: counter(q1, decimal) ") ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l80 > li:first-child > *:first-child:before {\n                counter-increment: q1 0;\n            }\n            #l81 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l81 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l81 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            #l82 {\n                padding-left: 0pt;\n                counter-reset: e3 1;\n            }\n            #l82 > li > *:first-child:before {\n                counter-increment: e3;\n                content: counter(e1, decimal) "." counter(e2, decimal) "."\n                    counter(e3, decimal) ". ";\n                color: black;\n                font-family: "Manrope", sans-serif;\n                font-style: normal;\n                font-weight: normal;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            #l82 > li:first-child > *:first-child:before {\n                counter-increment: e3 0;\n            }\n            table,\n            tbody {\n                vertical-align: top;\n                overflow: visible;\n            }\n        ',
                }}
            />

            <div className="container">
                <div className="faq-wrapper">
                    <FaqBreadCrumbs title="Публичная Оферта" />

                    <div className="faq-text">
                        <h3 className="faq-text__title">Публичная Оферта</h3>

                        <p className="faq-text__description">
                            Привет! Спасибо, что выбрали The Cultt!
                            <br />
                            <br />
                            Наша цель – создать удобную ресейл-платформу, с понятным интерфейсом, дружелюбным
                            пользовательским опытом и прозрачными и добросовестными правилами работы.
                            <br />
                            <br />
                            Поэтому, пожалуйста, ознакомьтесь с текстом настоящей Публичной оферты. Выполняя любое из
                            действий - оформляя Заказы, подавая Заявки, регистрируясь на Сайте, Вы подтверждаете своё
                            безоговорочное согласие с условиями, изложенными ниже. Если вы не согласны с какими-либо
                            положениями настоящей оферты, вы не можете оформить Заказ/Заявку.
                            <br />
                            <br />
                            Настоящая Публичная оферта в соответствии со ст.ст. 435 и 437 Гражданского кодекса
                            Российской Федерации (далее - ГК РФ) является предложением Компании ООО «Культ», обращенным
                            к неопределённому кругу лиц, и вместе с Пользовательским соглашением определяет для этих лиц
                            условия: посещения, использования Сайта https://thecultt.com, Бота, заключения с Компанией
                            договора купли-продажи Товаров, передачи имущества на выкуп, реализацию и обмен по
                            «трейд-ин», а также, иных правоотношений, связанных с этим (далее – Оферта).
                        </p>

                        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
                            <br />
                        </p>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'justify',
                            }}
                        >
                            Оферта состоит из следующих разделов:
                        </h1>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
                            <br />
                        </p>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            ОСНОВНЫЕ ПОНЯТИЯ
                        </h1>
                        <ol id="l1">
                            <li data-list-text={1}>
                                <p
                                    style={{
                                        paddingLeft: '29pt',
                                        textIndent: '-24pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ОБЩИЕ ПОЛОЖЕНИЯ
                                </p>
                            </li>
                            <li data-list-text={2}>
                                <p
                                    style={{
                                        paddingTop: '3pt',
                                        paddingLeft: '29pt',
                                        textIndent: '-24pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ПРАВА И ОБЯЗАННОСТИ СТОРОН
                                </p>
                                <p
                                    style={{
                                        textIndent: '0pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    <br />
                                </p>
                                <h1
                                    style={{
                                        paddingLeft: '5pt',
                                        textIndent: '0pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    УСЛОВИЯ ДОГОВОРА РОЗНИЧНОЙ КУПЛИ-ПРОДАЖИ ТОВАРОВ ДЛЯ ПОКУПАТЕЛЕЙ
                                </h1>
                            </li>
                            <li data-list-text={3}>
                                <p
                                    style={{
                                        paddingLeft: '5pt',
                                        textIndent: '0pt',
                                        lineHeight: '123%',
                                        textAlign: 'left',
                                    }}
                                >
                                    ПРЕДМЕТ ОФЕРТЫ НА ЗАКЛЮЧЕНИЕ ДОГОВОРА РОЗНИЧНОЙ КУПЛИ-ПРОДАЖИ ТОВАРОВ
                                </p>
                            </li>
                            <li data-list-text={4}>
                                <p
                                    style={{
                                        paddingLeft: '29pt',
                                        textIndent: '-24pt',
                                        lineHeight: '13pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ОФОРМЛЕНИЕ ЗАКАЗА И УСЛОВИЯ ВЫПОЛНЕНИЯ ЗАКАЗА
                                </p>
                            </li>
                            <li data-list-text={5}>
                                <p
                                    style={{
                                        paddingTop: '3pt',
                                        paddingLeft: '29pt',
                                        textIndent: '-24pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ОПЛАТА ЗАКАЗА
                                </p>
                            </li>
                            <li data-list-text={6}>
                                <p
                                    style={{
                                        paddingTop: '3pt',
                                        paddingLeft: '29pt',
                                        textIndent: '-24pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ДОСТАВКА ЗАКАЗА
                                </p>
                            </li>
                            <li data-list-text={7}>
                                <p
                                    style={{
                                        paddingTop: '3pt',
                                        paddingLeft: '29pt',
                                        textIndent: '-24pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ВОЗВРАТ ТОВАРА
                                </p>
                            </li>
                            <li data-list-text={8}>
                                <p
                                    style={{
                                        paddingTop: '3pt',
                                        paddingLeft: '29pt',
                                        textIndent: '-24pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    УСЛОВИЯ ЭКСПЛУАТАЦИИ ТОВАРА
                                </p>
                            </li>
                            <li data-list-text={9}>
                                <p
                                    style={{
                                        paddingTop: '3pt',
                                        paddingLeft: '29pt',
                                        textIndent: '-24pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ
                                </p>
                            </li>
                            <li data-list-text={10}>
                                <p
                                    style={{
                                        paddingTop: '3pt',
                                        paddingLeft: '41pt',
                                        textIndent: '-36pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ОТВЕТСТВЕННОСТЬ
                                </p>
                            </li>
                            <li data-list-text={11}>
                                <p
                                    style={{
                                        paddingTop: '3pt',
                                        paddingLeft: '41pt',
                                        textIndent: '-36pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    РАЗРЕШЕНИЕ СПОРОВ
                                </p>
                            </li>
                            <li data-list-text={12}>
                                <p
                                    style={{
                                        paddingTop: '3pt',
                                        paddingLeft: '41pt',
                                        textIndent: '-36pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ПРОЧИЕ УСЛОВИЯ
                                </p>
                            </li>
                        </ol>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
                            <br />
                        </p>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            ОБЩИЕ УСЛОВИЯ ПОДАЧИ ФИЗИЧЕСКИМ ЛИЦОМ ЗАЯВКИ НА ВЫКУП/ПЕРЕДАЧУ НА РЕАЛИЗАЦИЮ СВОЕГО
                            ИМУЩЕСТВА
                        </h1>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
                            <br />
                        </p>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            УСЛОВИЯ ВЫКУПА КОМПАНИЕЙ ИМУЩЕСТВА ФИЗИЧЕСКИХ ЛИЦ (УСЛОВИЯ ДОГОВОРА КУПЛИ-ПРОДАЖИ)
                        </h1>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
                            <br />
                        </p>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            УСЛОВИЯ ПРИНЯТИЯ КОМПАНИЕЙ ИМУЩЕСТВА ФИЗИЧЕСКИХ ЛИЦ ДЛЯ РЕАЛИЗАЦИИ ПО ДОГОВОРУ КОМИССИИ
                            (УСЛОВИЯ ДОГОВОРА КОМИССИИ)
                        </h1>
                        <h1
                            style={{
                                paddingTop: '3pt',
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            ОБЩИЕ УСЛОВИЯ ОБМЕНА ФИЗИЧЕСКИМИ ЛИЦАМИ СВОЕГО ИМУЩЕСТВА НА ТОВАР (ТРЕЙД-ИН)
                        </h1>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
                            <br />
                        </p>
                        <h1
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            УСЛОВИЯ ОБМЕНА КОМПАНИЕЙ ТОВАРОВ НА ИМУЩЕСТВО ФИЗИЧЕСКИХ ЛИЦ (УСЛОВИЯ ДОГОВОРА МЕНЫ)
                        </h1>
                        <h1
                            style={{
                                paddingTop: '3pt',
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'left',
                            }}
                        >
                            ОСНОВНЫЕ ПОНЯТИЯ
                        </h1>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
                            <br />
                        </p>
                        <ul id="l2">
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Компания
                                    <span className="p">— ООО «КУЛЬТ», ОГРН 1227700002936, ИНН 9702040064, адрес:</span>
                                </h1>
                                <p
                                    style={{
                                        paddingLeft: '40pt',
                                        textIndent: '0pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    127051, г. Москва, вн. тер. г. муниципальный округ Мещанский, ул. Трубная, д. 25,
                                    стр. 3.
                                </p>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Сайт
                                    <a href="https://thecultt.com/" className="a" target="_blank" rel="noreferrer">
                                        – веб-сайт Компании, расположенный в сети Интернет по адресу{' '}
                                    </a>
                                    <span className="p">https://thecultt.com.</span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Бот -
                                    <span className="p">
                                        бот Компании в мессенджере Telegram по адресу https://t.me/thecultt_bot.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Товар
                                    <span className="p">
                                        — товары бывшие в употреблении, предлагаемые Компанией к покупке физическими
                                        лицами исключительно для личных нужд, не связанных с осуществлением
                                        предпринимательской деятельности, ассортимент и характеристики которых
                                        представлены на Сайте.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Пользователь
                                    <span className="p">
                                        - лицо, получающее доступ к сервисам и информации, расположенным на Сайте,
                                        осуществляющее просмотр Контента и использующее Сайт и его функционал и/или
                                        использующее Бот. Лица, определяемые в Оферте как Покупатель, Продавец и
                                        Комитент также являются Пользователями и обозначаются этим термином по тексту
                                        Оферты.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Покупатель
                                    <span className="p">
                                        — Пользователь, приобретающий Товары на Сайте (оформивший Заказ на покупку
                                        Товаров в розницу) исключительно для личных нужд, не связанных с осуществлением
                                        предпринимательской деятельности.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Продавец
                                    <span className="p">
                                        - Пользователь, чья Заявка на выкуп/обмен имущества одобрена Компанией, и
                                        заключивший с Компанией договор купли-продажи/мены своего имущества.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Комитент
                                    <span className="p">
                                        – Пользователь, чья Заявка на принятие имущества на реализацию одобрена
                                        Компанией, заключивший с Компанией договор комиссии для реализации своего
                                        имущества.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Заказ
                                    <span className="p">
                                        — должным образом оформленный и размещённый̆ на Сайте запрос Пользователя на
                                        покупку выбранного им Товара.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Заявка
                                    <span className="p">
                                        – должным образом оформленная и размещённая на Сайте или через Бот заявка
                                        Пользователя на продажу своего имущества Компании, передачу его Компании для
                                        реализации или обмена по «трейд-ин».
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Трейд-ин
                                    <span className="p">
                                        - передача Пользователем своего имущества Компании в зачет стоимости выбранного
                                        Товара. Оформляется путем заключения договора мены.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Опция «Круговорот»
                                    <span className="p">
                                        – возможность обменять имущество, ранее купленное у Компании, на Товар на особых
                                        условиях, указанных в Оферте.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Аутентификация
                                    <span className="p">
                                        – проверка имущества на оригинальность его происхождения и соответствия
                                        заявленной марке/бренду.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Реализация
                                    <span className="p">
                                        – розничная продажа имущества физического лица, заключившего с Компанией договор
                                        Комиссии для реализации этого имущества.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Личный кабинет
                                    <span className="p">
                                        — учетная запись Пользователя на Сайте, с помощью которого Пользователь может
                                        реализовывать функционал Сайта по оформлению Заказов и Заявок.
                                    </span>
                                </h1>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Контент
                                    <span className="p">
                                        — результаты интеллектуальной деятельности, составляющие информационное
                                        наполнение Сайта и Бота (расположенные на Сайте и в Боте охраняемые результаты
                                        интеллектуальной деятельности, включая, но не ограничиваясь: тексты, программное
                                        обеспечение, структуры, базы данных,
                                    </span>
                                </h1>
                                <p
                                    style={{
                                        paddingTop: '3pt',
                                        paddingLeft: '40pt',
                                        textIndent: '0pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    анимация, фотографии, иллюстрации, звуки, статьи, таблицы, диаграммы, логотипы,
                                    товарные знаки, дизайн, формы, сервисы, верстка, графические, текстовые,
                                    фотографические, производные, составные и иные произведения и другие объекты
                                    интеллектуальной собственности все вместе и/или по отдельности, содержащиеся на
                                    Сайте в и Боте).
                                </p>
                            </li>
                            <li data-list-text="●">
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '40pt',
                                        textIndent: '-35pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Служба доставки
                                    <span className="p">
                                        — собственная служба доставки Компании (курьер The Cultt) или третьи лица,
                                        оказывающие по поручению Компании услуги по доставке Товаров Пользователям и
                                        имущества Пользователей Компании.
                                    </span>
                                </h1>
                            </li>
                        </ul>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}>
                            <br />
                        </p>
                        <ol id="l3">
                            <li data-list-text={1}>
                                <h1
                                    style={{
                                        paddingTop: '10pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ОБЩИЕ ПОЛОЖЕНИЯ
                                </h1>
                                <ol id="l4">
                                    <li data-list-text="1.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователь гарантирует, что обладает необходимой дееспособностью, а равно
                                            всеми правами и полномочиями, необходимыми и достаточными для заключения и
                                            исполнения Договоров, предложение о заключении которых содержится в Оферте.
                                        </p>
                                    </li>
                                    <li data-list-text="1.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Условия Оферты могут быть изменены Компанией в одностороннем порядке без
                                            уведомления кого-либо. Новая редакция Оферты вступает в силу с момента ее
                                            опубликования на Сайте. После акцепта Пользователем Оферты, её условия
                                            остаются неизменными до исполнения им и Компанией своих обязательств друг
                                            перед другом в рамках действующего Договора, если не согласовано иное.
                                        </p>
                                    </li>
                                    <li data-list-text="1.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Оформлять Заказы Пользователь вправе через Личный кабинет или без такового.
                                            Подавать Заявки пользователь вправе только через Личный кабинет. Чтобы
                                            получить доступ к Личному кабинету, Пользователю необходимо оформить первый
                                            Заказ или заполнить специальную регистрационную форму на Сайте. Правила
                                            регистрации Личного кабинета содержатся в Пользовательском соглашении.
                                        </p>
                                    </li>
                                    <li data-list-text="1.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователь вправе заключить с Компанией любой из предусмотренных настоящей
                                            Офертой Договоров исключительно путем присоединения к условиям Оферты.
                                            Момент заключения каждого из таких Договоров определены в соответствующих
                                            разделах Оферты.
                                        </p>
                                    </li>
                                    <li data-list-text="1.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания производит ознакомление Пользователя с условиями Оферты путем
                                            размещения Оферты на Сайте и в Личном кабинете Пользователя. Совершая любое
                                            из действий - регистрируясь на Сайте, оформляя Заказ/Заявку Пользователь
                                            подтверждает, что прочел и безоговорочно принял условия настоящей Оферты
                                            (акцепт Оферты).
                                        </p>
                                        <ol id="l5">
                                            <li data-list-text="1.5.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе потребовать у Пользователя подтверждение
                                                    ознакомления с условиями Оферты путем проставления соответствующей
                                                    отметки/галочки, либо иными способами, не противоречащими
                                                    действующему законодательству РФ.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="1.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Доступ к Личному кабинету Пользователя осуществляется при указании логина и
                                            пароля. Связка «логин-пароль» является ключом простой электронной подписи и
                                            позволяет подписывать договоры, акты и любые иные документы, необходимые для
                                            оформления Заказа/Заявки и исполнения заключенных Пользователем с Компанией
                                            договоров и соглашений. Пользователь соглашается, что любой документ или
                                            информация, переданная через Личный кабинет в электронной форме, а также, по
                                            номеру телефона или адресу электронной почты, указанными Пользователем при
                                            регистрации или оформлении Заказа/Заявки, считаются подписанными простой
                                            электронной подписью и признаются электронным документом, равнозначным
                                            документу на бумажном носителе, подписанному
                                        </p>
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            собственноручной подписью по смыслу ст. 6 Федерального закона от 06.04.2011
                                            N 63-ФЗ (ред. от 11.06.2021) "Об электронной подписи".
                                        </p>
                                    </li>
                                    <li data-list-text="1.7.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Оформляя Заказы, регистрируясь на Сайте и совершая сделки через Личный
                                            кабинет или Бот Пользователь гарантирует, что ему исполнилось 16 лет. Если
                                            возраст Пользователя меньше 18 лет, он гарантирует, что он получил согласие
                                            своего законного представителя на использование Сайта и заключение сделок с
                                            Компанией в соответствии с условиями настоящей Оферты.
                                        </p>
                                    </li>
                                    <li data-list-text="1.8.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Информация о текущем статусе Заказа/Заявки находится в Личном кабинете или в
                                            Боте.
                                        </p>
                                    </li>
                                    <li data-list-text="1.9.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Совершая любое из действий - регистрируясь на Сайте, оформляя Заказ/Заявку,
                                            Пользователь соглашается с получением сообщений сервисного характера о
                                            состоянии Заказа/Заявки, деталях доставки и т.д. посредством
                                            смс-сообщений/электронных писем/мессенджеров/иным образом на номер телефона
                                            или на адрес электронной почты, указанный Пользователем при регистрации
                                            и/или оформлении Заказа/Заявки.
                                        </p>
                                    </li>
                                    <li data-list-text="1.10.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Условия Оферты распространяются на все виды Товаров, услуг и сервисов, пока
                                            такие Товары, услуги и сервисы присутствуют на Сайте и доступны к
                                            заказу/использованию.
                                        </p>
                                    </li>
                                    <li data-list-text="1.11.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Товары являются товарами, бывшими в употреблении (если не указано иное),
                                            могут иметь следы носки и не обладают характеристиками нового товара.
                                        </p>
                                    </li>
                                    <li data-list-text="1.12.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В случае проведения Компанией на Сайте конкурсов/стимулирующих мероприятий и
                                            пр. (далее - акции), в условиях таких акций могут быть установлены
                                            специальный порядок и условия оформления Заказа/Заявки. В случае участия
                                            Пользователя в акции, определенные Компанией условия акции являются
                                            существенными условиями заключаемого с Пользователем договора (п. 1 ст. 432
                                            ГК РФ). При этом условия акции подлежат применению для лиц, добровольно в
                                            них участвующих.
                                        </p>
                                    </li>
                                    <li data-list-text="1.13.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
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
                                            должен обратиться к Компании по контактам, указанным на Сайте.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={2}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ПРАВА И ОБЯЗАННОСТИ СТОРОН
                                </h1>
                                <ol id="l6">
                                    <li data-list-text="2.1.">
                                        <h1
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Права и обязанности Пользователя:
                                        </h1>
                                        <ol id="l7">
                                            <li data-list-text="2.1.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь, сообщающий свои данные при оформлении Заказа/Заявки,
                                                    гарантирует их достоверность и точность и принадлежность ему лично.
                                                    Пользователь не имеет права выдавать данные третьих лиц за свои.
                                                </p>
                                            </li>
                                            <li data-list-text="2.1.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь обязан самостоятельно обновлять персональные данные,
                                                    предоставленные им на Сайте или через Бот, в случае их изменения. В
                                                    противном случае Компания не несёт ответственности за некорректную
                                                    обработку Заказа/Заявки из-за указания Покупателем неверных данных и
                                                    невозможность исполнить свои обязательства.
                                                </p>
                                            </li>
                                            <li data-list-text="2.1.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь имеет право обращаться в Компанию по телефону или
                                                    электронной почте, указанным на Сайте или через форму обратной связи
                                                    на Сайте по вопросам, относящимся к работе Сайта, за разъяснениями
                                                    условий оформления и обработки Заказов и Заявок.
                                                </p>
                                            </li>
                                            <li data-list-text="2.1.4.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь имеет право принимать участие в конкурсах и акциях,
                                                    проводимых на Сайте.
                                                </p>
                                            </li>
                                            <li data-list-text="2.1.5.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь обязан соблюдать условия Пользовательского соглашения и
                                                    настоящей Оферты.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="2.2.">
                                        <h1
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Права и обязанности Компании:
                                        </h1>
                                        <ol id="l8">
                                            <li data-list-text="2.2.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе (но не обязана) при необходимости согласовывать с
                                                    Пользователем любые индивидуальные условия купли-продажи/принятия на
                                                    комиссию/обмена по трейд-ин Товаров (в том числе, оплаты, доставки и
                                                    т.д.), отличные от содержащихся в Оферте. При подтвержденном
                                                    согласовании Компанией индивидуальных условий, они входят в состав
                                                    настоящей Оферты для конкретного покупателя для исполнения одного
                                                    Заказа/Заявки и имеют превалирующую силу над положениями Оферты.
                                                </p>
                                            </li>
                                            <li data-list-text="2.2.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе по своему усмотрению в одностороннем порядке
                                                    устанавливать и изменять цену за предоставляемые на Сайте Товары,
                                                    услуги, сервисы и т.д. без предварительного уведомления
                                                    Пользователя/Покупателя (не распространятся на условия уже
                                                    оформленного Заказа).
                                                </p>
                                            </li>
                                            <li data-list-text="2.2.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе менять свои контактные данные без предварительного
                                                    уведомления Покупателей на Сайте и в расположенных на нем правовых
                                                    документах.
                                                </p>
                                            </li>
                                            <li data-list-text="2.2.4.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе без предварительного уведомления
                                                    Пользователя/Покупателя прекратить и (или) заблокировать доступ к
                                                    Сайту/Боту, если Пользователь/Покупатель нарушил условия Оферты или
                                                    содержащиеся в иных документах условия пользования Сайтом/Ботом, а
                                                    также в случае прекращения действия Сайта/Бота либо по причине
                                                    технической неполадки или проблемы.
                                                </p>
                                            </li>
                                            <li data-list-text="2.2.5.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе осуществлять запись телефонных разговоров с
                                                    Пользователями. Запись телефонного разговора может храниться
                                                    Компанией не более 3 (трех) лет и после истечения этого срока
                                                    подлежит уничтожению. Если запись телефонного разговора содержит
                                                    персональные данные Пользователя, то она обрабатывается в
                                                    соответствии с условиями Положения об обработке персональных данных.
                                                </p>
                                            </li>
                                            <li data-list-text="2.2.6.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе в одностороннем порядке (без запроса согласия
                                                    Пользователя) уступать и/или любым способом передавать свои права и
                                                    обязанности, вытекающие из правоотношений с Пользователем, полностью
                                                    или частично, третьим лицам.
                                                </p>
                                            </li>
                                            <li data-list-text="2.2.7.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе в одностороннем порядке (без запроса согласия
                                                    Пользователя) поручать исполнение взятых на себя обязательств
                                                    третьим лицам, оставаясь ответственной за их действия.
                                                </p>
                                                <p
                                                    style={{
                                                        textIndent: '0pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    <br />
                                                </p>
                                                <h1
                                                    style={{
                                                        paddingLeft: '5pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    УСЛОВИЯ ДОГОВОРА РОЗНИЧНОЙ КУПЛИ-ПРОДАЖИ ТОВАРОВ ДЛЯ ПОКУПАТЕЛЕЙ
                                                </h1>
                                                <p
                                                    style={{
                                                        textIndent: '0pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    <br />
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={3}>
                                <h1
                                    style={{
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ПРЕДМЕТ ОФЕРТЫ НА ЗАКЛЮЧЕНИЕ ДОГОВОРА РОЗНИЧНОЙ КУПЛИ-ПРОДАЖИ ТОВАРОВ
                                </h1>
                                <ol id="l9">
                                    <li data-list-text="3.1.">
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Предметом Оферты на заключение Договора розничной купли-продажи товаров
                                            является предоставление возможности Покупателю приобретать в розницу
                                            дистанционным способом для личных, семейных, домашних и иных нужд, не
                                            связанных с осуществлением предпринимательской деятельности, Товары,
                                            представленные на Сайте и доступные для Заказа.
                                        </p>
                                    </li>
                                    <li data-list-text="3.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            По договору розничной купли-продажи Компания обязуется передать в
                                            собственность Покупателя Товар на основании оформленного Покупателем и
                                            подтвержденного Компанией Заказа, а Покупатель обязуется принять Товар и
                                            оплатить его стоимость и стоимость доставки (если Покупатель заказывает
                                            услугу доставки и доставка не является бесплатной).
                                        </p>
                                    </li>
                                    <li data-list-text="3.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Оформляя Заказ, Покупатель соглашается с условиями заключения договора
                                            розничной купли-продажи Товаров, изложенными в настоящей Оферте.
                                        </p>
                                    </li>
                                    <li data-list-text="3.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Момент оплаты Заказа является моментом заключения договора розничной
                                            купли-продажи между Компанией и Покупателем.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={4}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ОФОРМЛЕНИЕ ЗАКАЗА И УСЛОВИЯ ВЫПОЛНЕНИЯ ЗАКАЗА
                                </h1>
                                <ol id="l10">
                                    <li data-list-text="4.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            При оформлении Заказа Покупатель заполняет электронную форму заказа Товара
                                            на Сайте, указывая актуальные и достоверные данные, и отправляет
                                            сформированный Заказ Компании посредством нажатия кнопки «Оформить заказ».
                                        </p>
                                    </li>
                                    <li data-list-text="4.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В течение 24 часов после оформления Заказа на электронную почту Покупателя,
                                            указанную при оформлении Заказа, приходит автоматическое информационное
                                            письмо с указанием перечня Товаров в Заказе.
                                        </p>
                                    </li>
                                    <li data-list-text="4.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В течение 48 часов после оформления Заказа с Покупателем связывается
                                            менеджер Компании для подтверждения Заказа и, в случае необходимости, его
                                            корректировки, а также, для согласования деталей доставки (даты, времени и
                                            т.д.). Стоимость доставки также может быть скорректирована менеджером
                                            Компании. Компания вправе аннулировать Заказ, если Покупатель в течение 48
                                            (сорока восьми) часов не отвечает на запрос о подтверждении.
                                        </p>
                                    </li>
                                    <li data-list-text="4.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В течение 48 часов после оформления Заказа он будет собран и доступен для
                                            самовывоза/передан для доставки, если иное не согласовано с менеджером
                                            Компании.
                                        </p>
                                    </li>
                                    <li data-list-text="4.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Для заказа доступны Товары, размещенные на Сайте. Однако, Товар может быть
                                            продан, но по техническим причинам продолжает быть доступным на Сайте для
                                            Заказа. В таком случае в течение срока обработки Заказа Компания уведомляет
                                            Покупателя о наличии Товара и в случае его наличия подтверждает Заказ.
                                        </p>
                                    </li>
                                    <li data-list-text="4.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В случае отсутствия заказанных Товаров, Компания вправе исключить указанный
                                            Товар из Заказа/аннулировать Заказ в одностороннем порядке, предварительно
                                            уведомив об этом Покупателя. В случае отсутствия ответа Покупателя о
                                            согласии/несогласии с такой корректировкой в течение 2 (двух) календарный
                                            дней с момента отправки Компанией уведомления, Компания вправе аннулировать
                                            (отменить) заказ полностью, и сумма, уплаченная Покупателем за
                                            аннулированный Заказ/Товар, возвращается Покупателю способом, которым этот
                                            Заказ был оплачен.
                                        </p>
                                    </li>
                                    <li data-list-text="4.7.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            После уведомления о невозможности выполнить Заказ или его часть, Покупатель
                                            вправе:
                                        </p>
                                        <ul id="l11">
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    отменить Заказ;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    согласиться на его частичное исполнение;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    заменить отсутствующий Товар на другой. В таком случае стоимость
                                                    Заказа пересчитывается менеджером Компании.
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li data-list-text="4.8.">
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если на Сайте произошел технический сбой, в результате которого была неверно
                                            рассчитана/указана стоимость Товаров и/или доставки, Компания вправе
                                            скорректировать стоимость Товаров и/или доставки в уже оформленном Заказе,
                                            предварительно уведомив об этом Покупателя. В случае, если Покупатель не
                                            согласен с изменением стоимости Товаров и/или доставки, Компания вправе
                                            аннулировать Заказ полностью, вернув Покупателю уплаченные им денежные
                                            средства, если Заказ был оплачен.
                                        </p>
                                    </li>
                                    <li data-list-text="4.9.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Покупатель вправе заказать Товар с возможностью оплаты после примерки.
                                            Пользователь вправе заказать для примерки в одном Заказе:
                                        </p>
                                        <ul id="l12">
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    не более 3 сумок;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    не более 4 аксессуаров;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    если в Заказе присутствуют несколько товарных категорий (сумки,
                                                    обувь и аксессуары и т.д.), то не более 4 (четырех) Товаров в одном
                                                    Заказе.
                                                </p>
                                            </li>
                                        </ul>
                                        <ol id="l13">
                                            <li data-list-text="4.9.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Покупатель вправе по результатам примерки отказаться от Заказа
                                                    полностью или частично.
                                                </p>
                                            </li>
                                            <li data-list-text="4.9.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В случае выкупа Товаров из Заказа после примерки, Покупатель
                                                    оплачивает Заказ в присутствии представителя Службы доставки (далее
                                                    - курьер). Курьер принимает наличные денежные средства за Заказ или
                                                    обеспечивает приём безналичного платежа.
                                                </p>
                                            </li>
                                            <li data-list-text="4.9.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '77pt',
                                                        textIndent: '-36pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Время примерки составляет не более 15 минут.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="4.10.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            На основании п. 1.4-2 ст. 7 ФЗ «О противодействии легализации (отмыванию)
                                            доходов, полученных преступным путем, и финансированию терроризма» при
                                            покупке Пользователем ювелирных изделий при наличном расчете на сумму,
                                            превышающую 40 000 рублей, или при безналичном расчете на сумму, превышающую
                                            200 000 рублей, Компания вправе запросить, а Покупатель – обязан
                                            предоставить свои паспортные данные для выполнения Компанией требования по
                                            идентификации лица.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={5}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ОПЛАТА ЗАКАЗА
                                </h1>
                                <ol id="l14">
                                    <li data-list-text="5.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Цена Товара, реализуемого на Сайте, указывается в рублях Российской
                                            Федерации.
                                        </p>
                                    </li>
                                    <li data-list-text="5.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Все взаиморасчеты между сторонами осуществляются в рублях РФ.
                                        </p>
                                    </li>
                                    <li data-list-text="5.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Стоимость доставки не включена в цену товара и оплачивается Покупателем
                                            дополнительно.
                                        </p>
                                    </li>
                                    <li data-list-text="5.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Общая стоимость Заказа определяется путем сложения цены всех включенных в
                                            Заказ Товаров и стоимости доставки, если она не бесплатна.
                                        </p>
                                    </li>
                                    <li data-list-text="5.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Покупатель вправе оплатить товар способами, указанными в форме оформления
                                            Заказа.
                                        </p>
                                    </li>
                                    <li data-list-text="5.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Оплата Заказа на Сайте осуществляется с помощью безналичного расчёта. Для
                                            осуществления оплаты Компания отправляет Покупателю ссылку для оплаты Заказа
                                            с помощью платежного сервиса.
                                        </p>
                                    </li>
                                    <li data-list-text="5.7.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В случае выбора доставки с примеркой по г. Москве, Покупатель вправе
                                            оплатить Заказ наличными денежными средствами или безналичным способом по
                                            QR-коду или ссылке, предоставляемой Курьером/менеджером Компании.
                                        </p>
                                    </li>
                                    <li data-list-text="5.8.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            При оплате Заказа Покупатель вправе ввести в специальную форму промо-код,
                                            дающий право на скидку.
                                        </p>
                                    </li>
                                    <li data-list-text="5.9.">
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            После оформления Заказа цена уже заказанного Покупателем Товара изменению не
                                            подлежит, за исключением цены доставки или случая указания неверной цены
                                            Товара из-за технического сбоя – см. п. 4.8 Оферты.
                                        </p>
                                    </li>
                                    <li data-list-text="5.10.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Кассовые чеки направляются Пользователю по электронной почте, указанной
                                            Пользователем в Личном кабинете или при оформлении Заказа, и в печатной
                                            форме не предоставляются. Обязанность Компании по передаче электронного чека
                                            считается исполненной в момент направления его на электронную почту
                                            Покупателя.
                                        </p>
                                    </li>
                                    <li data-list-text="5.11.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Покупатель согласен с тем, что при продаже Товаров на Сайте Компания
                                            формирует один кассовый чек с признаком способа расчета «полный расчет» без
                                            последующего формирования кассового чека в момент отгрузки.
                                        </p>
                                    </li>
                                    <li data-list-text="5.12.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            При безналичном способе оплаты обязанность Покупателя по оплате считается
                                            выполненной с момента зачисления денежных средств на расчетный счет
                                            Компании.
                                        </p>
                                    </li>
                                    <li data-list-text="5.13.">
                                        <h1
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '59pt',
                                                textIndent: '-36pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Особенности оплаты Товара с помощью банковских карт:
                                        </h1>
                                        <ol id="l15">
                                            <li data-list-text="5.13.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В соответствии с положением ЦБ РФ «Об эмиссии банковских карт и об
                                                    операциях, совершаемых с использованием платежных карт» от
                                                    24.12.2004 № 266-П операции по банковским картам совершаются
                                                    держателем карты либо уполномоченным им лицом.
                                                </p>
                                            </li>
                                            <li data-list-text="5.13.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Авторизация операций по банковским картам осуществляется банком.
                                                    Если у банка есть основания полагать, что операция носит
                                                    мошеннический характер, то банк вправе отказать в осуществлении
                                                    данной операции.
                                                </p>
                                            </li>
                                            <li data-list-text="5.13.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Во избежание случаев различного рода неправомерного использования
                                                    банковских карт при оплате все Заказы, оформленные на Сайте и
                                                    предоплаченные банковской картой, проверяются Компанией. В целях
                                                    проверки личности владельца банковской карты и его правомочности на
                                                    использование карты Компания вправе потребовать от Покупателя,
                                                    оформившего такой заказ, предъявления документа, удостоверяющего
                                                    личность.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="5.14.">
                                        <h1
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Покупатель вправе при оформлении Заказа подать заявку на покупку Товара в
                                            рассрочку/в кредит.
                                        </h1>
                                        <ol id="l16">
                                            <li data-list-text="5.14.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Рассрочка/кредит предоставляется АО «Тинькофф Банк», универсальная
                                                    лицензия ЦБ РФ на осуществление банковских операций № 2673 от 11
                                                    апреля 2022 года.
                                                </p>
                                            </li>
                                            <li data-list-text="5.14.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    После нажатия кнопки «купить в рассрочку» или «купить в кредит» при
                                                    оформлении Заказа, Пользователь переходит на страницу АО «Тинькофф
                                                    Банк», следует инструкциям и заполняет все запрашиваемые реквизиты.
                                                    Банк вправе сообщить Покупателю о необходимости личной встречи для
                                                    согласования заявки.
                                                </p>
                                            </li>
                                            <li data-list-text="5.14.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В случае согласования/одобрения банком заявки Покупателя на
                                                    рассрочку/кредит, оплата Заказа совершается банком в интересах
                                                    Покупателя. После поступления из банка денежных средств на счет
                                                    Компании, Заказ считается оформленным и дальнейшая обработка Заказа
                                                    осуществляется Компанией в порядке, установленном настоящей Офертой.
                                                </p>
                                            </li>
                                            <li data-list-text="5.14.4.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь соглашается, что оформление и предоставление
                                                    рассрочки/кредита не регулируются положениями настоящей публичной
                                                    Оферты, а регулируются положениями оферты или других правовых
                                                </p>
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    положений АО «Тинькофф Банк». Все отношения, связанные с
                                                    предоставлением/обслуживанием и т.д. такого кредита/рассрочки,
                                                    возникают между Покупателем и АО «Тинькофф Банк». Компания не
                                                    предоставляет консультаций или каких-либо гарантий в связи с
                                                    предоставлением банком рассрочки/кредита Пользователю. Всю
                                                    необходимую информацию о порядке предоставления рассрочки/кредита
                                                    Пользователь получает самостоятельно у представителя банка.
                                                </p>
                                            </li>
                                            <li data-list-text="5.14.5.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    АО «Тинькофф Банк» самостоятельно принимает решение о предоставлении
                                                    либо отказе в предоставлении кредита/рассрочки без объяснения
                                                    причин.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={6}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ДОСТАВКА ЗАКАЗА
                                </h1>
                                <ol id="l17">
                                    <li data-list-text="6.1.">
                                        <h1
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Способы доставки, доступные Покупателям:
                                        </h1>
                                        <ol id="l18">
                                            <li data-list-text={1}>
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    СДЕК или др. службы доставки (бесплатно);
                                                </p>
                                            </li>
                                            <li data-list-text={2}>
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Курьер The Cultt – в пределах МКАД (бесплатно);
                                                </p>
                                            </li>
                                            <li data-list-text={3}>
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Самовывоз из офиса The Cultt (бесплатно);
                                                </p>
                                            </li>
                                            <li data-list-text={4}>
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Доставка с примеркой по Москве – в пределах МКАД (стоимость 600
                                                    руб.);
                                                </p>
                                            </li>
                                            <li data-list-text={5}>
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Международная доставка (стоимость и условия осуществления
                                                    международной доставки Покупателю сообщает менеджер Компании,
                                                    обрабатывающий заказ). При международной доставке (за пределы
                                                    России), обязанность оплатить все таможенные сборы и пошлины лежит
                                                    на Покупателе.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="6.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Покупатель вправе выбрать любой из способов доставки, которые функционально
                                            доступны для выбора при оформлении Заказа.
                                        </p>
                                    </li>
                                    <li data-list-text="6.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Доставка способами № 1-2, 5, указанными в п. 6.1 Оферты, осуществляется без
                                            осмотра Товаров.
                                        </p>
                                    </li>
                                    <li data-list-text="6.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            При доставке с примеркой (способ № 4, указанный в п. 6.1 Оферты) доступны
                                            примерка Товаров перед покупкой и частичный выкуп Заказа.
                                        </p>
                                    </li>
                                    <li data-list-text="6.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Покупатель обязан указать точный адрес доставки с указанием номера пункта
                                            выдачи заказов/квартиры/офиса/помещения. В случае доставки курьером
                                            Покупатель обязуется встретить курьера в согласованное время доставки по
                                            указанному адресу.
                                        </p>
                                    </li>
                                    <li data-list-text="6.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Срок доставки Товара зависит от нормативов Службы доставки. Покупатель
                                            вправе самостоятельно выбрать дату и время доставки при оформлении Заказа.
                                            Однако, дата доставки Заказа окончательно согласовывается и подтверждается
                                            Покупателем при обработке Заказа менеджером Компании.
                                        </p>
                                    </li>
                                    <li data-list-text="6.7.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Покупатель понимает и соглашается с тем, что осуществление доставки —
                                            отдельная услуга, не являющаяся неотъемлемой частью приобретаемого
                                            Покупателем Товара. В случае отказа Покупателя от Товара полностью, услуга
                                            доставки считается выполненной и расходы на доставку Заказа возмещаются
                                            Покупателем. Компания вправе удержать стоимость доставки из средств,
                                            подлежащих возврату Покупателю за возвращённый Заказ, если Заказ уже был
                                            оплачен Покупателем. Если доставка была осуществлена бесплатно (т.е. расходы
                                            на доставку взяла на себя Компания), то при возврате Товара Покупатель
                                            возмещает стоимость расходов Компании на доставку.
                                        </p>
                                    </li>
                                    <li data-list-text="6.8.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Задержки в доставке возможны ввиду непредвиденных обстоятельств,
                                            произошедших не по вине Компании/Службы доставки.
                                        </p>
                                    </li>
                                    <li data-list-text="6.9.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            При выбранном способе доставки Заказ передается Покупателю по адресу
                                            доставки, указанному им при оформлении Заказа, а при отсутствии Покупателя
                                            –любому уполномоченному Покупателем лицу по этому адресу, при условии, что
                                        </p>
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Покупатель лично подтвердил возможность передачи Товара такому лицу или
                                            любому лицу, предъявившему информацию о номере заказа.
                                        </p>
                                    </li>
                                    <li data-list-text="6.10.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Во избежание случаев мошенничества, а также для выполнения взятых на себя
                                            обязательств, при вручении Заказа представитель Компании/курьер,
                                            осуществляющий доставку Заказа, или любое другое лицо, ответственное за
                                            выдачу Заказа Покупателю, вправе потребовать документ, удостоверяющий
                                            личность Покупателя для сверки его личных данных.
                                        </p>
                                    </li>
                                    <li data-list-text="6.11.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Риск случайной гибели или случайного повреждения Товара переходит к
                                            Покупателю с момента фактической передачи ему Товара.
                                        </p>
                                    </li>
                                    <li data-list-text="6.12.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Датой передачи Заказа Покупателю считается дата самовывоза Заказа из офиса
                                            Компании; дата доставки, указанная в подписанной Покупателем квитанции
                                            Службы доставки или дата кассового чека, сформированного при оплате курьером
                                            (если оплата Заказа осуществлялась при его доставке).
                                        </p>
                                    </li>
                                    <li data-list-text="6.13.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Принятие Покупателем Товара свидетельствует о том, что Компания полностью и
                                            надлежащим образом выполнила свою обязанность по передаче Товара в
                                            соответствии с договором.
                                        </p>
                                        <ol id="l19">
                                            <li data-list-text="6.13.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    При доставке с примеркой (способ № 4, указанный в п. 6.1 Оферты)
                                                    Покупатель проводит осмотр Товара. Принятие Покупателем Товара
                                                    означает полное и безоговорочное согласие с тем, что Товар
                                                    соответствует его характеристикам, заявленным на Сайте.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="6.14.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В случае если доставка Товара не состоялась по вине Покупателя (отсутствие
                                            Покупателя по указанному адресу и иные причины), повторная доставка
                                            производится в новые сроки, согласованные с Компанией, после оплаты
                                            Покупателем стоимости услуг повторной доставки.
                                        </p>
                                    </li>
                                    <li data-list-text="6.15.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если Компания не может в течение 7 (семи) дней связаться с Покупателем для
                                            уточнения условий доставки, Компания вправе аннулировать Заказ, вернув
                                            Покупателю денежные средства (если Заказ был оплачен) за вычетом расходов на
                                            доставку (если она не состоялась по вине Покупателя).
                                        </p>
                                    </li>
                                    <li data-list-text="6.16.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            При выборе самовывоза из офиса The Cultt (способ № 3, указанный в п. 6.1
                                            Оферты), Покупатель вправе осуществить примерку в клиентской зоне Продавца.
                                            Примерка осуществляется с соблюдением следующих условий:
                                        </p>
                                        <ul id="l20">
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    примерка в клиентской зоне осуществляется с 10:00 до 18:00 ежедневно
                                                    по предварительной записи;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    оформляя заказ на примерку в клиентской зоне, с вами может связаться
                                                    менеджер для смены даты/времени визита;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    для примерки можно выбрать не более 5 товаров;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    для примерки в клиентской зоне Товары не бронируются, так как все
                                                    Товары представлены в единственном экземпляре. Накануне или в день
                                                    примерки менеджер может сообщить вам о продаже одной или нескольких
                                                    позиций в Заказе;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    примерка проходит в офисе THE CULTT м. Трубная
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    время примерки в клиентской зоне — 30 минут.
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={7}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ВОЗВРАТ ТОВАРА
                                </h1>
                                <ol id="l21">
                                    <li data-list-text="7.1.">
                                        <h1
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Исключения:
                                        </h1>
                                        <ol id="l22">
                                            <li data-list-text="7.1.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Ювелирные изделия надлежащего качества не подлежат обмену/возврату в
                                                    течение 14-дневного срока по причине не подошедшей формы, габаритов,
                                                    фасона, расцветки, размера или комплектации согласно Постановлению
                                                    Правительства РФ от 31.12.2020 N 2463.
                                                </p>
                                            </li>
                                            <li data-list-text="7.1.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Покупатель не вправе отказаться от Товара (обменять/вернуть)
                                                    надлежащего качества, имеющего индивидуально-определенные свойства,
                                                    если указанный Товар может быть использован исключительно
                                                    приобретающим его Покупателем. В том числе, если Товар был
                                                    изготовлен/изменён/персонифицирован по индивидуальному заказу
                                                    Покупателя.
                                                </p>
                                            </li>
                                            <li data-list-text="7.1.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Товар надлежащего качества, бывший в употреблении, не подлежит
                                                    обмену/возврату в течение 14-дневного срока по причине не подошедшей
                                                    формы, габаритов, фасона, расцветки, размера или комплектации
                                                    согласно п. 1 ст. 25 Закона РФ N 2300-1 «О защите прав потребителей»
                                                    (в том числе, товар, купленный после примерки).
                                                </p>
                                            </li>
                                            <li data-list-text="7.1.4.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Товары, оплаченные с помощью иностранных платежных инструментов (в
                                                    том числе, с помощью банковских карт, выпущенных иностранными
                                                    банками), не подлежат возврату. Обмен таких Товаров производится по
                                                    согласованию с Продавцом, а расходы на доставку товаров берет на
                                                    себя Покупатель.
                                                </p>
                                            </li>
                                            <li data-list-text="7.1.5.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Товар не подлежит возврату, если не сохранены ярлыки/бирки/пломбы,
                                                    которые были на Товаре в момент его передачи Покупателю.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="7.2.">
                                        <h1
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Общий порядок возврата Товара:
                                        </h1>
                                        <ol id="l23">
                                            <li data-list-text="7.2.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Для осуществления возврата Товара Покупатель должен известить об
                                                    этом Компанию в установленный в Оферте срок по электронной почте{' '}
                                                    <a
                                                        href="mailto:hey@thecultt.com"
                                                        className="a"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        hey@thecultt.com
                                                    </a>{' '}
                                                    с темой письма «Возврат» и с указанием оснований/причин возврата и
                                                    номера заказа. В ответ Компания высылает Покупателю бланк заявления
                                                    о возврате Товара. После получения бланка заявления о возврате
                                                    Товара Покупатель обязан в течение 2-х календарных дней заполнить
                                                    его, прислать скан-копию заполненного заявления Продавцу и отправить
                                                    оригинал заявления вместе с возвращаемым Товаром.
                                                </p>
                                            </li>
                                            <li data-list-text="7.2.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '77pt',
                                                        textIndent: '-36pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    К возвращаемому Товару необходимо приложить:
                                                </p>
                                                <ul id="l24">
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingTop: '6pt',
                                                                paddingLeft: '40pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            оригинал Заявления (требования) о возврате Товара;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '40pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            копию главной страницы паспорта и страницы с адресом
                                                            регистрации Покупателя;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '41pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            оригинал упаковки Товара (если Товар передавался Покупателю
                                                            в оригинальной фирменной упаковке) и все дополнительные
                                                            элементы, с которыми Товар передавался покупателю (пыльник,
                                                            дополнительные ручки, дополнительные
                                                        </p>
                                                        <p
                                                            style={{
                                                                paddingLeft: '41pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            аксессуары, упаковка и т.д.).
                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li data-list-text="7.2.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если иное не согласовано с Компанией, Товар возвращается Покупателем
                                                    за свой счет путём отправки его Покупателем самостоятельно в посылке
                                                    по почте или с помощью службы доставки по адресу Компании,
                                                    указанному менеджером Компании. Отправку Товара подтверждает
                                                    накладная, кассовый чек/квитанция или иной документ, в котором
                                                    содержится информация о получателе и номер отслеживания посылки
                                                    (трек-номер/номер отслеживания или и т.д.).
                                                </p>
                                            </li>
                                            <li data-list-text="7.2.4.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '77pt',
                                                        textIndent: '-36pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Условия отправки посылки с возвращаемым Товаром:
                                                </p>
                                                <ul id="l25">
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingTop: '6pt',
                                                                paddingLeft: '40pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            без наложенного платежа;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '40pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            с описью вложения, заверенной сотрудником почты или службы
                                                            доставки;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '40pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            с оценкой посылки в размере стоимости возвращаемого товара;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '40pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            не использовать в качестве упаковки картонный пакет/бумажный
                                                            конверт и другую ненадежную упаковку.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li data-list-text="7.2.5.">
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    После отправки Товара номер отслеживания посылки/квитанцию/иной
                                                    документ необходимо сообщить Компании по телефону или электронной
                                                    почте, указанным на Сайте.
                                                </p>
                                            </li>
                                            <li data-list-text="7.2.6.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В случае утраты посылки почтой/службой доставки в процессе доставки
                                                    возвращаемого Товара от Покупателя Компании, требование Покупателя о
                                                    возврате считается отозванным, а денежные средства за Товар возврату
                                                    не подлежат.
                                                </p>
                                            </li>
                                            <li data-list-text="7.2.7.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если Покупатель получил те или иные льготы/выгоду (баллы, бонусные
                                                    мили, кэшбэк и пр.) в связи с фактом совершения покупки
                                                    возвращаемого Товара, то при его возврате Компания (или иное лицо,
                                                    предоставившее такие льготы) имеет право аннулировать полученные
                                                    Покупателем льготы частично или полностью.
                                                </p>
                                            </li>
                                            <li data-list-text="7.2.8.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Везде, где в Оферте указано о предъявлении заявления (требования)
                                                    Покупателя, датой предъявления такого заявления (требования)
                                                    считается дата получения Компанией оригинала такого заявления
                                                    (требования) вместе с Товаром.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="7.3.">
                                        <h1
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Правила и основания возврата Товара надлежащего качества:
                                        </h1>
                                        <ol id="l26">
                                            <li data-list-text="7.3.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Надлежащим является качество Товара, соответствующее заявленному при
                                                    продаже. Все Товары, представленные на Сайте, вне зависимости от
                                                    того, представлены ли они как бывшие в употреблении или новые,
                                                    являются товарами надлежащего качества. Компания подробно указывает
                                                    фактические характеристики и состояние каждого Товара на Сайте.
                                                </p>
                                            </li>
                                            <li data-list-text="7.3.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Покупатель имеет право отказаться от заказанного Товара (за
                                                    исключением персонифицированного по заказу) в любое время до его
                                                    передачи Покупателю, а после передачи Товара - в течение 3 (трёх)
                                                    календарных дней. Дата передачи Товара Покупателю определяется
                                                    согласно п. 6.12 Оферты.
                                                </p>
                                            </li>
                                            <li data-list-text="7.3.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Возврат товара надлежащего качества возможен в случае, если
                                                    сохранены его товарный вид, потребительские свойства, а также
                                                    документ, подтверждающий факт и условия покупки указанного товара на
                                                    Сайте. Возвращаемый Товар не должен быть в употреблении и должен
                                                    быть передан Покупателем Компании в оригинальной упаковке, с
                                                    сохранением всех ярлыков/бирок/пломб, которые были на Товаре в
                                                    момент его передачи Покупателю. Возвращаемый Товар должен
                                                    соответствовать его состоянию, изначальным характеристикам и
                                                    описанию на Сайте.
                                                </p>
                                            </li>
                                            <li data-list-text="7.3.4.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Расходы, связанные с возвратом Товара надлежащего качества, и
                                                    возвратом уплаченных за Товар денежных средств, несёт Покупатель,
                                                    если иное не согласовано с Компанией.
                                                </p>
                                            </li>
                                            <li data-list-text="7.3.5.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Денежные средства за Товар (за вычетом расходов Компании на
                                                    первоначальную доставку Товара Покупателю) возвращаются Покупателю в
                                                    течение 10 (десяти) дней после получения Компанией возвращаемого
                                                    Товара и оригинала заявления (требования) о его возврате. Возврат
                                                    денежных средств, уплаченных за Товар, осуществляется Компанией тем
                                                    же способом, которым Товар был оплачен.
                                                </p>
                                                <p
                                                    style={{
                                                        textIndent: '0pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    <br />
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="7.4.">
                                        <h1
                                            style={{
                                                paddingTop: '10pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Правила и основания возврата Товара ненадлежащего качества:
                                        </h1>
                                        <ol id="l27">
                                            <li data-list-text="7.4.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Товар с недостатками, не оговоренными Компанией при продаже или
                                                    скрытыми недостатками, которые не могли быть обнаружены при передаче
                                                    Товара Покупателю, является товаром ненадлежащего качества.
                                                </p>
                                            </li>
                                            <li data-list-text="7.4.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Покупатель, в случае обнаружения в Товаре недостатков, если они не
                                                    были оговорены Компанией, по своему выбору вправе:
                                                </p>
                                                <ul id="l28">
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingTop: '6pt',
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            потребовать замены Товара на товар этой же марки (замена на
                                                            товар этой же марки этой же модели производится только при
                                                            наличии такой модели в наличии у Компании) с соответствующим
                                                            перерасчетом покупной цены;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            потребовать замены Товара на такой же товар другой марки
                                                            (модели, артикула) с соответствующим перерасчетом покупной
                                                            цены;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            потребовать соразмерного уменьшения покупной цены;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            потребовать незамедлительного безвозмездного устранения
                                                            недостатков Товара или возмещения расходов на их исправление
                                                            Покупателем или третьим лицом;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            отказаться от исполнения договора купли-продажи и
                                                            потребовать возврата уплаченной за Товар суммы. По
                                                            требованию Компании и за её счет потребитель должен
                                                            возвратить Товар с недостатками.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li data-list-text="7.4.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Несоответствие Товара представлению Покупателя не является признаком
                                                    ненадлежащего качества Товара.
                                                </p>
                                            </li>
                                            <li data-list-text="7.4.4.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    При предъявлении требований согласно п. 7.4.2 Оферты в отношении
                                                    конкретного Товара, Покупатель обязан вернуть такой Товар Компании
                                                    для проверки его качества. Покупатель возвращает Товар согласно
                                                    порядку, указанному в п. 7.2 Оферты.
                                                </p>
                                            </li>
                                            <li data-list-text="7.4.5.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    После получения от Покупателя Товара, в отношении которого
                                                    Покупателем заявлена претензия по качеству, Компания вправе
                                                    произвести проверку качества Товара. Покупатель вправе участвовать в
                                                    проверке качества товара, все расходы, связанные с этим, Покупатель
                                                    несёт самостоятельно.
                                                </p>
                                            </li>
                                            <li data-list-text="7.4.6.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В случае спора о причинах возникновения недостатков товара Компания
                                                    обязана провести экспертизу товара. Экспертиза проводится в
                                                    соответствии с положениями п. 5 ст. 18 Закона РФ от 07.02.1992 N
                                                    2300-1 «О защите прав потребителей».
                                                </p>
                                            </li>
                                            <li data-list-text="7.4.7.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В случае, если ненадлежащее качество Товара будет установлено,
                                                    Покупателю возмещаются уплаченная им стоимость Товара ненадлежащего
                                                    качества. Расходы на осуществление возврата суммы, уплаченной
                                                    Покупателем за Товар ненадлежащего качества, несет Компания.
                                                </p>
                                            </li>
                                            <li data-list-text="7.4.8.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если в результате экспертизы Товара установлено, что его недостатки
                                                    возникли вследствие обстоятельств, за которые не отвечает Компания,
                                                    Покупатель обязан возместить Компании расходы на проведение
                                                    экспертизы, а также связанные с ее проведением расходы на хранение и
                                                    транспортировку товара.
                                                </p>
                                            </li>
                                            <li data-list-text="7.4.9.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Требование Покупателя о возврате денежных средств за возвращаемый
                                                    Товар ненадлежащего качества подлежит удовлетворению Компанией не
                                                    позднее, чем через 10 календарных дней с даты получения Компанией
                                                    Товара и соответствующего заявления от Покупателя в письменном виде.
                                                </p>
                                            </li>
                                            <li data-list-text="7.4.10.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания не отвечает за недостатки товара, которые возникли в
                                                    результате действий Покупателя или третьих лиц. В том числе,
                                                    Компания не отвечает за недостатки Товара, возникшие вследствие
                                                    нарушения Покупателем правил использования, хранения или
                                                    транспортировки товара, действий третьих лиц или непреодолимой̆ силы.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="7.5.">
                                        <h1
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Замена/устранение недостатков товара ненадлежащего качества/соразмерное
                                            уменьшение покупной цены Товара/возмещение расходов на исправление
                                            недостатков товара
                                        </h1>
                                        <ol id="l29">
                                            <li data-list-text="7.5.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Предъявление требования Покупателя о замене Товара/устранении
                                                    недостатков Товара/возмещении расходов на исправление недостатков
                                                    товара ненадлежащего качества и отправка Покупателем Товара для
                                                    удовлетворения его требований осуществляются согласно правилам,
                                                    изложенным в п. 7.2 Оферты.
                                                </p>
                                            </li>
                                            <li data-list-text="7.5.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Замена Товара на Товар этой же марки и этого же артикула не
                                                    производится, так как все Товары, представленные на Сайте, ввиду
                                                    своей специфики (разное состояние бывших в употреблении товаров),
                                                    представлены в единичном экземпляре.
                                                </p>
                                            </li>
                                            <li data-list-text="7.5.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Товар, состояние которого при продаже оценивалось как бывшего в
                                                    употреблении, в случае предъявления требования о его замене,
                                                    подлежит замене на Товар, также бывший в употреблении.
                                                </p>
                                            </li>
                                            <li data-list-text="7.5.4.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если у Компании в момент предъявления Покупателем заявления
                                                    (требования) о замене отсутствует необходимый для замены Товар,
                                                    Компания оповещает об этом Покупателя.
                                                </p>
                                            </li>
                                            <li data-list-text="7.5.5.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В случае, если стоимость Товара, на который производится обмен,
                                                    больше стоимости обмениваемого Товара ненадлежащего качества,
                                                    Компания направляет Покупателю выбранный для обмена Товар при
                                                    условии оплаты Покупателем разницы между стоимостью Товаров.
                                                    Покупатель обязан оплатить разницу в цене в течение 3 (трех)
                                                    календарных дней.
                                                </p>
                                            </li>
                                            <li data-list-text="7.5.6.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В случае, если стоимость Товара, на который производится обмен,
                                                    меньше стоимости обмениваемого Товара ненадлежащего качества,
                                                    Компания возвращает Покупателю разницу в стоимости Товаров в период
                                                    до 7 календарных дней с даты получения Компанией обмениваемого
                                                    Товара тем же способом, которым этот Товар был оплачен.
                                                </p>
                                            </li>
                                            <li data-list-text="7.5.7.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если покупатель купил Товар, который представлен на Сайте как бывший
                                                    в употреблении, то предъявить требование об устранении недостатков
                                                    такого Товара Покупатель вправе только в отношении тех недостатков,
                                                    которые не были оговорены Компанией при продаже. Недостатки бывшего
                                                    в употреблении Товара, описанные при продаже, не устраняются.
                                                </p>
                                            </li>
                                            <li data-list-text="7.5.8.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    При наличии оснований для удовлетворения требования Покупателя о
                                                    безвозмездном устранении недостатков товара, Компания обязуется
                                                    устранить недостатки товара в срок не более сорока пяти календарных
                                                    дней со дня передачи Покупателем соответствующего Товара и заявления
                                                    Компании.
                                                </p>
                                            </li>
                                            <li data-list-text="7.5.9.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В случае предъявления Покупателем требования о соразмерном
                                                    уменьшении покупной цены Товара, в расчет принимается цена Товара на
                                                    момент предъявления Покупателем требования об уценке или, если оно
                                                    добровольно не удовлетворено, на момент вынесения судом решения о
                                                    соразмерном уменьшении покупной цены. Такое требование Покупателя, в
                                                    случае его обоснованности, подлежит удовлетворению в течение десяти
                                                    дней со дня его предъявления Компании.
                                                </p>
                                            </li>
                                            <li data-list-text="7.5.10.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В случае предъявления требования о возмещении расходов на
                                                    исправление недостатков товара ненадлежащего качества Покупателем,
                                                    Покупатель обязан предоставить документы, подтверждающие наличие в
                                                    Товаре недостатков, а также, наглядно показывающие, кем и какие
                                                    работы по их устранению были
                                                </p>
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    проведены, а также, стоимость этих работ. Такое требование
                                                    Покупателя, в случае его обоснованности, подлежит удовлетворению в
                                                    течение десяти дней со дня его предъявления Компании.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={8}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    УСЛОВИЯ ЭКСПЛУАТАЦИИ ТОВАРА
                                </h1>
                                <ol id="l30">
                                    <li data-list-text="8.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Товар должен эксплуатироваться в условиях, исключающих его механическое
                                            повреждение, попадание прямых солнечных лучей или какого-либо излучения.
                                        </p>
                                    </li>
                                    <li data-list-text="8.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Избегать при эксплуатации, хранении и транспортировке Товара воздействия на
                                            изделия быстроменяющихся температур.
                                        </p>
                                    </li>
                                    <li data-list-text="8.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Исключить при хранении и транспортировке нагрев Товара при освещении,
                                            попадание прямого солнечного света, внешнее ударное воздействие на Товар.
                                        </p>
                                    </li>
                                    <li data-list-text="8.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Для ювелирных изделий и изделий металлической галантереи в дополнение к
                                            вышеуказанным требованиям необходимо исключить взаимодействие со щелочными
                                            моющими средствами, веществами, содержащими хлор и йод, спирт, кремами и
                                            мазями, содержащими ртуть или ее соединения.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={9}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ
                                </h1>
                                <ol id="l31">
                                    <li data-list-text="9.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Сообщая через Сайт или Бот какие-либо данные, Пользователь гарантирует их
                                            актуальность и дает безоговорочное согласие на использование указанных
                                            данных в соответствии с условиями Положения об обработке персональных данных
                                            Компанией, а также третьими лицами, привлекаемыми Компанией.
                                        </p>
                                    </li>
                                    <li data-list-text="9.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователь гарантирует, что, передавая какую-либо информацию через Сайт
                                            или Бот, в том числе, персональные данные, он передаёт подлинные данные, а в
                                            случае передачи данных третьих лиц – что получил от таких лиц
                                            соответствующее разрешение на их распространение. Компания не несет
                                            ответственности за действия Пользователя, нарушающие права третьих лиц
                                            относительно их персональных данных, а также, за последствия действий
                                            Пользователя, выражающиеся в передаче недостоверных данных, необходимых
                                            Компании для надлежащего выполнения своих обязательств перед Пользователем.
                                        </p>
                                    </li>
                                    <li data-list-text="9.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания вправе осуществлять записи телефонных разговоров с Пользователем.
                                            Запись телефонного разговора может храниться Компанией (или иным лицом по
                                            поручению Компании) не более 3 (трех) лет и после истечения этого срока
                                            подлежит уничтожению. При этом Компания обязуется предотвращать попытки
                                            несанкционированного доступа к информации, полученной в ходе телефонных
                                            переговоров и/или передачу ее третьим лицам, не уполномоченных Компанией или
                                            не имеющим непосредственного отношения к исполнению Заказов, за исключением
                                            запроса об этом в порядке, предусмотренном действующим законодательством
                                            Российской Федерации.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={10}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    ОТВЕТСТВЕННОСТЬ
                                </h1>
                                <ol id="l32">
                                    <li data-list-text="10.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Любые убытки, которые Пользователь может понести в случае умышленного или
                                            неосторожного нарушения им любого положения Оферты, а также вследствие
                                            несанкционированного доступа к его персональным данным, Личному кабинету и
                                            т.д. не по вине Компании, не возмещаются.
                                        </p>
                                    </li>
                                    <li data-list-text="10.2.">
                                        <h1
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '59pt',
                                                textIndent: '-36pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания не несет ответственности за:
                                        </h1>
                                        <ol id="l33">
                                            <li data-list-text="10.2.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Неисполнение либо ненадлежащее исполнение своих обязательств,
                                                    задержки или сбои в процессе совершения операций на Сайте или в
                                                    Боте, явившееся результатом сбоев в телекоммуникационных и
                                                    энергетических сетях, сбоев в Интернете и в работе социальных сетей,
                                                    действий вредоносных программ, а также недобросовестных действий
                                                    третьих лиц, направленных на
                                                </p>
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    несанкционированный доступ и/или выведение из строя программного
                                                    и/или аппаратного комплекса Компании.
                                                </p>
                                            </li>
                                            <li data-list-text="10.2.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Действия и работу систем переводов, банков, платежных систем и за
                                                    задержки, связанные с их работой.
                                                </p>
                                            </li>
                                            <li data-list-text="10.2.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Надлежащее функционирование Сайта, Бота, в случае, если Пользователь
                                                    не имеет необходимых технических средств для его использования, а
                                                    также не несет никаких обязательств по обеспечению Пользователей
                                                    такими средствами.
                                                </p>
                                            </li>
                                            <li data-list-text="10.2.4.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания не несет ответственности за ущерб, причиненный Пользователю
                                                    вследствие ненадлежащего использования Товаров, приобретенных у
                                                    Компании.
                                                </p>
                                            </li>
                                            <li data-list-text="10.2.5.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания не несет ответственности перед Пользователем или третьими
                                                    лицами за прекращение доступа к Сайту, Боту, в том числе, в случае
                                                    нарушения Пользователем любого положения Оферты или иного документа,
                                                    содержащего условия пользования Сайтом/Ботом.
                                                </p>
                                            </li>
                                            <li data-list-text="10.2.6.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания освобождается от ответственности за полное или частичное
                                                    неисполнение своих обязательств, если неисполнение является
                                                    следствием таких обстоятельств непреодолимой силы, то есть
                                                    чрезвычайных и непредотвратимых при данных условиях обстоятельств,
                                                    таких как: война или военные действия, землетрясение, наводнение,
                                                    пожар и другие стихийные бедствия, акты или действия органов
                                                    государственной власти, изменение таможенных правил, ограничения
                                                    импорта и экспорта, что возникли независимо от воли Компании. При
                                                    наступлении обстоятельств, при которых не может исполнить свои
                                                    обязательства, незамедлительно уведомляет об этом Пользователя.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="10.3.">
                                        <h1
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '59pt',
                                                textIndent: '-36pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователь несёт ответственность за:
                                        </h1>
                                        <ol id="l34">
                                            <li data-list-text="10.3.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Нарушение условий настоящей Оферты и прочих правовых положений,
                                                    размещенных на Сайте.
                                                </p>
                                            </li>
                                            <li data-list-text="10.3.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Точность и верность информации, предоставляемой им Компании при
                                                    оформлении Заказа/Заявки на Сайте или через Бот.
                                                </p>
                                            </li>
                                            <li data-list-text="10.3.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Предоставление неверных сведений, повлекшее за собой невозможность
                                                    надлежащего исполнения Компанией своих обязательств перед
                                                    Пользователем.
                                                </p>
                                            </li>
                                            <li data-list-text="10.3.4.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь соглашается с тем, что в случае нарушения им условий
                                                    настоящей Оферты, каких-либо требований законодательства или прав
                                                    третьих лиц, повлекшего убытки Компании вследствие предъявления к
                                                    ней претензий, исков и/или прямых и косвенных требований о
                                                    возмещении ущерба/выплаты штрафов, Пользователь обязуется возместить
                                                    любые такие убытки и расходы Компании в полном объеме, в том числе,
                                                    на юридическую помощь.
                                                </p>
                                            </li>
                                            <li data-list-text="10.3.5.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Покупатель несёт ответственность также в иных случаях,
                                                    предусмотренных Офертой и действующим законодательством Российской
                                                    Федерации.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={11}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'left',
                                    }}
                                >
                                    РАЗРЕШЕНИЕ СПОРОВ
                                </h1>
                                <ol id="l35">
                                    <li data-list-text="11.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            В случае возникновения вопросов и претензий со стороны Пользователя он
                                            должен обратиться к Компании по контактам, указанным на Сайте.
                                        </p>
                                    </li>
                                    <li data-list-text="11.2.">
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Все возможные споры, вытекающие из отношений регулируемых Офертой, подлежат
                                            разрешению в соответствии с действующим законодательством Российской
                                            Федерации.
                                        </p>
                                    </li>
                                    <li data-list-text="11.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В случае возникновения любых разногласий или споров, Стороны примут меры для
                                            их решения в порядке переговоров.
                                        </p>
                                    </li>
                                    <li data-list-text="11.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Споры, вытекающие из отношений Продавца/Комитента с Компанией, разрешаются в
                                            претензионном порядке. Срок рассмотрения претензии – 30 календарных дней со
                                            дня её получения Стороной. Сторона обязана направить другой стороне
                                            претензию почтовым письмом с описью вложения и продублировать на электронную
                                            почту.
                                        </p>
                                    </li>
                                    <li data-list-text="11.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            При невозможности разрешить спор в порядке переговоров/претензионном
                                            порядке, любая из Сторон вправе обратиться в суд за защитой своих прав,
                                            которые предоставлены ей действующим законодательством Российской Федерации.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={12}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    ПРОЧИЕ УСЛОВИЯ
                                </h1>
                                <ol id="l36">
                                    <li data-list-text="12.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Ничто в условиях Оферты не может пониматься как установление между
                                            Пользователем и Компанией отношений, прямо не предусмотренных Офертой.
                                        </p>
                                    </li>
                                    <li data-list-text="12.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователя вправе связаться с Компанией по вопросам работы Сайта, Бота,
                                            Компании, о Товарах и условиях их приобретения, оформления Заказов и Заявок.
                                            Компания предоставляет информацию, предоставление которой необходимо в
                                            соответствии с действующим законодательством Российской Федерации.
                                        </p>
                                    </li>
                                    <li data-list-text="12.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Обращения и сообщения в адрес Компании направляются ему по контактам,
                                            указанным на Сайте.
                                        </p>
                                    </li>
                                    <li data-list-text="12.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            К отношениям между Пользователем и Компанией применяются положения
                                            действующего законодательства Российской Федерации.
                                        </p>
                                    </li>
                                    <li data-list-text="12.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Признание судом какого-либо положения Оферты недействительным не влечет
                                            недействительности иных положений Оферты.
                                        </p>
                                    </li>
                                    <li data-list-text="12.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания не рассматривает контроферты или встречные предложения от
                                            Пользователей относительно изменений условий настоящей Оферты.
                                        </p>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                        <h1
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            ОБЩИЕ УСЛОВИЯ ПОДАЧИ ФИЗИЧЕСКИМ ЛИЦОМ ЗАЯВКИ НА ВЫКУП/ПЕРЕДАЧУ НА РЕАЛИЗАЦИЮ
                                            СВОЕГО ИМУЩЕСТВА
                                        </h1>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={13}>
                                <h1
                                    style={{
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Подача Заявки
                                </h1>
                                <ol id="l37">
                                    <li data-list-text="13.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Любой Пользователь вправе подать через свой Личный кабинет (доступно только
                                            Пользователям, зарегистрировавшимся на Сайте) или через Бот Заявку на
                                            продажу или передачу для реализации по договору комиссии Компании своего
                                            имущества, принадлежащего ему на праве собственности (далее – Имущество).
                                        </p>
                                    </li>
                                    <li data-list-text="13.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Подавая Заявку, Пользователь соглашается, что подаёт Заявку на заключение
                                            договора купли-продажи имущества или комиссии для реализации имущества
                                            Компанией. Решение, готова ли Компания заключить договор с Пользователем, и
                                            вид договора, Компания принимает исключительно по итогам своей собственной
                                            оценки имущества и после проведения всех необходимых проверок, количество и
                                            вид которых Компания определяет по своему усмотрению.
                                        </p>
                                        <ol id="l38">
                                            <li data-list-text="13.2.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе отказать Пользователю в заключении договора.
                                                    Компания вправе аннулировать Заявку или согласовать с Пользователем
                                                    другой вид договора.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="13.3.">
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователь согласен, что принятие Компанией имущества для выкупа/на
                                            реализацию – право Компании, а не обязательство.
                                        </p>
                                        <ol id="l39">
                                            <li data-list-text="13.3.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если имущество, передаваемое Пользователем, было ранее куплено у
                                                    Компании, то Компания принимает такое имущество для выкупа (по
                                                    договору купли-продажи)/ реализации или для обмена на любой Товар на
                                                    Сайте (см. условия обмена по «трейд-ин»).
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="13.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания принимает Заявки на выкуп/принятие на реализацию бывших в
                                            употреблении оригинальных товаров брендов класса «премиум» и «middle-up»
                                            сегмента, следующих категорий: сумки, обувь, аксессуары (очки, платки,
                                            ремни, брендовые украшения (ювелирные изделия и изделия металлической
                                            галантереи (бижутерия) и часы). Список брендов, чьи товары принимаются
                                            Компанией, представлен на Сайте.
                                        </p>
                                    </li>
                                    <li data-list-text="13.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Имущество должно соответствовать качеству: без дефектов или с минимальными;
                                            фурнитура в хорошем (и лучше) состоянии; подкладка без явных следов носки;
                                            углы целые.
                                        </p>
                                    </li>
                                    <li data-list-text="13.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Для того, чтобы подать Заявку, Пользователю необходимо сфотографировать в
                                            нескольких ракурсах предлагаемое имущество (так, чтобы были отчетливо видны:
                                            общий вид спереди, сзади, с боков, изнанка/обратная сторона/вид внутренних
                                            отсеков, дефекты и следы носки), описать его внешний вид, что входит в
                                            комплект (защитный чехол («пыльник»), дополнительный ручки/аксессуары,
                                            упаковка и т.д.), дефекты, как эксплуатировалось. Также необходимо указать
                                            цену, которую Пользователь хотел бы получить за это имущество.
                                        </p>
                                    </li>
                                    <li data-list-text="13.7.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователь обязан перед передачей Имущества Компании проверить его
                                            содержимое на наличие личных вещей, чеков и пр. В случае нахождения
                                            Компанией при приемке предметов, не описанных в качестве комплекта Имущества
                                            в Заявке, Компания утилизирует такие предметы, не уведомляя Пользователя.
                                        </p>
                                    </li>
                                    <li data-list-text="13.8.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Отправляя Заявку, Пользователь гарантирует, что имущество является
                                            оригинальным товаром заявленной марки/бренда.
                                        </p>
                                    </li>
                                    <li data-list-text="13.9.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Срок обработки Заявки – 48 часов. В течение этого срока менеджер Компании
                                            связывается с Пользователем для уточнения деталей Заявки. Компания вправе
                                            запросить дополнительные фото/видео предлагаемого к выкупу имущества.
                                        </p>
                                    </li>
                                    <li data-list-text="13.10.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            По итогам рассмотрения Заявки Компания принимает решение о принятии
                                            имущества для его дальнейшей проверки (аутентификации) и проверки его
                                            состояния или об отказе от дальнейшего рассмотрения Заявки и её аннуляции. О
                                            своём решении Компания сообщает Пользователю, подавшему Заявку.
                                        </p>
                                    </li>
                                    <li data-list-text="13.11.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Доставка имущества для дальнейшей проверки осуществляется за счет Компании -
                                            менеджер Компании согласовывает с Пользователем дату/время забора имущества.
                                            В согласованную дату и время приедет курьер, чтобы забрать имущество. Если
                                            курьер не сможет забрать имущество по вине Пользователя, то Компания вправе
                                            аннулировать Заявку.
                                        </p>
                                        <ol id="l40">
                                            <li data-list-text="13.11.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь обязан передать Компании то имущество, Заявку на
                                                    выкуп/передачу на комиссию которого подавал. Вместе с имуществом
                                                    Пользователь должен передать письменную заявку, которую высылает
                                                    менеджер Компании, предварительно заполнив её.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={14}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Проверка качества и оригинальности имущества, согласование цены
                                </h1>
                                <ol id="l41">
                                    <li data-list-text="14.1.">
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            После получения имущества, сотрудники Компании проводят его первичный
                                            осмотр, проверяют состояние имущества и сравнивают с фото, которые
                                            Пользователь прикладывал к Заявке.
                                        </p>
                                        <ol id="l42">
                                            <li data-list-text="14.1.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе аннулировать Заявку и вернуть имущество
                                                    Пользователю, в том числе, если состояние имущества отличается от
                                                    того, что было заявлено на фото. Пользователь обязан своими силами и
                                                    за свой счет забрать такое имущество в течение 7 (семи) календарных
                                                    дней.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="14.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            По итогам первичного осмотра Компания вправе согласовать с Пользователем
                                            цену имущества по своему усмотрению. Если имуществу требуется ремонт,
                                            Компания предлагает Пользователю соразмерное уменьшение цены имущества на
                                            стоимость ремонта. Стороны согласовывают окончательную цену имущества,
                                            которую Пользователь получит в случае выкупа/реализации имущества Компанией.
                                            Пользователь вправе согласовывать с Компанией понижение цены имущества не
                                            чаще 1 раза в течение срока реализации имущества и не раньше 1 месяца с
                                            момента заключения договора.
                                        </p>
                                    </li>
                                    <li data-list-text="14.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            По итогам первичного осмотра Компания вправе согласовать с Пользователем
                                            иной вид заключаемого договора, чем указан в Заявке. В таком случае Компания
                                            сообщает Пользователю о том, какой договор она готова заключить с ним в
                                            случае подтверждения оригинальности имущества – купли-продажи или комиссии
                                            для реализации этого имущества.
                                        </p>
                                        <ol id="l43">
                                            <li data-list-text="14.3.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если Пользователь не согласен с выбором Компанией вида договора или
                                                    предлагаемой корректировкой цены, то Заявка аннулируется, и
                                                    Пользователь обязан в течение 7 (семи) календарных дней забрать
                                                    имущество со склада Компании своими силами и за свой счет.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="14.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            После согласования окончательной цены имущества и вида заключаемого между
                                            Компанией и Пользователем договора, Компания проводит аутентификацию
                                            имущества – подтверждение его оригинальности.
                                        </p>
                                        <ol id="l44">
                                            <li data-list-text="14.4.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь согласен с тем, что услуга аутентификации является
                                                    обязательной и отдельной и поручает Компании провести аутентификацию
                                                    своего имущества. Пользователь подтверждает, что услуга
                                                    аутентификации не является навязанной ему и является необходимой
                                                    частью проверки имущества, так как неоригинальное происхождение
                                                    имущества является его существенным недостатком. Пользователь
                                                    принимает решение отправить своё имущество Компании, понимая, что
                                                    аутентификация будет проведена в обязательном порядке.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="14.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если аутентификация подтверждает оригинальность имущества, то расходы на её
                                            проведение несёт Компания. Если аутентификация подтверждает, что имущество
                                            не является оригинальным, то расходы на аутентификацию несёт Пользователь.
                                        </p>
                                        <ol id="l45">
                                            <li data-list-text="14.5.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь согласен с тем, что результаты аутентификации,
                                                    проведенной Компанией, не подлежат оспариванию и самостоятельно
                                                    несет риск возмещения расходов на её проведение.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="14.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            После получения результатов аутентификации Компания связывается с
                                            Пользователем и сообщает результаты.
                                        </p>
                                        <ol id="l46">
                                            <li data-list-text="14.6.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если результаты аутентификации показывают, что имущество не является
                                                    оригинальным, то Компания аннулирует Заявку Пользователя. В таком
                                                    случае Пользователь обязан оплатить расходы Компании на проведение
                                                </p>
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    аутентификации в течение 2 (двух) календарных дней с момента
                                                    оповещения Компанией о результатах аутентификации в размере:
                                                </p>
                                                <ul id="l47">
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingTop: '6pt',
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            15 000 руб., если таким имуществом является неоригинальная
                                                            сумка марки
                                                        </p>
                                                        <p
                                                            style={{
                                                                paddingLeft: '33pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            «Hermes»;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            4 000 руб., если таким имуществом является ювелирное изделие
                                                            (изделие из драгоценных металлов и/или драгоценных камней)
                                                            или наручные часы;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            2 700 руб. во всех остальных случаях.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li data-list-text="14.6.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Имущество, не являющееся оригинальным, Пользователь обязан вывести
                                                    со склада Компании своими силами и за свой счет в течение 7 (семи)
                                                    календарных дней после оповещения, предварительно оплатив стоимость
                                                    аутентификации. Если Пользователь не заберет свое имущество в этот
                                                    срок, то по его истечению Компания вправе начать начислять стоимость
                                                    хранения имущества в размере 1 000 руб. за каждый день хранения,
                                                    начиная с 8-го дня с даты аннулирования Заявки. Когда общий долг за
                                                    хранение имущества станет равным стоимости такого имущества, то
                                                    право собственности на имущество переходит к Компании. Стоимость
                                                    неоригинального имущества оценивается в 5 000 руб. за единицу. После
                                                    перехода права собственности Компания вправе распорядиться
                                                    имуществом по своему усмотрению, в том числе, утилизировать его.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="14.7.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В случае возврата Пользователю Имущества, Компания возвращает его только в
                                            той комплектности, которая была описана в Заявке (п. 13.6 Оферты).
                                        </p>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                        <h1
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            УСЛОВИЯ ВЫКУПА КОМПАНИЕЙ ИМУЩЕСТВА ФИЗИЧЕСКИХ ЛИЦ (УСЛОВИЯ ДОГОВОРА
                                            КУПЛИ-ПРОДАЖИ)
                                        </h1>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={15}>
                                <h1
                                    style={{
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Заключение и исполнение Договора купли-продажи имущества
                                </h1>
                                <ol id="l48">
                                    <li data-list-text="15.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Договор купли-продажи имущества между Пользователем и Компанией будет
                                            считаться заключенным, если будут соблюдены два условия (п. 1 ст. 157 ГК
                                            РФ):
                                        </p>
                                        <ol id="l49">
                                            <li data-list-text="1)">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '62pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    По результатам осмотра и проверки имущества Компания примет решение
                                                    о выкупе имущества на условиях договора купли-продажи;
                                                </p>
                                            </li>
                                            <li data-list-text="2)">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '62pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    по результатам аутентификации имущества будет подтверждено, что
                                                    имущество является оригинальным.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="15.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Договор купли-продажи считается заключенным с момента, когда менеджер
                                            Компании сообщает Пользователю о положительном результате аутентификации
                                            имущества.
                                        </p>
                                        <ol id="l50">
                                            <li data-list-text="15.2.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '77pt',
                                                        textIndent: '-36pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    С момента заключения договора купли-продажи Пользователь именуется
                                                </p>
                                                <p
                                                    style={{
                                                        paddingLeft: '66pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    «Продавец».
                                                </p>
                                            </li>
                                            <li data-list-text="15.2.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь и Компания заключают договор купли-продажи имущества
                                                    Пользователя дистанционным способом, путем присоединения
                                                    Пользователя к условиям настоящей Оферты.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="15.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            По договору купли-продажи Продавец передает в собственность Компании
                                            имущество, а Компания – принимает имущество Продавца и уплачивает за него
                                            согласованную сторонами стоимость.
                                        </p>
                                    </li>
                                    <li data-list-text="15.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Продавец подтверждает, что передаваемое им имущество приобретено на законных
                                            основаниях и законными способами, является собственностью Продавца, не
                                            обременено правами третьих лиц, кредитными обязательствами, не является
                                            предметом уголовных расследований и дел, не находится в розыске, в споре,
                                            залоге и под арестом не состоит. Стороны договорились, что
                                        </p>
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            предоставление недостоверных сведений Продавцом является существенным
                                            нарушением условий договора.
                                        </p>
                                    </li>
                                    <li data-list-text="15.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания перечисляет денежные средства Продавцу в размере окончательной
                                            согласованной стоимости имущества в течение 7 (семи) рабочих дней с даты
                                            заключения договора.
                                        </p>
                                    </li>
                                    <li data-list-text="15.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания перечисляет денежные средства по тем банковским реквизитам, которые
                                            указаны Продавцом в письменной заявке. Обязательство Компании по оплате
                                            имущества считается выполненным в момент списания денежных средств с
                                            корреспондентского счета банка Компании.
                                        </p>
                                    </li>
                                    <li data-list-text="15.7.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Все взаиморасчеты производятся в рублях. При перечислении денежных средств
                                            Продавцу в валюте (Доллар США, Евро и т.д.) курс рассчитывается по данным ЦБ
                                            России на дату перечисления платежа.
                                        </p>
                                    </li>
                                    <li data-list-text="15.8.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Право собственности на имущество переходит к Компании с момента заключения
                                            договора.
                                        </p>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                        <h1
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            УСЛОВИЯ ПРИНЯТИЯ КОМПАНИЕЙ ИМУЩЕСТВА ФИЗИЧЕСКИХ ЛИЦ ДЛЯ РЕАЛИЗАЦИИ ПО
                                            ДОГОВОРУ КОМИССИИ (УСЛОВИЯ ДОГОВОРА КОМИССИИ)
                                        </h1>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={16}>
                                <h1
                                    style={{
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Заключение и исполнение договора комиссии на реализацию имущества
                                </h1>
                                <ol id="l51">
                                    <li data-list-text="16.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Договор комиссии на реализацию имущества между Пользователем и Компанией
                                            будет считаться заключенным, если будут соблюдены два условия:
                                        </p>
                                        <ol id="l52">
                                            <li data-list-text="1)">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    По результатам осмотра и проверки имущества Компания примет решение
                                                    о принятии имущества по договору комиссии для его реализации;
                                                </p>
                                            </li>
                                            <li data-list-text="2)">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    по результатам аутентификации имущества будет подтверждено, что
                                                    имущество является оригинальным.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Договор комиссии считается заключенным с момента, когда менеджер Компании
                                            сообщает Пользователю о положительном результате аутентификации имущества.
                                        </p>
                                        <ol id="l53">
                                            <li data-list-text="16.2.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь и Компания заключают договор комиссии на реализацию
                                                    имущества Пользователя дистанционным способом, путем присоединения
                                                    Пользователя к условиям настоящей Оферты.
                                                </p>
                                            </li>
                                            <li data-list-text="16.2.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '77pt',
                                                        textIndent: '-36pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    С момента заключения договора комиссии Пользователь именуется
                                                </p>
                                                <p
                                                    style={{
                                                        paddingLeft: '66pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    «Комитент».
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            По указанному Договору комиссии Комитент поручает, а Компания обязуется за
                                            вознаграждение совершить от своего имени, но за счет Комитента сделку по
                                            реализации (продажи) имущества Комитента (несколько сделок, если Компания
                                            приняла на комиссию несколько единиц имущества Комитента).
                                        </p>
                                        <ol id="l54">
                                            <li data-list-text="16.3.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания обязуется выполнить действия, направленные на реализацию
                                                    имущества Комитента, а именно, опубликовать объявление о продаже
                                                    имущества Комитента и заключить договор его купли-продажи при
                                                    нахождении покупателя, желающего его купить. Но Компания ни в коем
                                                    случае не гарантирует, что такой покупатель найдется и сделка
                                                    купли-продажи будет совершена. Комитент уплачивает Компании
                                                    комиссионное вознаграждение только при совершении им сделки
                                                    купли-продажи имущества Комитента.
                                                </p>
                                            </li>
                                            <li data-list-text="16.3.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания самостоятельно выбирает способы исполнения поручения
                                                    Комитента. Компания вправе опубликовать информацию о продаже
                                                    имущества на любом Интернет-ресурсе.
                                                </p>
                                            </li>
                                            <li data-list-text="16.3.3.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Комитент принимает, что для целей реализации его имущества Компания
                                                    вправе осуществлять в отношении этого имущества любые действия для
                                                    достижения цели его реализации, в том числе, но не ограничиваясь:
                                                    перемещение, перевозку, выставку, демонстрацию, показ,
                                                    фото/видеозапись, передачу третьим лицам, предоставление возможности
                                                    потенциальным покупателям непосредственного ознакомления с
                                                    имуществом, в том числе, путем осмотра, ощупывания, осязания. В
                                                    связи с этим Комитент принимает, что в процессе реализации имущества
                                                    у него могут появиться следы естественного износа, а их появление не
                                                    будет считаться ненадлежащим исполнением Компанией своих
                                                    обязательств.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Комитент обязуется уплатить комиссионное вознаграждение, причитающееся
                                            Компании, при заключении сделки купли-продажи имущества, переданного на
                                            реализацию. Вне зависимости от реализации имущества Комитента, он обязуется
                                            возместить Компании понесенные ей расходы на ремонт и аутентификацию этого
                                            имущества в соответствии с условиями, изложенными ниже.
                                        </p>
                                    </li>
                                    <li data-list-text="16.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если стороны согласовали проведение ремонта имущества перед началом его
                                            реализации, то Компания обязуется выполнить ремонт имущества за счет
                                            Комитента (Компания выполняет ремонт за свой счет, а затем удерживает эту
                                            сумму из денежных средств, подлежащих выплате Комитенту. В случае досрочной
                                            отмены поручения Комитентом или если имущество осталось нереализованным,
                                            Комитент обязан возместить Компании стоимость ремонта).
                                        </p>
                                    </li>
                                    <li data-list-text="16.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Комитент подтверждает, что передаваемое им имущество приобретено на законных
                                            основаниях и законными способами, является собственностью Комитента, не
                                            обременено правами третьих лиц, кредитными обязательствами, не является
                                            предметом уголовных расследований и дел, не находится в розыске, в споре,
                                            залоге и под арестом не состоит. Стороны договорились, что предоставление
                                            недостоверных сведений Комитентом является существенным нарушением условий
                                            договора и Комитент обязуется возместить все убытки Компании, связанные с
                                            этим.
                                        </p>
                                    </li>
                                    <li data-list-text="16.7.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания размещает фотографии и описание имущества на Сайте (или другом
                                            Интернет-ресурсе) для его реализации в течение 7 (семи) рабочих дней с
                                            момента прохождения аутентификации имущества (или завершения его ремонта,
                                            если он проводился).
                                        </p>
                                        <ol id="l55">
                                            <li data-list-text="16.7.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '77pt',
                                                        textIndent: '-36pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    С момента опубликования имущества для реализации оно именуется
                                                </p>
                                                <p
                                                    style={{
                                                        paddingLeft: '66pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    «Товар».
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.8.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Компания устанавливает цену реализации (розничную цену) Товара на Сайте
                                            равную окончательно согласованной стоимости Товара (п. 14.2 Оферты).
                                        </p>
                                    </li>
                                    <li data-list-text="16.9.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Размер комиссионного вознаграждения Компании за выполнение поручения
                                            Комитента определяется следующим образом:
                                        </p>
                                        <table
                                            style={{
                                                borderCollapse: 'collapse',
                                                marginLeft: '5.5pt',
                                            }}
                                            cellSpacing={0}
                                        >
                                            <tbody>
                                                <tr style={{ height: '75pt' }}>
                                                    <td
                                                        style={{
                                                            width: '198pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            style={{
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            <br />
                                                        </p>
                                                        <p
                                                            className="s2"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '21pt',
                                                                paddingRight: '21pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            Цена Товара при продаже в
                                                        </p>
                                                        <p
                                                            className="s2"
                                                            style={{
                                                                paddingLeft: '21pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            розницу
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '268pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            style={{
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            <br />
                                                        </p>
                                                        <p
                                                            className="s2"
                                                            style={{
                                                                paddingLeft: '29pt',
                                                                paddingRight: '7pt',
                                                                textIndent: '-3pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            Размер комиссионного вознаграждения (от цены розничной
                                                            продажи Товара (вкл.
                                                        </p>
                                                        <p
                                                            className="s2"
                                                            style={{
                                                                paddingLeft: '123pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            налоги)
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: '33pt' }}>
                                                    <td
                                                        style={{
                                                            width: '198pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '39pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            От 5 000 до 15 000 руб.
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '268pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '121pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            40 %
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: '33pt' }}>
                                                    <td
                                                        style={{
                                                            width: '198pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '10pt',
                                                                paddingLeft: '37pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            от 15 001 до 40 000 руб.
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '268pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '10pt',
                                                                paddingLeft: '121pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            35 %
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: '33pt' }}>
                                                    <td
                                                        style={{
                                                            width: '198pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '10pt',
                                                                paddingLeft: '37pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            от 40 001 до 90 000 руб.
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '268pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '10pt',
                                                                paddingLeft: '121pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            30 %
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: '33pt' }}>
                                                    <td
                                                        style={{
                                                            width: '198pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '10pt',
                                                                paddingRight: '34pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'right',
                                                            }}
                                                        >
                                                            от 90 001 до 250 000 руб.
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '268pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '10pt',
                                                                paddingLeft: '121pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            25 %
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: '33pt' }}>
                                                    <td
                                                        style={{
                                                            width: '198pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '10pt',
                                                                paddingRight: '31pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'right',
                                                            }}
                                                        >
                                                            от 250 001 до 600 000 руб.
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '268pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '10pt',
                                                                paddingLeft: '121pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            20 %
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: '33pt' }}>
                                                    <td
                                                        style={{
                                                            width: '198pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '10pt',
                                                                paddingLeft: '51pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            от 600 001 и выше
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '268pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '10pt',
                                                                paddingLeft: '121pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            15 %
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                        <ol id="l56">
                                            <li data-list-text="16.9.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '4pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Размер комиссионного вознаграждения Компании за реализацию сумок
                                                    марки Hermes (модели Birkin, Kelly, Constance) составляет 15%.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.10.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Стоимость Товара, вырученная при реализации его в розницу, перечисляется
                                            Комитенту в течение 7 (семи) рабочих дней с момента его реализации, за
                                            вычетом комиссионного вознаграждения и расходов Компании на ремонт Товара
                                            (если он был проведен) (за исключением случаев, когда Покупателем был
                                            совершен возврат в течение 3-х дней с момента совершения покупки).
                                        </p>
                                        <ol id="l57">
                                            <li data-list-text="16.10.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В соответствии со ст. 410 ГК РФ Компания удерживает сумму своего
                                                    вознаграждения за исполнение комиссионного поручения и расходы на
                                                    ремонт Товара (если он был произведен) из средств, полученных в
                                                    результате выполнения поручения Комитента.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.11.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания перечисляет денежные средства по тем банковским реквизитам, которые
                                            указаны Комитентом в письменной заявке.
                                        </p>
                                        <ol id="l58">
                                            <li data-list-text="16.11.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Все взаиморасчеты производятся в рублях. При перечислении денежных
                                                    средств Продавцу в валюте (Доллар США, Евро и т.д.) курс
                                                    рассчитывается по данным ЦБ России на дату перечисления платежа.
                                                </p>
                                            </li>
                                            <li data-list-text="16.11.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Обязательство Компании по перечислению денежных средств считается
                                                    выполненным с момента списания денежных средств с корреспондентского
                                                    счета банка Компании.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.12.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания предоставляет Комитенту отчет об исполнении комиссионного поручения
                                            (далее - Отчет) в письменной форме в электронном виде не позднее 7 (семи)
                                            рабочих дней после исполнения поручения (реализации Товара конечному
                                            потребителю).
                                        </p>
                                        <ol id="l59">
                                            <li data-list-text="16.12.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Комитент обязуется ознакомиться с Отчетом и, в случае наличия
                                                    возражений, сообщить Компании о своих возражениях в течение 3 (трех)
                                                    календарных дней со дня его направления Компанией. При отсутствии
                                                </p>
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    возражений со стороны Комитента в указанный срок Отчет считается
                                                    принятым без замечаний.
                                                </p>
                                            </li>
                                            <li data-list-text="16.12.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Срок исполнения поручения по договору комиссии - не более 90
                                                    (девяноста) календарных дней с момента опубликования информации о
                                                    продаже Товара Компанией. Если ни одна из Сторон не заявляет о
                                                    прекращении поручения по истечении срока, на который оно дано, то в
                                                    случае, если Товар остался не проданным в течение указанного срока,
                                                    исполнение поручения продлевается на тот же срок.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.13.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если Товар остался не проданным в течение 90 (девяноста) календарных дней,
                                            то по согласованию с Комитентом Компания вправе произвести уценку Товара до
                                            20 (двадцати) процентов от согласованной розничной цены Товара. В таком
                                            случае срок исполнения поручения продлевается и Товар находится в продаже
                                            еще 30 (тридцать) календарных дней.
                                        </p>
                                        <ol id="l60">
                                            <li data-list-text="16.13.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    В случае уценки Товара размер комиссионного вознаграждения Компании
                                                    корректируется в соответствии с тарифами, указанными в п. 16.9
                                                    Оферты.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.14.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Комитент и Компания вправе отказаться от исполнения договора комиссии в
                                            одностороннем порядке.
                                        </p>
                                    </li>
                                    <li data-list-text="16.15.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если Товар остался не проданным в течение срока исполнения комиссионного
                                            поручения и стороны не согласовали продление срока исполнения поручения, то
                                            Комитент:
                                        </p>
                                        <ul id="l61">
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    забирает свой Товар в течение 7 (семи) дней (с даты окончания срока
                                                    реализации Товара) своими силами и за свой счёт,
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    возмещает Компании расходы на проведение ремонта (если он был
                                                    произведен).
                                                </p>
                                                <ol id="l62">
                                                    <li data-list-text="16.15.1.">
                                                        <p
                                                            style={{
                                                                paddingTop: '6pt',
                                                                paddingLeft: '66pt',
                                                                textIndent: '-25pt',
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            В случае досрочного расторжения договора по инициативе
                                                            Компании, Комитент:
                                                        </p>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    забирает свой Товар в течение 7 (семи) дней (с даты окончания срока
                                                    реализации Товара) своими силами и за свой счёт;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    возмещает Компании расходы на проведение ремонта (если он был
                                                    произведен).
                                                </p>
                                                <ol id="l63">
                                                    <li data-list-text="16.15.2.">
                                                        <p
                                                            style={{
                                                                paddingTop: '6pt',
                                                                paddingLeft: '66pt',
                                                                textIndent: '-25pt',
                                                                textAlign: 'justify',
                                                            }}
                                                        >
                                                            В случае досрочного расторжения договора по инициативе
                                                            Комитента:
                                                        </p>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Комитент уведомляет об этом Компанию. Договор считается расторгнутым
                                                    со дня, когда Компания подтверждает получение такого уведомления;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Комитент обязан своими силами и за свой счет забрать Товар не
                                                    позднее 7 (семи) календарных дней с даты расторжения договора;
                                                </p>
                                            </li>
                                            <li data-list-text="●">
                                                <p
                                                    style={{
                                                        paddingLeft: '33pt',
                                                        textIndent: '-18pt',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Комитент возмещает расходы Компании в размере:
                                                </p>
                                            </li>
                                        </ul>
                                        <ol id="l64">
                                            <li data-list-text="1)">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '33pt',
                                                        textIndent: '-21pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    на проведение аутентификации в размере в размере: 15 000 руб., если
                                                    таким Товаром является сумка марки «Hermes»; 4 000 руб., если таким
                                                    Товаром является ювелирное изделие (изделие из драгоценных металлов
                                                    и/или драгоценных камней) или наручные часы; 2 700 руб. во всех
                                                    остальных случаях;
                                                </p>
                                            </li>
                                            <li data-list-text="2)">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '24pt',
                                                        textIndent: '-13pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    на проведение ремонта (если он был проведен).
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.16.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если Комитент не заберет Товар в указанный для вывоза срок, то по его
                                            истечению Компания вправе начать начислять стоимость хранения Товара в
                                            размере 1000 руб. за каждый день хранения, начиная с 8-го дня с даты
                                            окончания срока исполнения поручения/договора.
                                        </p>
                                        <ol id="l65">
                                            <li data-list-text="16.16.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Когда общий долг за хранение Товара станет равным его окончательной
                                                    согласованной стоимости, то право собственности на этот Товар
                                                    переходит к Компании. После перехода права собственности Компания
                                                    вправе распорядиться Товаром по своему усмотрению.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="16.17.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания несет ответственность за утрату, недостачу или повреждение Товара,
                                            поступившего от Комитента, в пределах его окончательной согласованной
                                            стоимости. Размер ответственности Компании определяется исходя из степени
                                            повреждения Товара. Компания не несет ответственности за появление у Товара
                                            следов естественного износа, появившихся в процессе исполнения поручения.
                                        </p>
                                    </li>
                                    <li data-list-text="16.18.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания вправе в целях исполнения договора комиссии заключать договоры
                                            субкомиссии с третьими лицами без уведомления Комитента. Компания вправе
                                            привлекать к исполнению своих обязательств третьих лиц, оставаясь
                                            ответственной за их действия как за свои.
                                        </p>
                                    </li>
                                    <li data-list-text="16.19.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания вправе делать фотографии/видеозаписи с Товаром и использовать их по
                                            своему усмотрению.
                                        </p>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                        <h1
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            ОБЩИЕ УСЛОВИЯ ОБМЕНА ФИЗИЧЕСКИМИ ЛИЦАМИ СВОЕГО ИМУЩЕСТВА НА ТОВАР (ТРЕЙД-ИН)
                                        </h1>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={17}>
                                <h1
                                    style={{
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Подача Заявки
                                </h1>
                                <ol id="l66">
                                    <li data-list-text="17.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Любой Пользователь (доступно только Пользователям, зарегистрировавшимся на
                                            Сайте) при оформлении Заказа на покупку Товара вправе в зачет стоимости
                                            такого Товара предложить Компании свое имущество (Заявка на обмен) через
                                            Личный кабинет или через Бот.
                                        </p>
                                        <ol id="l67">
                                            <li data-list-text="17.1.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания рассматривает Заявки на обмен, если в обмен Пользователь
                                                    предлагает имущество, соответствующее критериям, указанным в п. 13.4
                                                    Оферты.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="17.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Решение, готова ли Компания заключить договор мены с Пользователем, Компания
                                            принимает исключительно по итогам своей собственной оценки имущества,
                                            предлагаемого Пользователем в обмен, и только после проведения всех
                                            необходимых проверок такого имущества, количество и вид которых Компания
                                            определяет по своему усмотрению.
                                        </p>
                                    </li>
                                    <li data-list-text="17.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Пользователь согласен, что рассмотрение Заявки на обмен и принятие имущества
                                            Пользователя для его оценки, а равно, и принятие такого имущества на обмен -
                                            право Компании, а не обязательство.
                                        </p>
                                    </li>
                                    <li data-list-text="17.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Имущество должно соответствовать качеству: без дефектов или с минимальными;
                                            фурнитура в хорошем состоянии; подкладка без явных следов носки; углы целые.
                                        </p>
                                    </li>
                                    <li data-list-text="17.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Для того, чтобы подать Заявку на обмен, Пользователю необходимо
                                            сфотографировать в нескольких ракурсах предлагаемое имущество (так, чтобы
                                            были отчетливо видны: общий вид спереди, сзади, с боков, изнанка/обратная
                                            сторона/вид внутренних отсеков, дефекты и следы носки), описать его внешний
                                            вид, что входит в комплект (защитный чехол («пыльник»), дополнительный
                                            ручки/аксессуары, упаковка и т.д.), дефекты, как эксплуатировалось.
                                        </p>
                                        <ol id="l68">
                                            <li data-list-text="17.5.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь обязан перед передачей Имущества Компании проверить его
                                                    содержимое на наличие личных вещей, чеков и пр. В случае нахождения
                                                    Компанией при приемке предметов, не описанных в качестве комплекта
                                                </p>
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '0pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Имущества в Заявке, Компания утилизирует такие предметы, не
                                                    уведомляя Пользователя.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="17.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Отправляя Заявку, Пользователь гарантирует, что Имущество является
                                            оригинальным товаром заявленной марки/бренда.
                                        </p>
                                    </li>
                                    <li data-list-text="17.7.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Срок обработки Заявки – 48 часов. В течение этого срока менеджер Компании
                                            связывается с Пользователем для уточнения деталей Заявки. Компания вправе
                                            запросить дополнительные фото/видео предлагаемого на обмен имущества.
                                        </p>
                                    </li>
                                    <li data-list-text="17.8.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            По итогам рассмотрения Заявки на обмен Компания принимает решение о принятии
                                            имущества для его дальнейшей проверки (аутентификации) и проверки его
                                            состояния или об отказе от дальнейшего рассмотрения Заявки и её аннуляции. О
                                            своём решении Компания сообщает Пользователю, подавшему Заявку.
                                        </p>
                                    </li>
                                    <li data-list-text="17.9.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Доставка имущества для дальнейшей проверки осуществляется за счет Компании -
                                            менеджер Компании согласовывает с Пользователем дату/время забора имущества.
                                            В согласованную дату и время приедет курьер, чтобы забрать имущество. Если
                                            курьер не сможет забрать имущество по вине Пользователя, то Компания вправе
                                            аннулировать Заявку и потребовать оплаты расходов на услуги службы доставки.
                                        </p>
                                        <ol id="l69">
                                            <li data-list-text="17.9.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь обязан передать Компании то имущество, Заявку на обмен
                                                    которого подавал. Вместе с имуществом Пользователь должен передать
                                                    письменную заявку на обмен, которую высылает менеджер Компании,
                                                    предварительно заполнив её.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={18}>
                                <h1
                                    style={{
                                        paddingTop: '6pt',
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Проверка качества и оригинальности имущества, согласование цены
                                </h1>
                                <ol id="l70">
                                    <li data-list-text="18.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            После получения имущества, сотрудники Компании проводят его первичный
                                            осмотр, проверяют состояние имущества и сравнивают с фото, которые
                                            Пользователь прикладывал к Заявке.
                                        </p>
                                        <ol id="l71">
                                            <li data-list-text="18.1.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания вправе аннулировать Заявку и вернуть имущество
                                                    Пользователю, в том числе, если состояние имущества отличается от
                                                    того, что было заявлено на фото. Пользователь обязан своими силами и
                                                    за свой счет забрать такое имущество в течение 7 (семи) календарных
                                                    дней.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="18.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            По итогам первичного осмотра Компания вправе согласовать с Пользователем
                                            цену имущества по своему усмотрению. Если имуществу требуется ремонт,
                                            Компания предлагает Пользователю соразмерное уменьшение цены имущества на
                                            стоимость ремонта. Стороны согласовывают окончательную цену имущества,
                                            которая будет зачтена при продаже Пользователю выбранного им Товара.
                                        </p>
                                        <ol id="l72">
                                            <li data-list-text="18.2.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если Пользователь не согласен с предлагаемой ценой имущества, то
                                                    Заявка на обмен аннулируется и Пользователь обязан в течение 7
                                                    (семи) календарных дней забрать имущество со склада Компании своими
                                                    силами и за свой счет.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="18.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если Пользователь при подаче Заявки указал, что имущество было ранее куплено
                                            у Компании (опция «Круговорот»), то Компания проводит поиск по своим базам и
                                            сверяет серийный номер (при наличии) имущества. Если Компания подтверждает,
                                            что это имущество было приобретено у неё, то Компания вправе не проводить
                                            аутентификацию.
                                        </p>
                                        <ol id="l73">
                                            <li data-list-text="18.3.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Опция «Круговорот» применяется только в отношении сумок, купленных
                                                    на Сайте, отправленных из того же Личного кабинета, через который
                                                    сумка приобреталась.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="18.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Опция «круговорот» применяется, если обмениваемое имущество было куплено
                                            Продавцом у Компании и с момента покупки прошло не более 180 (ста
                                        </p>
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            восьмидесяти) календарных дней. В таком случае цена имущества определяется
                                            следующим образом:
                                        </p>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                        <table
                                            style={{
                                                borderCollapse: 'collapse',
                                                marginLeft: '5.5pt',
                                            }}
                                            cellSpacing={0}
                                        >
                                            <tbody>
                                                <tr style={{ height: '75pt' }}>
                                                    <td
                                                        style={{
                                                            width: '231pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s2"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '18pt',
                                                                paddingRight: '18pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            Количество календарных дней,
                                                        </p>
                                                        <p
                                                            className="s2"
                                                            style={{
                                                                paddingLeft: '28pt',
                                                                paddingRight: '7pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            прошедших с момента покупки обмениваемого имущества
                                                            Продавцом у Компании
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '235pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s2"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '4pt',
                                                                paddingRight: '3pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            Окончательная цена имущества
                                                        </p>
                                                        <p
                                                            className="s2"
                                                            style={{
                                                                paddingLeft: '25pt',
                                                                paddingRight: '3pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            составляет (от цены, по которой Продавец ранее купил это
                                                            имущество у Компании)
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: '33pt' }}>
                                                    <td
                                                        style={{
                                                            width: '231pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '18pt',
                                                                paddingRight: '18pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            До 35
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '235pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '104pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            90 %
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: '33pt' }}>
                                                    <td
                                                        style={{
                                                            width: '231pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '18pt',
                                                                paddingRight: '18pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            От 36 до 90
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '235pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '104pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            85 %
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: '33pt' }}>
                                                    <td
                                                        style={{
                                                            width: '231pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '18pt',
                                                                paddingRight: '18pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            От 91 до 180
                                                        </p>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '235pt',
                                                            borderTopStyle: 'solid',
                                                            borderTopWidth: '1pt',
                                                            borderTopColor: '#7e7e7e',
                                                            borderLeftStyle: 'solid',
                                                            borderLeftWidth: '1pt',
                                                            borderLeftColor: '#7e7e7e',
                                                            borderBottomStyle: 'solid',
                                                            borderBottomWidth: '1pt',
                                                            borderBottomColor: '#7e7e7e',
                                                            borderRightStyle: 'solid',
                                                            borderRightWidth: '1pt',
                                                            borderRightColor: '#7e7e7e',
                                                        }}
                                                    >
                                                        <p
                                                            className="s3"
                                                            style={{
                                                                paddingTop: '9pt',
                                                                paddingLeft: '106pt',
                                                                textIndent: '0pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            80%
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                        <ol id="l74">
                                            <li data-list-text="18.4.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '10pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Отсчет дней для определения периода покупки сумки у Компании идет от
                                                    момента подачи Заявки (на обмен) в календарных днях.
                                                </p>
                                            </li>
                                            <li data-list-text="18.4.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если состояние сумки изменилось, Компания вправе согласовать иную
                                                    цену или аннулировать Заявку.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="18.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            После согласования окончательной цены имущества, Компания проводит
                                            аутентификацию имущества – подтверждение его оригинальности.
                                        </p>
                                        <ol id="l75">
                                            <li data-list-text="18.5.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь согласен с тем, что услуга аутентификации является
                                                    обязательной и отдельной, и поручает Компании провести
                                                    аутентификацию своего имущества. Пользователь подтверждает, что
                                                    услуга аутентификации не является навязанной ему и является
                                                    необходимой частью проверки имущества, так как неоригинальное
                                                    происхождение имущества является его существенным недостатком.
                                                    Пользователь принимает решение отправить своё имущество Компании,
                                                    понимая, что аутентификация будет проведена в обязательном порядке.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="18.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если аутентификация подтверждает оригинальность имущества, то расходы на её
                                            проведение несёт Компания. Если аутентификация подтверждает, что имущество
                                            не является оригинальным, то расходы на аутентификацию несёт Пользователь.
                                        </p>
                                        <ol id="l76">
                                            <li data-list-text="18.6.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь согласен с тем, что результаты аутентификации,
                                                    проведенной Компанией, не подлежат оспариванию и самостоятельно
                                                    несет риск возмещения расходов на её проведение.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="18.7.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            После получения результатов аутентификации Компания связывается с
                                            Пользователем и сообщает результаты.
                                        </p>
                                        <ol id="l77">
                                            <li data-list-text="18.7.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Если результаты аутентификации показывают, что имущество не является
                                                    оригинальным, то Компания аннулирует Заявку Пользователя на обмен. В
                                                    таком случае Пользователь обязан оплатить расходы Компании на
                                                    проведение аутентификации в течение 2 (двух) календарных дней с
                                                    момента оповещения Компанией о результатах аутентификации в размере:
                                                </p>
                                                <ul id="l78">
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingTop: '6pt',
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            15 000 руб., если таким имуществом является сумка марки
                                                            «Hermes»;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            4 000 руб., если таким имуществом является ювелирное изделие
                                                            (изделие из драгоценных металлов и/или драгоценных камней)
                                                            или наручные часы;
                                                        </p>
                                                    </li>
                                                    <li data-list-text="●">
                                                        <p
                                                            style={{
                                                                paddingLeft: '33pt',
                                                                textIndent: '-18pt',
                                                                textAlign: 'left',
                                                            }}
                                                        >
                                                            2 700 руб. во всех остальных случаях.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li data-list-text="18.7.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '3pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Имущество, не являющееся оригинальным, Пользователь обязан вывести
                                                    со склада Компании своими силами и за свой счет в течение 7 (семи)
                                                    календарных дней после аннулирования Заявки на обмен, предварительно
                                                    оплатив стоимость аутентификации. Если Пользователь не заберет свое
                                                    имущество в этот срок, то по его истечению Компания вправе начать
                                                    начислять стоимость хранения имущества в размере 1 000 руб. за
                                                    каждый день хранения, начиная с 8-го дня с даты аннулирования
                                                    Заявки. Когда общий долг за хранение имущества станет равным
                                                    стоимости такого имущества, то право собственности на имущество
                                                    переходит к Компании. Стоимость неоригинального имущества
                                                    оценивается в 5 000 руб. за единицу. После перехода права
                                                    собственности Компания вправе распорядиться имуществом по своему
                                                    усмотрению, в том числе, утилизировать его.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="18.8.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            В случае возврата Пользователю Имущества, Компания возвращает его только в
                                            той комплектности, которая была описана в Заявке (п. 17.5 Оферты).
                                        </p>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                        <h1
                                            style={{
                                                paddingLeft: '5pt',
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            УСЛОВИЯ ОБМЕНА КОМПАНИЕЙ ТОВАРОВ НА ИМУЩЕСТВО ФИЗИЧЕСКИХ ЛИЦ (УСЛОВИЯ
                                            ДОГОВОРА МЕНЫ)
                                        </h1>
                                        <p
                                            style={{
                                                textIndent: '0pt',
                                                textAlign: 'left',
                                            }}
                                        >
                                            <br />
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li data-list-text={19}>
                                <h1
                                    style={{
                                        paddingLeft: '23pt',
                                        textIndent: '-18pt',
                                        textAlign: 'justify',
                                    }}
                                >
                                    Заключение и исполнение Договора мены
                                </h1>
                                <ol id="l79">
                                    <li data-list-text="19.1.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Договор мены имущества и Товара между Пользователем и Компанией будет
                                            считаться заключенным, если будут соблюдены два условия (п. 1 ст. 157 ГК
                                            РФ):
                                        </p>
                                        <ol id="l80">
                                            <li data-list-text="1)">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '44pt',
                                                        textIndent: '-21pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания примет решение о принятии имущества Пользователя для обмена
                                                    по результатам его осмотра и проверки;
                                                </p>
                                            </li>
                                            <li data-list-text="2)">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '44pt',
                                                        textIndent: '-21pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    по результатам аутентификации имущества будет подтверждено, что
                                                    имущество является оригинальным.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="19.2.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Договор мены считается заключенным с момента, когда менеджер Компании
                                            сообщает Пользователю о положительном результате аутентификации имущества
                                            или принятии имущества для обмена.
                                        </p>
                                        <ol id="l81">
                                            <li data-list-text="19.2.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Пользователь и Компания заключают договор мены имущества
                                                    Пользователя и Товара дистанционным способом, путем присоединения
                                                    Пользователя к условиям настоящей Оферты.
                                                </p>
                                            </li>
                                            <li data-list-text="19.2.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '77pt',
                                                        textIndent: '-36pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    С момента заключения договора мены Пользователь именуется
                                                    «Продавец».
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="19.3.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            По договору мены Продавец передает в собственность Компании своё имущество и
                                            в обмен него принимает выбранный Товар, а Компания принимает имущество
                                            Продавца, передавая в обмен выбранный им Товар.
                                        </p>
                                    </li>
                                    <li data-list-text="19.4.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Продавец подтверждает, что передаваемое им имущество приобретено на законных
                                            основаниях и законными способами, является собственностью Продавца, не
                                            обременено правами третьих лиц, кредитными обязательствами, не является
                                            предметом уголовных расследований и дел, не находится в розыске, в споре,
                                            залоге и под арестом не состоит. Стороны договорились, что предоставление
                                            недостоверных сведений Пользователем является существенным нарушением
                                            условий договора.
                                        </p>
                                    </li>
                                    <li data-list-text="19.5.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Право собственности на имущество переходит к Компании в момент заключения
                                            Договора.
                                        </p>
                                    </li>
                                    <li data-list-text="19.6.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если окончательная цена имущества больше цены выбранного Продавцом Товара в
                                            обмен, то Компания выплачивает Продавцу разницу между ценой имущества и
                                            ценой Товара.
                                        </p>
                                    </li>
                                    <li data-list-text="19.7.">
                                        <p
                                            style={{
                                                paddingTop: '3pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Компания перечисляет денежные средства Продавцу в течение 7 (семи) рабочих
                                            дней с момента заключения договора мены (п. 19.2 Оферты).
                                        </p>
                                        <ol id="l82">
                                            <li data-list-text="19.7.1.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Все взаиморасчеты производятся в рублях. При перечислении денежных
                                                    средств Продавцу в валюте (Доллар США, Евро и т.д.) курс
                                                    рассчитывается по данным ЦБ России на дату перечисления платежа.
                                                </p>
                                            </li>
                                            <li data-list-text="19.7.2.">
                                                <p
                                                    style={{
                                                        paddingTop: '6pt',
                                                        paddingLeft: '66pt',
                                                        textIndent: '-25pt',
                                                        textAlign: 'justify',
                                                    }}
                                                >
                                                    Компания перечисляет денежные средства по тем банковским реквизитам,
                                                    которые указаны Продавцом в письменной заявке. Обязательство
                                                    Компании по перечислению денежных средств считается выполненным с
                                                    момента списания денежных средств с корреспондентского счета
                                                    Компании.
                                                </p>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-list-text="19.8.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Если окончательная цена имущества, принятого для обмена, меньше цены
                                            выбранного Продавцом Товара, то Продавец обязан оплатить разницу между ценой
                                            имущества и ценой Товара в течение 3 (трех) рабочих дней со дня заключения
                                            договора мены, но, в любом случае, перед передачей ему Товара.
                                        </p>
                                    </li>
                                    <li data-list-text="19.9.">
                                        <p
                                            style={{
                                                paddingTop: '6pt',
                                                paddingLeft: '44pt',
                                                textIndent: '-21pt',
                                                textAlign: 'justify',
                                            }}
                                        >
                                            Продавец гарантирует, что действует в личных, семейных целях, не связанных с
                                            осуществлением предпринимательской деятельности.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        <p
                            style={{
                                paddingTop: '6pt',
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                lineHeight: '28pt',
                                textAlign: 'justify',
                            }}
                        >
                            <a href="mailto:hey@thecultt.com" className="a" target="_blank" rel="noreferrer">
                                Контактная информация Компании: E-mail:{' '}
                            </a>
                            <a href="mailto:hey@thecultt.com" className="s4" target="_blank" rel="noreferrer">
                                hey@thecultt.com
                            </a>
                        </p>
                        <p
                            style={{
                                paddingLeft: '5pt',
                                textIndent: '0pt',
                                textAlign: 'justify',
                            }}
                        >
                            Телефон: +7 499 992 80 47
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqPublicOfferte;
