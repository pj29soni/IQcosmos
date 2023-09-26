import React, { useEffect, useState } from "react";
import Ranking from "../../../assets/homepage/iq-ranking.png";
import ReactCountryFlag from "react-country-flag";
import "../Homepage.css";
import mapfeatures from "../../../mapfeatures.json";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { FaMapMarkerAlt } from "react-icons/fa";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

const IQRankingComponent = () => {
  const [userList, setUserList] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_URL_API}/api/iq-test-atempt-user-list-for-map`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/", { replace: true });
        }
      })
      .then((data) => {
        setUserList(data);

        //setIsLoading(false);
      });
  }, []);
  //console.log("xx", userList);
  const [coordinates, setCoordinates] = useState([]);
  

  useEffect(() => {
    const getCoordinates = async () => {
      const apiKey = "7777757bad9a41a0a90acc5743b47863"; // Replace with your actual API key
      const requests = userList.map(async (country) => {
        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${country.country}&key=${apiKey}`
          );
          const data = await response.json();
          
          if (data.results.length > 0) {
            const location = data.results[0].geometry;
            return {
              country: country.country,
              lat: parseFloat(location.lat),
              lng: parseFloat(location.lng),
              iqMark: country.iqMark,
              countryCode: country.countryCode,
            };
          } else {
            return {
              country: country.country,
              lat: null,
              lng: null,
              iqMark: country.iqMark,
              countryCode: country.countryCode,
            };
          }
        } catch (error) {
          console.error(error);
          return {
            country: country.country,
            lat: null,
            lng: null,
            iqMark: country.iqMark,
            countryCode: country.countryCode,
          };
        }
      });
  
      const results = await Promise.all(requests);
      //console.log("results: " , results)
      setCoordinates(results);
    };
  
    getCoordinates();
  }, [userList]);
  
  
  //console.log("coordinates", coordinates);
  return (
    <>
      <div className="container-fluid rankingPic">
        <div className="container">
          <div className="row">
            {/* <div className="col col-12 rankingPic">
                        <img src={Ranking} alt="Ranking"/>
                    </div> */}
            <div className="col col-12">
              <div className="worldMap">
                <h2 className="mapTitle">
                  <span style={{ color: "#FF7A00" }}>IQ Score</span> by
                  Country
                </h2>
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ scale: 100 }}
                >
                  <Geographies geography={mapfeatures}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#E3E3E3"
                          stroke="#D6D6DA"
                        />
                      ))
                    }
                  </Geographies>
                  {coordinates.map((location) => (
                    <Marker
                      key={location.country}
                      coordinates={[location.lng, location.lat]}
                    >
                      <FaMapMarkerAlt color="#C50505" size={15} />
                      <title>
                        {location.country}, Avg:{location?.iqMark?.toFixed(2)}
                      </title>
                      <ReactCountryFlag
                        className="emojiFlag"
                        countryCode={location.countryCode}
                        svg
                        style={{
                          height: "30px",
                          width: "70px",
                          lineHeight: "2em",
                        }}
                        aria-label={location.countryCode}
                      />
                    </Marker>
                  ))}
                </ComposableMap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IQRankingComponent;
