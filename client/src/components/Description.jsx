import Heading from "./Heading";

function Description({ place }) {
  return (
    <div className="flex flex-col gap-4">
      <Heading title="About this Space" />
      <div className="relative">
        <div className="text-lg text-gray-800 leading-relaxed">
          {place.description}
        </div>
      </div>
    </div>
  );
}

export default Description;
