import React from 'react';

import { NavLink } from '@/components';
import { APP_ROUTE } from '@/constants/routes';

const CabinetMenuMedia: React.FC = () => {
    return (
        <div className="cabinet-menu-media">
            <NavLink href={APP_ROUTE.cabinet.setting} className="cabinet-menu-media-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="white" />
                    <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke="#202020"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <span className="cabinet-menu-media-item__text">Мои данные</span>
            </NavLink>

            <NavLink href={APP_ROUTE.cabinet.history} className="cabinet-menu-media-item">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.599609" width="24" height="24" rx="12" fill="white" />
                    <path
                        d="M21.5996 10C21.5996 17 12.5996 23 12.5996 23C12.5996 23 3.59961 17 3.59961 10C3.59961 7.61305 4.54782 5.32387 6.23565 3.63604C7.92348 1.94821 10.2127 1 12.5996 1C14.9866 1 17.2757 1.94821 18.9636 3.63604C20.6514 5.32387 21.5996 7.61305 21.5996 10Z"
                        stroke="#202020"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.5996 13C14.2565 13 15.5996 11.6569 15.5996 10C15.5996 8.34315 14.2565 7 12.5996 7C10.9428 7 9.59961 8.34315 9.59961 10C9.59961 11.6569 10.9428 13 12.5996 13Z"
                        stroke="#202020"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <span className="cabinet-menu-media-item__text">Мои заказы</span>
            </NavLink>

            <NavLink href={APP_ROUTE.cabinet.sells} className="cabinet-menu-media-item">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.200195" width="24" height="24" rx="12" fill="white" />
                    <path
                        d="M3.2002 6L6.2002 2H18.2002L21.2002 6M3.2002 6V20C3.2002 20.5304 3.41091 21.0391 3.78598 21.4142C4.16105 21.7893 4.66976 22 5.2002 22H19.2002C19.7306 22 20.2393 21.7893 20.6144 21.4142C20.9895 21.0391 21.2002 20.5304 21.2002 20V6M3.2002 6H21.2002M16.2002 10C16.2002 11.0609 15.7788 12.0783 15.0286 12.8284C14.2785 13.5786 13.2611 14 12.2002 14C11.1393 14 10.1219 13.5786 9.37177 12.8284C8.62162 12.0783 8.2002 11.0609 8.2002 10"
                        stroke="#202020"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <span className="cabinet-menu-media-item__text">Мои продажи</span>
            </NavLink>

            <NavLink href={APP_ROUTE.cabinet.favorites} className="cabinet-menu-media-item">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.799805" width="24" height="24" rx="12" fill="white" />
                    <path
                        d="M16.459 5C14.8454 5 13.4325 5.69391 12.5519 6.86685C11.6712 5.69391 10.2584 5 8.6447 5C7.3602 5.00145 6.12872 5.51236 5.22044 6.42064C4.31216 7.32892 3.80125 8.56039 3.7998 9.84489C3.7998 15.3149 11.9103 19.7425 12.2557 19.9254C12.3467 19.9744 12.4485 20 12.5519 20C12.6552 20 12.757 19.9744 12.848 19.9254C13.1934 19.7425 21.3039 15.3149 21.3039 9.84489C21.3025 8.56039 20.7916 7.32892 19.8833 6.42064C18.975 5.51236 17.7435 5.00145 16.459 5ZM12.5519 18.6595C11.125 17.828 5.0501 14.0404 5.0501 9.84489C5.05134 8.89193 5.43045 7.97835 6.1043 7.3045C6.77815 6.63065 7.69173 6.25154 8.6447 6.25029C10.1646 6.25029 11.4407 7.05986 11.9736 8.36017C12.0207 8.47483 12.1008 8.57289 12.2038 8.64191C12.3068 8.71093 12.4279 8.74778 12.5519 8.74778C12.6758 8.74778 12.797 8.71093 12.8999 8.64191C13.0029 8.57289 13.083 8.47483 13.1301 8.36017C13.6631 7.05752 14.9391 6.25029 16.459 6.25029C17.412 6.25154 18.3256 6.63065 18.9994 7.3045C19.6733 7.97835 20.0524 8.89193 20.0536 9.84489C20.0536 14.0342 13.9772 17.8272 12.5519 18.6595Z"
                        fill="#202020"
                    />
                </svg>

                <span className="cabinet-menu-media-item__text">Избранное</span>
            </NavLink>

            <NavLink href={APP_ROUTE.cabinet.waiting} className="cabinet-menu-media-item">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.400391" width="24" height="24" rx="12" fill="white" />
                    <path
                        d="M16.9004 14L18.9004 13.5L19.4004 15.5"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M18.9004 13.5C18.4562 14.7586 17.6494 15.8576 16.5817 16.6584C15.5139 17.4592 14.233 17.926 12.9004 18C11.6685 18.0002 10.4664 17.6213 9.45737 16.9146C8.44834 16.2079 7.68128 15.2078 7.26039 14.05M8.90039 10L6.90039 10.5L6.40039 8.5"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.90039 10.5C7.74039 8.2 10.3204 6 12.9004 6C14.1383 6.00348 15.3448 6.38976 16.3545 7.10588C17.3642 7.822 18.1278 8.8329 18.5404 10"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <span className="cabinet-menu-media-item__text">Лист ождиания</span>
            </NavLink>
        </div>
    );
};

export default CabinetMenuMedia;
