import { useEffect, useState } from "react";
import FlightItem from "./components/FlightItem";
import Header from "./components/Header";
import SearchComponent from "./components/SearchComponent";


function App() {

  const [searchType, setSearchType] = useState("one-way")
  const toggleSearchType = (value) => {
    setSearchType(value)
  }
  const [flightData, setFlightData] = useState([])

  const flightDataFatch = () => {
    fetch('./Data.txt')
      .then(function (response) {
        return response.text();
      }).then(function (data) {
        let prsedData = JSON.parse(data)
        setFlightData(prsedData.flightOffer)
      })
  }

  console.log(flightData)
  return (
    <div>
      <Header />
      <div className=" py-1 shadow w-full">
        <div className=" w-full xl:w-[1200px] mx-auto">
          <h3 className=" text-2xl font-bold">Master Price</h3>
        </div>
      </div>
      <SearchComponent toggleSearchType={toggleSearchType} searchType={searchType} flightDataFatch={flightDataFatch} />
      <div className=" w-full">
        {
          flightData.length &&
          <div className=" w-full xl:w-[1200px] mx-auto">
            <p className="">Data parsed successfully</p>
            <table className=" w-full mt-5 pb-20">
              <thead>
                <tr className=" bg-gray-100 py-2 ">
                  <th className=" font-normal text-gray-500 text-sm py-2">FLIGHT</th>
                  <th className=" font-normal text-gray-500 text-sm py-2">AIRCRAFT</th>
                  <th className=" font-normal text-gray-500 text-sm py-2">CLASS</th>
                  <th className=" font-normal text-gray-500 text-sm py-2">FARE</th>
                  <th className=" font-normal text-gray-500 text-sm py-2">ROUTE</th>
                  <th className=" font-normal text-gray-500 text-sm py-2">DEPATURE</th>
                  <th className=" font-normal text-gray-500 text-sm py-2">ARIVAL</th>
                  <th className=" font-normal text-gray-500 text-sm py-2">DURATION</th>
                  <th className=" font-normal text-gray-500 text-sm py-2">PRICE</th>
                </tr>
              </thead>
              <tbody>
                {
                  flightData.map((data, index) => {
                    return (
                      <FlightItem key={index} data={data} />
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
