import { services } from "../data";
import Service from "./Service.js";
const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="section-title">
        <h2>
          Our <span>Services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </div>
  );
};
export default Services;
