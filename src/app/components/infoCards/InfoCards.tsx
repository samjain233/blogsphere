'use client';
import React from "react";
import Card from "./Card";

const InfoCards = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-12">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default InfoCards;
