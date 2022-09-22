import React from 'react'

const Tags = ({ tags }) => {
  return tags.map((item, index) => {
    return (
      <span className="tags" key={item + '-' + index}>
        {item}
      </span>
    )
  })
}

export default Tags
