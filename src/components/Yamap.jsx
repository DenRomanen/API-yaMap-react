import React from "react";
import { YMaps } from "react-yandex-maps";

import MapKazan from "./MapKazan/MapKazan.jsx";

const MapRender = () => (
  <div>
    <YMaps id="yaMap">
      <MapKazan />
    </YMaps>
  </div>
);

export default MapRender;
