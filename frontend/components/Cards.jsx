import React from "react";

const Header = ({ number, collection }) => {
  return (
    <div className="header">
      <div className="header_number header_back">{number}</div>
      <div className="header_name header_back">{collection}</div>
    </div>
  );
};

const Picture = ({ picture }) => {
  return (
    <div className="image">
      <img src={picture} alt={picture} />
    </div>
  );
};

const Name = ({ name }) => {
  return <div className="name">{name}</div>;
};

const Settings = ({ settings }) => {
  return (
    <div className="settings">
      {Object.entries(settings).map(([key, value], index) => {
        return (
          <div className="settings-item" key={index}>
            <div>{key}</div>
            <div>{value}</div>
          </div>
        );
      })}
    </div>
  );
};

export const Cards = (props) => {
  return (
    <div className="cards">
      ˙
      <Header number={props.item.number} collection={props.collection} />
      <Picture picture={props.item.picture} />
      <Name name={props.item.name} />
      <Settings settings={props.item.settings} />
    </div>
  );
};
