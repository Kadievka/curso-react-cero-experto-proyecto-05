import { useEffect, useState } from "react";
import UseFetchStateInterface from "../interfaces/UseFetchStateInterface";

export default function useFetch(url?: string): UseFetchStateInterface {

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
