'use client'
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { addDoc, collection } from "firebase/firestore";

import { db } from "../../../../../firebase/config"; // Assume Firebase is used for MongoDB-like structure
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../../../../../../styles/datepicker.module.css"
import Image from "next/image";
import inst from "/public/img1.jpg";
import inst2 from "/public/img2.jpg";
import inst3 from "/public/img3.jpg";
import inst4 from "/public/img4.jpg";
import inst5 from "/public/img5.jpg"; 
import inst6 from "/public/img6.jpg";
import inst7 from "/public/img7.jpg";
import inst8 from "/public/img8.jpg";
import inst9 from "/public/img9.jpg";
import inst10 from "/public/img10.jpg";
import inst11 from "/public/img11.jpg";
import inst12 from "/public/img12.jpg";
import inst13 from "/public/img13.jpg";
import inst14 from "/public/img14.jpg";
import inst15 from "/public/img15.jpg";
import {sendMail} from"../../../../../../lib/send-mail"


interface Params {
  name: string;
  about: string;
  rate: number;
  exptime: string;
}

export default function ServiceCard({params}: {params: Params}) {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    slot: "",
  });
  
  const services = [
    {
      name: "AC Installation",
      about: "AC installation involves setting up a new or relocated air conditioner, including connecting refrigerant lines, electrical wiring, and ensuring proper drainage. The unit must be securely mounted and positioned for optimal airflow and cooling efficiency. Professional installation ensures the AC operates effectively, prevents leaks or electrical hazards, and extends the unit's lifespan. Regular service checks post-installation help maintain efficiency.",
      rate: 799,
      imgSrc: inst6,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Deep Cleaning Service",
      about: "Our AC Deep Cleaning Service ensures your air conditioning system operates at peak efficiency. We thoroughly clean and sanitize the internal components, removing dust, debris, and allergens. This process improves air quality, extends the lifespan of your unit, and reduces energy consumption, providing a more comfortable and healthier environment. Ideal for both residential and commercial systems.",
      rate: 599,
      imgSrc: inst2,
      expectedTime: "1 hour(s)"
    },
    {
      name: "AC Fan Not Working",
      about: "When the fan in an AC unit stops working, the air conditioner loses its ability to circulate air, reducing cooling efficiency. This problem can be caused by a malfunctioning motor, broken fan blades, or electrical issues. Repairing or replacing the faulty components can restore the fans function, improving the air conditioners cooling performance and ensuring consistent airflow throughout the space.",
      rate: 499,
      imgSrc: inst3,
      expectedTime: "1-3 hours"
    },
    {
      name: "AC Water Leakage issue",
      about: "Water leakage from an AC unit often results from clogged condensate drains, improper installation, or a malfunctioning condensate pump. Left unchecked, this issue can cause water damage and mold growth. Fixing the water leakage involves clearing the drain line, checking for leaks, and ensuring proper installation. Timely repairs help maintain the unit's efficiency and prevent damage to the surrounding area.",
      rate: 699,
      imgSrc: inst4,
      expectedTime: "1-3 hours"
    },
    {
      name: "AC Freezing Up / Ice Forming Issue",
      about: "Freezing up or ice formation on the AC unit's coils indicates problems such as low refrigerant levels, restricted airflow, or dirty coils. This reduces cooling efficiency and can damage the unit if left unchecked. Resolving this issue involves checking refrigerant levels, cleaning the coils, and ensuring proper airflow, restoring the unit's cooling capacity and preventing further ice formation.",
      rate: 699,
      imgSrc: inst5,
      expectedTime: "1-3 hours"
    },
    {
      name: "AC Warm Air Issue",
      about: "If your air conditioner is blowing warm air instead of cold, it can be a frustrating experience. This issue may result from a malfunctioning thermostat, low refrigerant levels, or a dirty air filter. A professional technician can diagnose the problem by checking the thermostat settings, inspecting refrigerant levels, and cleaning or replacing filters. Promptly addressing this issue restores comfort to your home during hot weather.",
      rate: 499,
      imgSrc: inst,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Anti Rust Service",
      about: "The AC anti-rust service protects the air conditioning unit from corrosion caused by exposure to moisture, humidity, and environmental factors. Special coatings are applied to the metal components of the AC, such as coils and casings, to prevent rust buildup and extend the unit's lifespan. This service is particularly useful for units installed in humid or coastal areas, where rust can significantly reduce the efficiency of the AC.",
      rate: 999,
      imgSrc: inst9,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Less / No Cooling Issue",
      about: "If an AC unit is providing little to no cooling, the issue may be due to low refrigerant levels, clogged filters, or malfunctioning components like the compressor or fan. This problem affects comfort and cooling efficiency. Diagnosing and fixing the underlying issue, whether it involves refilling refrigerant or replacing faulty parts, ensures that the AC can cool effectively and maintain the desired indoor temperature.",
      rate: 299,
      imgSrc: inst12,
      expectedTime: "1-3 hours"
    },
    {
      name: "AC Turning Off Issue",
      about: "An AC that turns off unexpectedly can indicate issues with the thermostat, electrical components, or safety switches. This problem affects the cooling process, as the unit may not complete its cycle. Diagnosing and fixing the cause, whether its electrical or mechanical, ensures that the AC operates reliably and maintains a comfortable indoor environment. Timely repairs can prevent further damage to the unit.",
      rate: 299,
      imgSrc: inst7,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Power On Issue",
      about: "If an AC unit is not powering on, the issue may be due to faulty wiring, damaged power cords, or malfunctioning control boards. This can prevent the unit from starting and cooling effectively. Diagnosing and fixing the electrical components ensures that the air conditioner can power on correctly, providing reliable cooling performance and maintaining indoor comfort.",
      rate: 299,
      imgSrc: inst10,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Noise Issue",
      about: "Unusual noises from an AC unit may indicate issues with the fan motor, compressor, or loose components. These noises can signal mechanical problems that need attention to prevent further damage to the unit. Diagnosing and repairing the cause of the noise, such as worn bearings or loose parts, ensures the AC operates quietly and efficiently, preventing potential system failure or breakdown.",
      rate: 299,
      imgSrc: inst10,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Routine Service",
      about: "Routine AC servicing includes cleaning the filters, inspecting refrigerant levels, checking electrical connections, and testing the overall performance of the unit. Regular maintenance helps ensure the air conditioner operates at optimal efficiency, extends the lifespan of the system, and prevents costly breakdowns. Routine servicing also helps maintain indoor air quality by removing dust and contaminants from the system.",
      rate: 599,
      imgSrc: inst11,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Drainage Issue",
      about: "AC drainage issues occur when the air conditioners condensate line becomes clogged or blocked, preventing water from draining properly. This can cause water to leak from the unit, leading to mold growth or water damage. Clearing the drain line and ensuring proper water flow helps maintain the AC efficiency and prevents costly damage to the unit or surrounding areas.",
      rate: 299,
      imgSrc: inst13,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Smell Issue",
      about: "Unusual noises from an AC unit may indicate issues with the fan motor, compressor, or loose components. These noises can signal mechanical problems that need attention to prevent further damage to the unit. Diagnosing and repairing the cause of the noise, such as worn bearings or loose parts, ensures the AC operates quietly and efficiently, preventing potential system failure or breakdown.",
      rate: 499,
      imgSrc: inst14,
      expectedTime: "1-2 hours"
    },
  ];


  const [bookingMessage, setBookingMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined' &&navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            location: `Lat: ${latitude}, Lng: ${longitude}`,
          }));
        },
        (error) => {
          console.error("Error detecting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleBooking = async () => {
    if (isClient && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            location: `Lat: ${latitude}, Lng: ${longitude}`,
          }));
        },
        (error) => {
          console.error("Error detecting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
    try {
      if(!userDetails.name || !userDetails.email || !userDetails.phone ||!userDetails.slot){
        console.log(userDetails)
        setBookingMessage("Please fill all the fields.");
        return;
      }
      const bookingData = {
        ...userDetails,
        service: params.name.replaceAll("_"," ").replaceAll("%2C",","),
        bookedAt: new Date().toLocaleDateString(),
      };

      await addDoc(collection(db, "booking"), bookingData);
      setBookingMessage("Booking successful!");
      setTimeout(() => setBookingMessage(""), 5000);
      var sub = "Contact Query Filled by "+userDetails.name
      var mess = "Name: "+userDetails.name+" "+"\nEmail: "+userDetails.email+"\nMobile: "+userDetails.phone+"\nMessage: "+userDetails.slot+"\nLocation: "+userDetails.location+"\n\n\n"+"Service: "+params.name.replaceAll("_"," ").replaceAll("%2C",",")+"\nBooked On: "+new Date().toLocaleDateString()+ "\nPrice: Rs."+params.rate +"\n\n\n"+"Please reach out to the customer as soon as possible."
      const response = await sendMail({
        email: userDetails.email,
        subject: sub,
        sendTo:"abhi10092003@gmail.com",
        text: mess,
      });
    } catch (error) {
      console.error("Error booking service: ", error);
      setBookingMessage("Booking failed. Try again later.");
    }
  };

  if (!isClient) {
    return null;
  }


  const today = new Date().toLocaleDateString();
  const maxDate = new Date();
  maxDate.setMonth(new Date(today).getMonth() + 2);
  const handleDateChange = (date: any) => {
    setUserDetails({ ...userDetails, slot: date.toLocaleDateString() });  // Store the selected date in the slot
  };

  return (
      <div className="flex flex-col items-center justify-center mt-8 min-h-screen text-white p-4">
        <div className="bg-black rounded-lg shadow-lg p-6 max-w-xl w-full xl:flex xl:flex-row xl:w-fit xl:max-w-4xl">
        <div className="xl:w-1/2 xl:flex xl:flex-col xl:justify-between">

          <h1 className="text-4xl font-bold mb-4 text-center mt-8 text-nowrap bg-clip-text text-transparent bg-gradient-to-r  from-blue-700   to-pink-400">Manhas AC Services</h1>
          <h2 className="text-3xl font-bold mb-4 mt-8">{params.name.replaceAll("_"," ").replaceAll("%2C",",")}</h2>
          <p className="text-gray-400 mb-2">{params.about.replaceAll("_"," ").replaceAll("%2C",",")}</p>
          <div className="text-sm mb-4">
            <p className="font-medium">Availability:</p>
            <ul className="list-disc pl-5 py-2">
              <li className="py-1 font-extralight">Monday - Friday: 7:00 AM - 9:00 PM</li>
              <li className="py-1 font-extralight">Saturday: 10:00 AM - 4:00 PM</li>
              <li className="py-1 font-extralight">Sunday: Closed</li>
            </ul>
          </div>
          <div className="text-lg font-semibold mb-2">Average Time: <span className="text-blue-400">{params.exptime.replaceAll("_"," ").replaceAll("%2C",",")}</span></div>
          <div className="text-lg font-semibold mb-2">Price: <span className="text-green-500">Rs. {params.rate}</span></div>

        </div>
        <div className="xl:w-1/2 xl:flex xl:flex-col xl:pl-5">
          <div className="flex flex-col gap-2 mb-4">
            <Image
              src={services.find(service=>service.name==params.name.replaceAll("_"," ").replaceAll("%2C",","))?.imgSrc||inst}
              height="1000"
              width="1000"
              className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              />
          <h2 className="text-3xl font-bold mb-4 text-center mt-8">Booking Form</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-md p-2 text-black"
              value={userDetails.name}
              onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-md p-2 text-black"
              value={userDetails.email}
              onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              />
            <input
              type="text"
              placeholder="Phone Number"
              className="rounded-md p-2 text-black"
              value={userDetails.phone}
              onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
              />
            {/* <input
              type="text"
              placeholder="Preferred Days"
              className="rounded-md p-2 text-black"
              value={userDetails.slot}
              onChange={(e) => setUserDetails({ ...userDetails, slot: e.target.value })}
              /> */}
            <div>
              <h2>Select a date</h2>
              <DatePicker
                selected={userDetails.slot?new Date(userDetails.slot):new Date()} // Set the selected date
                onChange={handleDateChange}
                minDate={new Date(today)}       // Min date: today
                maxDate={maxDate}     // Max date: 2 months from today
                dateFormat="dd/MM/yyyy"
                className="rounded-md p-2 text-black w-full"
                placeholderText="Select a date"
                />
              {userDetails.slot && (
                <p>Selected Date: {userDetails.slot}</p> // Display the selected date
              )}
            </div>
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-green-500 text-white rounded-md p-2 hover:bg-green-600 transition"
            >
            Book Slot
          </button>

          {bookingMessage && (
            <div className="mt-4 text-center text-yellow-400 font-semibold">
              {bookingMessage}
            </div>
          )}

          <div className="flex flex-col sm:flex-row  justify-between items-center mt-6">
            <a
              href="tel:+123456789"
              className="flex items-center w-full sm:w-auto gap-2 my-2 bg-gray-700 text-white rounded-md p-2 hover:bg-gray-600 transition"
              >
              <FaPhoneAlt /> Call Technician
            </a>
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full sm:w-auto gap-2 my-2 bg-gray-700 text-white rounded-md p-2 hover:bg-gray-600 transition"
              >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full sm:w-auto gap-2 my-2 bg-gray-700 text-white rounded-md p-2 hover:bg-gray-600 transition"
              >
              <FaMapMarkerAlt /> Location
            </a>
          </div>
        </div>
        </div>
      </div>
  );
};