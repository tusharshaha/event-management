import React from "react";
import ContainerBox from "../../components/Shared/ContainerBox";
import SectionTitle from "../../components/Shared/SectionTitle";
import { FcCheckmark } from "react-icons/fc";

const Pricing = () => {
  return (
    <div className="bg-slate-200 py-14 min-h-screen">
      <ContainerBox>
        <SectionTitle
          title="Get Tickets"
          subtitle="Explore Our Flexible Plans and Buy Tickets"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {/* Ticket 1 */}
          <div
            style={{ transition: "0.5s" }}
            className="bg-white rounded hover:shadow-md hover:shadow-gray-300 transition hover:delay-300 hover:scale-105 p-6 flex flex-col gap-8"
          >
            <div>
              <p className="text-sm text-amber-600 font-bold">Regular Plan</p>
              <h3 className="text-2xl font-bold">Standard Pass</h3>
              <div>
                <sub className="font-semibold text-sm text-amber-600">$</sub>
                <span className="text-7xl text-teal-600 font-bold">150</span>
                <sub className="font-semibold text-sm">USD/Year</sub>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
            </div>
            <div>
              <button className="bg-cyan-800 text-white font-semibold text-xs px-4 py-2 w-full flex justify-center items-center">
                Buy Ticket
              </button>
            </div>
          </div>
          {/* Ticket 2 */}
          <div
            style={{ transition: "0.5s" }}
            className="bg-white rounded hover:shadow-md hover:shadow-gray-300 transition hover:delay-300 hover:scale-105 p-6 flex flex-col gap-8"
          >
            <div>
              <p className="text-sm text-amber-600 font-bold">Business Plan</p>
              <h3 className="text-2xl font-bold">Flexible Pass</h3>
              <div>
                <sub className="font-semibold text-sm text-amber-600">$</sub>
                <span className="text-7xl text-teal-600 font-bold">220</span>
                <sub className="font-semibold text-sm">USD/Year</sub>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
            </div>
            <div>
              <button className="bg-cyan-800 text-white font-semibold text-xs px-4 py-2 w-full flex justify-center items-center">
                Buy Ticket
              </button>
            </div>
          </div>
          {/* Ticket 3 */}
          <div
            style={{ transition: "0.5s" }}
            className="bg-white rounded hover:shadow-md hover:shadow-gray-300 transition hover:delay-300 hover:scale-105 p-6 flex flex-col gap-8"
          >
            <div>
              <p className="text-sm text-amber-600 font-bold">
                Enterprise Plan
              </p>
              <h3 className="text-2xl font-bold">Premium Pass</h3>
              <div>
                <sub className="font-semibold text-sm text-amber-600">$</sub>
                <span className="text-7xl text-teal-600 font-bold">300</span>
                <sub className="font-semibold text-sm">USD/Year</sub>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
              <div className="flex items-center gap-3">
                <FcCheckmark size={16} />
                <p className="text-sm font-semibold">Concert Attendance</p>
              </div>
            </div>
            <div>
              <button className="bg-cyan-800 text-white font-semibold text-xs px-4 py-2 w-full flex justify-center items-center">
                Buy Ticket
              </button>
            </div>
          </div>
        </div>
      </ContainerBox>
    </div>
  );
};

export default Pricing;
