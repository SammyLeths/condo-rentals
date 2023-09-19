import ClientOnly from "@/app/components/ClientOnly";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";
import Credit from "./Credit";

const Footer = () => {
  return (
    <ClientOnly>
      <div className="bg-gray-100">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
        <Credit />
      </div>
    </ClientOnly>
  );
};

export default Footer;
