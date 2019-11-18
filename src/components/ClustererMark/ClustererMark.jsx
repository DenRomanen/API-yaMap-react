import React from "react";
import { Clusterer } from "react-yandex-maps";
import PlacesMark from "../PlaceMark/PlacesMark.jsx";

const ClustererMark = () => (
  <Clusterer
    options={{
      gridSize: 50,
      minClusterSize: 2,
      margin: 5
    }}
  >
    {<PlacesMark />}
  </Clusterer>
);

export default ClustererMark;
