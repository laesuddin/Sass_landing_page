import design1Image from "@/assets/images/design-example-1.png";
import design2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container mx-auto px-4 relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={design1Image} alt="Design example 1 image" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image src={design2Image} alt="Design example 2 image" />
        </div>

        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Andrea" />
        </div>
        <div className="absolute right-80 -top- 4 hidden lg:block">
          <Pointer name="Bryan" color="red" />
        </div>

        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-linear-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 max-w-5xl">
            Impactful design, created effortlessly
          </h1>
        </div>

        <div className="flex justify-center items-center mt-10">
          <p className="text-center text-xl text-white/70 max-w-2xl">
            Design tools shouldn&apos;t slow you down. Layers combines powerful
            features with an intuitive interface that keeps you in your creative
            flow.
          </p>
        </div>

        <form
          action=""
          className="flex border border-white/15 rounded-full p-2 mt-8 md:max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 md:flex-1"
          />
          <button
            type="submit"
            className="border h-10 rounded-full px-6 font-medium bg-lime-400 text-neutral-950 border-lime-400 hidden md:inline-flex items-center whitespace-nowrap"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
