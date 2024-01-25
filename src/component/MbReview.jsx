import React from 'react'

export default function MbReview({review}) {
  return (
    <div className = "mt-3">
      <ul>
        {review.length !== 0 && review.map((value, i) => (
          <li key = {i}>
            <div className = "flex">
              <div>
                <img
                  className="w-16 h-16 rounded-full mr-2"
                  src={value.imgLink}
                  alt={value.name}
                />
              </div>
              <div>
                <h4 className = "font-bold">{value.name}</h4>
              </div>
            </div>
            <div>
              {value.imgLinkList &&
                value.imgLinkList.map((img, i) => (
                  <img
                    key = {i}
                    src = {img.imgLink}
                    alt = "error"
                  />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


