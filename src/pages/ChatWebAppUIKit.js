import { Link } from "react-router-dom";

const ChatWebAppUIKit = () => {
  return (
    <div className="w-full relative bg-eventify-white h-[1023px] overflow-hidden flex flex-row items-start justify-start text-left text-xl text-eventify-dark-navy-blue font-inter">
      <div className="w-[88px] bg-c6a969 shadow-[0px_0px_24px_rgba(0,_0,_0,_0.08)] h-[1018px] overflow-hidden shrink-0 flex flex-col items-center justify-between pt-4 px-4 pb-6 box-border text-[21px] text-lightslategray font-asap">
        <div className="flex flex-col items-center justify-center gap-[48px]">
          <div className="w-14 rounded-[14px] bg-c6a9692 h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center">
            <Link to='/'>
            <b className="w-[15.8px] relative leading-[150%] inline-block h-[31.5px] shrink-0">
              H
            </b></Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-[32px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
          </div>
        </div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/iconsax.svg"
        />
      </div>
      <div className="w-[349px] bg-c6a9692 shadow-[1px_0px_0px_rgba(0,_0,_0,_0.08)] h-[1024px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[349px] flex flex-row items-center justify-between p-6 box-border">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <div className="relative leading-[150%] font-semibold">
                  Messages
                </div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/iconsax.svg"
                />
              </div>
              <div className="rounded-3xl bg-c6a969 flex flex-col items-start justify-start py-0.5 px-2 text-xs">
                <div className="relative leading-[150%] font-semibold">12</div>
              </div>
            </div>
            <img
              className="w-10 relative h-10 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
          </div>
          <div className="w-[349px] relative bg-eventify-dark-navy-blue h-px opacity-[0.08]" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-sm">
          <div className="self-stretch flex flex-col items-start justify-start py-3 px-6">
            <div className="self-stretch rounded-xl bg-lightgray h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-5 box-border gap-[10px]">
              <div className="relative opacity-[0.4]">search</div>
              <div className="relative leading-[150%] text-eventify-dark-bluish-grey opacity-[0.4]">
                Search messages
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 gap-[8px]">
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
              <img
                className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Elmer Laverty
                    </div>
                    <div className="relative leading-[150%] font-semibold opacity-[0.3]">
                      12m
                    </div>
                  </div>
                  <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-400">
                    Haha oh man 🔥
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                  <div className="rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2">
                    <div className="relative leading-[150%] font-semibold">
                      Question
                    </div>
                  </div>
                  <div className="rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 text-green-green600">
                    <div className="relative leading-[150%] font-semibold">
                      Help wanted
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-mediumslateblue overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
              <img
                className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Florencio Dorrance
                    </div>
                    <div className="relative leading-[150%] font-semibold opacity-[0.3]">
                      24m
                    </div>
                  </div>
                  <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-400">
                    woohoooo
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                  <div className="rounded-xl bg-orange-orange200 hidden flex-row items-start justify-start py-0.5 px-2">
                    <div className="relative leading-[150%] font-semibold">
                      Question
                    </div>
                  </div>
                  <div className="rounded-xl flex flex-row items-start justify-start py-0.5 px-2 text-gray-gray600 border-[1px] border-solid border-eventjoy-grayish-black">
                    <div className="relative leading-[150%] font-semibold">
                      Some content
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
              <img
                className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Lavern Laboy
                    </div>
                    <div className="relative leading-[150%] font-semibold opacity-[0.3]">
                      1h
                    </div>
                  </div>
                  <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-400">
                    Haha that's terrifying 😂
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                  <div className="rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2">
                    <div className="relative leading-[150%] font-semibold">
                      Bug
                    </div>
                  </div>
                  <div className="rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 text-green-green600">
                    <div className="relative leading-[150%] font-semibold">
                      Hacktoberfest
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
              <img
                className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Titus Kitamura
                    </div>
                    <div className="relative leading-[150%] font-semibold opacity-[0.3]">
                      5h
                    </div>
                  </div>
                  <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-400">
                    omg, this is amazing
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                  <div className="rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2">
                    <div className="relative leading-[150%] font-semibold">
                      Question
                    </div>
                  </div>
                  <div className="rounded-xl flex flex-row items-start justify-start py-0.5 px-2 text-gray-gray600 border-[1px] border-solid border-eventjoy-grayish-black">
                    <div className="relative leading-[150%] font-semibold">
                      Some content
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
              <img
                className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Geoffrey Mott
                    </div>
                    <div className="relative leading-[150%] font-semibold opacity-[0.3]">
                      2d
                    </div>
                  </div>
                  <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-400">
                    aww 😍
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                  <div className="rounded-xl bg-orange-orange200 hidden flex-row items-start justify-start py-0.5 px-2">
                    <div className="relative leading-[150%] font-semibold">
                      Request
                    </div>
                  </div>
                  <div className="rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 text-green-green600">
                    <div className="relative leading-[150%] font-semibold">
                      Request
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
              <img
                className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Alfonzo Schuessler
                    </div>
                    <div className="relative leading-[150%] font-semibold opacity-[0.3]">
                      1m
                    </div>
                  </div>
                  <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-400">
                    perfect!
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-gray-gray600">
                  <div className="rounded-xl hidden flex-row items-start justify-start py-0.5 px-2 border-[1px] border-solid border-gray-gray400">
                    <div className="relative leading-[150%] font-semibold">
                      Some content
                    </div>
                  </div>
                  <div className="rounded-xl flex flex-row items-start justify-start py-0.5 px-2 border-[1px] border-solid border-eventjoy-grayish-black">
                    <div className="relative leading-[150%] font-semibold">
                      Follow up
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[640px] bg-c6a969 h-[1024px] overflow-hidden shrink-0 flex flex-col items-start justify-between">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[640px] h-20 flex flex-row items-center justify-between p-6 box-border">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="w-10 relative rounded-3xs h-10 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[125%] font-semibold">
                  Florencio Dorrance
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px] text-xs text-black">
                  <div className="w-2.5 relative rounded-[50%] bg-green-green400 h-2.5" />
                  <div className="relative leading-[150%] font-semibold opacity-[0.6]">
                    Online
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-eventify-dark-navy-blue flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] text-[16px] text-silver-100">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxboldcall.svg"
              />
              <div className="relative leading-[125%] font-semibold">Call</div>
            </div>
          </div>
          <div className="w-[640px] relative bg-black h-px opacity-[0.08]" />
          <div className="w-[640px] flex flex-col items-start justify-start p-6 box-border gap-[32px] text-sm text-black">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <img
                className="w-10 relative rounded-[8.33px] h-10 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="rounded-xl bg-gainsboro-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">
                    omg, this is amazing
                  </div>
                </div>
                <div className="rounded-xl bg-gainsboro-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">perfect! ✅</div>
                </div>
                <div className="rounded-xl bg-gainsboro-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">
                    Wow, this is really epic
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end gap-[16px] text-eventjoy-grayish-black">
              <div className="flex flex-col items-start justify-start">
                <div className="rounded-xl bg-silver-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">How are you?</div>
                </div>
              </div>
              <img
                className="w-10 relative rounded-[8.33px] h-10 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <img
                className="w-10 relative rounded-[8.33px] h-10 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="rounded-xl bg-gainsboro-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">
                    just ideas for next time
                  </div>
                </div>
                <div className="rounded-xl bg-gainsboro-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">
                    I'll be there in 2 mins ⏰
                  </div>
                </div>
                <div className="rounded-xl bg-whitesmoke-200 hidden flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">
                    Message content goes here
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end gap-[16px] text-eventjoy-grayish-black">
              <div className="flex flex-col items-end justify-start gap-[10px]">
                <div className="rounded-xl bg-silver-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">woohoooo</div>
                </div>
                <div className="rounded-xl bg-silver-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">Haha oh man</div>
                </div>
                <div className="rounded-xl bg-silver-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">
                    Haha that's terrifying 😂
                  </div>
                </div>
              </div>
              <img
                className="w-10 relative rounded-[8.33px] h-10 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <img
                className="w-10 relative rounded-[8.33px] h-10 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame-10@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="rounded-xl bg-gainsboro-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">aww</div>
                </div>
                <div className="rounded-xl bg-gainsboro-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">
                    omg, this is amazing
                  </div>
                </div>
                <div className="rounded-xl bg-gainsboro-100 flex flex-row items-start justify-start py-2 px-4">
                  <div className="relative leading-[150%]">woohoooo 🔥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start p-6 gap-[24px] text-sm">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/iconsax.svg"
          />
          <div className="flex-1 rounded-xl bg-eventjoy-grayish-black box-border h-12 overflow-hidden flex flex-row items-center justify-between py-2.5 px-5 border-[2px] border-solid border-gray-gray300">
            <div className="relative leading-[150%] opacity-[0.4]">
              Type a message
            </div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch w-px relative bg-gray-500" />
      <div className="flex-1 bg-c6a9692 shadow-[1px_0px_0px_rgba(0,_0,_0,_0.08)] h-[1024px] overflow-hidden flex flex-col items-start justify-start gap-[24px] text-sm text-eventify-white">
        <div className="self-stretch flex flex-col items-start justify-start text-xl">
          <div className="self-stretch h-20 flex flex-row items-center justify-between p-6 box-border">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <div className="relative leading-[150%] font-semibold">
                  Directory
                </div>
                <div className="w-[85px] relative text-[15px] text-black hidden">
                  angle-down
                </div>
              </div>
              <div className="rounded-3xl bg-gray-gray200 hidden flex-col items-start justify-start py-0.5 px-2 text-xs text-black">
                <div className="relative leading-[150%] font-semibold">6</div>
              </div>
            </div>
            <div className="w-10 h-10 flex flex-col items-center justify-end py-0 pr-0 pl-10 box-border">
              <img
                className="w-10 relative h-10 overflow-hidden shrink-0 object-contain"
                alt=""
                src="/iconsaxboldmorecircle@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[3px] mt-[-22px]">
                <div className="w-1 relative rounded-[50%] bg-primary h-1" />
                <div className="w-1 relative rounded-[50%] bg-primary h-1" />
                <div className="w-1 relative rounded-[50%] bg-primary h-1" />
              </div>
            </div>
          </div>
          <div className="self-stretch relative bg-black h-px opacity-[0.08]" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 gap-[8px]">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="relative leading-[150%] font-semibold">
              Event Members
            </div>
            <div className="rounded-3xl bg-gray-gray200 flex flex-col items-start justify-start py-0.5 px-2 text-xs">
              <div className="relative leading-[150%] font-semibold">6</div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
            <img
              className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-10@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Florencio Dorrance
                  </div>
                  <div className="w-7 relative leading-[150%] font-semibold text-black hidden opacity-[0.3]">
                    12m
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-600">
                  
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                <div className="rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2">
                  <div className="relative leading-[150%] font-semibold">
                    Question
                  </div>
                </div>
                <div className="rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 text-green-green600">
                  <div className="relative leading-[150%] font-semibold">
                    Help wanted
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
            <img
              className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-10@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Benny Spanbauer
                  </div>
                  <div className="w-[31px] relative leading-[150%] font-semibold text-black hidden opacity-[0.3]">
                    24m
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-600">
                  
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                <div className="rounded-xl bg-orange-orange200 hidden flex-row items-start justify-start py-0.5 px-2">
                  <div className="relative leading-[150%] font-semibold">
                    Question
                  </div>
                </div>
                <div className="rounded-xl flex flex-row items-start justify-start py-0.5 px-2 text-gray-gray600 border-[1px] border-solid border-gray-gray400">
                  <div className="relative leading-[150%] font-semibold">
                    Some content
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
            <img
              className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-10@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Jamel Eusebio
                  </div>
                  <div className="w-4 relative leading-[150%] font-semibold text-black hidden opacity-[0.3]">
                    1h
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-600">
                
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                <div className="rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2">
                  <div className="relative leading-[150%] font-semibold">
                    Bug
                  </div>
                </div>
                <div className="rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 text-green-green600">
                  <div className="relative leading-[150%] font-semibold">
                    Hacktoberfest
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
            <img
              className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-10@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Lavern Laboy
                  </div>
                  <div className="w-[18px] relative leading-[150%] font-semibold text-black hidden opacity-[0.3]">
                    5h
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-600">
                  
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                <div className="rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2">
                  <div className="relative leading-[150%] font-semibold">
                    Question
                  </div>
                </div>
                <div className="rounded-xl flex flex-row items-start justify-start py-0.5 px-2 text-gray-gray600 border-[1px] border-solid border-gray-gray400">
                  <div className="relative leading-[150%] font-semibold">
                    Some content
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
            <img
              className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-10@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Alfonzo Schuessler
                  </div>
                  <div className="w-[18px] relative leading-[150%] font-semibold text-black hidden opacity-[0.3]">
                    2d
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-600">
                  
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                <div className="rounded-xl bg-orange-orange200 hidden flex-row items-start justify-start py-0.5 px-2">
                  <div className="relative leading-[150%] font-semibold">
                    Request
                  </div>
                </div>
                <div className="rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 text-green-green600">
                  <div className="relative leading-[150%] font-semibold">
                    Request
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
            <img
              className="w-12 relative rounded-xl h-12 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-10@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Daryl Nehls
                  </div>
                  <div className="w-5 relative leading-[150%] font-semibold text-black hidden opacity-[0.3]">
                    1m
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[150%] font-semibold text-gray-600">
                  
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-xs text-gray-gray600">
                <div className="rounded-xl hidden flex-row items-start justify-start py-0.5 px-2 border-[1px] border-solid border-gray-gray400">
                  <div className="relative leading-[150%] font-semibold">
                    Some content
                  </div>
                </div>
                <div className="rounded-xl flex flex-row items-start justify-start py-0.5 px-2 border-[1px] border-solid border-gray-gray400">
                  <div className="relative leading-[150%] font-semibold">
                    Follow up
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative bg-gray-500 h-px" />
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 gap-[8px]">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="relative leading-[150%] font-semibold">Files</div>
            <div className="rounded-3xl bg-gray-gray200 flex flex-col items-start justify-start py-0.5 px-2 text-xs">
              <div className="relative leading-[150%] font-semibold">125</div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-3 gap-[16px]">
            <div className="w-12 rounded-xl bg-red-red100 h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center p-[17px] box-border">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearclipboardtext.svg"
              />
            </div>
            
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-3 gap-[16px]">
            <div className="w-12 rounded-xl bg-green-green100 h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center p-[17px] box-border">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlineargallery.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Screenshot-3817.png
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px] text-xs text-gray-600">
                  <div className="relative leading-[150%] font-semibold">
                    PNG
                  </div>
                  <div className="relative leading-[150%] font-semibold">
                    4mb
                  </div>
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                <div className="rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2">
                  <div className="relative leading-[150%] font-semibold">
                    Question
                  </div>
                </div>
                <div className="rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 text-green-green600">
                  <div className="relative leading-[150%] font-semibold">
                    Help wanted
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-3 gap-[16px]">
            <div className="w-12 rounded-xl bg-blue-blue100 h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center p-[17px] box-border">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlineardocumenttext.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    sharefile.docx
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px] text-xs text-gray-600">
                  <div className="relative leading-[150%] font-semibold">
                    DOC
                  </div>
                  <div className="relative leading-[150%] font-semibold">
                    555kb
                  </div>
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                <div className="rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2">
                  <div className="relative leading-[150%] font-semibold">
                    Question
                  </div>
                </div>
                <div className="rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 text-green-green600">
                  <div className="relative leading-[150%] font-semibold">
                    Help wanted
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-3 gap-[16px]">
            <div className="w-12 rounded-xl bg-purple-purple100 h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center p-[17px] box-border">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlineardocumentcode.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Jerry-2020_I-9_Form.xxl
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px] text-xs text-gray-600">
                  <div className="relative leading-[150%] font-semibold">
                    XXL
                  </div>
                  <div className="relative leading-[150%] font-semibold">
                    24mb
                  </div>
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                <div className="rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2">
                  <div className="relative leading-[150%] font-semibold">
                    Question
                  </div>
                </div>
                <div className="rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 text-green-green600">
                  <div className="relative leading-[150%] font-semibold">
                    Help wanted
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-3 gap-[16px]">
            <div className="w-12 rounded-xl bg-red-red100 h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center p-[17px] box-border">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsaxlinearclipboardtext.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    i9.pdf
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px] text-xs text-gray-600">
                  <div className="relative leading-[150%] font-semibold">
                    PDF
                  </div>
                  <div className="relative leading-[150%] font-semibold">
                    9mb
                  </div>
                </div>
              </div>
              <div className="hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600">
                <div className="rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2">
                  <div className="relative leading-[150%] font-semibold">
                    Question
                  </div>
                </div>
                <div className="rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 text-green-green600">
                  <div className="relative leading-[150%] font-semibold">
                    Help wanted
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconsax.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWebAppUIKit;
