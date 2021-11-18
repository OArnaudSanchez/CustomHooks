# useFetch React Custom Hook

Usage Examples:
```
    const API_URL = 'API ENDPOINT';
    const { data: null, loading: true, errors: null } = useFetch(API_URL);
    const { data: [], loading: false, errors: null } = useFetch(API_URL);
    const { data: null, loading: false, errors: [] } = useFetch(API_URL);
```