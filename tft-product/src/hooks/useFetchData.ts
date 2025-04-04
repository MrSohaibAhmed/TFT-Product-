import { useState, useEffect } from 'react';

type FetchFunction<T> = () => Promise<
  { success: boolean; data: T } | { success: false; message: string }
>;

interface UseFetchDataProps<T> {
  fetchFunction: FetchFunction<T>;
  dependencies?: unknown[];
  initialState?: T;
}

interface UseFetchDataReturn<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
  loading: boolean;
  error: string | null;
}

const useFetchData = <T>({
  fetchFunction,
  dependencies = [],
  initialState,
}: UseFetchDataProps<T>): UseFetchDataReturn<T> => {
  const [data, setData] = useState<T>(initialState as T);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchFunction();

        if ('success' in res && res.success) {
          setData(res.data);
        } else {
          setError(
            'message' in res ? res.message : 'Server Error: Failed to fetch'
          );
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected Error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { data, setData, loading, error };
};

export default useFetchData;
