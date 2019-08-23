import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from '../components/Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"We serve the best cocktails at pools ,club and at the bar!",
            },
            {
                icon:<FaHiking/>,
                title:"endless hiking",
                info:"hiking available to all clients , both habitual or first timers!",
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:"free shuttlevan available to touring sites and bus-stops !",
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:"Beer available at hotel bars and in rooms at clients request!",
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
