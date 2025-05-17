import { useEffect, useState } from "react";
import { IPokemon } from "../types";

export interface IResponseState <T> {
  data: T | null;
  loading: boolean;
  error: string | null;
};

interface IUseResponseProps{
  url: string;
}

export function useResponseStatus<T = IPokemon> ({ url }: IUseResponseProps) {
  const [state, setState] = useState<IResponseState<T>>({
    data: null,
    loading: true,
    error: null,
  });


  useEffect(() => {

    setState(prev => ({ ...prev, loading: true, error: null }));

    (async () => {

      try {
        const responce = await fetch(url);
        const data = await responce.json()
        setState({
          data: data as T,
          loading: false,
          error: null,
        });
      } catch ( err ) {
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.name : 'Unknown error',
        });
      }
    })()

  }, [ url ]);

  return state;
}
