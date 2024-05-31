import { Config } from '@/config';

export const getToken = (): IAuth | null=> {
    const storeString = localStorage.getItem(Config.tokenStorageKey) || '';
    return storeString? JSON.parse(storeString): null;
};

export const setToken = (payload: IAuth)=> {
    localStorage.setItem(Config.tokenStorageKey, JSON.stringify(payload));
};

export const removeToken = (): void=> {
    localStorage.removeItem(Config.tokenStorageKey);
};