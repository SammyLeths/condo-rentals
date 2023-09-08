import Container from '@/app/components/Container';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import { BsToggleOn } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoToggleSharp } from 'react-icons/io5';

const FooterBottom = () => {
  return (
    <Container>
      <div className='flex flex-row pb-10 lg:py-10 text-sm md:text-base'>
        <div className='flex flex-col-reverse lg:flex-row gap-5 w-full items-start md:items-center justify-between'>
          <div className='flex gap-1 lg:gap-7 flex-col lg:flex-row items-start md:items-center'>
            <span>&copy; 2023 Condo Rentals, Inc.</span>
            <ul className='flex gap-5 md:gap-7 items-start'>
              <li>Terms</li>
              <li>Sitemap</li>
              <li>Privacy</li>
              <li className='flex items-center gap-1'>
                Your Privacy Choices <IoToggleSharp size={20} color='blue' />
              </li>
            </ul>
          </div>
          <div className='flex gap-5 items-center justify-between '>
            <div>English (US)</div>
            <div>$ USD</div>
            <ul className='hidden md:flex gap-3'>
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
