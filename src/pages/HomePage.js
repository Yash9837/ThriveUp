import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="w-full relative bg-blanchedalmond h-[4902px] overflow-hidden text-left text-21xl text-black font-assignment-1-small-title">
      <b className="absolute top-[713px] left-[150px] font-assignment-1-big-title">
        Explore Categories
      </b>
      <div className="absolute top-[812px] left-[166px] flex flex-row items-start justify-start gap-[40px] text-center text-5xl">
        <div className="flex flex-col items-center justify-start gap-[30px] z-[0]">
          <img
            className="w-[170px] relative rounded-101xl h-[170px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-placeholder@2x.png"
          />
          <b className="w-[236px] relative inline-block">GrooveFest</b>
        </div>
        <div className="flex flex-col items-center justify-start gap-[30px] z-[1]">
          <img
            className="w-[170px] relative rounded-101xl h-[170px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-placeholder@2x.png"
          />
          <b className="w-[236px] relative inline-block">Rave</b>
        </div>
        <img
          className="w-[183.5px] absolute !m-[0] top-[0px] left-[296px] rounded-[82px] h-[170px] object-cover z-[2]"
          alt=""
          src="/download-1@2x.png"
        />
        <div className="flex flex-col items-center justify-start gap-[30px] z-[3]">
          <img
            className="w-[170px] relative rounded-101xl h-[170px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-placeholder@2x.png"
          />
          <b className="w-[236px] relative inline-block">Linkey</b>
        </div>
        <div className="flex flex-col items-center justify-start gap-[30px] z-[4]">
          <img
            className="w-[170px] relative rounded-101xl h-[170px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-placeholder@2x.png"
          />
          <b className="w-[236px] relative inline-block">Varsity</b>
        </div>
        <div className="flex flex-col items-center justify-start gap-[30px] z-[5]">
          <img
            className="w-[170px] relative rounded-101xl h-[170px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-placeholder@2x.png"
          />
          <b className="w-[236px] relative inline-block"> Nextech</b>
        </div>
        <div className="flex flex-col items-center justify-start gap-[30px] z-[6]">
          <img
            className="w-[170px] relative rounded-101xl h-[170px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-placeholder@2x.png"
          />
          <b className="w-[236px] relative inline-block">Mapscapade</b>
        </div>
      </div>
      <div className="absolute top-[0px] left-[-6px] w-[1926px] h-[682px] flex flex-col items-center justify-start pt-[180px] pb-[145px] pr-[231px] pl-[230px] box-border gap-[58px] bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-[top] text-xl text-eventify-dark-grey">
        <div className="w-[1136px] absolute !m-[0] top-[459px] left-[calc(50%_-_569px)] rounded-3xs bg-gray-200 h-20 z-[0]">
          <div className="absolute right-[-1px] bottom-[0px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none h-20 overflow-hidden flex flex-col items-center justify-start">
            <div className="w-[302px] relative bg-dimgray-400 h-0.5 opacity-[0] z-[0]" />
            <div className="flex flex-col items-center justify-end opacity-[0] z-[1]">
              <div className="w-[302px] relative bg-eventify-white box-border h-20 overflow-hidden shrink-0 border-b-[1px] border-solid border-dimgray-500">
                <img
                  className="absolute h-[37.5%] top-[31.25%] bottom-[31.25%] left-[18px] max-h-full w-[30px] overflow-hidden"
                  alt=""
                />
                <b className="absolute top-[calc(50%_-_12px)] left-[61px]">
                  Detect Current Location
                </b>
              </div>
              <div className="w-[302px] relative rounded-t-none rounded-b-3xs bg-eventify-white h-20 overflow-hidden shrink-0">
                <img
                  className="absolute h-[32.5%] top-[33.75%] bottom-[33.75%] left-[20px] max-h-full w-[26px] overflow-hidden"
                  alt=""
                />
                <b className="absolute top-[calc(50%_-_12px)] left-[61px]">
                  Online
                </b>
              </div>
            </div>
            <div className="w-[302px] absolute !m-[0] top-[0px] left-[0px] rounded-tl-none rounded-tr-3xs rounded-b-none bg-eventify-white box-border h-20 overflow-hidden shrink-0 z-[2] text-3xl font-assignment-1-big-title border-l-[1px] border-solid border-dimgray-400">
              <img
                className="absolute h-[37.5%] top-[31.25%] bottom-[31.25%] left-[25px] max-h-full w-[22px] object-cover"
                alt=""
                src="/location-icon@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_14px)] right-[19px] w-[30px] h-[30px] overflow-hidden"
                alt=""
                src="/chevron.svg"
              />
              <b className="absolute top-[calc(50%_-_12px)] left-[62px]">
                CHENNAI
              </b>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-eventify-white w-[834px] h-20 overflow-hidden text-dimgray-500 font-assignment-1-big-title">
            <img
              className="absolute top-[25px] left-[25px] w-[29.8px] h-[30px]"
              alt=""
              src="/search-icon.svg"
            />
            <b className="absolute top-[calc(50%_-_12px)] left-[79px]">
              Search Events, Categories, Location,...
            </b>
            <img
              className="absolute top-[26.2px] left-[771.2px] w-[30px] h-[30px] object-contain opacity-[0]"
              alt=""
              src="/close-button@2x.png"
            />
            <img
              className="absolute top-[26.2px] left-[771.2px] w-[30px] h-[30px] object-contain opacity-[0]"
              alt=""
              src="/close-button@2x.png"
            />
          </div>
        </div>
        <b className="w-[1459px] absolute !m-[0] top-[289px] left-[calc(50%_-_730px)] text-29xl leading-[70px] inline-block font-assignment-1-big-title z-[1] text-eventify-white">
          <p className="m-0">Don’t miss out!</p>
          <p className="m-0">
            <span className="text-eventify-white">{`Explore the `}</span>
            <span className="text-burlywood">vibrant events</span>
            <span> happening locally and globally.</span>
          </p>
        </b>
      </div>
      <div className="absolute top-[1128px] left-[166px] w-[1618px] h-[1273px]">
        <b className="absolute top-[0px] left-[0px] font-assignment-1-big-title">
          Popular Events in Chennai
        </b>
        <div className="absolute top-[180px] left-[0px] w-[1618px] flex flex-row flex-wrap items-start justify-start gap-[41px] text-lg text-eventjoy-grayish-black">
          <div className="rounded-[100px] h-[461px] flex flex-col items-start justify-start">
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-ffffec overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">{`Travel & Adventure`}</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_39px)] flex flex-col items-center justify-start">
                    <div className="flex flex-col items-center justify-start gap-[6px]">
                      <b className="relative">APRIL</b>
                      <div className="flex flex-row items-center justify-center gap-[4px] text-7xl text-assignment-1-dark-bluish-grey">
                        <b className="relative text-eventify-dark-grey">10</b>
                        <b className="w-[11px] relative hidden">-</b>
                        <b className="w-[26px] relative hidden">12</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Visit To Tada Waterfalls
                  </b>
                  <b className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap">
                    Ubbalamudugu Falls, Tirupati 
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    8:30 AM - 7:30 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        INR 2,000
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px]" />
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="w-[21px] relative rounded-12xs-5 h-[21px]"
                        alt=""
                        src="/star-1.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        14 interested
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[512px] h-[461px] flex flex-col items-start justify-start">
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image1@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <Link to="/event-page">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt="/event-page"

                  src="/vector.svg"
                /></Link>
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-ffffec overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                <Link to="/event-page" className='all:unset'> <b className="relative">House Party</b></Link>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_39px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">{`APRIL `}</b>
                    <b className="relative text-7xl text-eventify-dark-grey">
                      15
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    A Night to Remember
                  </b>
                  <b className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap">
                    2174 ,Tower 2, Estancia
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    6:30 PM - 9:30 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        INR 499
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px]" />
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="w-[21px] relative rounded-12xs-5 h-[21px]"
                        alt=""
                        src="/star-1.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        16 interested
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image2@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-ffffec overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">Events</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_28px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">DEC</b>
                    <b className="relative text-7xl text-eventify-dark-grey">
                      03
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Open Mic
                  </b>
                  <b className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap">
                    Ark Bistro, Potheri
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    8pM - 9 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        FREE
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px]" />
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="w-[21px] relative rounded-12xs-5 h-[21px]"
                        alt=""
                        src="/star-1.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        48 interested
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-31xl flex flex-col items-start justify-start">
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image3@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-ffffec overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">{`Sports `}</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_39px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">APRIL</b>
                    <b className="relative text-7xl text-eventify-dark-grey">
                      08
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Futsal Match
                  </b>
                  <b className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap">
                    El Clasico, Potheri, Chennai
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    6:30 PM - 9:30 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        INR 399
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px] hidden" />
                    <div className="hidden flex-row items-center justify-start gap-[4px]">
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
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image4@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-ffffec overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">House Party</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_26px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">FEB</b>
                    <b className="relative text-7xl text-eventify-dark-grey">
                      14
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Bollywood Theme Party
                  </b>
                  <b className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap">
                    2174, Tower 2, Estancia
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    7 pM - 9 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        INR 999
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px]" />
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="w-[21px] relative rounded-12xs-5 h-[21px]"
                        alt=""
                        src="/star-1.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        160 interested
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[512px] h-[461px] flex flex-col items-start justify-start">
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image5@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-ffffec overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">{`Technology & Innovation`}</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_49px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">MARCH</b>
                    <b className="relative text-7xl text-eventify-dark-grey">
                      29
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Mozo Hack
                  </b>
                  <b className="self-stretch relative overflow-hidden text-ellipsis whitespace-nowrap">
                    SRMIST, Chennai
                  </b>
                  <b className="w-[190px] relative uppercase hidden">
                    10 AM - 5 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        FREE
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px] hidden" />
                    <div className="hidden flex-row items-center justify-start gap-[4px]">
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
        </div>
        <div className="absolute top-[79px] left-[0px] flex flex-row items-start justify-start gap-[20px] text-xl text-dimgray-100">
          <div className="rounded-31xl bg-gold-200 flex flex-col items-center justify-center py-[5px] px-4 text-black border-[1px] border-solid border-dimgray-100">
            <b className="relative">All</b>
          </div>
          <div className="rounded-31xl bg-c6a969 flex flex-col items-center justify-center py-[5px] px-4 border-[1px] border-solid border-dimgray-100">
            <b className="relative">Today</b>
          </div>
          <div className="rounded-31xl bg-c6a969 flex flex-col items-center justify-center py-[5px] px-4 border-[1px] border-solid border-dimgray-100">
            <b className="relative">Tomorrow</b>
          </div>
          <div className="rounded-31xl bg-c6a969 flex flex-col items-center justify-center py-[5px] px-4 border-[1px] border-solid border-dimgray-100">
            <b className="relative">This Weekend</b>
          </div>
          <div className="rounded-31xl bg-c6a969 flex flex-col items-center justify-center py-[5px] px-4 border-[1px] border-solid border-dimgray-100">
            <b className="relative">Free</b>
          </div>
        </div>
        <div className="absolute top-[1203px] left-[calc(50%_-_304px)] rounded-21xl bg-c6a969 w-[610px] h-[70px] overflow-hidden text-center text-5xl text-[transparent]">
          <b className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_56px)]">
            See More
          </b>
        </div>
      </div>
      <div className="absolute top-[2831px] left-[152px] w-[1618px] h-[1192px]">
        <b className="absolute top-[0px] left-[0px] font-assignment-1-big-title">
          Discover Best of Online Events
        </b>
        <div className="absolute top-[99px] left-[0px] w-[1618px] flex flex-row flex-wrap items-start justify-start gap-[41px] text-lg text-assignment-1-dark-bluish-grey">
          <div className="w-[512px] h-[461px] flex flex-col items-start justify-start">
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image6@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-21xl bg-c6a969 overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">{`Technology & Innovation`}</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] rounded-[80px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_39px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">APRIL</b>
                    <b className="relative text-7xl text-assignment-1-dark-bluish-grey">
                      05
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] text-assignment-1-dark-bluish-grey overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    How To Ace Hackathon
                  </b>
                  <b className="w-16 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                    Online
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    6 pM - 7:30 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        Free
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px]" />
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="w-[21px] relative rounded-12xs-5 h-[21px]"
                        alt=""
                        src="/star-1.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        21 interested
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image7@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-c6a969 overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">{`Sports & Fitness`}</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_49px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">MARCH</b>
                    <b className="relative text-7xl text-assignment-1-dark-bluish-grey">
                      31
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] text-assignment-1-dark-bluish-grey overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Online Zumba Dance Fitness Class over Zoom
                  </b>
                  <b className="w-16 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                    Online
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    7 pM - 8 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        {" "}
                        INR 200
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px] hidden" />
                    <div className="hidden flex-row items-center justify-start gap-[4px]">
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
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image8@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-c6a969 overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">{`Sports & Game Events`}</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_39px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">APRIL</b>
                    <b className="relative text-7xl text-assignment-1-dark-bluish-grey">
                      09
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] text-assignment-1-dark-bluish-grey overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    BGMI Tournament
                  </b>
                  <b className="w-16 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                    Online
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    4 PM - 5:30 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        100 / Team
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px]" />
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="w-[21px] relative rounded-12xs-5 h-[21px]"
                        alt=""
                        src="/star-1.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        10 interested
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image9@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-c6a969 overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">{`Cultural & Arts`}</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_39px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">APRIL</b>
                    <b className="relative text-7xl text-assignment-1-dark-bluish-grey">
                      14
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] text-assignment-1-dark-bluish-grey overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Voices from the Rome Synod: An evening with Austen Ivereigh
                  </b>
                  <b className="w-16 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                    Online
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    1 PM - 2 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        FREE
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px]" />
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="w-[21px] relative rounded-12xs-5 h-[21px]"
                        alt=""
                        src="/star-1.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        37 interested
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image10@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-c6a969 overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">{`Technology & Innovation`}</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_39px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">APRIL</b>
                    <b className="relative text-7xl text-assignment-1-dark-bluish-grey">
                      20
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] text-assignment-1-dark-bluish-grey overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    HackerX - Zurich (Full-Stack) 11/29 (Virtual)
                  </b>
                  <b className="w-16 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                    Online
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    11:30 AM - 1:30 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        USD 0 - 50
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px]" />
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="w-[21px] relative rounded-12xs-5 h-[21px]"
                        alt=""
                        src="/star-1.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        16 interested
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="w-[512px] relative rounded-31xl bg-c6a969 h-[461px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[512px] h-[254px] overflow-hidden bg-[url('/public/image11@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_61px)] w-[122.4px] h-[90px] hidden"
                  alt=""
                  src="/vector.svg"
                />
                <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-c6a969 overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
                  <b className="relative">{`Sports & Game Events`}</b>
                </div>
                <img
                  className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
                  alt=""
                  src="/interested-button.svg"
                />
              </div>
              <div className="absolute top-[254px] left-[0px] w-[512px] h-[207px] text-center text-5xl text-black font-assignment-1-big-title">
                <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px]">
                  <div className="absolute top-[22px] left-[calc(50%_-_39px)] flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative">APRIL</b>
                    <b className="relative text-7xl text-assignment-1-dark-bluish-grey">
                      07
                    </b>
                  </div>
                </div>
                <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-eventify-dark-grey font-assignment-1-small-title">
                  <b className="w-[365px] relative text-5xl [display:-webkit-inline-box] text-assignment-1-dark-bluish-grey overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Valorant Tournament
                  </b>
                  <b className="w-16 relative inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                    Online
                  </b>
                  <b className="w-[190px] relative uppercase inline-block">
                    10:30 AM - 5 PM
                  </b>
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                        alt=""
                        src="/ionticket.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        200 / Person
                      </b>
                    </div>
                    <div className="w-[5px] relative rounded-[50%] bg-eventify-dark-grey h-[5px]" />
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="w-[21px] relative rounded-12xs-5 h-[21px]"
                        alt=""
                        src="/star-1.svg"
                      />
                      <b className="relative overflow-hidden text-ellipsis whitespace-nowrap">
                        10 interested
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1122px] left-[calc(50%_-_304px)] rounded-21xl bg-c6a969 w-[610px] h-[70px] overflow-hidden text-center text-5xl text-[transparent]">
          <b className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_56px)]">
            See More
          </b>
        </div>
      </div>
      <div className="absolute bottom-[519px] left-[-1px] w-[1920px] h-[315px] overflow-hidden bg-[url('/public/create-event-cta@3x.png')] bg-cover bg-no-repeat bg-[top] text-9xl text-ffffec">
        <b className="absolute top-[173px] left-[calc(50%_-_655px)] leading-[38px] inline-block w-[1148px]">{`Got a show, event, activity or a great experience? Partner with us & get listed on Eventify`}</b>
        <b className="absolute top-[104px] left-[calc(50%_-_655px)] text-21xl inline-block font-assignment-1-big-title w-[894px]">
          Create an event with ThriveUp
        </b>
        <div className="absolute top-[calc(50%_-_39.5px)] left-[1501px] rounded-3xs bg-c6a9692 flex flex-row items-center justify-center py-[18px] px-[38px] gap-[10px] text-center text-13xl text-c6a969">
          <img
            className="w-11 relative h-11 overflow-hidden shrink-0"
            alt=""
            src="/mdieventadd.svg"
          />
          <Link to ='create-event-page-edit'>
          <b className="relative">Create Event</b></Link>
        </div>
      </div>
      <div className="absolute top-[2446px] left-[calc(50%_-_811px)] w-[1620px] h-[340px] overflow-hidden bg-[url('/public/personalized-recommendations@3x.png')] bg-cover bg-no-repeat bg-[top] text-assignment-1-dark-bluish-grey">
        <b className="absolute top-[59px] left-[319px] font-assignment-1-big-title">
          Events specially curated for you!
        </b>
        <b className="absolute top-[128px] left-[319px] text-5xl">
          Get event suggestions tailored to your interests! Don't let your
          favorite events slip away.
        </b>
        <div className="absolute top-[191px] left-[calc(50%_-_157px)] rounded-3xs flex flex-row items-center justify-center py-[18px] px-[38px] gap-[10px] text-center text-13xl text-e52">
          <b className="relative">Get Started</b>
          <img
            className="w-11 relative h-11 overflow-hidden shrink-0"
            alt=""
            src="/mdieventadd.svg"
          />
        </div>
      </div>
      <div className="absolute bottom-[5px] left-[-38px] bg-c6a9692 w-[2020px] h-[482px] overflow-hidden text-5xl text-eventify-dark-bluish-grey font-assignment-1-big-title">
        <div className="absolute top-[50px] left-[866px] flex flex-col items-start justify-start gap-[24px]">
          <b className="relative">Categories</b>
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg text-black font-assignment-1-small-title">
            <div className="flex flex-row items-center justify-center">
              <b className="relative">{`Concerts & Gigs`}</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">{`Festivals & Lifestyle`}</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">{`Business & Networking`}</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">{`Food & Drinks`}</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Performing Arts</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">{`Sports & Outdoors`}</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Exhibitions</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">{`Workshops, Conferences & Classes`}</b>
            </div>
          </div>
        </div>
        <div className="absolute top-[50px] left-[1271px] flex flex-col items-start justify-start gap-[24px]">
          <b className="relative">Follow Us</b>
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg text-black font-assignment-1-small-title">
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Facebook</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Instagram</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Twitter</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Youtube</b>
            </div>
          </div>
        </div>
        <div className="absolute top-[50px] left-[180px] flex flex-col items-start justify-start gap-[24px]">
          <b className="relative">Company Info</b>
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg text-black font-assignment-1-small-title">
            <div className="flex flex-row items-center justify-center">
              <b className="relative">About Us</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Contact Us</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Careers</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">FAQs</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Terms of Service</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Privacy Policy</b>
            </div>
          </div>
        </div>
        <div className="absolute top-[50px] left-[449px] flex flex-col items-start justify-start gap-[24px]">
          <b className="relative">Help</b>
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg text-black font-assignment-1-small-title">
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Account Support</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Listing Events</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">Event Ticketing</b>
            </div>
            <div className="flex flex-row items-center justify-center">
              <b className="relative">{`Ticket Purchase Terms & Conditions`}</b>
            </div>
            <b className="w-[141px] relative hidden font-assignment-1-big-title text-eventify-dark-grey">
              Customer Care
            </b>
          </div>
        </div>
        <div className="absolute top-[50px] left-[1486px] flex flex-col items-start justify-start gap-[24px]">
          <b className="relative">Download The App</b>
          <div className="flex flex-col items-start justify-start gap-[20px] text-lg text-black font-assignment-1-small-title">
            <div className="self-stretch rounded-md flex flex-row items-center justify-start py-3 px-3.5 gap-[20px] border-[1px] border-solid border-black">
              <img
                className="w-12 relative h-12 object-cover"
                alt=""
                src="/icons8googleplay48-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <b className="relative">Get it on</b>
                <b className="relative text-xl">Google Play</b>
              </div>
            </div>
            <div className="rounded-md flex flex-row items-center justify-start py-3 px-3.5 gap-[20px] border-[1px] border-solid border-black">
              <img
                className="w-[50px] relative h-[50px] object-cover"
                alt=""
                src="/icons8apple50-1-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[2px]">
                <b className="relative">Download on the</b>
                <b className="relative text-xl">App Store</b>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-[61px] left-[calc(50%_-_780px)] max-h-full w-[1560px]"
          alt=""
          src="/line-1.svg"
        />
        <div className="absolute bottom-[20px] left-[calc(50%_-_163.5px)] flex flex-row items-center justify-center gap-[2px] text-lg text-black font-assignment-1-small-title">
          <img
            className="w-[17px] relative h-[17px]"
            alt=""
            src="/copyright-icon.svg"
          />
          <b className="relative">2024 ThriveUp. All rights reserved.</b>
        </div>
      </div>
      <div className="absolute top-[36px] left-[calc(50%_-_851px)] rounded-31xl bg-c6a9692 w-[1673px] h-[75px] overflow-hidden text-center text-5xl text-eventjoy-grayish-black font-assignment-1-big-title">
        <div className="absolute top-[calc(50%_-_23.5px)] left-[1564px] flex flex-row items-center justify-center py-2.5 px-5">
          <b className="relative">Login</b>
        </div>
        <div className="absolute top-[calc(50%_-_23.5px)] left-[1359px] flex flex-row items-center justify-center py-2.5 px-5">
        <Link to ='create-event-page-edit'>
          <b className="relative">Create Event</b></Link>
        </div>
        <div className="absolute top-[calc(50%_-_24px)] left-[1683px] rounded-3xs bg-assignment-1-yellow flex flex-row items-center justify-center py-2.5 px-5 text-[transparent]">
          <b className="relative">Sign Up</b>
        </div>
        <div className="absolute top-[15px] left-[713px] h-[60px] flex flex-row items-start justify-start gap-[26px]">
          <div className="flex flex-row items-start justify-center p-2.5 z-[0]">
            <b className="relative">Home</b>
          </div>
          <div className="flex flex-row items-start justify-center py-2.5 px-[10.5px] z-[1]">
            <b className="relative">Events</b>
          </div>
          <div className="flex flex-row items-start justify-center py-2.5 px-[10.5px] z-[2]">
            <b className="relative">About</b>
          </div>
          <div className="flex flex-row items-start justify-center py-2.5 px-[10.5px] z-[3]">
            <b className="relative">Contact</b>
          </div>
          <div className="w-[76px] absolute !m-[0] top-[54px] left-[10px] bg-gray-100 h-1.5 z-[4]" />
        </div>
        <div className="absolute top-[7px] left-[100px] w-[241px] h-[53.7px] text-left text-29xl text-gray-300 font-la-belle-aurore">
          <div className="absolute  left-[120px]">
            ThriveUp
          </div>
          <div className="absolute top-[9.3px] left-[0px] w-[65.3px] h-[44.9px] [transform:_rotate(-8.2deg)] [transform-origin:0_0]" />
        </div>
      </div>
      <img
        className="absolute top-[43px] left-[207px] w-12 h-[61px] object-cover"
        alt=""
        src="/logo-1@2x.png"
      />
    </div>
  );
};

export default HomePage;
