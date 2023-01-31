import React from 'react'
import Person from './Person'

export default function PersonList() {
    const personList = [
        {
            id:1,
            name:"Raja",
            age:19,
            skill:"Web dev"
        },
        {
            id:2,
            name:"Puja",
            age:19,
            skill:"Pharmacist"
        },
        {
            id:3,
            name:"Rajni",
            age:29,
            skill:"Node"
        },
        {
            id:4,
            name:"Manu",
            age:79,
            skill:"Fire"
        }
    ]
  return (
    <div className='PersonList'>
      <h3>Person List...</h3>
      {
        personList.map(person => <h2 key={person.id}><Person personDetails={person} /></h2>)
      }
    </div>
  )
}
