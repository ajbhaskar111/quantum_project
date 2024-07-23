import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const LocationMap = (props) => {
  const defaultProps = {
    center: {
      lat: props.latdata,
      lng: props.langdata,
    },
    zoom: 11,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "  https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&parameters",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={props.latdata}
          lng={props.latdata}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};
