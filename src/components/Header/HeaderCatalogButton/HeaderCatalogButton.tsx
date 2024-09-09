'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { BurgerMenuIcon, XIcon } from '@/assets/icons';
import { toggleHeaderCatalogMenuIsVisible } from '@/redux/actions/header';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import './styles.sass';

export const HeaderCatalogButton = () => {
    const dispatch = useDispatch();

    const menuIsVisible = useTypedSelector(({ header }) => header.catalogMenuIsVisible);
    const Icon = menuIsVisible ? XIcon : BurgerMenuIcon;

    const toggleMenu = () => {
        dispatch(toggleHeaderCatalogMenuIsVisible());
    };

    return (
        <button type="button" className="header-catalog-button" onClick={toggleMenu}>
            <Icon className="header-catalog-button__icon" />
            <span className="header-catalog-button__text">Каталог</span>
        </button>
    );
};
