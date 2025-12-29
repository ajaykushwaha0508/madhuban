"use client"
import React, { Suspense } from "react";
import "react-datepicker/dist/react-datepicker.css";
import BookingClient from "@/components/booking/BookingClient";

const BookingModal = () => {
  return(
      <Suspense fallback={<div>Loading...</div>}>
    <BookingClient/>
    </Suspense>
  )
};

export default BookingModal;