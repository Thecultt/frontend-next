export const isRussia = (country: string) => country.toLocaleLowerCase() === 'россия';
export const isMoscow = (city: string) => city.toLocaleLowerCase().indexOf('москва') !== -1;
