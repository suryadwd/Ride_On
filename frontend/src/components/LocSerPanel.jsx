import  react from "react"
const LocSerPanel = ({
  vehicle,
  setVehicle,
  setPanelUp,
  suggestions = [], // Default to an empty array
  type,
  setPickup,
  setDestination,
}) => {
  const handleSelection = (selectedLocation) => {
    if (type === "pickup") {
      setPickup(selectedLocation);
    } else if (type === "destination") {
      setDestination(selectedLocation);
    }
    // setVehicle(!vehicle);
    // setPanelUp(false);
  };

  return (
    <div className="h-full  ml-1 mt-24 text-black rounded-lg">
      {suggestions.length > 0 ? (
        suggestions.map((data, index) => (
          <div
            key={index}
            onClick={() => handleSelection(data)}
            className="  flex items-center mb-4 border-2 active:border-black rounded-lg p-3 justify-start gap-3"
          >
            <h2 className="bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className=" font-semibold">{data}</h4>
          </div>
        ))
      ) : (
        <p>No suggestions available</p>
      )}
    </div>
  );
};

export default LocSerPanel;
