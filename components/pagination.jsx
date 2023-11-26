import React from 'react'

export default function Pagination({TotalPage, handclick}) {
  let pages = [...Array(TotalPage).keys()].map(num => num+ 1 )
  console.log(pages);
  return (
    <div>
      {pages.map(num => (
        <button onClick={() => handclick(num)}>{num}</button>
      ))}
    </div>
  )
}
