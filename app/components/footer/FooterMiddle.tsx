import Container from '../Container';
import Link from 'next/link';

const footerNav = [
  {
    id: 'sp1',
    name: 'Support',
    links: [
      { name: 'Help Center', url: '#' },
      { name: 'CondoCover', url: '#' },
      { name: 'Anti-discrimination', url: '#' },
      { name: 'Disability support', url: '#' },
      { name: 'Cancellation options', url: '#' },
      { name: 'Report neighbourhood concern', url: '#' },
    ],
  },
  {
    id: 'hs1',
    name: 'Hosting',
    links: [
      { name: 'Short let your home', url: '#' },
      { name: 'CondoCover for Hosts', url: '#' },
      { name: 'Hosting resources', url: '#' },
      { name: 'Community forum', url: '#' },
      { name: 'Hosting responsibly', url: '#' },
      { name: 'Rental-friendly condos', url: '#' },
    ],
  },
  {
    id: 'cr1',
    name: 'Condo Rentals',
    links: [
      { name: 'Newsroom', url: '#' },
      { name: 'New features', url: '#' },
      { name: 'Careers', url: '#' },
      { name: 'Investors', url: '#' },
      { name: 'Gift cards', url: '#' },
      { name: 'Condorentals.com emergency stays', url: '#' },
    ],
  },
];

const FooterMiddle = () => {
  return (
    <Container>
      <div className='flex flex-col lg:flex-row justify-items-start gap-6 lg:gap-0 py-10 border-b-0 lg:border-b border-gray-300'>
        {footerNav.map((nav) => (
          <ul
            key={nav.id}
            className='space-y-3 flex-1 border-b lg:border-b-0 pb-7 lg:pb-0 border-gray-300'
          >
            <li className='font-bold'>{nav.name}</li>
            {nav.links.map((link) => (
              <li key={link.name}>
                <Link className='hover:underline' href={link.url}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Container>
  );
};

export default FooterMiddle;
