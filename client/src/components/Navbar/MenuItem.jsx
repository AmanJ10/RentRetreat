function MenuItem({ label, handleOpen }) {
  return (
    <div onClick={handleOpen}>
      <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
        {label}
      </div>
    </div>
  );
}

export default MenuItem;
