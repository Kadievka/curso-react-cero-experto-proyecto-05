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
  error: any,
}

export const useFetch = (url: string) => {

  const [state, setState] = useState<UseFetchStateInterface>({data: null, loading: true, error: null});

  useEffect( () => {

    setState({data: null, loading: true, error: null});

    fetch( url )
      .then( resp => resp.json() )
      .then( data => {

        setState({
          loading: false,
          error: null,
          data: data,
        })

      })

  }, [url]);

  return state;

}
