import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    })

    //  userEffect to make fetch request
    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();

                if (isMounted) {
                    setState({
                        data,
                        loading: false,
                        error: null,
                    });
                }
            } catch (err: any) {
                if (isMounted) {
                    setState({
                        data: null,
                        loading: false,
                        error: err.message || "Something went wrong",
                    });
                }
            }
        }

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);



    return state

}