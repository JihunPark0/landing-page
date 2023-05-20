import "./index.css";
import Navigation from "./components/Navigation";
import farm from "./assets/farm.jpg";
import neighborhood from "./assets/neighborhood.jpg";
import weather from "./assets/weather.jpg";
import checklist from "./assets/checklist.jpg";
import FormModal from "./components/FormModal";
import FormEmail from "./components/FormEmail";

function App() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center lg:px-56">
        <h1 className="text-2xl lg:text-3xl mt-14 mb-4 text-center ">
          Defend Your Farm from the upcoming Summer Blaze: Expert
          Recommendations to Prevent Fire Damage
        </h1>
        <img src={farm} className=" h-[400px] " />
        <div className="lg:px-32 px-6 mt-5 ">
          <p className="mb-5">
            Protecting your farm from the devastating effects of summer
            wildfires is crucial for the safety of your livestock, crops, and
            property. As temperatures rise and dry conditions prevail, the risk
            of fire outbreaks increases significantly, posing a serious threat
            to agricultural operations. Taking proactive measures to prevent
            fire damage is essential in safeguarding your farm and ensuring its
            long-term viability.
          </p>
          <p className="mb-5">
            In this guide, we will provide expert recommendations and strategies
            to defend your farm from the summer blaze, empowering you with the
            knowledge and tools to mitigate fire risks and protect your
            livelihood. By implementing these preventive measures, you can
            enhance the resilience of your farm and minimize the potential
            impact of wildfires on your operations.
          </p>

          <h2 className=" text-2xl mb-5">
            1. Know your neighbors. Get to know your neighbors and make sure
            they know your fire plan. This way, you can help each other in the
            event of a fire.
          </h2>
          <img src={neighborhood} className="h-[350px] w-[600px] mb-5" />
          <p className="mb-5">
            Knowing your neighbors and fostering strong relationships within
            your farming community is a crucial aspect of fire prevention and
            response. Take the time to connect with your neighbors and ensure
            they are familiar with your farm's fire safety plan. Likewise, make
            an effort to learn about their own fire preparedness measures. By
            establishing this mutual understanding, you can create a support
            network that can offer assistance and collaborate effectively during
            fire emergencies. Together, you and your neighbors can provide
            crucial aid, share resources, and coordinate efforts, increasing the
            chances of successful fire containment and minimizing potential
            damages. Remember, in the face of a fire, community cooperation and
            solidarity can make a significant difference in protecting your
            farms and ensuring the safety of all involved.
          </p>
          <h2 className=" text-2xl mb-5">
            2. Stay informed about fire conditions. Monitor the weather forecast
            and listen to local news reports for information about fire danger.
          </h2>
          <img src={weather} className="h-[350px] w-[600px] mb-5" />
          <p className="mb-5">
            Staying informed about fire conditions is paramount when it comes to
            protecting your farm. Regularly monitor the weather forecast and pay
            attention to local news reports that provide crucial information
            about fire dangers in your area. Stay vigilant during periods of
            high temperatures, low humidity, and strong winds, as these
            conditions can greatly increase the risk of fire outbreaks. By
            staying informed, you can proactively adjust your fire prevention
            measures, remain prepared for potential emergencies, and take
            necessary precautions to safeguard your farm, livestock, and
            property. Remember, knowledge is power, and staying informed about
            fire conditions is a fundamental step in mitigating risks and
            ensuring the safety and well-being of your farm
          </p>
          <h2 className=" text-2xl mb-5">
            3. Conduct a thorough evaluation of fire risks and ensure that all
            employees are well-informed about essential fire safety protocols.
          </h2>
          <img src={checklist} className="h-[350px] w-[600px] mb-5" />
          <p className="mb-5">
            It is crucial to prioritize the safety of your farm and its
            employees by conducting a comprehensive assessment of fire risks.
            This evaluation involves identifying potential ignition sources,
            flammable materials, and vulnerable areas on your property. By
            thoroughly understanding these risks, you can develop effective
            strategies to mitigate them. Additionally, it is essential to ensure
            that all employees are well-informed about the necessary fire safety
            protocols. Conduct regular training sessions and provide clear
            instructions on evacuation procedures, the proper use of fire
            extinguishers, and the importance of reporting any fire hazards
            promptly. By fostering a culture of fire safety awareness among your
            team, you can minimize the potential impact of fires and enhance the
            overall resilience of your farm.
          </p>
          <h2 className=" text-2xl mb-5">Conclusion</h2>
          <p className="mb-5">
            In conclusion, this guide offers expert recommendations and
            strategies to help you defend your farm from summer wildfires. By
            following these preventive measures, you can enhance your farm's
            resilience, mitigate fire risks, and protect your livelihood.
            Implementing these strategies will empower you with the necessary
            knowledge and tools to minimize the potential impact of wildfires on
            your operations.
          </p>
          <div className="border border-solid border-black p-4 mb-5 shadow rounded-xl">
            <h2 className=" text-2xl mb-3 font-bold">
              Support a student project that aims to examine the effects of
              wildfires on the agricultural sector
            </h2>
            <h3 className="text-xl mb-4">
              I am conducting research for my university project to explore the
              challenges associated with addressing the heightened risk of
              wildfires.
            </h3>
            <h3 className="text-xl mb-3">
              If you are a farmer, I am seeking to establish a community of
              farmers to collaboratively delve into this issue. If you would
              like to contribute and make a meaningful impact in the
              agricultural sector, please enter your name and email below to
              show interest
            </h3>
            <FormEmail />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
