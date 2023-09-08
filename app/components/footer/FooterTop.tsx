import Container from "@/app/components/Container";
import InspirationTabs from "./InspirationTabs";

const FooterTop = () => {
  return (
    <div className="py-12 border-b border-gray-300">
      <Container>
        <h1 className="text-2xl font-bold">Inspiration for future getaways</h1>
        <InspirationTabs />
      </Container>
    </div>
  );
};

export default FooterTop;
