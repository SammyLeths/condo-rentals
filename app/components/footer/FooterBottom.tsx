import Container from '@/app/components/Container';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const FooterBottom = () => {
  return (
    <Container>
      <div className='flex flex-row py-10'>
        <div className='flex flex-row w-full items-center justify-between'>
          <ul className='flex space-x-5'>
            <li>&copy; 2023 Condo Rentals, Inc.</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Privacy</li>
          </ul>
          <div className='flex space-x-5 items-center justify-between'>
            <div>English (US)</div>
            <div>$ USD</div>
            <ul className='flex space-x-3 '>
              <AiFillFacebook size={25} />
              <AiFillTwitterSquare size={25} />
              <FaInstagramSquare size={25} />
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterBottom;
