import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed z-10 bg-[#f4f4f2] min-w-full h-[80px] flex justify-between items-center px-10">
      <span className="cursor-pointer text-2xl font-medium text-[#4B4B4B]">
        Metaprop
      </span>
      <div className="flex flex-row items-center gap-6">
        <p className="cursor-pointer font-light lg:text-lg">Home</p>
        <div className="cursor-pointer flex flex-row gap-2 items-center">
          <div className="relative w-[32px] h-[32px]">
            <Image src="/assets/icons/avatar.png" alt="avatar" fill />
          </div>
          <p className="font-light lg:text-lg">Mike</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
