import Link from "next/link";
import Container from "../Container";

const Credit = () => {
  return (
    <Container>
      <div className="text-center text-sm py-5">
        A project by{" "}
        <Link
          href="https://www.sammyleths.com"
          target="_blank"
          className="cursor-pointer font-bold hover:text-blue-600"
        >
          {"<SammyLeths />"}
        </Link>
      </div>
    </Container>
  );
};

export default Credit;
