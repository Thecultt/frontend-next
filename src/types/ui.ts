import React from 'react';

interface CommonInputProps {
    label: string;
    error?: string;
    theme?: 'white' | 'grey' | 'green';
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, CommonInputProps {
    info?: string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, CommonInputProps {}
