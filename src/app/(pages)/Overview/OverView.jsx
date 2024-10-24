import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import hero from "../../../assets/overview/hero.png";
import Image from "next/image";
import Header from "@/components/Templates/Header";

function OverView() {
  return (
    <div>
      <SecondLayout>
        <section className="grid grid-cols-2 ">
          <aside>
            <div className="flex items-center gap-4">
              <div>
                <Image src={hero} alt="logo" width={120} />
              </div>
              <Header
                header={
                  "Be a Hero: Empowering Futures, More Students at a Time"
                }
                text={
                  "Your Generosity Transforms Lives: Thank You for Being a Hero to Students in Need"
                }
                classNames="text-[1.5rem] w-[70%]"
              />
            </div>
          </aside>
          <aside></aside>
        </section>
      </SecondLayout>
    </div>
  );
}

export default OverView;
