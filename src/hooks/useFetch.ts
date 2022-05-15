import { useEffect, useState } from "react";

export interface BreakinBadApiQuoteInterface {
  quote_id: string
  quote: string
  author: string
  series: string
}

export interface UseFetchStateInterface {
  data: BreakinBadApiQuoteInterface[] | null,
  loading: boolean,
  error: null | string,
}

export const useFetch = (url?: string) => {

  const [state, setState] = useState<UseFetchStateInterface>({data: null, loading: true, error: null});

  useEffect( () => {

    setState({data: null, loading: true, error: null});

    if( url ) {
      fetch( url )
      .then( resp => resp.json() )
      .then( data => {

        setState({
          loading: false,
          error: null,
          data: data,
        });

      }).catch( (error) => {

        console.log(error);

        setState({
          loading: false,
          error: "No se pudo cargar la info",
          data: null,
        });

      })
    }

  }, [url]);

  return state;

}
