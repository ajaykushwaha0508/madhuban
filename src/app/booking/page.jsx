"use client"
// src/components/BookingModal.js
import React, { Suspense } from "react";
import "react-datepicker/dist/react-datepicker.css";
import BookingClient from "@/components/booking/BookingClient";

// ⚠️ CHANGE THIS TO YOUR WHATSAPP NUMBER
// Format: Country code + number (no + sign, no spaces)
// Example: 919876543210
const ADMIN_WHATSAPP = "919770558419";

const BookingModal = () => {
  return(
      <Suspense fallback={<div>Loading...</div>}>
    <BookingClient/>
    </Suspense>
  )
};

export default BookingModal;