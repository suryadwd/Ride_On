import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocSerPanel from "../components/LocSerPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfVeh from "../components/ConfVeh";
import ConDriver from "../components/ConDriver";
import WaitForDriver from "../components/waitForDriver";
import axios from "axios";


import { useSelector } from "react-redux";

const Homepage = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelUp, setPanelUp] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [confVeh, setConfVeh] = useState(false);
  const [conDriver, setConDriver] = useState(false);
  const [waitDriver, setWaitDriver] = useState(false);

  const pannel = useRef(null);
  const vehiclePanel = useRef(null);
  const confVehPanel = useRef(null);
  const ConDriverPanel = useRef(null);
  const WaitForDriverPanel = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    gsap.to(pannel.current, {
      height: panelUp ? "80%" : "0%",
    });
  }, [panelUp]);

  useGSAP(() => {
    gsap.to(vehiclePanel.current, {
      transform: vehicle ? "translateY(0%)" : "translateY(100%)",
    });
  }, [vehicle]);

  useGSAP(() => {
    gsap.to(confVehPanel.current, {
      transform: confVeh ? "translateY(0%)" : "translateY(100%)",
    });
  }, [confVeh]);

  useGSAP(() => {
    gsap.to(ConDriverPanel.current, {
      transform: conDriver ? "translateY(0%)" : "translateY(100%)",
    });
  }, [conDriver]);

  useGSAP(() => {
    gsap.to(WaitForDriverPanel.current, {
      transform: waitDriver ? "translateY(0%)" : "translateY(100%)",
    });
  }, [waitDriver]);

  //backend

  const [pickupSuggestions, setPickupSuggestions] = useState([]); // Suggestions for pickup
  const [destinationSuggestions, setDestinationSuggestions] = useState([]); // Suggestions for destination
  const [isPickupActive, setIsPickupActive] = useState(true); // To track which input is active

  const fetchSuggestions = async (input, type) => {
    if (!input) return;

    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/maps/get-suggestion?input=${encodeURIComponent(
          input
        )}`
      );
      if (type === "pickup") {
        setPickupSuggestions(response.data); // Update pickup suggestions
      } else {
        setDestinationSuggestions(response.data); // Update destination suggestions
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    if (pickup) {
      fetchSuggestions(pickup, "pickup");
    }
  }, [pickup]);

  useEffect(() => {
    if (destination) {
      fetchSuggestions(destination, "destination");
    }
  }, [destination]);

  const [price, setPrice] = useState({});

  const fetchPrice = async () => {
    let res = await axios.get("http://localhost:8000/api/v1/ride/get-price", {
      params: { pickup, destination },
      withCredentials: true,
    });

    setPrice({ auto: res.data.auto, moto: res.data.moto, car: res.data.car });
  };

  const createRide = async (vehicleType) => {
    const res = await axios.post(
      "http://localhost:8000/api/v1/ride/create",
      {
        pickup,
        destination,
        vehicleType,
      },
      {
        withCredentials: true,
      }
    );
  };

  //configuration

  //socket

  const { socket } = useSelector((store) => store.socketio);
  const { authUser } = useSelector((store) => store.user);

  useEffect(() => {
    // console.log(authUser?.user?._id)

    socket.emit("join", { userType: "user", userId: authUser?.user?._id });
  }, [authUser]);

  //configuration

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-28 absolute left-7 top-7"
        src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
        alt=""
      />

      <div className="h-[70%] w-screen ">
        <img
          className="h-full w-full  object-cover"
          src="https://imgs.search.brave.com/jK1glZ46aRnMBCp3Bqv7YWCuqyKXawBDiB0s1mPwES0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLW5vdC1waWNr/dXAuanBn"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-5 mb-[-11%] relative bg-white">
          {panelUp ? (
            <h3>
              <i
                onClick={() => setPanelUp(false)}
                className=" absolute top-0 right-2  ri-arrow-up-wide-line text-3xl"
              ></i>
            </h3>
          ) : (
            <h3>
              <i
                onClick={() => setPanelUp(true)}
                className=" absolute top-0 right-2  ri-arrow-down-wide-line text-3xl"
              ></i>
            </h3>
          )}

          <h4 className="text-3xl ml-2 mt-2 font-bold">Find a trip</h4>

          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[50%] ml-2 rounded-full bg-gray-600"></div>
            <input
              value={pickup}
              onClick={() => {
                setPanelUp(true);
                setIsPickupActive(true);
              }}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-3 mt-4 rounded-md w-full"
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              value={destination}
              onClick={() => {
                setPanelUp(true);
                setIsPickupActive(false);
              }}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-3 mt-3 rounded-md w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>

          <button
            onClick={() => {
              setVehicle(true);
              setPanelUp(false);
              fetchPrice();
            }}
            className="bg-blue-500 mt-5 ml-24 text-white border-2 p-3"
          >
            Choose Vehicle
          </button>
        </div>

        <div ref={pannel} className=" p-5 bg-white">
          <LocSerPanel
            setPanelUp={setPanelUp}
            vehicle={vehicle}
            setVehicle={setVehicle}
            suggestions={
              isPickupActive ? pickupSuggestions : destinationSuggestions
            }
            type={isPickupActive ? "pickup" : "destination"} // Pass type here
            setPickup={setPickup}
            setDestination={setDestination}
          />
        </div>
      </div>

      <div
        ref={vehiclePanel}
        className="fixed w-full z-10 bottom-0 p-7   translate-y-full  bg-white"
      >
        <VehiclePanel
          price={price}
          setConfVeh={setConfVeh}
          setVehicle={setVehicle}
          createRide={createRide}
        />
      </div>

      <div
        ref={confVehPanel}
        className="fixed w-full z-10  bottom-0 p-7   translate-y-full  bg-white"
      >
        <ConfVeh
          setConDriver={setConDriver}
          confVeh={confVeh}
          setConfVeh={setConfVeh}
          pickup={pickup}
          destination={destination}
          price={price}
        />
      </div>

      <div
        ref={ConDriverPanel}
        className="fixed w-full z-10 bottom-0 p-7   translate-y-full  bg-white"
      >
        <ConDriver
          pickup={pickup}
          destination={destination}
          price={price}
          setConDriver={setConDriver}
        />
      </div>

      <div
        ref={WaitForDriverPanel}
        className="fixed w-full z-10 bottom-0 p-7 bg-white"
      >
        <WaitForDriver
          setWaitDriver={setWaitDriver}
          setConDriver={setConDriver}
        />
      </div>
    </div>
  );
};

export default Homepage;

//9 19 29
