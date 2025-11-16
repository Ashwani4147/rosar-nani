import { TransformationCarousel } from "../../TransformationCarousel"; 

export default function TransformationGallerySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ color: "#419fa4" }}
          >
            Transformation Gallery
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the stunning results our expert technicians create. Every
            treatment is a journey from natural to extraordinary.
          </p>
        </div>

        <TransformationCarousel
          items={[
            {
              title: "Classic Manicure",
              beforeImage:
                "https://images.unsplash.com/photo-1747961959189-497e523c5c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbmFpbHMlMjB1bnBhaW50ZWR8ZW58MXx8fHwxNzYzMjEzMDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              afterImage:
                "https://images.unsplash.com/photo-1655450934722-a5d41500421a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc2MzIxMzA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
              title: "Nail Art Design",
              beforeImage:
                "https://images.unsplash.com/photo-1747961959189-497e523c5c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFpbiUyMG5haWxzJTIwbm8lMjBwb2xpc2h8ZW58MXx8fHwxNzYzMjEzMDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              afterImage:
                "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwZGVzaWduJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYzMjEzMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
              title: "Gel & Acrylic",
              beforeImage:
                "https://images.unsplash.com/photo-1747961959189-497e523c5c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJlJTIwbmFpbHMlMjBuYXR1cmFsfGVufDF8fHx8MTc2MzIxMzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              afterImage:
                "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwbmFpbHMlMjBlbGVnYW50fGVufDF8fHx8MTc2MzIxMzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
            {
              title: "Spa Pedicure",
              beforeImage:
                "https://images.unsplash.com/photo-1546963128-6c41a17e83f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZWV0JTIwYmFyZWZvb3QlMjBuYXR1cmFsfGVufDF8fHx8MTc2MzIxMzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              afterImage:
                "https://images.unsplash.com/photo-1638859460750-181fcc7936a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpY3VyZSUyMHNwYSUyMGZlZXR8ZW58MXx8fHwxNzYzMTM1NzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            },
          ]}
        />
      </div>
    </section>
  );
}
