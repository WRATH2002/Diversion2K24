import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// import { ring } from "ldrs";

// ring.register();

// Default values shown

// import "./MapStyles.css";
const API_KEY = process.env.REACT_APP_MAP_API_KEY;

const latitude = 28.2015;
const longitude = 83.9833;
delete L.Icon.Default.prototype._getIconUrl;

const customIcon = new L.Icon({
  iconUrl:
    "https://firebasestorage.googleapis.com/v0/b/splitwise-23240.appspot.com/o/Group%207.png?alt=media&token=16773928-bfea-4b0e-9a13-5c2d3e562516", // Replace with your image URL
  iconSize: [40, 40], // Adjust the size of the icon
  iconAnchor: [20, 40], // Anchor the icon (center bottom)
  popupAnchor: [0, -40], // Anchor the popup
});

const Map = (props) => {
  const [loading, setLoading] = useState(true);
  const [cord, setCord] = useState([]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  // useEffect(() => {
  //   if (cord != props?.cord) {
  //     setCord(props?.cord);
  //     console.log("props?.cord");
  //     console.log(props?.cord);
  //   }
  // }, [props?.cord]);

  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     // Function to get the current location and update the state
  //     const getLocation = () => {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           setLat(position.coords.latitude);
  //           setLong(position.coords.longitude);
  //           setError(null); // Clear any previous error
  //           console.log(position.coords.latitude.toString());
  //           console.log("called");
  //         },
  //         (err) => {
  //           console.error("Error getting location: ", err);
  //           setError(err.message);
  //         }
  //       );
  //     };

  //     // Call getLocation initially and then every 1 minute (60000 ms)
  //     getLocation(); // First call immediately when the component mounts
  //     const intervalId = setInterval(getLocation, 60000); // 1 minute interval

  //     // Cleanup the interval when the component unmounts
  //     return () => clearInterval(intervalId);
  //   } else {
  //     setError("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          setError(null);
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);
        },
        (err) => {
          console.error("Error getting location:", err);
          setError(err.message);
        }
      );
    };

    const checkPermissionAndGetLocation = () => {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            getLocation();
          } else if (permissionStatus.state === "prompt") {
            getLocation();
          } else {
            setError("Location access denied. Please enable location access.");
          }

          // Listen for changes in permission status
          permissionStatus.onchange = () => {
            if (permissionStatus.state === "granted") {
              getLocation();
            }
          };
        });
    };

    // Call checkPermissionAndGetLocation initially and set interval for every 1 minute
    checkPermissionAndGetLocation();
    const intervalId = setInterval(checkPermissionAndGetLocation, 60000); // 1 minute interval

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const shareLocation = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out my location!",
          text: `Here is my location:`,
          url: `https://www.google.com/maps?q=${lat},${long}`, // Share the Google Maps link
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-end items-end rounded-xl bg-[#F7F8FA] drop-shadow-sm font-[geist] ">
      {/* <div className="font-[google] mb-[15px] w-full mt-[5px] text-[18px] flex justify-between items-center">
          <div className="flex justify-start items-center w-[calc(100%-50px)] text-ellipsis overflow-hidden line-clamp-1 whitespace-nowrap">
            <div className="mr-[7px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            {props?.location}
          </div>
          <div
            className="cursor-pointer w-[30px] flex justify-center items-center h-[30px] text-white bg-[#191A2C] rounded-full"
            onClick={() => {
              props?.setShowMap(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        </div> */}
      {lat == undefined || long == undefined ? (
        <></>
      ) : (
        <>
          <div
            className="bg-white w-full h-full z-30 rounded-[14px]"
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              // width: "400px",
              // height: "400px",
            }}
            onClick={shareLocation}
          >
            {/* <div
                className="max-w-[35px] max-h-[35px] rounded-[6px] bg-white flex justify-center items-center mr-[-45px] ml-[10px] mt-[10px]"
                style={{ zIndex: "200" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-maximize"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                  <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                  <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                </svg>
              </div> */}
            <MapContainer
              center={[lat, long]}
              zoom={20}
              style={{ height: "100%", width: "100%" }}
              zoomControl={false} // Disable default zoom controls
              attributionControl={false} // Disable attribution
            >
              <TileLayer
                url={`https://maps.geoapify.com/v1/tile/klokantech-basic/{z}/{x}/{y}.png?apiKey=${API_KEY}`}
              />
              {/* {cord.map((data) => {
                  return (
                    <>
                      <Marker
                        position={[data?.latitude, data?.longitude]}
                        icon={customIcon}
                      >
                        <Popup>A marker at your location!</Popup>
                      </Marker>
                    </>
                  );
                })} */}
              <Marker position={[lat, long]} icon={customIcon}>
                <Popup>A marker at your location!</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div
            className="px-[9px] h-[25px]  mb-[7px] mr-[7px] z-50 mt-[-32px] py-[5px] rounded-lg text-[13px] bg-[#000000a8] flex justify-center items-center text-[white]"
            style={{ zIndex: "100" }}
          >
            Lat : {lat}, Long : {long}
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(Map);
