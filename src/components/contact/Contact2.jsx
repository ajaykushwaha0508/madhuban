"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { facebook, instagram, linkedin, youtube } from "@/utills/constants";

const ADMIN_WHATSAPP = "919770558419";

export default function ContactPage2() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // 🔥 Example: WhatsApp redirect
    const message = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}
    `;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${ADMIN_WHATSAPP}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    try {
      const whatsappWindow = window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

      // Check if popup was blocked
      setTimeout(() => {
        if (
          !whatsappWindow ||
          whatsappWindow.closed ||
          typeof whatsappWindow.closed === "undefined"
        ) {
          alert(
            "Popup blocked! Please allow popups, or copy this link and open manually: " +
              whatsappURL
          );
        } else {
          reset();
          alert(
            "WhatsApp opened successfully! Please send the pre-filled message."
          );
        }
      }, 1000);
    } catch (err) {
      console.error("Error opening WhatsApp:", err);
      alert(
        "Failed to open WhatsApp. Please try again or check your browser settings."
      );
    }
  };

  return (
    <section className="bg-[#f7f5f0] pt-40 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-[#3e3a2d] mb-4 font-[sitka-banner]">Contact Us</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Whether you’re planning a peaceful retreat or seeking information
            about our eco tourism experiences, our team at{" "}
            <span className="font-semibold">Madhuban Eco Retreat</span> is here
            to assist you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE – CONTACT INFO */}
          <div className="space-y-8">
            {/* Description */}
            <p className="text-gray-700">
              Nestled on the edge of the Ratapani Wildlife Sanctuary, our nature
              resort near Ratapani is the perfect escape into nature and an
              ideal digital detox retreat.
            </p>

            {/* Location */}
            <div>
              <h3 className="text-xl flex items-center gap-1 font-semibold text-[#3e3a2d] mb-2 font-[sitka-banner]">
                <IoLocation /> Location
              </h3>
              <p className="text-gray-700">
                Sarkanpur, Road, Dongri, Near Ratapani Wildlife Sanctuary,
                <br />
                Bhopal, Madhya Pradesh, India – 466446
              </p>
              <p className="text-sm text-gray-600 mt-1">
                (Exact location shown on the map below)
              </p>
            </div>

            {/* Call / WhatsApp */}
            <div>
              <h3 className="text-xl flex items-center gap-1 font-semibold text-[#3e3a2d] mb-2 font-[sitka-banner]">
                <IoCall /> Call / WhatsApp
              </h3>
              <p className="text-gray-700 font-medium">+91 9770 558 419</p>
              <p className="text-sm text-gray-600">
                Send us a WhatsApp message and we’ll respond within 24 hours.
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xl flex items-center gap-1 font-semibold text-[#3e3a2d] mb-2 font-[sitka-banner]">
                <IoMail /> Email
              </h3>
              <p className="text-gray-700">madhubanresort@somaiya.com</p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-[#3e3a2d] mb-3 font-[sitka-banner]">
                Follow Us
              </h3>
              <div className="flex gap-4 text-gray-700">
                <Link href={facebook} className="text-2xl text-[#3e3a2d]">
                  <FaFacebookSquare />
                </Link>
                <Link href={instagram} className="text-2xl text-[#3e3a2d]">
                 <FaSquareInstagram />
                </Link>
                <Link href={youtube} className="text-2xl text-[#3e3a2d]">
                  <TbBrandYoutubeFilled />
                </Link>
                <Link href={linkedin} className="text-2xl text-[#3e3a2d]">
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 rounded-xl bg-[#6e6146]/10 p-6">
              <h3 className="text-2xl font-semibold text-[#3e3a2d] mb-2 font-[sitka-banner]">
                Looking for the Best Weekend Digital Detox Stay Near Ratapani?
              </h3>
              <p className="text-gray-700 mb-4">
                Escape the city, immerse yourself in nature, and rejuvenate your
                mind and body.
              </p>
              <Link
                href="/book-now"
                className="inline-block rounded-full bg-[#6e6146] px-6 py-3 text-white font-semibold hover:bg-[#5b503a] transition font-[sitka-banner]"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <div className=" rounded-2xl shadow-lg p-8 bg-[#6e6146]">
            <h2 className="text-3xl font-semibold text-white mb-2 font-[sitka-banner]">
              Send Us a Message
            </h2>
            <p className="text-gray-200 mb-6">
              Your message goes directly to WhatsApp.
            </p>

            <div className="contact-form ">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-group font-inter">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    autoComplete="off"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-group font-inter">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    autoComplete="off"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-group  font-inter">
                  <input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="Your Phone Number"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Only numbers are allowed",
                      },
                      minLength: {
                        value: 10,
                        message: "Phone number must be at least 10 digits",
                      },
                      maxLength: {
                        value: 10,
                        message: "Phone number must be 10 digits",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className=" text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div className="form-group font-inter">
                  <textarea
                    name="message"
                    autoComplete="off"
                    placeholder="Your Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className=" text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="submit-btn font-arial-narrow text-[rgb(110,97,70)] font-[sitka-banner]"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>

            <p className="text-sm text-white mt-4 text-center">
              We promise to respond within 24 hours.
            </p>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-[#3e3a2d] mb-6 font-[sitka-banner]">
            Find Us Here
          </h2>

          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
            <iframe
              title="Madhuban Resort Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7356.4265978489275!2d77.490283!3d22.794559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397db52b7cf3a4f1%3A0xb82cef7e7d9cfa61!2sMadhuban%20Resort%20By%20Somaiya!5e0!3m2!1sen!2sin!4v1747417125028!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
