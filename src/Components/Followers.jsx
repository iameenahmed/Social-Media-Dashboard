import iconUp from "../assets/icon-up.svg";
import iconDown from "../assets/icon-down.svg";

/* eslint-disable react/prop-types */
const Followers = ({
  icon,
  username,
  count,
  change,
  isDecrease,
  gradientColor,
}) => {
  return (
    <div
      className={`relative space-y-5 overflow-hidden rounded-md bg-secondary-bg pb-6 pt-[1.875rem] text-center transition-colors duration-500 before:absolute before:left-0 before:top-0 before:h-1 before:w-full ${gradientColor}`}
    >
      <div className="inline-flex items-center gap-2">
        <img src={icon} alt="social media icon" />
        <h3 className="text-xs font-bold text-secondary-text">@{username}</h3>
      </div>
      <h4 className="flex flex-col gap-1 text-[3.5rem] font-bold leading-none text-primary-text">
        {count}{" "}
        <span className="text-sm font-normal uppercase tracking-[0.35em] text-secondary-text">
          {username.includes("F.") ? "subscribers" : "followers"}
        </span>
      </h4>
      <div className="flex items-center justify-center ">
        <img
          src={isDecrease ? iconDown : iconUp}
          alt={isDecrease ? "down arrow icon" : "up arrow icon"}
        />
        <p
          className={`ms-1 text-xs font-bold ${
            isDecrease ? "text-red-500" : "text-green-500"
          }`}
        >
          {change} Today
        </p>
      </div>
    </div>
  );
};
export default Followers;
