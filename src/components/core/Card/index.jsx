import React from "react";

function Card({ label, stats, icon: IconComponent, currency }) {
  return (
    <div className="card p-5">
      <div className="flex justify-between">
        <p className="text-lg font-semibold card-label">{label}</p>
        {/* <p>icon</p> */}
        {IconComponent && <IconComponent className="icon-card" />}
      </div>
      <p className="text-2xl font-bold pt-3">
        {currency ? currency : ""} {stats}
      </p>
    </div>
  );
}

export default Card;
