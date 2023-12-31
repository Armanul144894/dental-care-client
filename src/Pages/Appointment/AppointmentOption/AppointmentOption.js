import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import BookingModal from "../BookingModal/BookingModal";

const AppointmentOption = ({
  appointmentOption,
  openModal,
  isOpen,
  setIsOpen,
  selectedDate,
}) => {
  const { name, slots } = appointmentOption;

  return (
    <div
      key={appointmentOption._id}
      className="card max-w-[440px] w-full bg-base-100 shadow-xl mx-auto"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[#19D3AE] text-[20px] font-[600]">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        {slots.length === 0 ? (
          <button className="bg-gray-500 btn-disabled btn rounded " onClick={openModal}>
            Book Appointment
          </button>
        ) : (
          <label onClick={openModal}>
            <PrimaryButton>Book Appointment</PrimaryButton>
          </label>
        )}
        
      </div>
      <BookingModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        appointmentOption={appointmentOption}
        selectedDate={selectedDate}
      ></BookingModal>
    </div>
  );
};

export default AppointmentOption;
