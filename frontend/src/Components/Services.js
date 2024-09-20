import React, { Component } from 'react'
import Title from './Title';
import { FaCar, FaChartLine, FaBusinessTime, FaRoad } from 'react-icons/fa';

export default class Services extends Component {

  state = {
    services: [
      {
        icon: <FaCar />,
        title: 'Test drive our cars!',
        info: "Test drive our cars and experience the thrill of the ride! Whether you're looking for performance, comfort, or style, we have a wide range of vehicles waiting for you. Schedule a test drive today and find the perfect car that matches your lifestyle."

      },
      {
        icon: <FaChartLine />,
        title: 'Performance enhancements',
        info: 'Unlock the full potential of your vehicle with our performance enhancements. From increased horsepower to improved fuel efficiency, our upgrades are designed to give you a smoother, more powerful driving experience.'

      },
      {
        icon: <FaBusinessTime />,
        title: 'Open 24/7 for our gold members',
        info: 'Our doors are open 24/7 exclusively for our Gold members. Enjoy round-the-clock access to premium services, ensuring convenience and flexibility whenever you need it.'

      },
      {
        icon: <FaRoad />,
        title: 'Test drive our cars!',
        info: 'Get behind the wheel and test drive our cars! Discover unmatched performance, comfort, and style as you explore our diverse selection of vehicles. Book your test drive today!'

      }
    ]
  }

  render() {

    let { services } = this.state;

    const servicesList = services.map((service, index) => {
      let { icon, title, info } = service;

      return (
        <article key={index} className="service">
          <span>{icon}</span>
          <h6>{title}</h6>
          <p>{info}</p>
        </article>
      )
    });

    return (
      <section className="services">
        <Title title='Our Services' />
        <div className="services-center">
          {servicesList}
        </div>
      </section>
    )
  }
}
