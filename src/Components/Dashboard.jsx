import followers from "../data/followers";
import Followers from "./Followers";
import overview from "../data/overview";
import Overview from "./Overview";

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  const gradientColors = [
    "before:bg-Facebook",
    "before:bg-Twitter",
    "before:bg-Instagram",
    "before:bg-YouTube",
  ];
  return (
    <>
      <div className="mb-11 mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {followers.map(({ id, icon, username, count, change, isDecrease }) => {
          return (
            <Followers
              key={id}
              icon={icon}
              username={username}
              count={count}
              change={change}
              isDecrease={isDecrease}
              gradientColor={gradientColors[id - 1]}
            />
          );
        })}
      </div>
      <div>
        <h2 className="mb-6 text-2xl font-bold text-secondary-text">
          Overview - Today
        </h2>
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {overview.map(({ id, title, icon, count, change, isIncrease }) => {
            return (
              <Overview
                key={id}
                title={title}
                icon={icon}
                count={count}
                change={change}
                isIncrease={isIncrease}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
