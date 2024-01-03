import React, { useState } from 'react'

export default function Filter({ id, value,onChange }) {

    return (
        <div>
            filter show with: <input id={id} value={value} onChange={onChange} />
        </div>
    )
}
