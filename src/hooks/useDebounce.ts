import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay?: number): string => {
    const [debouncedValue, setDebouncedValue] = useState(value as string);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;