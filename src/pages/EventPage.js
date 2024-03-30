
import { Link } from 'react-router-dom';
const EventPage = () => {
  return (
    <div className="w-full relative bg-c6a969 h-[4349px] overflow-hidden text-left text-17xl text-eventjoy-grayish-black font-assignment-1-small-title">
      <img
        className="absolute top-[115px] left-[calc(50%_-_810px)] rounded-[20px] w-[1620px] h-[570px] overflow-hidden object-cover"
        alt=""
        src="/event-image@2x.png"
      />
      <div className="absolute bottom-[0px] left-[calc(50%_-_960px)] bg-c6a9692 w-[1920px] h-[482px] overflow-hidden text-5xl font-assignment-1-big-title">
        <div className="absolute top-[50px] left-[866px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative font-semibold">Categories</div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg font-assignment-1-small-title">
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
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg font-assignment-1-small-title">
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
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg font-assignment-1-small-title">
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
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg font-assignment-1-small-title">
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
            <div className="w-[135px] relative font-assignment-1-big-title text-eventify-dark-grey hidden">
              Customer Care
            </div>
          </div>
        </div>
        <div className="absolute top-[50px] left-[1486px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative font-semibold">Download The App</div>
          <div className="flex flex-col items-start justify-start gap-[20px] text-lg font-assignment-1-small-title">
            <div className="self-stretch rounded-md flex flex-row items-center justify-start py-3 px-3.5 gap-[20px] border-[1px] border-solid border-eventjoy-grayish-black">
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
            <div className="rounded-md flex flex-row items-center justify-start py-3 px-3.5 gap-[20px] border-[1px] border-solid border-eventjoy-grayish-black">
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
        <div className="absolute bottom-[20px] left-[calc(50%_-_149px)] flex flex-row items-center justify-center gap-[2px] text-lg font-assignment-1-small-title">
          <img
            className="w-[17px] relative h-[17px]"
            alt=""
            src="/copyright-icon.svg"
          />
          <div className="relative">2023 Eventify. All rights reserved.</div>
        </div>
      </div>
      <div className="absolute top-[725px] left-[150px] text-[68px] font-extrabold inline-block w-[1149px]">
        A Night To Remember
      </div>
      <div className="absolute top-[898px] left-[150px] flex flex-col items-start justify-start gap-[22px]">
        <div className="flex flex-col items-start justify-start gap-[28px]">
          <b className="relative">Date and Time</b>
          <div className="flex flex-col items-start justify-start gap-[22px] text-5xl">
            <div className="flex flex-row items-end justify-start gap-[20px]">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/uiwdate.svg"
              />
              <div className="relative font-semibold">
                Monday, 15 April 2024
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-[20px]">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/iconparkoutlinetime.svg"
              />
              <div className="relative font-semibold">6:30 PM - 9:30 PM</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-0 pr-0 pl-8 text-5xl text-slateblue">
          <div className="w-[207px] relative font-semibold inline-block shrink-0">
            + Add to Calendar
          </div>
        </div>
      </div>
      <div className="absolute top-[728px] left-[1590px] flex flex-row items-start justify-start">
        <img
          className="w-[90px] relative rounded-51xl h-[90px] overflow-hidden shrink-0"
          alt=""
          src="/interested-button.svg"
        />
        <img
          className="w-[90px] relative rounded-51xl h-[90px] overflow-hidden shrink-0"
          alt=""
          src="/share-button.svg"
        />
      </div>
      <div className="absolute top-[885px] left-[calc(50%_+_459px)] rounded-3xs bg-assignment-1-yellow flex flex-row items-center justify-center py-5 px-[60px] gap-[12px] text-center text-13xl">
        <img
          className="w-11 relative h-11 overflow-hidden shrink-0"
          alt=""
          src="/ionticket.svg"
        />
        <Link to="/ticket-booking-attendee-details">
        <div className="relative font-semibold">Buy Tickets</div></Link>
      </div>
      <div className="absolute top-[1198px] left-[150px] flex flex-col items-start justify-start gap-[30px]">
        <div className="flex flex-col items-start justify-start gap-[28px]">
          <b className="relative">Location</b>
          <div className="flex flex-col items-start justify-start text-5xl">
            <div className="flex flex-row items-start justify-start gap-[20px]">
              <img
                className="w-[30px] relative h-[30px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/location-icon@2x.png"
              />
              <div className="w-[561px] relative font-semibold inline-block shrink-0">
                2171, Core 1, Tower 2, Estancia, Guduvanchery, Chennai
              </div>
            </div>
          </div>
        </div>
        <div className="w-[730px] relative rounded-3xs h-[450px] overflow-hidden shrink-0 bg-[url('/public/map@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute top-[201px] left-[315px] w-[100px] h-[100px] overflow-hidden object-cover"
            alt=""
            src="/location-icon@2x.png"
          />
          <div className="absolute top-[305px] left-[647px] rounded-sm bg-c6a969 shadow-[0px_2px_4px_rgba(29,_29,_29,_0.25)] w-[53px] h-[115px] overflow-hidden">
            <img
              className="absolute top-[14px] left-[14px] w-[25px] h-[25px]"
              alt=""
              src="/zoom-in-button.svg"
            />
            <img
              className="absolute top-[76px] left-[14px] w-[25px] h-[25px]"
              alt=""
              src="/zoom-out-button.svg"
            />
            <img
              className="absolute top-[calc(50%_+_0.5px)] left-[calc(50%_-_18.5px)] max-h-full w-[38px]"
              alt=""
              src="/line-9.svg"
            />
          </div>
          <img
            className="absolute top-[30px] left-[648px] rounded-sm w-[52px] h-[52px] overflow-hidden"
            alt=""
            src="/large-view.svg"
          />
        </div>
      </div>
      <div className="absolute top-[1934px] left-[150px] flex flex-col items-start justify-start gap-[42px]">
        <b className="relative">Hosted by</b>
        <div className="flex flex-row items-start justify-start gap-[30px] text-9xl">
          <img
            className="w-[111px] relative rounded-3xs h-[111px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/host-profile-image@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <div className="relative font-semibold">City Youth Movement</div>
            <div className="flex flex-row items-start justify-start gap-[14px] text-center text-5xl">
              <div className="w-[127px] relative rounded-md bg-c6a969 box-border h-[47px] overflow-hidden shrink-0 border-[1px] border-solid border-eventjoy-grayish-black">
                <div className="absolute top-[calc(50%_-_15.5px)] left-[calc(50%_-_45.5px)] font-semibold">
                  Contact
                </div>
              </div>
              <div className="w-[132px] relative rounded-md bg-eventjoy-grayish-black h-[47px] overflow-hidden shrink-0 text-xl text-c6a969">
                <div className="absolute top-[calc(50%_-_15.5px)] left-[calc(50%_-_40px)] font-semibold">
                  + Follow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1036px] left-[1388px] flex flex-col items-start justify-start gap-[28px]">
        <b className="relative">Ticket Information</b>
        <div className="flex flex-col items-start justify-start text-5xl">
          <div className="w-[382px] flex flex-row items-center justify-start gap-[20px]">
            <img
              className="w-[30px] relative h-[30px] overflow-hidden shrink-0"
              alt=""
              src="/ionticket.svg"
            />
            <div className="w-[846px] relative font-semibold inline-block shrink-0">
              Standard Ticket: ₹ 499 each
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[1573px] left-[150px] flex flex-col items-start justify-start gap-[30px]">
        <b className="relative">Event Description</b>
        <div className="w-[1620px] relative text-5xl leading-[37px] inline-block">
          <p className="m-0">
            You're invited to the ultimate house party extravaganza! Get ready
            to experience a night filled with music, laughter, and unforgettable
            memories. Our host, Yash Gupta, is opening their doors for a night
            of fun and excitement. Whether you're looking to dance the night
            away, mingle with old friends, or make new ones, this party promises
            to deliver an unforgettable experience.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <b>3 Reasons to attend the event:</b>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">1. Live DJ Performance</p>
          <p className="m-0">2. Interactive Entertainment</p>
          <p className="m-0">3. Delicious Refreshments</p>
        </div>
      </div>
      <div className="absolute top-[2856px] left-[150px] w-[1149px] flex flex-col items-start justify-start gap-[36px]">
        <b className="relative">Tags</b>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[28px] text-center text-lg">
          <div className="rounded-31xl bg-assignment-1-yellow flex flex-col items-center justify-center py-3 px-7">
            <div className="relative">Holiday Concert</div>
          </div>
          <div className="rounded-31xl bg-assignment-1-yellow flex flex-col items-center justify-center py-3 px-7">
            <div className="relative">Live Performance</div>
          </div>
          <div className="rounded-31xl bg-assignment-1-yellow flex flex-col items-center justify-center py-3 px-7">
            <div className="relative">Seasonal Event</div>
          </div>
          <div className="rounded-31xl bg-assignment-1-yellow flex flex-col items-center justify-center py-3 px-7">
            <div className="relative">Family-Friendly</div>
          </div>
          <div className="rounded-31xl bg-assignment-1-yellow flex flex-col items-center justify-center py-3 px-7">
            <div className="relative">#Christmas_Spirit</div>
          </div>
          <div className="rounded-31xl bg-assignment-1-yellow flex flex-col items-center justify-center py-3 px-7">
            <div className="relative">#Christmas_Carols</div>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-[1201px] left-[calc(50%_-_810px)] max-h-full w-[1620px]"
        alt=""
        src="/line-21.svg"
      />
      <div className="absolute bottom-[582px] left-[60px] w-[1800px] h-[560px]">
        <b className="absolute bottom-[511px] left-[90px]">
          Other events you may like
        </b>
        <div className="absolute bottom-[0px] left-[calc(50%_-_900px)] w-[1800px] h-[461px] text-lg">
          <img
            className="absolute bottom-[207px] left-[1750px] rounded-3xs w-[50px] h-[50px] overflow-hidden"
            alt=""
            src="/right-arrow.svg"
          />
          <img
            className="absolute bottom-[207px] left-[0px] rounded-3xs w-[50px] h-[50px] overflow-hidden opacity-[0.4]"
            alt=""
            src="/left-arrow.svg"
          />
          <div className="absolute bottom-[-17px] left-[90px] w-[1620px] h-[478px] overflow-hidden">
            <div className="absolute bottom-[17px] left-[0px] flex flex-row items-start justify-start gap-[55px]">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[512px] relative rounded-3xs bg-c6a969 h-[461px] overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image12@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-assignment-1-yellow overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                      <div className="relative font-semibold">{`Travel & Adventure`}</div>
                    </div>
                    <img
                      className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                      alt=""
                      src="/interested-button.svg"
                    />
                  </div>
                  <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-slateblue font-assignment-1-big-title">
                    <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                      <div className="absolute top-[22px] left-[calc(50%_-_42px)] flex flex-col items-center justify-start">
                        <div className="flex flex-col items-center justify-start gap-[6px]">
                          <div className="relative font-semibold">NOV</div>
                          <div className="flex flex-row items-center justify-center gap-[4px] text-7xl text-eventjoy-grayish-black">
                            <b className="relative">25</b>
                            <b className="relative">-</b>
                            <b className="relative">26</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-light-grey font-assignment-1-small-title">
                      <div className="w-[365px] relative text-5xl font-semibold text-eventjoy-grayish-black [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        Lakeside Camping at Pawna
                      </div>
                      <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        Adventure Geek - Explore the Unexplored, Mumbai
                      </div>
                      <div className="w-[190px] relative uppercase inline-block">
                        8:30 AM - 7:30 PM
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[9px]">
                        <div className="flex flex-row items-start justify-start gap-[7px]">
                          <img
                            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                            alt=""
                            src="/ionticket.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            INR 1,400
                          </div>
                        </div>
                        <div className="w-[5px] relative rounded-[50%] bg-eventify-light-grey h-[5px]" />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="w-[21px] relative rounded-12xs-5 h-[21px]"
                            alt=""
                            src="/star-1.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            14 interested
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[512px] relative rounded-3xs bg-c6a969 h-[461px] overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image13@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-assignment-1-yellow overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                      <div className="relative font-semibold">{`Cultural & Arts`}</div>
                    </div>
                    <img
                      className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                      alt=""
                      src="/interested-button.svg"
                    />
                  </div>
                  <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-slateblue font-assignment-1-big-title">
                    <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                      <div className="absolute top-[22px] left-[calc(50%_-_28px)] flex flex-col items-center justify-start gap-[6px]">
                        <div className="relative font-semibold">DEC</div>
                        <b className="relative text-7xl text-eventjoy-grayish-black">
                          16
                        </b>
                      </div>
                    </div>
                    <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-light-grey font-assignment-1-small-title">
                      <div className="w-[365px] relative text-5xl font-semibold text-eventjoy-grayish-black [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        Project Earth Exhibition-Christmas and Party Edit
                      </div>
                      <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        World Trade Centre, Mumbai
                      </div>
                      <div className="w-[190px] relative uppercase inline-block">
                        11 AM - 7 PM
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[9px]">
                        <div className="flex flex-row items-start justify-start gap-[7px]">
                          <img
                            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                            alt=""
                            src="/ionticket.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            FREE
                          </div>
                        </div>
                        <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px] hidden" />
                        <div className="hidden flex-row items-center justify-start gap-[4px] text-eventify-dark-grey">
                          <img
                            className="w-[21px] relative rounded-12xs-5 h-[21px]"
                            alt=""
                            src="/star-1.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            10 interested
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[512px] relative rounded-3xs bg-c6a969 h-[461px] overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image14@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-assignment-1-yellow overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                      <div className="relative font-semibold">{`Educational & Business`}</div>
                    </div>
                    <img
                      className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                      alt=""
                      src="/interested-button.svg"
                    />
                  </div>
                  <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-slateblue font-assignment-1-big-title">
                    <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                      <div className="absolute top-[22px] left-[calc(50%_-_28px)] flex flex-col items-center justify-start gap-[6px]">
                        <div className="relative font-semibold">DEC</div>
                        <b className="relative text-7xl text-eventjoy-grayish-black">
                          02
                        </b>
                      </div>
                    </div>
                    <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-light-grey font-assignment-1-small-title">
                      <div className="w-[365px] relative text-5xl font-semibold text-eventjoy-grayish-black [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        Meet the Royal College of Art in Mumbai 2023
                      </div>
                      <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        Sofitel Mumbai BKC, Mumbai
                      </div>
                      <div className="w-[190px] relative uppercase inline-block">
                        10 AM - 5 PM
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[9px]">
                        <div className="flex flex-row items-start justify-start gap-[7px]">
                          <img
                            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                            alt=""
                            src="/ionticket.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            FREE
                          </div>
                        </div>
                        <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px] hidden" />
                        <div className="hidden flex-row items-center justify-start gap-[4px] text-eventify-dark-grey">
                          <img
                            className="w-[21px] relative rounded-12xs-5 h-[21px]"
                            alt=""
                            src="/star-1.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            10 interested
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[512px] relative rounded-3xs bg-c6a969 h-[461px] overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image15@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-assignment-1-yellow overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                      <div className="relative font-semibold">{`Travel & Adventure`}</div>
                    </div>
                    <img
                      className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                      alt=""
                      src="/interested-button.svg"
                    />
                  </div>
                  <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-slateblue font-assignment-1-big-title">
                    <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                      <div className="absolute top-[22px] left-[calc(50%_-_26px)] flex flex-col items-center justify-start gap-[6px]">
                        <div className="relative font-semibold">FEB</div>
                        <b className="relative text-7xl text-eventjoy-grayish-black">
                          14
                        </b>
                      </div>
                    </div>
                    <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-light-grey font-assignment-1-small-title">
                      <div className="w-[365px] relative text-5xl font-semibold text-eventjoy-grayish-black [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        Valentine's Day Sail on a Yacht in Mumbai
                      </div>
                      <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        Mumbai
                      </div>
                      <div className="w-[190px] relative uppercase inline-block">
                        7 aM - 8 PM
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[9px]">
                        <div className="flex flex-row items-start justify-start gap-[7px]">
                          <img
                            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                            alt=""
                            src="/ionticket.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            INR 2,999
                          </div>
                        </div>
                        <div className="w-[5px] relative rounded-[50%] bg-eventify-light-grey h-[5px]" />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="w-[21px] relative rounded-12xs-5 h-[21px]"
                            alt=""
                            src="/star-1.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            160 interested
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[512px] relative rounded-3xs bg-c6a969 h-[461px] overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image16@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-assignment-1-yellow overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                      <div className="relative font-semibold">{`Sports & Fitness`}</div>
                    </div>
                    <img
                      className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                      alt=""
                      src="/interested-button.svg"
                    />
                  </div>
                  <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-slateblue font-assignment-1-big-title">
                    <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                      <div className="absolute top-[22px] left-[calc(50%_-_28px)] flex flex-col items-center justify-start gap-[6px]">
                        <div className="relative font-semibold">DEC</div>
                        <b className="relative text-7xl text-eventjoy-grayish-black">
                          08
                        </b>
                      </div>
                    </div>
                    <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-light-grey font-assignment-1-small-title">
                      <div className="w-[365px] relative text-5xl font-semibold text-eventjoy-grayish-black [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        Cricket Business Meetup
                      </div>
                      <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        Play The Turf, Malad, Mumbai
                      </div>
                      <div className="w-[190px] relative uppercase inline-block">
                        6:30 PM - 9:30 PM
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[9px]">
                        <div className="flex flex-row items-start justify-start gap-[7px]">
                          <img
                            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                            alt=""
                            src="/ionticket.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            INR 399
                          </div>
                        </div>
                        <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px] hidden" />
                        <div className="hidden flex-row items-center justify-start gap-[4px] text-eventify-dark-grey">
                          <img
                            className="w-[21px] relative rounded-12xs-5 h-[21px]"
                            alt=""
                            src="/star-1.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            10 interested
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[512px] relative rounded-3xs bg-c6a969 h-[461px] overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image17@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-assignment-1-yellow overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                      <div className="relative font-semibold">
                        Entertainment
                      </div>
                    </div>
                    <img
                      className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                      alt=""
                      src="/interested-button.svg"
                    />
                  </div>
                  <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-slateblue font-assignment-1-big-title">
                    <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                      <div className="absolute top-[22px] left-[calc(50%_-_29.5px)] flex flex-col items-center justify-start gap-[6px]">
                        <div className="relative font-semibold">NOV</div>
                        <b className="relative text-7xl text-eventjoy-grayish-black">
                          25
                        </b>
                      </div>
                    </div>
                    <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-light-grey font-assignment-1-small-title">
                      <div className="w-[365px] relative text-5xl font-semibold text-eventjoy-grayish-black [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        Voca Loca - Aditya Gadhvi in Vadodara
                      </div>
                      <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        Satyanarayan Lawns, Vadodara
                      </div>
                      <div className="w-[190px] relative uppercase inline-block">
                        6 PM - 10:30 PM
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[9px]">
                        <div className="flex flex-row items-start justify-start gap-[7px]">
                          <img
                            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                            alt=""
                            src="/ionticket.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            INR 450 - 30k
                          </div>
                        </div>
                        <div className="w-[5px] relative rounded-[50%] bg-eventify-light-grey h-[5px]" />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="w-[21px] relative rounded-12xs-5 h-[21px]"
                            alt=""
                            src="/star-1.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            528 interested
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="w-[512px] relative rounded-3xs bg-c6a969 h-[461px] overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image18@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <img
                      className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-assignment-1-yellow overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                      <div className="relative font-semibold">{`Educational & Business`}</div>
                    </div>
                    <img
                      className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                      alt=""
                      src="/interested-button.svg"
                    />
                  </div>
                  <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-slateblue font-assignment-1-big-title">
                    <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                      <div className="absolute top-[22px] left-[calc(50%_-_26px)] flex flex-col items-center justify-start gap-[6px]">
                        <div className="relative font-semibold">JAN</div>
                        <b className="relative text-7xl text-eventjoy-grayish-black">
                          13
                        </b>
                      </div>
                    </div>
                    <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-light-grey font-assignment-1-small-title">
                      <div className="w-[365px] relative text-5xl font-semibold text-eventjoy-grayish-black [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        The Road to Jobs and Internships: Starting with LinkedIn
                        Webinar
                      </div>
                      <div className="w-16 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                        Online
                      </div>
                      <div className="w-[190px] relative uppercase inline-block">
                        6 pM - 7:30 PM
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[9px]">
                        <div className="flex flex-row items-start justify-start gap-[7px]">
                          <img
                            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                            alt=""
                            src="/ionticket.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            INR 49
                          </div>
                        </div>
                        <div className="w-[5px] relative rounded-[50%] bg-eventify-light-grey h-[5px]" />
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="w-[21px] relative rounded-12xs-5 h-[21px]"
                            alt=""
                            src="/star-1.svg"
                          />
                          <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            21 interested
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
      <img
        className="absolute top-[139px] left-[34px] rounded-3xs w-[50px] h-[50px] overflow-hidden"
        alt=""
        src="/back-button.svg"
      /></Link>
      <div className="absolute top-[16px] left-[calc(50%_-_810px)] rounded-31xl bg-c6a9692 w-[1670px] h-[75px] overflow-hidden text-center text-5xl text-eventify-white font-assignment-1-big-title">
        <div className="absolute top-[calc(50%_-_23.5px)] left-[1564px] flex flex-row items-center justify-center py-2.5 px-5">
          <div className="relative font-medium">Login</div>
        </div>
        <div className="absolute top-[calc(50%_-_23.5px)] left-[1359px] flex flex-row items-center justify-center py-2.5 px-5">
          <div className="relative font-medium">Create Event</div>
        </div>
        <div className="absolute top-[calc(50%_-_24px)] left-[1683px] rounded-3xs bg-assignment-1-yellow flex flex-row items-center justify-center py-2.5 px-5 text-[transparent]">
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
        <div className="absolute top-[7px] left-[100px] w-[241px] h-[53.7px] text-left text-29xl font-la-belle-aurore">
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

export default EventPage;
