



import React, { useCallback } from "react";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateEventPageEdit = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-100 h-[2898px] overflow-hidden text-left text-5xl text-eventify-white font-assignment-1-small-title">
      <b className="absolute top-[135px] left-[150px] text-29xl font-assignment-1-big-title-w-line-height">
        Create a New Event
      </b>
      <div className="absolute top-[461px] left-[404px] text-21xl font-medium font-assignment-1-big-title-w-line-height">
        Event Details
      </div>
      <div className="absolute top-[783px] left-[404px] text-21xl font-medium font-assignment-1-big-title-w-line-height">{`Date & Time`}</div>
      <div className="absolute top-[783px] left-[404px] text-21xl font-medium font-assignment-1-big-title-w-line-height">{`Date & Time`}</div>
      <div className="absolute bottom-[0px] left-[calc(50%_-_960px)] bg-gray-100 w-[1920px] h-[482px] overflow-hidden text-gray-100 font-assignment-1-big-title-w-line-height">
        <div className="absolute top-[50px] left-[866px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative font-semibold">Categories</div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg text-eventify-white font-assignment-1-small-title">
            <div className="flex flex-row items-center justify-center">
              <div className="relative">{`Concerts & Gigs`}</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">{`Festivals & Lifestyle`}</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">{`Business & Networking`}</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">{`Food & Drinks`}</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Performing Arts</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">{`Sports & Outdoors`}</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Exhibitions</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">{`Workshops, Conferences & Classes`}</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[50px] left-[1271px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative font-semibold">Follow Us</div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg text-eventify-white font-assignment-1-small-title">
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Facebook</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Instagram</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Twitter</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Youtube</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[50px] left-[180px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative font-semibold">Company Info</div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg text-eventify-white font-assignment-1-small-title">
            <div className="flex flex-row items-center justify-center">
              <div className="relative">About Us</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Contact Us</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Careers</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">FAQs</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Terms of Service</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Privacy Policy</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[50px] left-[449px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative font-semibold">Help</div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg text-eventify-white font-assignment-1-small-title">
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Account Support</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Listing Events</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">Event Ticketing</div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative">{`Ticket Purchase Terms & Conditions`}</div>
            </div>
            <div className="w-[135px] relative font-assignment-1-big-title-w-line-height text-assignment-1-dark-grey hidden">
              Customer Care
            </div>
          </div>
        </div>
        <div className="absolute top-[50px] left-[1486px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative font-semibold">Download The App</div>
          <div className="flex flex-col items-start justify-start gap-[20px] text-lg text-eventify-white font-assignment-1-small-title">
            <div className="self-stretch rounded-md flex flex-row items-center justify-start py-3 px-3.5 gap-[20px] border-[1px] border-solid border-eventify-white">
              <img
                className="w-12 relative h-12 object-cover"
                alt=""
                src="/icons8googleplay48-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <div className="relative">Get it on</div>
                <div className="relative text-xl">Google Play</div>
              </div>
            </div>
            <div className="rounded-md flex flex-row items-center justify-start py-3 px-3.5 gap-[20px] border-[1px] border-solid border-eventify-white">
              <img
                className="w-[50px] relative h-[50px] object-cover"
                alt=""
                src="/icons8apple50-1-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <div className="relative">Download on the</div>
                <div className="relative text-xl">App Store</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-[61px] left-[calc(50%_-_780px)] max-h-full w-[1560px]"
          alt=""
          src="/line-1.svg"
        />
        <div className="absolute bottom-[20px] left-[calc(50%_-_149px)] flex flex-row items-center justify-center gap-[2px] text-lg text-eventify-white font-assignment-1-small-title">
          <img
            className="w-[17px] relative h-[17px]"
            alt=""
            src="/copyright-icon.svg"
          />
          <div className="relative">2023 Eventify. All rights reserved.</div>
        </div>
      </div>
      <div className="absolute top-[254px] left-[calc(50%_-_810px)] w-[1620px] h-[67px] text-center text-eventify-light-grey">
        <div className="absolute top-[0px] left-[0px] w-[405px] h-[67px]">
          <img
            className="absolute bottom-[43px] left-[calc(50%_-_202.5px)] w-[405.5px] h-6"
            alt=""
            src="/filled-progress.svg"
          />
          <div className="absolute top-[34px] left-[calc(50%_-_22.5px)] font-semibold">
            Edit
          </div>
        </div>
        <div className="absolute top-[0px] left-[405px] w-[405px] h-[67px] text-eventify-white">
          <img
            className="absolute bottom-[43px] left-[calc(50%_-_202.5px)] w-[405.5px] h-6"
            alt=""
            src="/filled-progress.svg"
          />
          <div className="absolute top-[34px] left-[calc(50%_-_42.5px)] font-semibold">
            Banner
          </div>
        </div>
        <div className="absolute top-[0px] left-[810px] w-[405px] h-[67px]">
          <img
            className="absolute bottom-[43px] left-[calc(50%_-_202.5px)] w-[405.5px] h-6"
            alt=""
            src="/filled-progress.svg"
          />
          <div className="absolute top-[34px] left-[calc(50%_-_52.5px)] font-semibold">
            Ticketing
          </div>
        </div>
        <div className="absolute top-[0px] left-[1215px] w-[405px] h-[67px]">
          <img
            className="absolute bottom-[43px] left-[calc(50%_-_202.5px)] w-[405.5px] h-6"
            alt=""
            src="/filled-progress.svg"
          />
          <div className="absolute top-[34px] left-[calc(50%_-_41.5px)] font-semibold">
            Review
          </div>
        </div>
      </div>
      <div className="absolute top-[553px] left-[150px] flex flex-row items-start justify-end gap-[5px] text-right">
        <div className="w-[215px] relative font-semibold inline-block shrink-0">
          Event Title
        </div>
        <b className="w-3.5 relative inline-block text-crimson text-left h-[26px] shrink-0">
          *
        </b>
      </div>
      <div className="absolute top-[875px] left-[150px] flex flex-row items-start justify-end gap-[5px] text-right">
        <div className="w-[215px] relative font-semibold inline-block shrink-0">
          Event Type
        </div>
        <b className="w-3.5 relative inline-block text-crimson text-left h-[26px] shrink-0">
          *
        </b>
      </div>
      <div className="absolute top-[648px] left-[150px] flex flex-row items-start justify-end gap-[5px] text-right">
        <div className="w-[215px] relative font-semibold inline-block shrink-0">
          Event Category
        </div>
        <b className="w-3.5 relative inline-block text-crimson text-left h-[26px] shrink-0">
          *
        </b>
      </div>
      <div className="absolute top-[540px] left-[404px] rounded-md bg-gray-100 box-border w-[900px] overflow-hidden flex flex-row items-center justify-center py-3.5 px-6 text-3xl text-darkgray-100 border-[1px] border-solid border-gray-500">
        <div className="self-stretch flex-1 relative">
          Enter the name of your event
        </div>
      </div>
      <div className="absolute top-[875px] left-[410px] flex flex-row items-start justify-start gap-[62px]">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img className="w-5 relative h-5" alt="" src="/radio-button.svg" />
          <div className="relative font-semibold">Single Event</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img className="w-5 relative h-5" alt="" src="/radio-button.svg" />
          <div className="relative font-semibold">Recurring Event</div>
        </div>
      </div>
      <img
        className="absolute top-[139px] left-[34px] rounded-3xs w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/back-button.svg"
      />
      <div className="absolute bottom-[572px] left-[1440px] rounded-3xs [background:linear-gradient(rgba(25,_0,_255,_0.2),_rgba(25,_0,_255,_0.2)),_#2b293d] overflow-hidden flex flex-row items-center justify-center py-5 px-[67px] text-center text-eventify-light-grey">
        <Link to='/'>
        <b className="relative">{`Save & Continue`}</b></Link>
      </div>
      <div className="absolute top-[958px] left-[150px] flex flex-col items-start justify-start gap-[90px] text-right">
        <div className="flex flex-row items-start justify-start gap-[20px]">
          <div className="flex flex-row items-start justify-end gap-[5px]">
            <div className="w-[215px] relative font-semibold inline-block shrink-0">
              Session(s)
            </div>
            <b className="w-3.5 relative inline-block text-crimson text-left h-[26px] shrink-0">
              *
            </b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[30px] text-left">
            <div className="flex flex-row items-start justify-start gap-[50px]">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative font-semibold">Start Date</div>
                  <b className="w-3.5 relative inline-block text-crimson h-[26px] shrink-0">
                    *
                  </b>
                </div>
                <div className="w-[430px] rounded-md bg-gray-100 box-border overflow-hidden flex flex-row items-center justify-center py-0 pr-6 pl-0 gap-[20px] text-3xl text-darkgray-100 border-[1px] border-solid border-gray-300">
                  <img
                    className="w-[58px] relative h-[58px] overflow-hidden shrink-0"
                    alt=""
                    src="/date-icon.svg"
                  />
                  <div className="flex-1 relative">DD/MM/YY</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start gap-[5px]">
                  <div className="relative font-semibold">Start Time</div>
                  <b className="w-3.5 relative inline-block text-crimson h-[26px] shrink-0">
                    *
                  </b>
                </div>
                <div className="w-[380px] rounded-md bg-gray-100 box-border overflow-hidden flex flex-row items-center justify-center py-0 pr-6 pl-0 gap-[20px] text-3xl text-darkgray-100 border-[1px] border-solid border-gray-300">
                  <img
                    className="w-[58px] relative h-[58px] overflow-hidden shrink-0"
                    alt=""
                    src="/date-icon.svg"
                  />
                  <div className="flex-1 relative">12:00 AM</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative font-semibold">End Time</div>
                </div>
                <div className="w-[380px] rounded-md bg-gray-100 box-border overflow-hidden flex flex-row items-center justify-center py-0 pr-6 pl-0 gap-[20px] text-3xl text-darkgray-100 border-[1px] border-solid border-gray-300">
                  <img
                    className="w-[58px] relative h-[58px] overflow-hidden shrink-0"
                    alt=""
                    src="/date-icon.svg"
                  />
                  <div className="flex-1 relative">12:00 AM</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <img
                className="w-[30px] relative rounded-41xl h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/add-button.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start text-21xl font-assignment-1-big-title-w-line-height">
          <div className="h-[647px] flex flex-col items-start justify-start gap-[90px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
              <div className="w-[430px] relative font-medium inline-block">
                Location
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px] text-5xl font-assignment-1-small-title">
                <div className="flex flex-row items-start justify-end gap-[5px]">
                  <div className="w-[215px] relative font-semibold inline-block shrink-0">
                    Where will your event take place?
                  </div>
                  <b className="w-3.5 relative inline-block text-crimson text-left h-[26px] shrink-0">
                    *
                  </b>
                </div>
                <div className="rounded-md h-[58px] overflow-hidden flex flex-col items-center justify-end relative gap-[6px] text-left text-3xl">
                  <div className="shadow-[0px_2px_8px_rgba(29,_29,_29,_0.25)] overflow-hidden flex flex-col items-start justify-start z-[0] border-[1px] border-solid border-eventify-white">
                    <div className="w-[900px] bg-gray-100 flex flex-row items-center justify-start py-3.5 px-4 box-border gap-[18px]">
                      <div className="w-14 relative rounded-51xl bg-eventify-light-grey h-14 overflow-hidden shrink-0">
                        <img
                          className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] w-[30px] h-[30px] object-cover"
                          alt=""
                          src="/group-1-1@2x.png"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch relative font-semibold">
                          Venue
                        </div>
                        <div className="self-stretch relative text-xl">
                          Host event at a physical location and manage check-ins
                          at the door.
                        </div>
                      </div>
                    </div>
                    <div className="w-[900px] bg-gray-100 flex flex-row items-center justify-start py-3.5 px-4 box-border gap-[18px]">
                      <div className="w-14 relative rounded-51xl bg-eventify-light-grey h-14 overflow-hidden shrink-0">
                        <img
                          className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] w-[30px] h-[30px] object-cover"
                          alt=""
                          src="/globe-1@2x.png"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch relative font-semibold">
                          Online
                        </div>
                        <div className="self-stretch relative text-xl">
                          Host event through any virtual platform and easily
                          share the joining instructions only with the ticket
                          buyers.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[900px] !m-[0] absolute top-[0px] left-[0px] rounded-md bg-gray-100 box-border overflow-hidden flex flex-row items-center justify-center py-3.5 px-6 gap-[10px] z-[1] text-darkgray-100 border-[1px] border-solid border-assignment-1-dark-grey">
                    <div className="flex-1 relative">Please select one</div>
                    <img
                      className="w-3 relative h-1.5"
                      alt=""
                      src="/vector-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[30px]">
              <div className="w-[717px] relative font-medium inline-block">
                Additional Information
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px] text-5xl font-assignment-1-small-title">
                <div className="flex flex-row items-start justify-end gap-[5px]">
                  <div className="w-[215px] relative font-semibold inline-block shrink-0">
                    Event Description
                  </div>
                  <b className="w-3.5 relative inline-block text-crimson text-left h-[26px] shrink-0">
                    *
                  </b>
                </div>
                <div className="w-[1366px] rounded-md bg-gray-100 box-border h-80 overflow-hidden shrink-0 flex flex-row items-start justify-start py-3.5 px-6 text-left text-3xl text-darkgray-100 border-[1px] border-solid border-gray-300">
                  <div className="self-stretch flex-1 relative">{`Describe what's special about your event & other important details.`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[635px] left-[404px] rounded-md h-[58px] overflow-hidden flex flex-col items-center justify-end gap-[6px] text-xl">
        <div className="rounded-lg shadow-[0px_2px_8px_rgba(29,_29,_29,_0.25)] overflow-hidden flex flex-col items-start justify-start z-[0] border-[1px] border-solid border-assignment-1-dark-grey">
          <div className="w-[900px] bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-5 px-[50px] box-border">
            <div className="relative">{`Cultural & Arts`}</div>
          </div>
          <div className="w-[900px] bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-5 px-[50px] box-border">
            <div className="relative">{`Educational & Business`}</div>
          </div>
          <div className="w-[900px] bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-5 px-[50px] box-border">
            <div className="relative">Entertainment</div>
          </div>
          <div className="w-[900px] bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-5 px-[50px] box-border">
            <div className="relative">{`Food & Drink`}</div>
          </div>
          <div className="w-[900px] bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-5 px-[50px] box-border">
            <div className="relative">{`Sports & Fitness`}</div>
          </div>
          <div className="w-[900px] bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-5 px-[50px] box-border">
            <div className="relative">{`Technology & Innovation`}</div>
          </div>
          <div className="w-[900px] bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-5 px-[50px] box-border">
            <div className="relative">{`Travel & Adventure`}</div>
          </div>
        </div>
        <div className="w-[900px] !m-[0] absolute top-[0px] left-[0px] rounded-md bg-gray-100 box-border overflow-hidden flex flex-row items-center justify-center py-3.5 px-6 gap-[10px] z-[1] text-3xl text-darkgray-100 border-[1px] border-solid border-gray-500">
          <div className="flex-1 relative">Please select one</div>
          <img className="w-3 relative h-1.5" alt="" src="/vector-3.svg" />
        </div>
      </div>
      <div className="absolute top-[16px] left-[calc(50%_-_810px)] rounded-31xl bg-black w-[1670px] h-[75px] overflow-hidden text-center font-assignment-1-big-title-w-line-height">
        <div className="absolute top-[calc(50%_-_23.5px)] left-[1564px] flex flex-row items-center justify-center py-2.5 px-5">
          <div className="relative font-medium">Login</div>
        </div>
        <div className="absolute top-[calc(50%_-_23.5px)] left-[1359px] flex flex-row items-center justify-center py-2.5 px-5">
          <div className="relative font-medium">Create Event</div>
        </div>
        <div className="absolute top-[calc(50%_-_24px)] left-[1683px] rounded-3xs bg-assignment-1-yellow flex flex-row items-center justify-center py-2.5 px-5 text-assignment-1-dark-navy-blue">
          <div className="relative font-medium">Sign Up</div>
        </div>
        <div className="absolute top-[15px] left-[713px] h-[60px] flex flex-row items-start justify-start gap-[26px]">
          <div className="flex flex-row items-start justify-center p-2.5 z-[0]">
            <div className="relative font-semibold">Home</div>
          </div>
          <div className="flex flex-row items-start justify-center py-2.5 px-[10.5px] z-[1]">
            <div className="relative font-medium">Events</div>
          </div>
          <div className="flex flex-row items-start justify-center py-2.5 px-[10.5px] z-[2]">
            <div className="relative font-medium">About</div>
          </div>
          <div className="flex flex-row items-start justify-center py-2.5 px-[10.5px] z-[3]">
            <div className="relative font-medium">Contact</div>
          </div>
          <div className="w-[76px] absolute !m-[0] top-[54px] left-[10px] bg-assignment-1-yellow h-1.5 z-[4]" />
        </div>
        <div
          className="absolute top-[7px] left-[100px] w-[241px] h-[53.7px] cursor-pointer text-left text-29xl font-la-belle-aurore"
          onClick={onLogoContainerClick}
        >
          <div className="absolute top-[calc(50%_-_9.85px)] left-[71px]">
            ThriveUp
          </div>
          <div className="absolute top-[9.3px] left-[0px] w-[65.3px] h-[44.9px] [transform:_rotate(-8.2deg)] [transform-origin:0_0]" />
        </div>
      </div>
      <img
        className="absolute top-[30px] left-[250px] w-12 h-[61px] object-cover"
        alt=""
        src="/logo-1@2x.png"
      />
    </div>
  );
};

export default CreateEventPageEdit;
