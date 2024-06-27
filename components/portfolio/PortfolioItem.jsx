import Image from "next/image";

export default function PortfolioItem({ image_src, image_alt, text, index }) {
  return (
    <div className="single_item bg-primary rounded-md p-4 pb-8" key={index}>
      <div className="flex flex-col gap-2">
        <div className="image mb-2 max-h-[220px] overflow-hidden">
          <Image
            src={image_src}
            alt={image_alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="text-center text-text_secondary text-lg">
          <p className="mb-6">{text}</p>
          <button className="px-6 py-[12px] bg-secondary rounded-md text-primary font-medium hover:bg-hover_secondary">
            Read More &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
