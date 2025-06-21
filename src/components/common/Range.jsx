export default function Range({
  min = 0,
  max = 100,
  name,
  id,
  onChange,
  value,
}) {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col w-full py-4">
      <label htmlFor={id}>{name}</label>
      <input
        type="range"
        id={id}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="custom-range w-full"
        style={{
          background: `linear-gradient(to right, #6451BF ${percent}%, #E0E0E0 ${percent}%)`,
        }}
      />
      <div className="flex flex-row items-center justify-between mt-3">
        <p className="txt-primary-light opacity-50 text-sm font-semibold">
          {min}
        </p>
        <p className="txt-primary-light opacity-50 text-sm font-semibold">
          {max}
        </p>
      </div>
    </div>
  );
}
