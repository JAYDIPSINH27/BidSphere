/* Author: Ashish Bhasin */
import { useState, useEffect } from 'react';

const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = data.length === 0 ? [1] : calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const sliced = sliceData(data, page, rowsPerPage);
    setSlice([...sliced]);
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i += 1) {
    range.push(i);
  }
  return range;
};

const sliceData = (data, page, rowsPerPage) => data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

export default useTable;
