import { twMerge } from "tailwind-merge";
import Image from "next/image";
import mousePointer from "@/assets/images/mouse-pointer.svg";
export default function Pointer(props: {
    name: string, color?: "red" | "blue";
}) {
    const {name, color} = props;
  return (
    <div className="relative">
      <Image
        src={mousePointer}
        alt="Logo"
        className="brightness-0 invert text-white size-5"
      />
      <div className="absolute top-full left-full">
        <div className={twMerge("inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none", color === "red" && "bg-red-500")}>
          {name}
        </div>
      </div>
    </div>
  );
}
