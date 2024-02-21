import React, { useState } from 'react';
import { GoPencil } from "react-icons/go";

export default function MbBlog({ blog }) {
  const [visibleBlogs, setVisibleBlogs] = useState(2); 

  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 2);
  };

  return (
    <div className="bg-white p-5">
      <header className="flex items-center mb-3">
        <GoPencil className="mr-3" />
        <h4 className="font-bold">블로그 후기</h4>
      </header>
      <main>
        {blog.length !== 0 &&
          blog.slice(0, visibleBlogs).map((value, i) => (
            <a href = {value.url} key={i}>
              <header className="font-bold mt-3">
                {value.title.substring(0, 25) + "..."}
              </header>
              <p className="mb-3">{value.comment.substring(0, 100) + "..."}</p>
              <hr />
            </a>
          ))}
      </main>
      {blog.length > visibleBlogs && (
        <button className="bg-lightGray flex justify-center items-center w-full border-black p-3 rounded-lg" onClick={loadMoreBlogs}>
          더보기
        </button>
      )}
    </div>
  );
}