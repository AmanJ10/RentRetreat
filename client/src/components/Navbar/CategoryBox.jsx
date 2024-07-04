function CategoryBox({ icon, label, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 border-b-2 hover:text-neutral-800 transition cursor-pointer
        ${isSelected ? "border-b-neutral-800" : "border-transparent"}
        ${isSelected ? "text-neutral-800" : "text-neutral-500"}
        hover:border-b-neutral-800 hover:text-neutral-800
        p-1 md:p-3
        w-24 md:w-32
      `}
      id={`category-${label}`}
    >
      <img
        src={icon}
        alt={label}
        className="w-8 h-8 md:w-8 md:h-8 lg:w-7 lg:h-7"
      />
      <div className="font-medium text-xs md:text-sm lg:text-xs text-center">
        {label}
      </div>
    </div>
  );
}

export default CategoryBox;
