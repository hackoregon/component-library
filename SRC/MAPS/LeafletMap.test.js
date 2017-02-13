import React from 'react';
import { shallow } from 'enzyme';
import LeafletMap from './LeafletMap';

describe('LeafletMap', () => {
  const data = {
    position: [45.521, -122.664],
    zoom: 13,
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    geoJSONFeature: {
      type: 'Feature',
      properties: {
        name: 'Coors Field',
        amenity: 'Baseball Stadium',
        popupContent: 'This is where the Rockies play!',
      },
      geometry: {
        type: 'Point',
        coordinates: [45.521, -122.664],
      },
    },
  };

  const wrapper = shallow(<LeafletMap
    position={data.position}
    zoom={data.zoom}
    url={data.url}
    attribution={data.attribution}
    data={data.geoJSONFeature}
  />);

  it('should render with Leaflet', () => {
    expect(wrapper).to.be.length(1);
  });

  it('should render a Map component', () => {
    expect(wrapper.find('Map')).to.have.length(1);
  });

  it('should render a TileLayer component', () => {
    expect(wrapper.find('TileLayer')).to.have.length(1);
  });

  it('should have a property of zoom equaling 13', () => {
    expect(wrapper.props().zoom).to.equal(13);
  });

  it('should render a GeoJSON component', () => {
    expect(wrapper.find('GeoJSON')).to.have.length(1);
  });

  it('should have a name of Coors Field in the geoJSONFeature', () => {
    expect(wrapper.props().data.properties.name).to.equal('Coors Field');
  });
});
