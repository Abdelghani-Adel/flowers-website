import Image from "next/image";
import occasions from "@/public/data/occasions.json";
import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Categories />
    </main>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-neutral-100 p-6 lg:py-10 lg:px-32">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h3 className="text-sm font-medium text-main">Same Day Delivery</h3>
          <h1 className="mt-2 text-4xl lg:text-5xl font-bold text-gray-800">
            More Than Flowers
          </h1>
          <p className="mt-4 text-lg lg:text-4xl text-gray-600">
            A Sensory Journey Awaits With Remarkable Gifts
          </p>
          <button className="mt-6 bg-green-600 text-white py-2 lg:text-2xl lg:px-8 px-4 rounded hover:bg-green-600">
            SHOP NOW
          </button>
        </div>

        <div className="lg:w-1/2 relative">
          <Image
            src="/images/hero.webp"
            alt="A woman enjoying the picnic"
            width={720}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  return (
    <section className="relative p-6 lg:py-10 lg:px-32">
      <h3 className="text-main text-center">Choose your occasion</h3>
      <h2 className="m-2 text-2xl font-bold text-gray-800 text-center">
        Send the perfict gift to show your love
      </h2>

      <div className="flex flex-wrap">
        {occasions.map((occ, i) => (
          <Link
            key={i}
            href={`/occasions?occasion=${occ.name}`}
            className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:bg-gray-50 transition-all cursor-pointer rounded-3xl"
          >
            <Image
              src={occ.image}
              width={150}
              height={150}
              alt={occ.name}
              className="m-auto"
            />
            <h4 className="text-center text-2xl text-background">{occ.name}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
