import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const Welcome = () => {
  const [crimeData, setCrimeData] = useState([]);
  const [accidentData, setAccidentData] = useState([]);
  useEffect(() => {
    getUser();
    getCrimes()
    getAccidents()
  }, []);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:5000/api/user`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      const users = response.data.data.name;
      setName(users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const getCrimes = () => {
    axios.get(`http://localhost:5000/api/crime-report`)
      .then(result => {
        setCrimeData(result.data)
      })
      .catch(err => console.log(err));
  };

  const getAccidents = () => {
    axios.get(`http://localhost:5000/api/accident-report`)
      .then(result => {
        setAccidentData(result.data)
      })
      .catch(err => console.log(err));
  };
  return (
    <main className='main-container'>
      <div className='main-title font-semibold'>
        <h3>Hello there report a crime today so make the crime go away!</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Crime Reported</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{crimeData.length}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Accident Reported</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{accidentData.length}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Crime Solved</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>159</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Ongoing Crimes</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
