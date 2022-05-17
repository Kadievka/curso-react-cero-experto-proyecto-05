import React, { memo } from 'react'

export interface SmallInputInterface {
  value: number
}

const Small = memo(({ value }: SmallInputInterface) => {

  // console.log("Me volví a llamar :'(");

  return (
    <small> { value } </small>
  )
});

export default Small;