import { Printer, PenTool, Cog } from "lucide-react";

const services = [
  {
    title: "3D Printing",
    description:
      "High-quality, custom 3D printing services for prototypes and production parts.",
    icon: Printer,
  },
  {
    title: "3D Design",
    description:
      "Expert 3D modeling and design services to bring your ideas to life.",
    icon: PenTool,
  },
  {
    title: "Consulting",
    description:
      "Professional advice on 3D printing technologies and materials.",
    icon: Cog,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <service.icon className="w-12 h-12 mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
