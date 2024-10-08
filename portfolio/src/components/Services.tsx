import React from 'react';
import '../styles/Services.css';
// import './styles/App.css';

const Services: React.FC = () => {
  const services = [
    { title: 'Branding Design', description: '"I craft compelling brand identities that resonate with audiences and build lasting impressions."' },
    { title: 'UI/UX Design', description: 'I design intuitive interfaces and seamless user experiences that enhance engagement and satisfaction' },
    { title: 'Web Design', description: 'I create visually appealing and functional websites that deliver outstanding user experiences across all devices.' },
    { title: 'Social Media Management', description: 'I strategically manage social media channels to boost your online presence, engage with your audience, and drive growth.' },
  ];

  return (
    <section className="services" style={{ backgroundColor: '#2b163b', color: 'white', padding: '40px' }}>
      <h2 className="services-title">My Quality Services</h2>
      <p className="services-description">
        We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
      </p>
      <div className="services-list">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '15px 20px',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '24px', marginRight: '10px', fontWeight: 'bold' }}>{`0${index + 1}`}</span>
            <div style={{ flexGrow: 1 }}>
              <h3 className="service-title" style={{ margin: '0', fontSize: '18px' }}>{service.title}</h3>
              <p className="service-description" style={{ margin: '5px 0 0 0', fontSize: '14px' }}>
                {service.description}
              </p>
            </div>
            <i
              className="fa fa-arrow-right"
              style={{ marginLeft: 'auto', fontSize: '20px', color: '#6a2bff' }}
            ></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
