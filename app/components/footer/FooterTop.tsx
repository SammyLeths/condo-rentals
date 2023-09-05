import Container from '@/app/components/Container';
import InspirationTabs from './InspirationTabs';

const FooterTop = () => {
  return (
    <div className='py-12 border-b border-gray-300'>
      <Container>
        <h3 className=''>Inspiration for future getaways</h3>
        <InspirationTabs />
      </Container>
    </div>
  );
};

export default FooterTop;
