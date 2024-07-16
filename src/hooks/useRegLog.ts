import { useHash } from './useHash';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

export const useRegLog = () => {
    const { changeHash } = useHash();

    const login = () => {
        changeHash(ReglogStateTypesNotLogin.REGLOG);
    };

    return { login };
};
