export const ProfileInfo = (): JSX.Element => {
  const whatHappensNext = [
    {
      icon: "https://c.animaapp.com/dfAjLHjj/img/chats.svg",
      iconAlt: "Chats",
      title: "We stay in touch",
      description:
        "You'll get updates via e–mail — with launch details and everything you need to get started",
    },
    {
      icon: "https://c.animaapp.com/dfAjLHjj/img/crownsimple.svg",
      iconAlt: "Crown simple",
      title: "You go first",
      description:
        "When we launch, early access members get priority. No waiting",
    },
    {
      icon: "https://c.animaapp.com/dfAjLHjj/img/gift.svg",
      iconAlt: "Gift",
      title: "Your benefits are reserved",
      description:
        "All selected benefits are saved for you — ready when you are",
    },
  ];

  const benefits = [
    "No interest on your first loan for 3 months",
    "Business loans without ceiling",
    "Free POS terminal",
  ];

  const profileFields = [
    { label: "Phone number", value: "+234 888 9999 000" },
    { label: "E–mail", value: "adewale@okonkwo.com" },
    { label: "BVN", value: "12345678901" },
    { label: "RC number", value: "RC 0000000" },
  ];

  return (
    <div
      className="relative w-[360px] h-[800px] bg-[#040c24] overflow-hidden"
      data-model-id="417:8418"
    >
      <header className="flex w-full items-center justify-between pl-5 pr-2 py-5 absolute top-24 left-0 bg-deepblue-140">
        <div className="relative w-28 h-7">
          <img
            className="absolute w-[73.68%] h-[92.14%] top-[7.86%] left-[26.32%]"
            alt="Group"
            src="https://c.animaapp.com/dfAjLHjj/img/group@2x.png"
          />
          <img
            className="absolute w-[73.55%] h-[51.94%] top-[48.06%] left-[26.45%]"
            alt="Group"
            src="https://c.animaapp.com/dfAjLHjj/img/group-1@2x.png"
          />
          <img
            className="absolute w-full h-[92.86%] top-[7.14%] left-0"
            alt="Group"
            src="https://c.animaapp.com/dfAjLHjj/img/group-2@2x.png"
          />
        </div>

        <div className="w-11 h-11 items-center justify-center gap-1 aspect-[1] flex relative">
          <img
            className="relative w-6 h-6 aspect-[1]"
            alt="User"
            src="https://c.animaapp.com/dfAjLHjj/img/user.svg"
          />
        </div>
      </header>

      <div className="flex flex-col w-full items-start pt-0 pb-6 px-5 absolute top-[180px] left-0 bg-deepblue-140 rounded-[0px_0px_24px_24px]">
        <div className="relative self-stretch w-full h-3" />

        <img
          className="relative w-[125px] h-[120px] aspect-[1.04]"
          alt="Party popper"
          src="https://c.animaapp.com/dfAjLHjj/img/party-popper-2.svg"
        />

        <div className="h-9 relative self-stretch w-full" />

        <div className="flex-col items-start pt-2 pb-7 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] font-header-1 font-[number:var(--header-1-font-weight)] text-[#ffffff] text-[length:var(--header-1-font-size)] tracking-[var(--header-1-letter-spacing)] leading-[var(--header-1-line-height)] [font-style:var(--header-1-font-style)]">
            Welcome to our first wave of customers!
          </p>
        </div>

        <div className="items-center justify-around gap-[146px] px-0.5 py-0 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
            What happens next
          </div>
        </div>

        <div className="h-2 relative self-stretch w-full" />

        {whatHappensNext.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
          >
            <img
              className="relative w-6 h-6 aspect-[1]"
              alt={item.iconAlt}
              src={item.icon}
            />
            <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
              <div className="flex items-center gap-2.5 pt-0.5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-[#ffffff] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                  {item.title}
                </div>
              </div>
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex-1 mt-[-1.00px] font-caption-m-medium font-[number:var(--caption-m-medium-font-weight)] text-gray-70 text-[length:var(--caption-m-medium-font-size)] tracking-[var(--caption-m-medium-letter-spacing)] leading-[var(--caption-m-medium-line-height)] [font-style:var(--caption-m-medium-font-style)]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="h-6 relative self-stretch w-full" />

        <div className="items-center justify-around gap-[146px] px-0.5 py-0 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
            Your benefits
          </div>
        </div>

        <div className="h-1 relative self-stretch w-full" />

        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-2 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
          >
            <div className="flex-col h-[22px] items-center justify-center flex-[0_0_auto] inline-flex gap-2.5 relative">
              <div className="relative w-4 h-0.5 bg-[#ffffff]" />
            </div>
            <div className="flex flex-col items-start justify-center gap-0.5 relative flex-1 grow">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-[#ffffff] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                  {benefit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute w-full h-[calc(100%_-_96px)] top-24 left-0 bg-[#000000cc]" />

      <div className="flex flex-col w-full items-start absolute left-0 bottom-0 bg-[#040c24] rounded-[24px_24px_0px_0px] overflow-hidden">
        <div className="flex items-center justify-between pl-5 pr-4 pt-5 pb-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-around gap-[146px] px-0.5 py-0 relative flex-1 grow">
            <div className="relative flex-1 mt-[-1.00px] font-header-3 font-[number:var(--header-3-font-weight)] text-[#ffffff] text-[length:var(--header-3-font-size)] tracking-[var(--header-3-letter-spacing)] leading-[var(--header-3-line-height)] [font-style:var(--header-3-font-style)]">
              Adewale Okonkwo
            </div>
          </div>

          <div className="flex w-8 h-8 items-center justify-center gap-1 relative aspect-[1]">
            <img
              className="relative w-6 h-6 aspect-[1]"
              alt="X"
              src="https://c.animaapp.com/dfAjLHjj/img/x.svg"
            />
          </div>
        </div>

        <div className="flex flex-col items-start px-5 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="h-4 relative self-stretch w-full" />

          {profileFields.map((field, index) => (
            <div key={index} className="relative self-stretch w-full">
              <div className="flex flex-col items-start justify-center gap-0.5 pl-0.5 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-caption-m-medium font-[number:var(--caption-m-medium-font-weight)] text-gray-70 text-[length:var(--caption-m-medium-font-size)] tracking-[var(--caption-m-medium-letter-spacing)] leading-[var(--caption-m-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--caption-m-medium-font-style)]">
                    {field.label}
                  </div>
                </div>
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-[#ffffff] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-medium-font-style)]">
                    {field.value}
                  </div>
                </div>
              </div>
              {index < profileFields.length - 1 && (
                <div className="relative self-stretch w-full h-3" />
              )}
            </div>
          ))}

          <div className="h-7 relative self-stretch w-full" />
        </div>

        <div className="flex-col items-start pt-0 pb-4 px-5 self-stretch w-full flex-[0_0_auto] flex relative">
          <button className="flex h-[52px] items-center justify-center gap-1 px-5 py-2 relative self-stretch w-full bg-[#ffffff] rounded-[14px] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
            <div className="items-center justify-center pt-0 pb-0.5 px-0 flex-[0_0_auto] inline-flex gap-2.5 relative">
              <div className="relative w-fit mt-[-1.00px] font-body-bold font-[number:var(--body-bold-font-weight)] text-[#000000] text-[length:var(--body-bold-font-size)] text-center tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                Log out
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="fixed w-full top-0 left-0 h-24 bg-white shadow-[0px_1px_4px_#00000033]">
        <div className="absolute w-full h-full top-0 left-0 bg-white" />

        <img
          className="absolute top-[59px] left-3 w-[21px] h-[22px]"
          alt="Home"
          src="https://c.animaapp.com/dfAjLHjj/img/home.svg"
        />

        <div className="absolute top-[52px] left-[45px] w-[228px] h-9 flex items-center bg-androidchromeaddress-field-background-light rounded-[18px] overflow-hidden">
          <div className="h-[13px] ml-[13px] w-[186px] items-start inline-flex gap-2.5 relative">
            <img
              className="relative w-2.5 h-[13px]"
              alt="Vector"
              src="https://c.animaapp.com/dfAjLHjj/img/vector.svg"
            />
            <div className="relative flex items-center w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[13px] whitespace-nowrap">
              renmoney/business.com
            </div>
          </div>
        </div>

        <img
          className="absolute w-[20.28%] top-[calc(50.00%_+_11px)] left-[79.72%] h-[22px]"
          alt="Chrome tabs"
          src="https://c.animaapp.com/dfAjLHjj/img/chrome-tabs.svg"
        />

        <img
          className="absolute top-[58px] left-[323px] w-6 h-6"
          alt="More"
          src="https://c.animaapp.com/dfAjLHjj/img/more.svg"
        />

        <div className="absolute top-4 left-0 w-[360px] h-6 flex">
          <div className="mt-1 w-[42px] ml-3.5 flex opacity-90">
            <div className="flex items-end w-10 h-4 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-androidtext-secondary text-[13px] tracking-[0] leading-[normal]">
              10:00
            </div>
          </div>

          <img
            className="ml-[242px] mt-[5px] w-3.5 h-3.5"
            alt="Signal cellular"
            src="https://c.animaapp.com/dfAjLHjj/img/signal-cellular.svg"
          />

          <img
            className="ml-1 mt-[5px] w-3.5 h-3.5"
            alt="Signal wifi"
            src="https://c.animaapp.com/dfAjLHjj/img/signal-wifi.svg"
          />

          <img
            className="mt-[5px] w-3.5 h-3.5 ml-0.5"
            alt="Battery full"
            src="https://c.animaapp.com/dfAjLHjj/img/battery-full.svg"
          />
        </div>
      </div>
    </div>
  );
};
