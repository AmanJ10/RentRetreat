import amazingviews from "../../assets/amazingviews.jpg";
import beachfront from "../../assets/beachfront.jpg";
import bed from "../../assets/bed.jpg";
import cabins from "../../assets/cabins.jpg";
import camper from "../../assets/camper.jpg";
import cities from "../../assets/cities.jpg";
import earthhomes from "../../assets/earthhomes.jpg";
import farms from "../../assets/farms.jpg";
import golfing from "../../assets/golfing.jpg";
import houseboats from "../../assets/houseboats.jpg";
import islands from "../../assets/islands.jpg";
import lakefront from "../../assets/lakefront.jpg";
import luxe from "../../assets/luxe.jpg";
import nationalparks from "../../assets/nationalparks.jpg";
import new1 from "../../assets/new1.jpg";
import omg from "../../assets/omg.jpg";
import tropical from "../../assets/tropical.jpg";
import amazingviews1 from "../../assets/amazingviews1.jpg";
import amazingviews2 from "../../assets/amazingviews2.jpg";
import amazingviews3 from "../../assets/amazingviews3.jpg";
import amazingviews4 from "../../assets/amazingviews4.jpg";
import amazingviews5 from "../../assets/amazingviews5.jpg";
import amazingviews6 from "../../assets/amazingviews6.jpg";
import amazingviews7 from "../../assets/amazingviews7.jpg";
import amazingviews8 from "../../assets/amazingviews8.jpg";
import amazingviews9 from "../../assets/amazingviews9.jpg";
import amazingviews10 from "../../assets/amazingviews10.jpg";
import amazingviews11 from "../../assets/amazingviews11.jpg";
import amazingviews12 from "../../assets/amazingviews12.jpg";

const categories = [
  {
    name: "Amazing Views",
    icon: amazingviews,
  },
  {
    name: "Beachfront",
    icon: beachfront,
  },
  {
    name: "Bed & Breakfast",
    icon: bed,
  },

  {
    name: "Cabins",
    icon: cabins,
  },
  {
    name: "Camper Vans",
    icon: camper,
  },
  {
    name: "Cities",
    icon: cities,
  },
  {
    name: "Earth homes",
    icon: earthhomes,
  },
  {
    name: "Farms",
    icon: farms,
  },

  {
    name: "Golfing",
    icon: golfing,
  },
  {
    name: "Houseboats",
    icon: houseboats,
  },

  {
    name: "Islands",
    icon: islands,
  },
  {
    name: "Lakefront",
    icon: lakefront,
  },
  {
    name: "Luxe",
    icon: luxe,
  },
  {
    name: "National Parks",
    icon: nationalparks,
  },
  {
    name: "OMG",
    icon: omg,
  },
  {
    name: "Tropical",
    icon: tropical,
  },
  {
    name: "New",
    icon: new1,
  },
];

const perksList = [
  {
    name: "Wifi",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
        />
      </svg>
    ),
  },
  {
    name: "Parking",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
  {
    name: "Tv",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>
    ),
  },
  {
    name: "Pets",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
        />
      </svg>
    ),
  },
  {
    name: "Entrance",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
        />
      </svg>
    ),
  },
  {
    name: "Karaoke",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
        />
      </svg>
    ),
  },
];

