"use client";
import { useState } from "react";
import axios from "axios";

const AddCrime = () => {
  const [nameCrime, setNameCrime] = useState("");
  const [typeCrime, setTypeCrime] = useState("");
  const [location, setLocation] = useState("");
  const [incidentDate, setIncedentDate] = useState("");
  const [modal, setModal] = useState(false);
  const locationOptions = ["Bacayao Norte", "Bacayao Sur","Bolosan","Bonuan Binloc","Bonuan Boquig"," Bonuan Gueset"," Calmay","Carael","Caranglaan","Herrero","Lasip Chico","Lasip Grande"," Lomboy","Lucao"," Malued","Mamalingling"," Mangin","Mayombo","Pantal","Poblacion Oeste","Pogo Chico","Pogo Grande","Pugaro Suit","Salapingao", "Salisay","Tambac","Tapuac","Tebeng"];
  const crimeTypeOptions = ["Murder","Theft","Drug trafficking","Kidnapping","Identity Theft","Child Abuse","Rape","Assault","Cyber Crime","Violence","Sexual Assault","Fraud","Burglary"  ];

  async function handleSubmit() {
    // const token = localStorage.getItem("token");
    await axios.post(
      `http://localhost:5000/api/crime-report`,
      {
        name_crime: nameCrime,
        type_crime: typeCrime,
        location: location,
        incident_date: incidentDate,
      },
      // {
      //   headers: {
      //     Authorization: `${token}`,
      //   },
      // }
    )
    .then(result => {
      console.log(result)
    })
    .catch(err => console.log(err))
    setModal(false);

    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="w-full btn btn-primary text-white" onClick={handleChange}>
        Report a Crime
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal text-white text-center ">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Crime Data</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold text-sm">Crime</label>
              <input
                type="text"
                value={nameCrime}
                onChange={(e) => setNameCrime(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Enter a crime"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-sm">Crime Type</label>
              <select
                value={typeCrime}
                onChange={(e) => setTypeCrime(e.target.value)}
                className="input w-full input-bordered"
              >
                <option value="">Select a crime type</option>
                {crimeTypeOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label font-bold text-sm">Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input w-full input-bordered"
              >
                <option value="">Select a location</option>
                {locationOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label font-bold text-sm">Date</label>
              <input
                type="date"
                value={incidentDate}
                onChange={(e) => setIncedentDate(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Enter a date"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>

              <button className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCrime;
