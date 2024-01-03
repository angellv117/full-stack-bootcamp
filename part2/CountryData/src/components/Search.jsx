import React from 'react'

export default function Search({id, value, onChange}) {
  return (
    <div>
        filter show with: <input id={id} value={value} onChange={onChange} />
    </div>
  )
}
