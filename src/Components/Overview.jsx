import iconUp from "../assets/icon-up.svg";
import iconDown from "../assets/icon-down.svg";

// eslint-disable-next-line react/prop-types
const Overview = ({ title, icon, count, change, isIncrease }) => {
  return (
    <div className="space-y-6 rounded-md bg-secondary-bg p-6 text-sm transition-colors duration-500">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-secondary-text">{title}</h3>
        <img src={icon} alt="social media icon" />
      </div>
      <div className="flex items-end justify-between">
        <h4 className="flex text-[2rem] font-bold leading-none text-primary-text">
          {count}
        </h4>
        <div className="flex items-center justify-center">
          <img
            src={isIncrease ? iconUp : iconDown}
            alt={isIncrease ? "up arrow icon" : "down arrow icon"}
          />
          <p
            className={`ms-1 text-xs font-bold ${
              isIncrease ? "text-LimeGreen" : "text-BrightRed"
            }`}
          >
            {change}%
          </p>
        </div>
      </div>
    </div>
  );
};
export default Overview;
