import React from "react";
import OrderDetails from "../../components/admin/order-details/OrderDetails";

const AdminOrderDetailsPage = () => {
  const orderData = {
    id: "6743",
    status: "Pending",
    date: "Feb 16, 2022 - Feb 20, 2022",
    customer: {
      name: "Shristi Singh",
      email: "shristi@gmail.com",
      phone: "+91 904 231 1212",
    },
    shipping: "Next express",
    paymentMethod: "Paypal",
    deliveryAddress: "Dharam Colony, Palam Vihar, Gurgaon, Haryana",
    products: [
      { name: "Lorem Ipsum", orderId: "#25421", quantity: 2, total: "20k" },
      { name: "Lorem Ipsum", orderId: "#25421", quantity: 2, total: "20k" },
    ],
    subtotal: "3201.60",
    tax: "640.32",
    discount: "0",
    shippingRate: "0",
    total: "3841.92",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <OrderDetails order={orderData} />
    </div>
  );
};

export default AdminOrderDetailsPage;
