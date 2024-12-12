import React from "react";
import { ThreeDCardDemo } from "../components/3dCard";
import inst from "/public/img1.jpg"
import inst2 from "/public/img2.jpg"
import inst3 from "/public/img3.jpg"
import inst4 from "/public/img4.jpg"
import inst5 from "/public/img5.jpg"
import inst6 from "/public/img6.jpg"
import inst7 from "/public/img7.jpg"
import inst8 from "/public/img8.jpg"
import inst9 from "/public/img9.jpg"
import inst10 from "/public/img10.jpg"
import inst11 from "/public/img11.jpg"
import inst12 from "/public/img12.jpg"
import inst13 from "/public/img13.jpg"
import inst14 from "/public/img14.jpg"
import inst15 from "/public/img15.jpg"

export default function Services() {
  const services = [
    {
      name: "AC Installation",
      about: "AC installation involves setting up a new or relocated air conditioner, including connecting refrigerant lines, electrical wiring, and ensuring proper drainage. The unit must be securely mounted and positioned for optimal airflow and cooling efficiency. Professional installation ensures the AC operates effectively, prevents leaks or electrical hazards, and extends the unit's lifespan. Regular service checks post-installation help maintain efficiency.",
      rate: 799,
      imgSrc: inst6,
      expectedTime: "1 hours"
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
      rate: 25,
      imgSrc: inst4,
      expectedTime: "1-3 hours"
    },
    {
      name: "AC Freezing Up or Ice Forming Issue",
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
      name: "AC Less or No Cooling Issue",
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
      imgSrc: inst11,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Routine Service",
      about: "Routine AC servicing includes cleaning the filters, inspecting refrigerant levels, checking electrical connections, and testing the overall performance of the unit. Regular maintenance helps ensure the air conditioner operates at optimal efficiency, extends the lifespan of the system, and prevents costly breakdowns. Routine servicing also helps maintain indoor air quality by removing dust and contaminants from the system.",
      rate: 599,
      imgSrc: inst13,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Drainage Issue",
      about: "AC drainage issues occur when the air conditioners condensate line becomes clogged or blocked, preventing water from draining properly. This can cause water to leak from the unit, leading to mold growth or water damage. Clearing the drain line and ensuring proper water flow helps maintain the AC efficiency and prevents costly damage to the unit or surrounding areas.",
      rate: 299,
      imgSrc: inst14,
      expectedTime: "1-2 hours"
    },
    {
      name: "AC Smell Issue",
      about: "Unusual noises from an AC unit may indicate issues with the fan motor, compressor, or loose components. These noises can signal mechanical problems that need attention to prevent further damage to the unit. Diagnosing and repairing the cause of the noise, such as worn bearings or loose parts, ensures the AC operates quietly and efficiently, preventing potential system failure or breakdown.",
      rate: 499,
      imgSrc: inst15,
      expectedTime: "1-2 hours"
    },
  ];

  return (
    <div id="services" className="min-w-4/5 pt-28">
      <h1 className="text-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r  from-blue-700   to-pink-400">Services</h1>
      <p className="text-center mt-5 text-xl font-light text-white mx-5">Choose from a wide and complete catalogue of our services</p>
      <div>
        <section className="flex flex-row flex-wrap justify-center">
          {services.map((service, index) => (
            // <div key={index} className="flex bg-red-400 p-4 mt-2 flex-col rounded-md min-w-2/5">
            //   <h2 className="text-2xl">{service.name}</h2>
            //   <p className="text-xl">{service.about}</p>
            //   <div className="flex flex-row justify-between">
            //     <p>Rs.{service.rate}</p>
            //     <p>Expected Time: {service.expectedTime}</p>
            //   </div>
            // </div>
            <ThreeDCardDemo key={index} imgsrc={service.imgSrc ?? ''} name ={service.name} about={service.about} rate={service.rate} expTime={service.expectedTime}/>
          ))}
        </section>
      </div>
    </div>
  );
}
