import React from 'react'

export default function User({user}) {
  return (
    <div className='userContainer'>
        <img src={user.picture.large} alt="" />
        <p>{`full Name : ${user.name.first} ${user.name.last}`}</p>
        <p>{`Phone : ${user.phone}`}</p>
    </div>
  )
}
