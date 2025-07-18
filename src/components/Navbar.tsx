import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md" />
          <Image
            src="/favicon.ico"
            alt="Logo"
            className="relative z-10"
            width={48}
            height={48}
            priority
          />
        </div>

        <button
          type="button"
          className="bg-white text-black py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
        >
          Start here
        </button>
      </div>
    </div>
  );
};
