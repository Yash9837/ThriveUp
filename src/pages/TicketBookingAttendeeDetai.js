import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const TicketBookingAttendeeDetail = () => {
  const navigate = useNavigate();

  const onCloseButtonImageClick = useCallback(() => {
    navigate("/event-page");
  }, [navigate]);

  return (
    <div className="w-full relative h-[938px] text-left text-xl text-assignment-1-dark-bluish-grey font-assignment-1-small-title">
      <div className="absolute top-[1px] left-[0px] bg-whitesmoke-200 w-[842px] h-[937px] overflow-hidden">
        <div className="absolute top-[185px] left-[30px] font-semibold">
          Standard Ticket: Ticket #1
        </div>
        <div className="absolute top-[124px] left-[20px] text-5xl text-assignment-1-dark-grey">
         
        </div>
        <div className="absolute top-[0px] left-[0px] bg-eventify-white box-border w-[842px] h-[100px] overflow-hidden text-13xl border-b-[1px] border-solid border-darkgray-400">
          <div className="absolute top-[calc(50%_-_22px)] left-[88px]">
            Attendee Details
          </div>
          <Link to="/event-page">
          <img
            className="absolute top-[calc(50%_-_24.9px)] left-[10px] rounded-3xs w-[50px] h-[50px] overflow-hidden"
            alt=""
            src="/left-arrow.svg"
          /></Link>
        </div>
        <div className="absolute bottom-[0px] left-[0px] bg-eventify-white shadow-[0px_-4px_10px_rgba(29,_29,_29,_0.15)] w-[842px] h-[188px] overflow-hidden text-13xl">
          <div className="absolute top-[20px] left-[260px] flex flex-row items-start justify-start gap-[14px]">
            <div className="relative font-semibold">Qty:</div>
            <div className="relative font-semibold text-darkgreen">1</div>
          </div>
          <div className="absolute top-[20px] left-[407px] flex flex-row items-start justify-start gap-[14px]">
            <div className="relative font-semibold">Total:</div>
            <div className="relative font-semibold text-darkgreen">₹500</div>
          </div>
          <div className="absolute top-[84px] left-[38px] rounded-md bg-assignment-1-dark-navy-blue w-[762px] h-20 overflow-hidden text-center text-eventify-white">
            <div className="absolute top-[18px] left-[calc(50%_-_195px)] flex flex-row items-center justify-center gap-[10px]">
              <div className="relative font-semibold">Continue to Checkout</div>
              
              <Link to='/chat-web'>
              <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
              <div className="relative font-semibold">Continue to chat</div>
      </button></Link>
            </div>
          </div>
        </div>
        <div className="absolute top-[222px] left-[calc(50%_-_391px)] bg-eventify-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[30px] gap-[26px] text-dimgray-200 border-r-[1px] border-solid border-darkgray-400 border-b-[1px] border-l-[1px]">
          <div className="w-[782px] relative bg-cornflowerblue h-1" />
          <div className="flex flex-col items-start justify-start gap-[28px]">
            <div className="w-[680px] h-[98px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-semibold">Full Name</div>
              <div className="self-stretch flex-1 relative rounded-3xs bg-eventify-white overflow-hidden text-lgi text-darkgray-100 border-[1px] border-solid border-gray-500">
                <div className="absolute top-[calc(50%_-_12.5px)] left-[26px] inline-block w-[448px]">
                  Enter Attendee’s full name
                </div>
              </div>
            </div>
            <div className="w-[680px] h-[98px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-semibold">E-mail</div>
              <div className="self-stretch flex-1 relative rounded-3xs bg-eventify-white overflow-hidden text-lgi text-darkgray-100 border-[1px] border-solid border-gray-500">
                <div className="absolute top-[calc(50%_-_12.5px)] left-[26px] inline-block w-[236px]">
                  Enter your e-mail
                </div>
              </div>
            </div>
            <div className="w-[680px] h-[98px] flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-semibold">Phone</div>
              <div className="self-stretch flex-1 relative rounded-3xs bg-eventify-white overflow-hidden text-lgi text-darkgray-100 border-[1px] border-solid border-gray-500">
                <div className="absolute top-[calc(50%_-_12.5px)] left-[99px] inline-block w-[448px]">
                  Enter Attendee's Phone Number
                </div>
                <img
                  className="absolute top-[calc(50%_-_3.5px)] left-[66px] rounded-12xs w-[12.4px] h-2"
                  alt=""
                  src="/vector-7.svg"
                />
                <img
                  className="absolute top-[calc(50%_-_11.5px)] left-[20px] w-[38px] h-6 overflow-hidden object-cover"
                  alt=""
                  src="/frame-42@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[655px] left-[calc(50%_-_295.2px)] flex flex-row items-start justify-start text-center text-assignment-1-dark-grey">
          <div className="relative">I accept the</div>
          <div className="flex flex-row items-center justify-center py-0 px-2.5 ml-[-2px] text-left text-steelblue">
            <div className="relative">Terms of Service</div>
          </div>
          <div className="relative ml-[-2px]">and have read the</div>
          <div className="flex flex-row items-center justify-center py-0 px-2.5 ml-[-2px] text-left text-steelblue">
            <div className="relative">Privacy Policy</div>
          </div>
        </div>
        <div className="absolute top-[124px] right-[30px] flex flex-row items-center justify-end gap-[11px] text-right text-5xl text-assignment-1-dark-grey">
          <img
            className="w-[25px] relative h-[25px] overflow-hidden shrink-0"
            alt=""
            src="/uiwdate.svg"
          />
          <div className="relative">Saturday, 2 December 2023</div>
        </div>
      </div>
      <img
        className="absolute top-[1.3px] left-[872px] w-[53.7px] h-[53.7px] object-contain cursor-pointer"
        alt=""
        src="/close-button@2x.png"
        onClick={onCloseButtonImageClick}
      />
    </div>
  );
};

export default TicketBookingAttendeeDetail;
