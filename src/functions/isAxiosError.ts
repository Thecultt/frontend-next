import axios, { AxiosError } from 'axios';

export const isAxiosError = <R = any>(error: unknown): error is AxiosError<R> => axios.isAxiosError(error);
