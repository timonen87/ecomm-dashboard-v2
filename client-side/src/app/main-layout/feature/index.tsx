import SectionTitle from "@//shared/ui/section-title";
import featuresData from "./feature-data";
import SingleFeature from "./single-feature";


const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Рекомендуемые шаблоны"
            paragraph="Откройте для себя широкий выбор высококачественных шаблонов Next.js для ваших веб-проектов.
       "
            center
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
              // <div className="card bg-base-100 w-96 shadow-xl">
              //   <figure>
              //     <img
              //       src="https://nextjstemplates.com/_next/image?url=https%3A%2F%2Fapi.nextjstemplates.com%2Fimage%2FGo---Next.js-SaaS-Boilerplate-and-Landing-Page-for-Business-3b36650f-19e6-40ef-8dd1-45c08cbacd76-go-nextjs.jpg&w=3840&q=100"
              //       alt="Shoes" />
              //   </figure>
              //   <div className="card-body">
              //     <h2 className="card-title">Go - Next.js SaaS Boilerplate and Landing Page for Business</h2>
              //     <p>Go is SaaS Business boilerplate and starter kit template specifically crafted for SaaS businesses and startups...</p>
              //     <div className="card-actions justify-end">
              //       <button className="btn btn-primary">Buy Now</button>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
