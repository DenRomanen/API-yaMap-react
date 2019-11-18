import React from "react";
import { Map, ZoomControl } from "react-yandex-maps";
import ClustererMark from "../ClustererMark/ClustererMark.jsx";

const MapKazan = () => (
  <div>
    <Map
      defaultState={{
        center: [55.785, 49.115],
        zoom: 13
        // behaviors: ["drag"]
      }}
      width={800}
      height={500}
    >
      <ZoomControl />
      <ClustererMark />
    </Map>
  </div>
);

export default MapKazan;
