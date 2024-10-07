import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

export const manropeFont = Manrope({
    weight: ['400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['cyrillic', 'latin'],
    variable: '--font-manrope',
    display: 'swap',
});

export const ltSuperiorMonoFont = localFont({
    src: '../assets/fonts/ltsuperiormono-bold.otf',
    style: 'normal',
    weight: '700',
    variable: '--font-ltsuperiormono',
});
