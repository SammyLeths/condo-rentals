import Container from "@/app/components/Container";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { BsToggleOn } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { IoToggleSharp } from "react-icons/io5";

const FooterBottom = () => {
  return (
    <Container>
      <div className="flex flex-row pb-10 lg:py-10 text-sm md:text-base border-b border-gray-300">
        <div className="flex flex-col-reverse lg:flex-row gap-5 w-full items-start md:items-center justify-between">
          <div className="flex gap-1 lg:gap-7 flex-col lg:flex-row items-start md:items-center">
            <span>&copy; 2023 Condo Rentals, Inc.</span>
            <ul className="flex gap-5 md:gap-7 items-start">
              <li className="cursor-pointer hover:underline">Terms</li>
              <li className="cursor-pointer hover:underline">Sitemap</li>
              <li className="cursor-pointer hover:underline">Privacy</li>
              <li className="cursor-pointer hover:underline flex items-center gap-1">
                Your Privacy Choices <IoToggleSharp size={20} color="blue" />
              </li>
            </ul>
          </div>
          <div className="flex gap-5 items-center justify-between ">
            <div className="cursor-pointer">English (US)</div>
            <div className="cursor-pointer">$ USD</div>
            <ul className="hidden md:flex gap-3">
              <AiFillFacebook
                size={25}
                className="cursor-pointer hover:text-blue-600"
              />
              <AiFillTwitterSquare
                size={25}
                className="cursor-pointer hover:text-blue-600"
              />
              <FaInstagramSquare
                size={25}
                className="cursor-pointer hover:text-blue-600"
              />
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterBottom;
