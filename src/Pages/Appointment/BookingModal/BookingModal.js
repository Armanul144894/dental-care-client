import React from "react";
import ReactModal from "react-modal";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { format } from "date-fns";

const BookingModal = ({
  isOpen,
  setIsOpen,
  appointmentOption,
  selectedDate,
}) => {
  const { name, slots } = appointmentOption;
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    
    const booking={
      appointmentDate:date,
      treatment:name,
      slot,
      patientName,
      email,
      phone

    }
    console.log(booking);
    closeModal(true)
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="fixed inset-0 flex items-center gap-10 justify-center "
        overlayClassName="fixed inset-0 bg-black bg-opacity-25"
      >
        <div className="bg-white p-4 relative max-w-[550px] w-full  rounded-md">
          <div className="mx-10">
            <button
              className="absolute top-2 right-2 text-gray-600  rounded-full hover:text-gray-900 transition-all duration-200"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 bg-[#3A4256] text-[#8391AD] rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold">{name}</h2>
          </div>

          <div className="card  w-full">
            <form onSubmit={handleBooking} className="card-body">
              <input
                type="text"
                name="date"
                value={format(selectedDate, "PP")}
                readOnly
                className="input text-black rounded-md font-bold"
              />
              <select
                name="slot"
                className="select text-black rounded-md font-bold"
              >
                {slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="input input-bordered bg-white text-black rounded"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                required
                className="input input-bordered bg-white text-black rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input input-bordered bg-white text-black rounded"
              />

              <PrimaryButton>Submit</PrimaryButton>
              {/* <div className="form-control mt-6">
              </div> */}
            </form>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default BookingModal;
