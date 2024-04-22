// eslint-disable-next-line react/prop-types
const ToggleButton = ({ toggleDarkMode }) => {
  return (
    <>
      <label className="my-5 inline-flex cursor-pointer items-center justify-between">
        <span className={`me-3 text-sm font-bold text-secondary-text`}>
          Dark Mode
        </span>
        <input
          type="checkbox"
          name="toggle-theme"
          id="toggle-theme"
          onChange={toggleDarkMode}
          className="peer sr-only"
        />
        <span className="relative h-6 w-11 rounded-full bg-Toggle after:absolute after:start-[22px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-ToggleGradient peer-checked:after:-translate-x-5 peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full" />
      </label>
    </>
  );
};
export default ToggleButton;
