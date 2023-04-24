import Image from 'next/image';

const LogoImage: React.FCC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div className={className}>
      <Image src={`/assets/images/tex_logo.svg`} alt="Texas Eclipse Glasses" width={200} height={50} />
    </div>
  );
};

export default LogoImage;


