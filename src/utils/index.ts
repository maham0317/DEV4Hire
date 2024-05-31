export const getToken = (): IAuth | null=> {
    const storeString = localStorage.getItem('D4HRT') || '';
    return storeString? JSON.parse(storeString): null;
};

export const setToken = (payload: IAuth)=> {
    localStorage.setItem('D4HRT', JSON.stringify(payload));
};

export const removeToken = (): void=> {
    localStorage.removeItem('D4HRT');
};