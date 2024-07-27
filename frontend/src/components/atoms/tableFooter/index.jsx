/* Author: Ashish Bhasin */
import React, { useEffect } from 'react';

const TableFooter = ({
  range, setPage, page, slice,
}) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className="bg-bslightgreen p-2 w-full font-medium text-left text-lg text-gray-700 rounded-b-lg flex items-center justify-end">
      {range.map(el => (
        <button
          key={el}
          className={`border-none py-1 px-3 rounded-lg cursor-pointer mx-1 ${page === el ? 'text-white bg-bslightblue' : 'text-gray-800 bg-gray-100'}`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;
