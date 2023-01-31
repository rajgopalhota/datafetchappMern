import React from 'react'

export default function Namelist() {
    const namelist = ['raja', 'puja', 'rajesh', 'ramya', 'kiran']
  return (
    <div className='PersonList'>
      <h3>Name List....</h3>
      {
        namelist.map((name, index) => <h2 key={index}>{index+1} {name}</h2>)
      }
    </div>
  )
}
