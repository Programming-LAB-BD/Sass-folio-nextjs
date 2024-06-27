import ProfilePic from "@/public/img/IMG20231003122856.jpg";
import Image from "next/image";

export default function ImageArea() {
  return (
    <div className="pt-20 md:pt-0 md:min-w-[40%] flex justify-center items-center">
      <div className="relative desined-bar flex items-center justify-center">
        <div className="w-[220px] md:w-[260px] h-[220px] md:h-[260px] flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-primary to-secondary z-10">
          <div className="max-w-[210px] md:max-w-[248px] max-h-[210px] md:max-h-[248px] mx-auto overflow-hidden rounded-full object-center">
            <Image
              src={ProfilePic}
              alt="MD. Mehedi Hasan Talha"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
