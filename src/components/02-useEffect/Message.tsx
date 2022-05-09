import React, { useEffect } from 'react'

const Message = () => {

  useEffect(() => {

    console.log('componente montado');

    return () => {
      console.log('componente desmontado');
    }
  }, [])


  return (
    <div>Message</div>
  )
}

export default Message