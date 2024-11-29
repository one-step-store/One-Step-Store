import React from "react";

const InfoCard = ({ title, content, buttonLabel, onButtonClick }) => (
  <div className="bg-white p-4 shadow rounded-lg">
    <h2 className="font-bold text-lg">{title}</h2>
    <div className="mt-2">{content}</div>
    {buttonLabel && (
      <button
        className="mt-4 bg-black text-white px-4 py-2 rounded-md"
        onClick={onButtonClick}
      >
        {buttonLabel}
      </button>
    )}
  </div>
);

const OrderInfoCards = ({ customer, orderInfo, deliverTo }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
    <InfoCard
      title="Customer"
      content={
        <>
          <p>Full Name: {customer.name}</p>
          <p>Email: {customer.email}</p>
          <p>Phone: {customer.phone}</p>
        </>
      }
      buttonLabel="View profile"
    />
    <InfoCard
      title="Order Info"
      content={
        <>
          <p>Shipping: {orderInfo.shipping}</p>
          <p>Payment Method: {orderInfo.paymentMethod}</p>
          <p>Status: {orderInfo.status}</p>
        </>
      }
      buttonLabel="Download info"
    />
    <InfoCard
      title="Deliver to"
      content={
        <>
          <p>Address: {deliverTo.address}</p>
        </>
      }
      buttonLabel="View profile"
    />
  </div>
);

export default OrderInfoCards;
