import SecondLayout from "@/app/components/NavLayouts/SecondLayout";
import Header from "@/components/Templates/Header";

function page() {
  return (
    <div>
      <SecondLayout ShowBack={true} >
        <div className="flex justify-between items-center  min-h-[160px] ">
          <Header
            header={"Impact"}
            text={
              "Discover how your donations fund education and change lives."
            }
          />

          <div className="bg-primary text-white w-fit font-[700] text-[.9rem] px-4 py-2 rounded-[.4rem] cursor-pointer ">
            Make a donation
          </div>
        </div>

      
      </SecondLayout>
    </div>
  )
}

export default page
