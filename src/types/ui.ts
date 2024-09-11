import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    theme?: 'white' | 'grey' | 'green';
    info?: string;
}
