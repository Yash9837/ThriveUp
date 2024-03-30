const SignInPage = () => {
  return (
    <div className="w-full relative bg-c6a969 h-[1080px] overflow-hidden flex flex-row items-start justify-start gap-[77px] text-left text-[42px] text-assignment-1-yellow font-lalezar">
      <div className="w-[659px] h-[556px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
        <div className="w-[659px] h-[526px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[128px]">
          <div className="w-[215.6px] h-12 flex flex-row items-center justify-start pt-[8.3px] px-0 pb-0 box-border">
            <img
              className="w-[63.5px] relative h-12 object-contain"
              alt=""
              src="/ticket@2x.png"
            />
            <div className="w-[152px] relative inline-block h-[24.1px] shrink-0">
              ThiveUp
            </div>
          </div>
          <div className="w-[659px] overflow-hidden flex flex-col items-end justify-center text-29xl text-eventjoy-grayish-black font-assignment-1-big-title">
            <b className="w-[619px] relative leading-[70px] inline-block">
              <p className="m-0">Discover tailored events.</p>
              <p className="m-0">
                Sign in for personalized recommendations today!
              </p>
            </b>
          </div>
        </div>
      </div>
      <div className="w-[1154px] rounded-tl-51xl rounded-tr-none rounded-br-none rounded-bl-51xl bg-eventify-white h-[1080px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[50.2px] px-[202px] box-border gap-[60px] text-29xl text-assignment-1-dark-bluish-grey font-assignment-1-big-title">
        <div className="w-[901.3px] h-[109.8px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[27.1px] px-0 box-border gap-[705px]">
          <div className="w-[142px] h-[82.7px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
            <b className="relative">Login</b>
          </div>
          <img
            className="w-[38.3px] relative h-[11.2px] overflow-hidden shrink-0"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className="h-[759px] flex flex-col items-center justify-start gap-[50px] text-center text-xl font-assignment-1-small-title">
          <div className="flex flex-row items-start justify-start gap-[58px]">
            <div className="w-[346px] relative rounded-3xs bg-eventify-white box-border h-[74px] overflow-hidden shrink-0 border-[1px] border-solid border-darkgray-300">
              <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_108px)] flex flex-row items-center justify-center gap-[14px]">
                <img
                  className="w-9 relative h-9 overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
                <div className="relative">Login with Google</div>
              </div>
            </div>
            <div className="w-[346px] relative rounded-3xs bg-eventify-white box-border h-[74px] overflow-hidden shrink-0 border-[1px] border-solid border-darkgray-300">
              <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_120px)] flex flex-row items-center justify-center gap-[14px]">
                <img
                  className="w-9 relative h-9 overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
                <div className="relative">Login with Facebook</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[18px] text-5xl text-darkgray-300">
            <img
              className="w-[332px] relative max-h-full"
              alt=""
              src="/line-12.svg"
            />
            <div className="relative">OR</div>
            <img
              className="w-[332px] relative max-h-full"
              alt=""
              src="/line-12.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] text-left text-dimgray-200">
            <div className="flex flex-col items-start justify-start gap-[40px]">
              <div className="flex flex-col items-start justify-start gap-[30px]">
                <div className="flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative">E-mail Address</div>
                  <div className="w-[750px] relative rounded-3xs bg-eventify-white box-border h-[74px] overflow-hidden shrink-0 text-lgi text-darkgray-100 border-[1px] border-solid border-gray-700">
                    <div className="absolute top-[calc(50%_-_13px)] left-[26px] inline-block w-[236px]">
                      Enter your e-mail
                    </div>
                  </div>
                </div>
                <div className="w-[750px] relative h-[107px] text-lgi text-darkgray-100">
                  <div className="absolute top-[33px] left-[calc(50%_-_375px)] rounded-3xs bg-eventify-white box-border w-[750px] h-[74px] overflow-hidden border-[1px] border-solid border-gray-700">
                    <div className="absolute top-[calc(50%_-_13px)] left-[26px] inline-block w-[236px]">
                      Enter password
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_17px)] left-[690px] w-[34px] h-[34px] overflow-hidden"
                      alt=""
                      src="/visible-icon.svg"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-xl text-dimgray-200">
                    Password
                  </div>
                </div>
              </div>
              <div className="w-[750px] relative rounded-3xs h-[74px] overflow-hidden shrink-0 text-center text-5xl text-eventify-white">
                <b className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_33px)]">
                  Login
                </b>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[2px]">
              <div className="relative">Don’t have an account?</div>
              <div className="flex flex-row items-center justify-center py-0 px-2.5 text-assignment-1-dark-bluish-grey">
                <div className="relative">Sign up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