const places = [
  {
    id: "1",
    title: "Nono-Wada style Pool villa, forest view &gazebo",
    name: "Velhe, Torna-Rajgad, India",
    category: "Amazing Views",
    description:
      "Looking for a romantic and couple-friendly getaway in Panchgani? Look no further than The Glasshouse! This charming glass room offers cosy furnishings and beautiful French windows, as well as access to modern amenities and an expansive outdoor space. ",
    photos: [
      amazingviews1,
      amazingviews3,
      amazingviews5,
      amazingviews7,
      amazingviews9,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv", "Karaoke"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "123 abcd efgh ijkl 456",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "2",
    title: "Luxury Private Suite Estate overlooking the sea",
    name: "Honeychilk Palace Breakfast Wifi Lawn",
    category: "Amazing Views",
    description:
      "Escape the hustle and bustle of the city and immerse yourself in the beauty of traditional South Indian architecture at Honeychilk Palace, an epitome and tradition and luxury near Bangalore. As you step through the unique red brick facade, you'll be transported to a world of rustic old-world charm, with interiors that exude warmth and character.",
    photos: [
      amazingviews2,
      amazingviews4,
      amazingviews6,
      amazingviews8,
      amazingviews10,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv", "Karaoke"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "456 abcd ijkl 123",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "3",
    title: "Jannat 100% PetFriendly Pool villa with LakeView",
    name: "Pimplad Nasik, India",
    category: "Amazing Views",
    description:
      "Jannat blends the most luxurious backdrop of your fantasy with nature’s incredible marvels to create a tranquil utopia that caters to your comfort where Breakfast is complimentary! This 3Bed pool villa in Nashik is a hidden paradise waiting to dazzle you with its tranquil charm. Surrounded by nature as far as the eyes can see,the open lawns within the premises give you all the space you need to take a refreshing walk,practice your morning asanas or indulge your kids in a fun game of catch&cook.The space •This villa offers 3 spacious bedrooms and ensuite bathrooms in 2 bedrooms, giving you ample space to have a luxurious getaway from the congested city life. With an elderly-friendly approach in mind, 1 bedroom of the villa is situated on the ground level, where your elderly parents can rest in comfort without having to make their way up the stairs. •The 2 bedrooms on the first floor can be occupied by younger couples and children. These rooms offer spectacular views of Waldevi lake so you can wake up and head to the windows allowing the cool breeze to gently embrace you. Spend some time in the living room gazing at the garden outside or turn the vast room into your personal dancefloor or karaoke zone. As beautiful as its surroundings are, the villa itself charms you with its decor and makes you want to stay indoors. • Challenge your friends and family members with exciting and fun games, such as table tennis, table hockey, carrom and other board games and discover who’s the best player in the group. Dip your feet in the swimming pool, or take a deep dive and wash away the heat during a sweltering afternoon. If it's a chilly winter's day, head out to the loungers after breakfast to soak in some sun. No matter the weather, this villa has everything indoors and outdoors to create the perfect vacation setting for you!",
    photos: [
      amazingviews3,
      amazingviews5,
      amazingviews7,
      amazingviews9,
      amazingviews11,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "123 efgh abcd 456",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "4",
    title: "Coral-Romantic Glasshouse Suite-The Pause Project",
    name: "Siolim, India",
    category: "Amazing Views",
    description:
      "Discover a world of peace & inspiration at The Pause Project, a cozy romantic Airbnb nestled in the middle of a lush forest in Siolim, North Goa. Perfect for solo travelers, couples & families, it offers a space to slow down. Immerse yourself in books, music, travel memories & a lived-in ambiance that feels like home. Cook a meal in the kitchenette or explore the vibrant cuisine of Siolim, known for its cafes & bars, with Anjuna, Vagator, Assagao & Morjim, Mandrem beaches just 15-20 min away. Other things to note Coral is a dreamy room, in a little high-rise amidst the hills of Wadi, Siolim, a tiny neighbourhood in North Goa. It's on the third (2.5) floor of The Pause Project, a building dedicated for people based in cities to relax, reset, and then get back to the hustle all re-energised. While it may get a little too relaxing, access to Coral ensures you get your little daily dose of muscle movement by being accessible by stairs (2.5 floors) and doesn't have a lift. It's the little effort that counts, that gets one closer to the dream.",
    photos: [
      amazingviews4,
      amazingviews6,
      amazingviews8,
      amazingviews10,
      amazingviews12,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "abcd efgh ijkl 456",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "5",
    title: "Tansi Pool Villa and Nandi Hills",
    name: "Nandi Hills, India",
    category: "Amazing Views",
    description:
      "Rustic and Eclectic Villa that is brand new and tastefully done with wooden cottages, private pool and modern amenities! The Villa is surrounded by picturesque views of hills all around. The space The villa is in a gated community at foothills of Nandi with stunning views of hills all around. The place is ideal for large groups, families, couples and groups for a weekend get away. It is about 1.5 hours from Bangalore. Guest access Entire villa can be used by guests under one reservation. Property is not shared with other guests. Other things to note Please note for weekends a minimum of 8 guests booking will be confirmed. Less than 8 guests for Friday/Saturday bookings is not confirmed and the reservation may be cancelled. Food options - a) There is a fully functional kitchen with Hob, microwave and refrigerator. b) You can order through Swiggy, there are few options around sometimes c) We have a food service provider within the community who can deliver food daily on a pre order basis for extra cost. Their contact will be shared post booking. d) There are few restaurants and cafés within 10-15 mins drive",
    photos: [
      amazingviews5,
      amazingviews7,
      amazingviews9,
      amazingviews11,
      amazingviews1,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv", "Karaoke"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "123 abcd efgh ijkl",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "6",
    title: "Cozy Waterfront Tiny Home with Deck, near Panshet",
    name: "Kambegi, India",
    category: "Amazing Views",
    description:
      "Escape the city and discover our luxurious waterfront Tiny Home. Nestled under the soothing shade of a magnificent, sprawling tree, our cozy home offers a perfect blend of luxury, comfort, and natural beauty. Immerse yourself in nature with the gentle breeze that gently flows through the property, while enjoying the symphony of birdsong & the rustling of leaves. It is the ideal escape for busy professionals in need of a rejuvenating break, or friends & families seeking quality time together.",
    photos: [
      amazingviews6,
      amazingviews8,
      amazingviews10,
      amazingviews12,
      amazingviews2,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv", "Karaoke", "Pets"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "123 efgh ijkl 456",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "7",
    title: "Panoramic Sea & Island view 2BHK Apartment",
    name: "Dabolim, India",
    category: "Amazing Views",
    description:
      "Admire stunning sea view from the bedrooms, living room & big balconies while enjoying your favourite drink or reading a book any time. A place to fall in love at first sight, the moment you step inside! Welcome to our vacation home-‘The Sea-nery’ by A.R, offering panoramic views of Sea & Island. Gated apartment with 24hrs security, swimming pool & power back up. The space Perfect apartment with sea view for a romantic getaway or a chance to relax,recharge and commute with nature. Relaxing Holiday or a peaceful workation, this serene & calm place will leave you mesmerised. This holiday home is just 7 mins drive from the Dabolim airport, 8 mins drive to the Bogmalo beach and about 20-30mins to other south and central beaches. Enjoy and cheers!!!",
    photos: [
      amazingviews7,
      amazingviews9,
      amazingviews11,
      amazingviews1,
      amazingviews3,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv", "Pets"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "efgh ijkl 456",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "8",
    title: "Luxurious 3BHK with Private Pool",
    name: "North Goa, India",
    category: "Amazing Views",
    description:
      "Experience a homely stay in luxurious villa with a pool, scenic view of Nerul river, paddy fields, located within lush green surroundings near Candolim beach! The Villa has been designed to an open plan living space with large covered sit-out and is perfect for spending cool evenings watching the greenery around. Pampered is what you will feel when you stay at this villa built to provide an uber luxury experience. This unique place has a style all its own.",
    photos: [
      amazingviews8,
      amazingviews10,
      amazingviews12,
      amazingviews2,
      amazingviews4,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "123 abcd efgh",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "9",
    title: "SundeckAvenue! 1BHK Luxury Apartment with pool",
    name: "Arpora, India",
    category: "Amazing Views",
    description:
      "Welcome to this centrally-located apartment nestled in the heart of Goa, spacious and stylishly decorated, perfect to unwind & enjoy all that stunning Goa has to offer. Boasting of a private sundeck, a large balcony, a swimming pool, and gym access, power Backup, you'll have the most relaxing stay. The apartment is just a stone's throw away from the popular Baga & Anjuna beaches, making it the ideal choice for those looking to experience the vibrant and lively atmosphere of Goa.",
    photos: [
      amazingviews9,
      amazingviews11,
      amazingviews1,
      amazingviews3,
      amazingviews5,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "abcd efgh ijkl",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "10",
    title: "Stellar Assagao 3BHK Villa With A Private Pool",
    name: "Assagao, India",
    category: "Amazing Views",
    description:
      "Kamalaya Assagao in North Goa with stunning uninterrupted field view. The villa has 3 large bedrooms both with en-suite bathrooms and the master en-suite includes a bathtub. An open concept living area including kitchen, leads out to an open air living. Upstairs there is a lovely open plan very versatile living space and more incredible field view. An infinity pool completes the outdoor space where you can relax whilst enjoying the full view towards Assagao",
    photos: [
      amazingviews10,
      amazingviews12,
      amazingviews2,
      amazingviews4,
      amazingviews6,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv", "Pets"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "abcd ijkl",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "11",
    title: "Nandi Serenity Villa",
    name: "Muddenahalli, India",
    category: "Amazing Views",
    description:
      "Escape the hustle and bustle of the city and discover a tranquil oasis at our Serene Homestay Retreat, perfectly situated amidst nature's beauty and just a stone's throw away from the iconic Skandagiri hills and the Esha Foundation.",
    photos: [
      amazingviews11,
      amazingviews11,
      amazingviews3,
      amazingviews5,
      amazingviews7,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "123 abcd efgh ijkl 456 mno",
    checkIn: "14:00",
    checkOut: "11",
  },
  {
    id: "12",
    title: "Stelliam's Coastal theme 2bhk sea facing home, Goa",
    name: "Goa, India",
    category: "Amazing Views",
    description:
      "Indulge in the comforts of this exquisite 2-bedroom retreat, meticulously curated by the artisans of Stelliam Holidays. Here, you'll find not just a space but an experience, complete with a breathtaking sea view. Nestled in close proximity to Odxel Beach, this haven offers an escape from the clamor of city life. Situated within a well-established residential enclave , close to GMC(Goa Medical College) and Bay 15 Resto, this apartment is a treasure trove of amenities that cater to your comfort. The space Experience a neighborhood that embodies safety and tranquility, enveloped by lush greenery and caressed by invigorating sea breezes. The space itself is a testament to comfort, offering two well-appointed bedrooms and a fully functional kitchen. Additionally, a convenient powder room enhances the common area, while a captivating view awaits you on the beautiful balcony with outdoor seating.",
    photos: [
      amazingviews12,
      amazingviews2,
      amazingviews4,
      amazingviews6,
      amazingviews8,
    ],
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    perks: ["Wifi", "Entrance", "Parking", "Tv", "Pets"],
    bedrooms: "2",
    beds: "2",
    bathrooms: "2",
    maxGuests: 4,
    pricePerNight: 11784,
    address: "123 abcd efgh ijkl 456 xyz",
    checkIn: "14:00",
    checkOut: "11",
  },
];

export { categories, perksList, places };
