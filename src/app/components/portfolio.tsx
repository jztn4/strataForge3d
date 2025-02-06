import Image from "next/image";

const portfolioItems = [
  { title: "Custom Prototype", image: "/prototype.jpeg?height=300&width=400" },
  {
    title: "Cosplay Masks",
    image: "/ironMan.jpg?height=300&width=400",
  },
  { title: "Desk Toys", image: "/penHolder.jpg?height=300&width=400" },
  { title: "RC Parts", image: "/drone.jpg?" },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="w-[400px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
