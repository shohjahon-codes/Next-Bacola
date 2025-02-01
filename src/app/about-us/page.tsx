import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <section>
        <div className="relative pt-5">
          <Image
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/about-header.jpg"
            alt="About Us Header Image"
            width={1400}
            height={300}
            className="w-full"
          />
          <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-[26px] font-bold mb-2 md:text-[36px] lg:text-[50px] xl:text-[70px]">
              About for Bacola
            </h1>
            <p className="text-[18px] font-normal md:text-[18px] lg:text-[22px] xl:text-[26px]">
              WE CAN DO MORE FOR YOU
            </p>
          </div>
        </div>
        <p className="container mx-auto text-[14px] font-normal pt-10">
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut
          libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
          consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus
          rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
          dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
          Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque
          efficitur elit ante, vel vulputate tortor blandit nec.
        </p>
      </section>

      <section>
        <div className="container mx-auto pt-10 pb-20">
          <div className="flex flex-col gap-10 w-full">
            <h1 className="text-[36px] text-[#202435] font-bold font-Inter lg:w-[70%] xl:w-[60%] xl:pl-10">
              Quisque erat urna, congue et libero in eleifend euismod velit.
            </h1>
            <p className=" text-[#202435] text-[14px] font-normal font-Inter xl:pl-10">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut
              libero commodo iaculis. Donec augue diam, tristique et ultricies
              nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus
              id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum
              metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
              interdum turpis. Curabitur porta auctor quam, pretium facilisis
              nisl. Pellentesque efficitur elit ante, vel vulputate tortor
              blandit nec.
            </p>
          </div>

          <div className="relative flex flex-col gap-10">
            <div className="relative flex flex-col items-center gap-5 w-full pt-10 xl:flex-row xl:gap-10">
              <div className="w-full lg:flex lg:items-start">
                <Image
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/about-people.jpg"
                  alt="About Us Image"
                  width={500}
                  height={500}
                  className="h-full xl:w-[100%]"
                />
              </div>
              <div className="w-[100%] flex flex-col gap-10 lg:gap-4">
                <h5 className="text-[18px] text-[#202435] font-normal xl:text-[22px]">
                  Rachel Leonard - Bacola CEO
                </h5>
                <h1 className="text-[30px] text-[#202435] font-bold xl:text-[36px]">
                  Duis convallis luctus pretium. Pellentesque habitant morbi
                </h1>
                <p className="text-[14px] text-[#202435] font-normal xl:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <p className="text-[14px] text-[#202435] font-normal xl:text-[16px]">
                  In fermentum mi ut sapien semper, a sagittis lorem vulputate.
                  Integer gravida, dui eget aliquet tempus, turpis orci vehicula
                  ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar
                  lacus, ac volutpat neque. Ut at magna id justo bibendum
                  lobortis. Integer tortor nulla, ultricies et nisi sit amet,
                  interdum dictum felis. In semper laoreet dui vitae pharetra.
                  Etiam sit amet molestie nulla, eu efficitur orci. Praesent
                  rutrum ante justo, eget malesuada ante ornare ac. Ut dignissim
                  blandit urna, eget euismod leo rhoncus nec. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Quisque lobortis libero ante. Nullam in feugiat
                  erat. Aenean sed justo dapibus, sodales nisi ut, fringilla
                  lorem. Vestibulum in orci ac nisl condimentum fermentum at et
                  sem. Curabitur fermentum dolor eu lacus consectetur varius.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col gap-4">
              <span className="xl:bg-white xl:p-10 xl:w-[90%] xl:rounded-lg xl:absolute xl:bottom-16 xl:right-[0px]">
                <p className="text-[14px] text-[#202435] font-normal xl:text-[16px]">
                  In nec purus eget neque accumsan finibus. Duis condimentum
                  elit ut libero commodo iaculis. Donec augue diam, tristique et
                  ultricies nec, consectetur quis enim. Nullam id rutrum ex.
                  Aliquam a lectus id lacus rhoncus dapibus non ac justo.
                  Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit
                  amet sollicitudin enim. Ut id interdum turpis. Curabitur porta
                  auctor quam, pretium facilisis nisl. Pellentesque efficitur
                  elit ante, vel vulputate tortor blandit nec.
                </p>
              </span>
              <p className="text-[14px] text-[#202435] font-normal xl:text-[16px] xl:pt-10">
                In nec purus eget neque accumsan finibus. Duis condimentum elit
                ut libero commodo iaculis. Donec augue diam, tristique et
                ultricies nec, consectetur quis enim. Nullam id rutrum ex.
                Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus
                lacinia vestibulum metus in dapibus. Vestibulum sit amet
                sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor
                quam, pretium facilisis nisl. Pellentesque efficitur elit ante,
                vel vulputate tortor blandit nec.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
