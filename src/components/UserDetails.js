import React from 'react'
import { useParams } from 'react-router-dom'
  
export function UserDetails() {
    const params =  useParams();
    const id = params.userId
  return (
    <div>details about users{ id }</div>
  )
}


