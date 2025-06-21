import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExpandedSection({
  title,
  content,
  open,
  onClick,
  className = "",
  ...props
}) {
  return (
    <div
      className={`${className} cursor-pointer relative bg-white txt-primary rounded-sm border border-color-primary p-6 overflow-hidden`}
      onClick={onClick}
      {...props}
    >
      <span
        className={`absolute transition-colors ease-in-out ${
          open ? "bg-[#6451BF]" : "bg-[#F1F2F9]"
        } ease-in-out top-0 left-0 bottom-0 w-1.5`}
      />
      <div className="w-full text-left flex items-center justify-between p-2 focus:outline-none ">
        <h3 className="text-2xl font-semibold txt-primary">{title}</h3>

        {open ? (
          <ChevronUp className="w-5 h-5 txt-primary-light" />
        ) : (
          <ChevronDown className="w-5 h-5 txt-primary-light" />
        )}
      </div>
      <div
        className={`px-2 transition-all ease-in-out  overflow-hidden ${
          open ? "max-h-[500px] py-5" : "max-h-0 py-0"
        }`}
      >
        <p className="txt-primary-light">{content}</p>
      </div>
    </div>
  );
}
