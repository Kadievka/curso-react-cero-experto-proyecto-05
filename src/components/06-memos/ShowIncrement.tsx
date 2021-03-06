import React, { memo } from 'react'

const ShowIncrement = memo(({increment}: {increment: Function}) => {

  // console.log("Me volví a generar :( ");

  return (
    <button
      className="btn btn-primary"
      onClick={ () => {increment(5)} }
    >
      Incrementar
    </button>
  )
})

export default ShowIncrement