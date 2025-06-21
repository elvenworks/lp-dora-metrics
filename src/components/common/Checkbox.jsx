export default function Checkbox({ name, id, onChange, value }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={value}
        onChange={onChange}
        className="appearance-none h-5 w-5 border-2 rounded-full bg-[#D9D9D9] checked:bg-[#6452BF] checked:border-[#D9D9D9] checked:border-4 transition-all"
      />
    </div>
  );
}
