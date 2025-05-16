import { useEffect, useState } from "react";

export interface IResponceState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
};

type fetchFunc<T> = () => Promise<T>;

export function useResponceStatus<T>(fetchFunc: fetchFunc<T>)  {
  const [state, setState] = useState<IResponceState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {

    setState(prev => ({ ...prev, loading: true, error: null }));
  
    fetchFunc().then((resp) => {
      setState({
        data: resp,
        loading: false,
        error: null,
      });
    }).catch((err) => {
      setState({
        data: null,
        loading: false,
        error: err.message,
      });
    });

  }, []);

  return state;
}
