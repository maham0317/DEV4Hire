import { Config } from '@/config';
import { compactDecrypt } from 'jose';
import { Buffer } from 'buffer';

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

export const decryptToken = async (jwe: string | null | undefined)=> {
    if(!jwe) return '';
    const key = Buffer.from(Config.SECRATE_KEY, 'utf-8');
    const decryptedObj = await compactDecrypt((jwe || ''), key);
    const textDecoder = new TextDecoder('utf-8');
    const decryptedToken = textDecoder.decode(decryptedObj.plaintext);
    return decryptedToken;
};