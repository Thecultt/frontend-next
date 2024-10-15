import React from 'react';
import { Props as MaskInputProps } from 'react-input-mask';

import { Noop } from './functions';

interface CommonInputProps {
    label: string;
    error?: string;
    theme?: 'white' | 'grey' | 'green';
}

export interface IOption {
    label: string;
    value: string;
}

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
        CommonInputProps {
    value: string;
    info?: React.ReactNode;
    maskProps?: Pick<MaskInputProps, 'mask' | 'maskChar' | 'alwaysShowMask'>;
    hints?: Array<string | IOption>;
    needFilterHints?: boolean;
    hintsIsLoading?: boolean;
    renderHint?: (hint: IOption) => React.ReactNode;
    onChange?: (value: string) => void;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, CommonInputProps {}

export interface BaseSelectProps extends CommonInputProps {
    options: IOption[];
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    info?: React.ReactNode;
}

export interface SingleSelectProps extends BaseSelectProps {
    isMulti?: false;
    value?: string;
    onChange?: (value: string) => void;
}

export interface MultiSelectProps extends BaseSelectProps {
    isMulti: true;
    value?: string[];
    onChange?: (value: string[]) => void;
}

export type SelectProps = SingleSelectProps | MultiSelectProps;

export interface CheckboxProps extends React.PropsWithChildren {
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    className?: string;
    size?: 's' | 'm' | 'l';
    defaultChildrenStyles?: boolean;
    wide?: boolean;
    error?: string;
    onChange?: Noop;
}

export type BadgeTheme = 'default' | 'green' | 'black';
