import React from "react";
import card_img from "../../assets/logo2.png";

const Data = [
  {
    img: card_img,
    text: "Google chooses Cilium for Google Kubernetes Engine (GKE) networking",
    link: [
      {
        name: "Blog",
        url: "#",
      },
      {
        name: "Video",
        url: "#",
      },
    ],
  },
  {
    img: card_img,
    text: "Google chooses Cilium for Google Kubernetes Engine (GKE) networking",
    link: [
      {
        name: "Blog",
        url: "#",
      },
      {
        name: "Video",
        url: "#",
      },
    ],
  },
  {
    img: card_img,
    text: "Google chooses Cilium for Google Kubernetes Engine (GKE) networking",
    link: [
      {
        name: "Blog",
        url: "#",
      },
      {
        name: "Video",
        url: "#",
      },
    ],
  },
  {
    img: card_img,
    text: "Google chooses Cilium for Google Kubernetes Engine (GKE) networking",
    link: [
      {
        name: "Blog",
        url: "#",
      },
      {
        name: "Video",
        url: "#",
      },
    ],
  },
];

const Client = () => {
  return (
    <div className="client">
      <div className="web-align">
        <h1>Our Clients</h1>
        <div className="client-container">
          {Data.map((item, index) => {
            return (
              <div className="client-card" key={index}>
                <div className="client-card__img">
                  <img src={item.img} alt="client" />
                </div>
                <div className="client-card__text">{item.text}</div>
                <div className="client-card__footer">
                  {item.link.map((link, index) => {
                    return (
                      <a href={link.url} key={index}>
                        {link.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Client;
