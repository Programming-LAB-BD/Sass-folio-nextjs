import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceItem({ name, icon, text, index }) {
  return (
    <div
      className="single_item bg-primary text-text_secondary rounded-md py-8 px-4 md:max-w-[550px] md:mx-auto"
      key={index}
    >
      <div className="service_heading text-2xl font-medium text-center">
        <h2 className="border-b-2 border-text_secondary inline-block px-2 pb-2">
          {name}
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="icon text-8xl p-6 text-center text-gray-700">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="text-center text-lg">
          <p className="mb-6">{text}</p>
          <button className="px-6 py-[12px] bg-secondary rounded-md text-primary font-medium hover:bg-hover_secondary">
            Read More &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
