import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import hero from "../../../assets/overview/hero.png";

import goldImg from "../../../assets/icons/overview/gold.png";
import donated from "../../../assets/icons/overview/donated.png";
import student from "../../../assets/icons/overview/student.png";

import Image from "next/image";
import Header from "@/components/Templates/Header";

function OverView() {
  const navData = [
    { img: goldImg, header: "Badge", name: "Gold" },
    { img: donated, header: "Total Amount Donated", name: "₦823,000.00" },
    { img: student, header: "Students Supported", name: "12" },
  ];

  return (
    <div>
      <SecondLayout >
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4 py-6">
          {/* First Column */}
          <aside>
            <div className="flex items-center gap-4">
              <div>
                <Image src={hero} alt="logo" width={140} height={140} />
              </div>
              <div>
                <Header
                  header="Be a Hero: Empowering Futures, More Students at a Time"
                  text="Your Generosity Transforms Lives: Thank You for Being a Hero to Students in Need"
                  classNames="text-[1.5rem] w-[70%]"
                />
              </div>
            </div>
          </aside>

          {/* Second Column */}
          <aside className="flex justify-between items-center border-l ps-4">
            {navData?.map((e, i) => (
              <div key={i} className="flex items-center gap-2 p-2">
                <div>
                  {/* Assuming e.img is a valid image source */}
                  <Image src={e.img} alt={e.header} width={40} height={40} />
                </div>
                <div>
                  <div className=" text-[1rem] text-[#777777]">{e.header}</div>
                  <div className="font-[900] text-[23.88px] text-[#1A1A1ACC]">{e.name}</div>
                </div>
              </div>
            ))}
          </aside>
        </section>
      </SecondLayout>
    </div>
  );
}

export default OverView;
