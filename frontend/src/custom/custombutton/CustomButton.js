import './CustomButton.css'

const Button = ({ children, handleClick, className }) => (
    <button className={`button ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
  

export default Button