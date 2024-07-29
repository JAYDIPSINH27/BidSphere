/* Author: Ashish Bhasin */
import Loader from '@atoms/Loader';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Chart as ChartJS, ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { TenderTable } from '../../templates/tenderTable';
import { getTenders } from './functions/getTenders';
import withAppBarFooter from '../../../shared/hoc/withAppBarFooter';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);
function IssuerDashboard() {
  const [issuerId, setIssuerId] = useState(null);
  const [updated, setUpdated] = useState(false);
  const navigate = useNavigate();
  const [tenders, setTenders] = useState([]);
  const [statusData, setStatusData] = useState(null);
  const [tenderCountData, setTenderCountData] = useState(null);
  const [showGraphs, setShowGraphs] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = 'Issuer Dashboard';
    const issuer = sessionStorage.getItem('issuer_id');
    if (!issuer) {
      navigate('/signin');
    } else {
      setIssuerId(issuer);
    }
  }, [navigate]);

  useEffect(() => {
    setLoading(true);
    if (issuerId) {
      getTenders(issuerId).then((data) => {
        setLoading(false);
        if (data.status === 200) {
          const tenderData = data.data.data;
          setTenders(tenderData.tenderItems);
          if (Object.keys(tenderData.tenderStatusDetails).length > 0) {
            statusChartData(tenderData.tenderStatusDetails);
            tendersData(tenderData.tenderCountDetails);
            setShowGraphs(true);
          }
        }
      });
    }
  }, [issuerId, updated]);

  function statusChartData(tenderStatusDetails) {
    const data = {
      labels: Object.keys(tenderStatusDetails),
      datasets: [{
        label: 'Current tender status overview',
        data: Object.values(tenderStatusDetails),
        backgroundColor: [
          'rgb(29, 53, 87)',
          'rgb(168, 218, 220)',
          'rgb(69, 123, 157)',
        ],
        borderColor: 'rgb(241, 250, 238)',
        hoverOffset: 4,
        borderWidth: 1,
      }],
    };
    setStatusData(data);
  }

  function tendersData(tenderCountDetails) {
    const data = {
      labels: Object.keys(tenderCountDetails),
      datasets: [{
        label: 'Issued tenders',
        data: Object.values(tenderCountDetails),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      }],
    };
    setTenderCountData(data);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col justify-items-center md:w-full shrink md:shrink-0 md:gap-y-8">
      <h1 className="pt-10 text-center font-bold md:text-lg">Overview of your Tenders</h1>
      <div className="flex flex-wrap justify-center pt-4 sm:container">
        {showGraphs && (
          <>
            <div className="w-full md:w-3/7 lg:w-1/3">
              <Doughnut data={statusData} options={{ maintainAspectRatio: false }} />
            </div>
            <div className="w-full md:w-4/7 lg:w-1/3">
              <Bar data={tenderCountData} options={{ maintainAspectRatio: false }} />
            </div>
          </>
        )}
      </div>
      <div className="basis-12 p-2 md:container md:mx-auto justify-items-center">
        <TenderTable data={tenders} rowsPerPage={5} setUpdated={setUpdated}></TenderTable>
      </div>
    </div>
  );
}

export default withAppBarFooter(IssuerDashboard);
