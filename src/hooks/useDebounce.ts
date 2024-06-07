import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number = 500): string => {
    const [debouncedValue, setDebouncedValue] = useState(value as string);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;