import React from "react";


const ServiceCard = ({ service }) => {
  const { title, description, image } = service;
  return (
    <div className="card max-w-[440px] w-full bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
