import React from 'react';

export default function MbTag({ restaurant }) {
  return (
    <div className="bg-white p-5 mb-3">
      <div>
        <h4 className="font-bold"># 맛집태그</h4>
          <div className = "p-5">
            {restaurant.category &&
              restaurant.category.map((value, i) => (
                <span
                  key={i}
                  style={{ fontSize: `${Math.floor(Math.random() * 20 + 10)}px` }}
                  className = ""
                >
                  {value}
                </span>
              ))}
          </div>
      </div>
    </div>
  );
}