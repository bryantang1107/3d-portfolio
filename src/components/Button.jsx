// eslint-disable-next-line react/prop-types
const Button = ({ name, isBeam = false, containerClass, href }) => {
  const buttonContent = (
    <>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </>
  );
  return href ? (
    <a href={href} className={`btn ${containerClass}`}>
      {buttonContent}
    </a>
  ) : (
    <div className={`btn ${containerClass}`}>{buttonContent}</div>
  );
};

export default Button;
