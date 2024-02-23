import React from 'react'

function LIstItem({itemName,className,onClick}) {
  return (
    <li className={className} onClick={onClick}>{itemName}</li>
  )
}

export default LIstItem