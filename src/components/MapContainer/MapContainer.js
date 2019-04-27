import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapSlider from '../MapSlider/MapSlider';
import Loading from '../Loading/Loading';
import { GOOGLE_API } from '../../config/config';

import './MapContainer.css';

export class MapContainer extends Component {

  addMarker = (props) => {
    return (
      <Marker key={props._id}
      position={props.location}
      title={props.tags.join(" ")}
      onClick={this.onMarkerClick}
      />
    )
  }

  onMarkerClick = (props, marker, e) => {
    let tags = props.title.split(" ")
    if (props.position.lat) {
    let location = {lat:props.position.lat, lng:props.position.lng}
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        infoWindowTags: tags,
        center: location,
      });
    }
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  expandSlider = (e) => {
    let pin;
    this.props.stuffList.forEach(pic => {
      if (pic.picture === e.target.src) pin = pic
    })
    if (pin.location) this.onMarkerClick(pin.location.current.props, pin.location.current.marker, e)

  }

  componentDidMount(prevProps, prevState) {
    if (this.props.listToMapLocation.lat) {
      let locationNow = {lat:this.props.listToMapLocation.lat, lng: this.props.listToMapLocation.lng}
      this.setState({
        center: locationNow,
        loaded: true
      })
    }
  }

  componentDidUpdate() {
    if (this.state.loaded) {
      this.onMarkerClick(this.props.listToMapLocation.current.props, this.props.listToMapLocation.current.marker)
      this.setState({
        loaded: false
      })
    }
  }


  constructor(props) {
    super(props)

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      infoWindowTags: [],
      initialCenter: {lat: 41.3851, lng: 2.1734},
      center: {},
    }

  }

  render() {
    if (!this.props.gifts) return <Loading />

    else return (
       <div>
          <Map google={this.props.google}
            center={this.state.center}
            initialCenter={this.state.initialCenter}
            onClick={this.onMapClicked}
            streetViewControl={false}
            zoom={13}>
            {this.props.stuffList.map(item => this.addMarker(item))}

            <InfoWindow className="infoWindow" marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
              <div>
                {this.state.infoWindowTags.map((tag, i) => <h5 className="infoTag" key={i}># {tag}</h5>)}
              </div>
            </InfoWindow>
          </Map>

          <MapSlider stuffList={this.props.stuffList} expandSlider={this.expandSlider}/>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({})

const mapStateToProps = (state) => ({

  gifts: state.gifts,
  loading: state.loading,
  location: state.location,
  listToMapLocation: state.listToMapLocation,
  sorted: state.sorted,

})

const wrappedMap = GoogleApiWrapper({
  apiKey: GOOGLE_API
})(MapContainer)

export default connect(mapStateToProps, mapDispatchToProps)(wrappedMap);
