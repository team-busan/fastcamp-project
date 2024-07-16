import React from 'react';

export default function MbTag({ title, tagdata }) {
  return (
    <div className="bg-white p-5 mb-3">
      <div>
        <h4 className="font-bold">{title}</h4>
          <div className = "p-5">
            {tagdata &&
              tagdata.map((value, i) => (
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