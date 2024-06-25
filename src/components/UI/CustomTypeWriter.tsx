import React from 'react'
import Typewriter from 'typewriter-effect'

export default function CustomTypeWriter({
  cursorClassName,
  textClassName,
  contain
}: any | null) {
  return (
    <Typewriter
      options={{
        cursorClassName: cursorClassName,
        autoStart: true,
        loop: true
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(`<span class="${textClassName}">${contain}</span>`)
          .pauseFor(2000)
          .deleteAll()
          .start()
      }}
    />
  )
}
