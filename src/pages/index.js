import "@/app/globals.css"
import Image from "next/image";
import amazon from "/Amazon.png";
import analytics from "/analytics.png";
import appStore from "/app-store.png";
import atrium from "/atrium.png";
import deloitte from "/Deloitte.png";
import granded from "/granded.png";
import heroImg from "/hero-img.png";
import icon1 from "/ic-1.png";
import icon2 from "/ic-2.png";
import icon3 from "/ic-3.png";
import kaligo from "/kaligo.png";
import logo from "/logo.png";
import marketing from "/marketing.png";
import menuine from "/menuine.png";
import microsoft from "/microsoft.png";
import mountRain from "/mount-rain.png";
import playStore from "/play-store.png";
import Play from "/Play.png";
import revenue from "/revenue.png";
import sales from "/sales.png";
import samsung from "/Samsung.png";
import walmart from "/Walmart.png";

export default function LandingPage() {
    const gradientStyle = {
        background: `linear-gradient(to right, ${"#FC8E51"}, ${"#FA61F9"})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
          };

    return (
        <div style={{background:"#120101"}}>
            <div className="flex gap-5 justify-between self-center px-5 w-full text-base max-w-[1040px] max-md:flex-wrap max-md:max-w-full">
            <Image 
                alt="" 
               
                loading="lazy"
                src={logo}
                className="shrink-0 my-auto max-w-full aspect-[4.76] w-[154px]"
            />
        <div className="flex gap-5 justify-between px-6 py-4 font-medium text-white whitespace-nowrap backdrop-blur-[20px] bg-white bg-opacity-0 rounded-[120px] max-md:flex-wrap max-md:px-5">
            <div>Home</div>
            <div>Product</div>
            <div>Services</div>
            <div>Contact</div>
            <div>Pricing</div>
        </div>
        <div className="justify-center px-6 py-4 font-bold text-white border border-orange-400 border-solid rounded-[100px] max-md:px-5">
            Get Started
        </div>
        </div>
        <div className="flex flex-col px-16 pt-20 mt-4 w-full text-5xl font-bold leading-[57.6px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
      <div className="text-center text-white max-md:max-w-full max-md:text-4xl">
        Effortless Project Management
      </div>
      <div className="mt-2 text-center  bg-clip-text max-md:max-w-full max-md:text-4xl" style={gradientStyle}>
      Streamline Collaboration, Boost Productivity
    </div>
      
      <div className="mt-6 text-2xl font-thin leading-10 text-center text-white ">
        Our project management software simplifies teamwork, centralizes tasks,
        and enhances communication, making project management a breeze for your
        team.
      </div>
      <div className="flex gap-2.5 justify-center self-center mt-6 text-base">
        <div className="flex gap-2 justify-center px-6 py-4 text-white border border-white border-solid rounded-[120px] max-md:px-5">
          <Image 
                 alt=""
            loading="lazy"
            src={Play}
            className="shrink-0 w-6 aspect-square"
          />
          <div>Demo Video</div>
        </div>
        <div className="justify-center px-6 py-4 text-white bg-[linear-gradient(180deg,#FC8E51_0%,#FA61F9_100%)] rounded-[120px] max-md:px-5">
          Try now Free
        </div>
      </div>
      <Image 
        alt=""
        loading="lazy"
        src={heroImg}
        className="mt-10 w-full aspect-[2.33] max-md:mt-10 max-md:max-w-full"
      />
    </div>
    <div className="flex justify-center align-center">
    <div className="flex gap-5 justify-around items-center self-center px-20 mt-6 w-full max-w-[1040px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <Image 
                 alt=""
        loading="lazy"
        src={amazon}
        className="shrink-0 w-20 aspect-[3.33]"
      />
      <Image 
                 alt=""
        loading="lazy"
        src={microsoft}
        className="shrink-0 max-w-full aspect-[4.76] w-[113px]"
      />
      <Image 
                 alt=""
        loading="lazy"
        src={deloitte}
        className="shrink-0 max-w-full aspect-[4.55] w-[111px]"
      />
      <Image 
                 alt=""
        loading="lazy"
        src={walmart}
        className="shrink-0 max-w-full aspect-[4.17] w-[101px]"
      />
      <Image 
                 alt=""
        loading="lazy"
        src={samsung}
        className="shrink-0 max-w-full aspect-[6.67] w-[157px]"
      />
    </div>
    </div>
    <div className="justify-center p-20 mt-6 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto font-bold text-white max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl leading-[52px] max-md:max-w-full">
              Why do I need this Marketing Tool?
            </div>
            <div className="mt-4 text-2xl font-thin text-base tracking-tight leading-10 ">
              Analytics dashboards help track a marketing campaign or analyze
              the marketing funnel or your website’s traffic and conversions.
            </div>
            <div className=" cursor-pointer transition duration-300 ease-in-out bg-transparent hover:bg-gradient-to-b from-[#FC8E51] to-[#FA61F9] justify-center self-start px-6 py-4 mt-6 text-base text-white border border-orange-400 border-solid rounded-[120px] max-md:px-5">
              Explore Our Services
            </div>
            
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-end px-10 pt-10 w-full rounded-3xl bg-[linear-gradient(180deg,#FC8E51_0%,#FA61F9_100%)] max-md:mt-10 max-md:max-w-full">
            <Image 
                 alt=""
              loading="lazy"
              src={sales}
              className="w-full aspect-[1.39] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="justify-center p-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-end pl-6 w-full rounded-3xl bg-[linear-gradient(180deg,#FC8E51_0%,#FA61F9_100%)] max-md:mt-10 max-md:max-w-full">
            <Image 
                 alt=""
              loading="lazy"
              src={marketing}
              className="max-w-full w-[full]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto font-bold text-white max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl leading-[52px] max-md:max-w-full">
              Why do I need this Marketing Tools?
            </div>
            <div className="mt-4 font-thin text-2xl tracking-tight leading-10 ">
              Analytics dashboards help track a marketing campaign or analyze
              the marketing funnel or your website’s traffic and conversions.
            </div>
            <div className="cursor-pointer transition duration-300 ease-in-out bg-transparent hover:bg-gradient-to-b from-[#FC8E51] to-[#FA61F9] justify-center self-start px-6 py-4 mt-6 text-base text-white border border-orange-400 border-solid rounded-[120px] max-md:px-5">
              Explore Our Product
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col p-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="mt-10 text-4xl font-bold text-center text-white leading-[52px] max-md:max-w-full">
        Why do I need this Marketing Tools?
      </div>
      <div className="mt-4 text-2xl font-thin tracking-tight leading-10 text-center text-white ">
        Analytics dashboards help track a marketing campaign or analyze the
        marketing funnel or your website’s traffic and conversions.
      </div>
      <div className="mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-6 w-full text-white rounded-lg border border-orange-400 border-solid backdrop-blur-[20px] bg-white bg-opacity-10 max-md:px-5 max-md:mt-5">
              <Image 
                 alt=""
                loading="lazy"
                src={icon1}
                className="w-8 aspect-square"
              />
              <div className="mt-4 text-2xl font-bold">Account management</div>
              <div className="mt-2 text-base leading-7">
                Total traceability by drill down ensuring reliability &
                justification of indicators
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-6 w-full text-white rounded-lg border border-orange-400 border-solid backdrop-blur-[20px] bg-white bg-opacity-10 max-md:px-5 max-md:mt-5">
              <Image 
                 alt=""
                loading="lazy"
                src={icon2}
                className="w-8 aspect-square"
              />
              <div className="mt-4 text-2xl font-bold">Budgeting tools</div>
              <div className="mt-2 text-base leading-7">
                Total traceability by drill down ensuring reliability &
                justification of indicators
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-6 w-full text-white rounded-lg border border-orange-400 border-solid backdrop-blur-[20px] bg-white bg-opacity-10 max-md:px-5 max-md:mt-5">
              <Image 
                 alt=""
                loading="lazy"
                src={icon3}
                className="w-8 aspect-square"
              />
              <div className="mt-4 text-2xl font-bold">Investment tools</div>
              <div className="mt-2 text-base leading-7">
                Total traceability by drill down ensuring reliability &
                justification of indicators
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-4 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-6 w-full text-white rounded-lg border border-orange-400 border-solid backdrop-blur-[20px] bg-white bg-opacity-10 max-md:px-5 max-md:mt-5">
              <Image 
                 alt=""
                loading="lazy"
                src={icon1}
                className="w-8 aspect-square"
              />
              <div className="mt-4 text-2xl font-bold">Account management</div>
              <div className="mt-2 text-base leading-7">
                Total traceability by drill down ensuring reliability &
                justification of indicators
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-6 w-full text-white rounded-lg border border-orange-400 border-solid backdrop-blur-[20px] bg-white bg-opacity-10 max-md:px-5 max-md:mt-5">
              <Image 
                 alt=""
                loading="lazy"
                src={icon2}
                className="w-8 aspect-square"
              />
              <div className="mt-4 text-2xl font-bold">Budgeting tools</div>
              <div className="mt-2 text-base leading-7">
                Total traceability by drill down ensuring reliability &
                justification of indicators
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 py-6 w-full text-white rounded-lg border border-orange-400 border-solid backdrop-blur-[20px] bg-white bg-opacity-10 max-md:px-5 max-md:mt-5">
              <Image 
                 alt=""
                loading="lazy"
                src={icon3}
                className="w-8 aspect-square"
              />
              <div className="mt-4 text-2xl font-bold">Investment tools</div>
              <div className="mt-2 text-base leading-7">
                Total traceability by drill down ensuring reliability &
                justification of indicators
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="p-20 w-full rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-bold tracking-tighter text-white leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
              Get expert guidance and advice on buying or selling property
            </div>
            <div className="mt-4 text-2xl font-thin tracking-tight leading-10 text-white max-md:max-w-full">
              Learn how People leaders everywhere transform their approach to
              performance, engagement, and development.
            </div>
            <div className="mt-6 max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-center whitespace-nowrap max-md:mt-10">
                    <div style={gradientStyle} className="text-5xl font-bold bg-clip-text bg-[linear-gradient(180deg,#FC8E51_0%,#FA61F9_100%)] max-md:text-4xl">
                      24K
                    </div>
                    <div className="mt-2.5 text-2xl text-white">Users</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-center whitespace-nowrap max-md:mt-10">
                    <div style={gradientStyle} className="text-5xl font-bold bg-clip-text bg-[linear-gradient(180deg,#FC8E51_0%,#FA61F9_100%)] max-md:text-4xl">
                      12M
                    </div>
                    <div className="mt-2.5 text-2xl text-white">Minutes</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-center whitespace-nowrap max-md:mt-10">
                    <div style={gradientStyle} className="text-5xl font-bold bg-clip-text bg-[linear-gradient(180deg,#FC8E51_0%,#FA61F9_100%)] max-md:text-4xl">
                      $80B
                    </div>
                    <div className="mt-2.5 text-2xl text-white">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center self-start px-6 py-4 mt-6 text-base font-bold text-white border border-orange-400 border-solid rounded-[120px] max-md:px-5 cursor-pointer transition duration-300 ease-in-out bg-transparent hover:bg-gradient-to-b from-[#FC8E51] to-[#FA61F9]">
      Learn More
    </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center mt-1.5 w-full rounded-xl bg-[linear-gradient(180deg,#FC8E51_0%,#FA61F9_100%)] max-md:mt-10 max-md:max-w-full">
            <Image 
                 alt="" className="flex flex-col items-start px-16 pt-12 rounded-3xl bg-white bg-opacity-10 max-md:pl-5 max-md:max-w-full" 
            loading="lazy"
            src={revenue}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center align-center">
    <div className="self-center p-10 mt-6 w-full bg-pink-300 rounded-3xl backdrop-blur-2xl max-w-[1040px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center font-bold text-stone-950 max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl max-md:max-w-full">
              Unleash Your Business Potential with Our Project Power Tools
            </div>
            <div className="mt-4 font-thin text-2xl tracking-tight leading-10 max-md:max-w-full">
              Learn how People leaders everywhere transform their approach to
              performance, engagement, and development.
            </div>
            <div className="justify-center self-start px-6 py-4 mt-6 text-base font-bold text-white border border-orange-400 border-solid rounded-[120px] max-md:px-5 cursor-pointer transition duration-300 ease-in-out bg-transparent hover:bg-gradient-to-b from-[#FC8E51] to-[#FA61F9]">
      Learn More
    </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
          <Image 
                 alt=""
            loading="lazy"
            src={analytics}
            className="self-stretch my-auto w-full aspect-square max-md:mt-10"
          />
        </div>
      </div>
    </div>
    </div>
    <div className="flex flex-col p-20 mt-6 w-full max-md:px-5 max-md:max-w-full">
      <div className="mt-10 text-6xl font-bold tracking-tighter text-white leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Partnering with the most famous companies ever.
      </div>
      <div className="mt-5 text-3xl leading-10 text-white underline max-md:max-w-full">
        <span className="font-thin text-3xl">We’re here to help you </span>
        <span className=" font-thin text-3xl underline">connect, communicate, and express</span>
        <span className="font-thin text-3xl"> your ideas so you can get more done togther</span>
      </div>
      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-10">
              <Image 
                 alt=""
                loading="lazy"
                src={granded}
                className="self-center aspect-[3.85] w-[230px]"
              />
              <div className="mt-10 font-thin">
                
                Stop wasting time in unproductive meetings. With our app&apos;s
                streamlined interface
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-10">
              <Image 
                 alt=""
                loading="lazy"
                src={menuine}
                className="self-center aspect-[3.85] w-[230px]"
              />
              <div className="mt-10 font-thin">
                
                Stop wasting time in unproductive meetings. With our app&apos;s
                streamlined interface
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-10">
              <Image 
                 alt=""
                loading="lazy"
                src={kaligo}
                className="self-center aspect-[3.85] w-[230px]"
              />
              <div className="mt-10 font-thin">
                
                Stop wasting time in unproductive meetings. With our app&apos;s
                streamlined interface
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-10">
              <Image 
                 alt=""
                loading="lazy"
                src={atrium}
                className="self-center aspect-[3.85] w-[230px]"
              />
              <div className="mt-10 font-thin">
                
                Stop wasting time in unproductive meetings. With our app&apos;s
                streamlined interface
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-10">
              <Image 
                 alt=""
                loading="lazy"
                src={kaligo}
                className="self-center aspect-[3.85] w-[230px]"
              />
              <div className="mt-10 font-thin">
                
                Stop wasting time in unproductive meetings. With our app&apos;s
                streamlined interface
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-10">
              <Image 
                 alt=""
                loading="lazy"
                src={atrium}
                className="self-center aspect-[3.85] w-[230px]"
              />
              <div className="mt-10 font-thin">
                
                Stop wasting time in unproductive meetings. With our app&apos;s
                streamlined interface
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-10">
              <Image 
                 alt=""
                loading="lazy"
                src={mountRain}
                className="self-center aspect-[3.85] w-[230px]"
              />
              <div className="mt-10 font-thin">
                
                Stop wasting time in unproductive meetings. With our app&apos;s
                streamlined interface
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-10">
              <Image 
                 alt=""
                loading="lazy"
                src={menuine}
              />
              <div className="mt-10 font-thin">
                
                Stop wasting time in unproductive meetings. With our app&apos;s
                streamlined interface
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-4 text-3xl font-bold leading-10 text-center text-white underline max-md:mt-10 max-md:max-w-full">
        View All Partners
      </div>
    </div>
    <div className="flex align-center justify-center">
    <div className="flex flex-col self-center px-20 py-10 mt-10 w-full rounded-3xl bg-white bg-opacity-10 max-w-[1040px] max-md:px-5 max-md:max-w-full">
      <div className="text-4xl font-bold text-center text-white max-md:max-w-full">
        Start your journey now
      </div>
      <div className="mt-4 font-thin text-2xl tracking-tight leading-10 text-center text-white max-md:max-w-full">
        A data dashboard is a tool that collects and analyzes data, including
        key performance indicators (KPI), metrics, and other data points that
        monitor progress over time.
      </div>
      <div className="flex gap-2 self-center mt-6 max-w-full text-base w-[429px] max-md:flex-wrap">
      <input
      placeholder="Your email address"
      className=" h-10 mt-6 justify-center items-start px-4 text-white border border-white border-solid bg-white bg-opacity-0 rounded-[120px] max-md:pr-5"
    />
         
        
        <div className="justify-center self-start px-6 py-4 mt-6 text-base font-bold text-white border border-orange-400 border-solid rounded-[120px] max-md:px-5 cursor-pointer transition duration-300 ease-in-out bg-transparent hover:bg-gradient-to-b from-[#FC8E51] to-[#FA61F9]">
      Learn More
    </div>
      </div>
    </div>
    </div>
    <div className="flex flex-col justify-center px-20 pt-6 pb-10 mt-6 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 items-start max-md:flex-wrap">
        <div className="flex flex-col self-stretch px-4 py-6">
          <Image 
                 alt=""
            loading="lazy"
            src={logo}
            className="max-w-full aspect-[4.76] w-[154px]"
          />
          <div className="mt-6 text-xl leading-8 text-white">
            A full-service marketing agency dedicated to helping businesses
            reach new heights through strategic marketing solutions and
            innovative marketing campaigns.
          </div>
          <div className="flex gap-5 pr-20 mt-6 max-md:pr-5">
            <Image 
                 alt=""
              loading="lazy"
              src={appStore}
              className="shrink-0 max-w-full aspect-[2.94] w-[117px]"
            />
            <Image 
                 alt=""
              loading="lazy"
              src={playStore}
              className="shrink-0 max-w-full aspect-[2.94] w-[117px]"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 px-4 text-base font-medium leading-6 text-white">
          <div className="font-bold leading-[162.5%]">Product</div>
          <div className="mt-4 font-thin underline">Product Tour</div>
          <div className="mt-4 font-thin underline">Pricing</div>
          <div className="mt-4 font-thin underline">Template</div>
          <div className="mt-4 font-thin leading-7 underline">Apps Integration</div>
          <div className="mt-4 font-thin underline leading-[162.5%]">API</div>
        </div>
        <div className="flex flex-col flex-1 px-4 text-base font-medium leading-6 text-white">
          <div className="font-bold leading-[162.5%]">Solution</div>
          <div className="mt-4 font-thin underline">All Teams</div>
          <div className="mt-4 font-thin underline">Marketing</div>
          <div className="mt-4 font-thin underline">Creative</div>
          <div className="mt-4 font-thin underline">Product</div>
        </div>
        <div className="flex flex-col flex-1 px-4 text-base font-medium leading-6 text-white">
          <div className="font-bold leading-[162.5%]">Resources</div>
          <div className="mt-4 font-thin underline">Help Center</div>
          <div className="mt-4 font-thin underline">Community</div>
          <div className="mt-4 font-thin underline">Webinars</div>
          <div className="mt-4 font-thin underline">Training</div>
        </div>
        <div className="flex flex-col flex-1 px-4 text-base font-medium leading-6 text-white">
          <div className="font-bold leading-[162.5%]">Learn</div>
          <div className="mt-4 font-thin underline">10 Lifehacks</div>
          <div className="mt-4 font-thin underline">Executive </div>
          <div className="mt-4 font-thin underline">What are OKR</div>
          <div className="mt-4 font-thin underline">Smart Goals</div>
        </div>
      </div>
      <div className="self-center mt-16 text-lg font-bold leading-6 text-white max-md:mt-10">
        © 2023, by Multi, Inc. All Rights Reserved.
      </div>
    </div>
        </div>
    )
}