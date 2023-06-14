import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "../AppointmentOption/AppointmentOption";


const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div>
      <p className="text-[#19D3AE] text-center text-[22px] font-[400]">
        Available Appointments on {format(selectedDate, "PP")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOption
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            openModal={openModal}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedDate={selectedDate}
          ></AppointmentOption>
        ))}
      </div>
      
    </div>
  );
};

export default AvailableAppointment;
