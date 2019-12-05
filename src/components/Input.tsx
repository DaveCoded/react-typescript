import React, { useState, useRef } from 'react'

export const Input = () => {
  const [name, setName] = useState("") // Type is inferred by Typescript
  const inputRef = useRef(null)

  return <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
}
