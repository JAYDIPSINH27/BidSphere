/* Author: Ashish Bhasin */
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Input from '../../atoms/input/index';
import Button from '../../atoms/button/index';
import SelectBox from '../../atoms/select';
import { DateSelector } from '../../atoms/datepicker';

const TenderSearchFilter = ({ setFilters }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const navigate = useNavigate();
  const filterResult = () => {
    setFilters({
      filterName: name, startDate, endDate, status,
    });
  };

  const clearResult = () => {
    setFilters({
      filterName: '', startDate: null, endDate: null, status: '',
    });
    setStartDate(null);
    setEndDate(null);
    setStatus('');
    setName('');
  };

  const handleNavigate = () => {
    navigate('/issuer-dashboard/new-tender');
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-self-end lg:w-full sm:w-auto space-y-2 md:space-y-0 md:space-x-2">
      <Input
        className="rounded px-3 py-2 w-full md:w-4/5 lg:max-w-56 border border-gray-90 focus:outline-none focus:ring-2 focus:ring-bsnavyblue"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <SelectBox
        classes="rounded px-3 py-1 w-full md:w-auto"
        options={['closed', 'open', 'awarded']}
        label="Status"
        value={status}
        onChange={e => setStatus(e.target.value)}
      />
      <DateSelector
        classes="rounded px-3 py-1 w-full md:w-auto"
        date={startDate}
        label="From"
        onChange={date => setStartDate(date)}
      />
      <DateSelector
        classes="rounded px-3 py-1 w-full md:w-auto"
        date={endDate}
        label="To"
        onChange={date => setEndDate(date)}
      />
      <Button
        classes="rounded px-1 py-1 w-full md:w-auto bg-bslightblue text-white"
        onClick={() => filterResult()}
      >
        Filter
      </Button>
      <Button
        classes="rounded px-1 py-1 w-full md:w-auto bg-black text-white"
        onClick={() => clearResult()}
      >
        Clear
      </Button>
      <Button
        classes="rounded px-1 py-1 w-full md:w-auto bg-black text-white"
        onClick={() => handleNavigate()}
      >
        Tender
      </Button>
    </div>
  );
};

export default TenderSearchFilter;
