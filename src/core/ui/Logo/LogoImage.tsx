const LogoImage: React.FCC<{
  className?: string;
}> = ({ className }) => {
  return (
    <h1
      className="text-3xl xl:text-4xl font-bold cursor-pointer select-none"
      style={{ fontFamily: "Brush Script MT" }}
    >
      <span>&#10029; </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-blue-700 to-red-500">
        Texas Eclipse Glasses
      </span>
      <span> &#10029;</span>

    </h1>
  );
};

export default LogoImage;


