import React from "react";

const PaymentAndNote = ({ paymentInfo }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="font-bold text-lg">Payment Info</h2>
      <p>{paymentInfo.cardType} {paymentInfo.cardNumber}</p>
      <p>Business name: {paymentInfo.businessName}</p>
      <p>Phone: {paymentInfo.phone}</p>
    </div>
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="font-bold text-lg">Note</h2>
      <textarea
        className="w-full border px-4 py-2 rounded-md"
        placeholder="Type some notes"
      ></textarea>
    </div>
  </div>
);

export default PaymentAndNote;
