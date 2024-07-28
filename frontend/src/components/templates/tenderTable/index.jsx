/* Author: Ashish Bhasin */
/* eslint-disable*/
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomDialog from '@components/atoms/dialog';
import view from '../../../shared/assets/eye.svg';
import TableFooter from '../../atoms/tableFooter';
import useTable from './hooks/useTable';
import TenderSearchFilter from '../../molecules/tenderSearchFilter';
import useFilter from './hooks/useFilter';
import { Edit, Delete } from '@mui/icons-material';

export const TenderTable = ({ data, rowsPerPage }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [open, setOpen] = React.useState(false);
  const columnKeys = ['tenderNumber', 'title', 'status', 'createdAt'];
  const { filterData } = useFilter(data, filters, setOpen);
  const { slice, range } = useTable(filterData, page, rowsPerPage);
  const emptyRows = Array.from({ length: rowsPerPage - slice.length }, (_, index) => slice.length + index);

  const checkTender = (id) => {
    navigate(`/manage-contract/${id}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CustomDialog
        handleClose={handleClose}
        title="No Matching Records!"
        content="No records found matching the search criteria, please clear filter and try again."
        okbutton="Ok"
        open={open}
      />
      <div className="container mx-auto p-2 sm:p-4">
        <TenderSearchFilter setFilters={setFilters} />
        <div className="mt-4 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-bslightgreen">
              <tr>
                <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-black-500 uppercase tracking-wider">S No.</th>
                {columnKeys.map(key => (
                  key !== 'id' && (
                    <th
                      key={key}
                      scope="col"
                      className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs text-black-500 font-semibold uppercase tracking-wider"
                    >{key.toUpperCase()}
                    </th>
                  )
                ))}
                <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-black-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {slice.map((obj, index) => (
                <tr key={obj.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}>
                  <td className="px-4 py-2 sm:px-6 sm:py-3 whitespace-nowrap text-sm text-gray-600">{index + 1}</td>
                  {columnKeys.map(col => (
                    col !== 'id' && <td key={col} className="max-w-44 truncate ... px-4 py-2 sm:px-6 sm:py-3 whitespace-nowrap text-sm text-gray-600">{obj[col]}</td>
                  ))}
                  <td className="px-4 py-2 sm:px-6 sm:py-3 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center">
                      <button className="flex items-center" onClick={() => checkTender(obj.id)}>
                        <img className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white mr-1 sm:mr-2" src={view} alt="view" />
                        <span className="hidden sm:inline">View</span>
                      </button>
                      <button>
                      <Edit /><span className="hidden sm:inline">Edit</span>
                    </button>
                    <button>

                      <Delete /> <span className="hidden sm:inline">Delete</span>
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
              {emptyRows.map((key, index) => (
                <tr key={`empty-${index}`} className={`${key % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}>
                  <td className="px-4 py-2 sm:px-6 sm:py-3 whitespace-nowrap text-sm text-gray-600"></td>
                  {columnKeys.map(col => (
                    <td key={`empty-${col}`} className="px-4 py-6 sm:px-6 sm:py-6 whitespace-nowrap text-sm text-gray-600"> </td>
                  ))}
                  <td className="px-4 py-6 sm:px-6 sm:py-6 whitespace-nowrap text-sm text-gray-600"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      </div>
    </>
  );
};

TenderTable.propTypes = {
  data: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
