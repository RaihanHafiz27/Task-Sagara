import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="container flex items-center justify-end gap-2 p-4 mx-auto">
        <div className="flex flex-col items-end">
          <p className="text-lg font-bold">Thomas Anree</p>
          <p>Admin</p>
        </div>
        <img
          src="/images/Ellipse 2824.png"
          alt="Admin"
          className="ml-2 rounded-full"
        />
        <AiOutlineDown className="w-6 ml-2 text-xl text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
