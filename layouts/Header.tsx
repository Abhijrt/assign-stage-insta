import InstaLogoSvg from '~/public/svg/insta-logo.svg';

const Header = () => {
  return (
    <div className='h-[44px] px-4 flex border-b border-solid border-black-100'>
      <span className='mt-1 flex items-center'>
        <InstaLogoSvg />
      </span>
    </div>
  );
};

export default Header;
