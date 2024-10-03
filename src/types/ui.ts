import React from 'react';
import { Props as MaskInputProps } from 'react-input-mask';

interface CommonInputProps {
    label: string;
    error?: string;
    theme?: 'white' | 'grey' | 'green';
}

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
        CommonInputProps {
    info?: React.ReactNode;
    maskProps?: Pick<MaskInputProps, 'mask' | 'maskChar' | 'alwaysShowMask'>;
    hints?: string[];
    value: string;
    onChange?: (value: string) => void;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, CommonInputProps {}

export interface IOption {
    label: string;
    value: string;
}

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
