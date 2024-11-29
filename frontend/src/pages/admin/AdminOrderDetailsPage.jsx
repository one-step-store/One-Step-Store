import React from "react";
import OrderDetailsHeader from "../../components/admin/orderDetail/OrderDetailsHeader";
import OrderInfoCards from "../../components/admin/orderDetail/OrderInfoCards";
import PaymentAndNote from "../../components/admin/orderDetail/PaymentAndNote";
import ProductsTable from "../../components/admin/orderDetail/ProductsTable";

const AdminOrderDetailsPage = () => {
  const orderData = {
    id: 6743,
    status: "Pending",
    dateRange: "Feb 16, 2022 - Feb 20, 2022",
    customer: {
      name: "Shristi Singh",
      email: "shristi@gmail.com",
      phone: "+91 904 231 1212",
    },
    orderInfo: {
      shipping: "Next express",
      paymentMethod: "Paypal",
      status: "Pending",
    },
    deliverTo: {
      address: "Dharam Colony, Palam Vihar, Gurgaon, Haryana",
    },
    paymentInfo: {
      cardType: "Master Card",
      cardNumber: "**** **** **** 6557",
      businessName: "Shristi Singh",
      phone: "+91 904 231 1212",
    },
    products: [
      { name: "Lorem Ipsum", orderId: "#25421", quantity: 2, total: "₹800.40" },
      { name: "Lorem Ipsum", orderId: "#25421", quantity: 2, total: "₹800.40" },
    ],
    total: {
      subtotal: "₹3,201.60",
      tax: "₹640.32",
      discount: "₹0",
      shippingRate: "₹0",
      grandTotal: "₹3,841.92",
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Subheader */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Order Details</h1>
        <p className="text-gray-600">Home &gt; Orders &gt; Order Details</p>
      </div>

      {/* Komponen Detail Order */}
      <OrderDetailsHeader
        orderId={orderData.id}
        status={orderData.status}
        dateRange={orderData.dateRange}
      />
      <OrderInfoCards
        customer={orderData.customer}
        orderInfo={orderData.orderInfo}
        deliverTo={orderData.deliverTo}
      />
      <PaymentAndNote paymentInfo={orderData.paymentInfo} />
      <ProductsTable products={orderData.products} total={orderData.total} />
    </div>
  );
};

export default AdminOrderDetailsPage;
