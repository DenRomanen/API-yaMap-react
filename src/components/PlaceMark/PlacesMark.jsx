import React from "react";
import { Placemark } from "react-yandex-maps";
import { gettingData } from "../../utils/gettingData";

class PlacesMark extends React.Component {
  state = {
    points: null
  };

  findRestaurant(elem) {
    return elem === "Restaurant";
  }

  componentDidMount() {
    gettingData().then(data => {
      this.setState({ ...this.state, points: data });
    });
  }

  render() {
    if (this.state.points !== null) {
      return this.state.points.map((element, ind) => {
        console.log(element.lat);

        if (element.categories.some(this.findRestaurant)) {
          return (
            <Placemark
              key={ind}
              geometry={[element.lat, element.lng]}
              properties={{
                iconContent: ind + 1,
                hintContent: element.wikipedia_title,
                balloonContentHeader: element.title,
                balloonContent: [
                  `<img class="placeMark__image" alt="${element.title}" src=${element.image}>                
             <div>Категория: ${element.categories}</div>
             <div>Рейтинг facebook ${element.facebook_rating}</div> 
             <div>Рейтинг tripAdvisor ${element.tripAdvisor_rating}</div>`
                ]
              }}
              options={{
                iconColor: "red"
              }}
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            />
          );
        } else {
          return (
            <Placemark
              key={ind}
              geometry={[element.lat, element.lng]}
              properties={{
                iconContent: ind + 1,
                hintContent: element.wikipedia_title,
                balloonContentHeader: element.title,
                balloonContent: [
                  `<img class="placeMark__image" alt="${element.title}" src=${element.image}>
               <div>Категория: ${element.categories}</div>
               <div>Рейтинг facebook ${element.facebook_rating}</div> 
               <div>Рейтинг tripAdvisor ${element.tripAdvisor_rating}</div>`
                ]
              }}
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            />
          );
        }
      });
    } else {
      return null;
    }
  }
}

export default PlacesMark;
