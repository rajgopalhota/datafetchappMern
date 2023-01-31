import React from 'react'

export default function Person({personDetails}) {
  return (
    <div>
      Hi Iam {personDetails.name} , My age is {personDetails.age}, and Iam known for {personDetails.skill}.
    </div>
  )
}
