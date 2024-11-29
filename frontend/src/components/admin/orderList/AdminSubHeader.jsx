import React from "react";

function AdminSubHeader  ({ title, breadcrumb, actions })  {
  return (
    <div className="flex justify-between items-center pb-4 border-b">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500 text-sm">{breadcrumb}</p>
      </div>
      <div>{actions}</div>
    </div>
  );
};

export default AdminSubHeader;
