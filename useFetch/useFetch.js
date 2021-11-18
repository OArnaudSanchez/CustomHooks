import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        errors: null
    });

    useEffect(() => {
        return () => { isMounted.current = false };
    }, []);

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            errors: null
        });

        const fetchData = async () => {
            try {

                const response = await fetch(url);
                const data = await response.json();

                if(isMounted.current){
                    setState({
                        loading: false,
                        errors: null,
                        data,
                    });
                }
            } catch (error) {
                setState({
                    loading: true,
                    data: null,
                    errors: error,
                });
            }
        };

        fetchData();

    }, [url]);

    return state;
};