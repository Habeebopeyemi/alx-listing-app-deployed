import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-black">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span className="text-gray-600">
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Image
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
        {/* Add more images */}
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-700">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl text-gray-500 font-semibold">
          What this place offers
        </h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li
              key={index}
              className="bg-gray-200 text-amber-950 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {/* Reviews Section */}
        {/* <ReviewSection reviews={property.reviews} /> */}
      </div>
    </div>
  );
};

export default PropertyDetail;
