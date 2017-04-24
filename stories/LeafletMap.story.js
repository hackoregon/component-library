import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import { LeafletMap } from '../src';
import Shapes from '../assets/Shapes.js'

/**
 * pointing to hosted leaflet images for now,
 * we probably won't use defaults in real projects anyways
 */
L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

const displayName = 'LeafletMap';
const title = 'Basic Map';
const description = `
  Really basic leaflet map component to get us started, provide boilerplate environment for other
  storybook leaflet components. Can evolve as we refine our usage, Maybe eventually in to a
  'portland map' or other preconfigured maps.`;

const portland = [45.52, -122.67];

const basicMapDemo = () => (
  <LeafletMap>
    <Marker position={portland}>
      <Popup>
        <span>A pretty CSS3 popup.<br />Easily customizable.</span>
      </Popup>
    </Marker>
  </LeafletMap>
);

const boundsDemoTitle = 'With Bounds';

const boundsMapProps = {
  width: 400,
  height: 300,
  bounds: [
    [45.654527, -122.464291],
    [45.431897, -122.836892],
  ],
};

const boundsDemo = () => (
  <LeafletMap {...boundsMapProps} >
    <Marker position={portland}>
      <Popup>
        <span>You should be zoomed to me ;)</span>
      </Popup>
    </Marker>
  </LeafletMap>
);

const fancyDemoTitle = 'Stylized Portland Map with GeoJSON';
const fancyDescription = 'Stylized map with GeoJSON capabilities. Currently using the toner-lite tiles from Stamen Design, but could be adapted to any files. To stylize individual regions defined in your GeoJSON file, youll need to reference the properties of the GeoJSON layer. In this example GeoJSON that would be Analysis-A';

const fancyMapProps = {
  width: "60%",
  height: 500,
	center: [45.54362, -122.676482],
	zoom: 11,
	zoomControl: false,
	dragging: false,
	touchZoom: false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
  url: "http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png",
  attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a>. Data by <a  href='http://openstreetmap.org'>OpenStreetMap</a>, under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>.",
};

const fancyStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

const fancyDemo = () => (
  <LeafletMap {...fancyMapProps} >
		<GeoJSON style={fancyStyle} data={Shapes}/>
  </LeafletMap>
);

const propDocs = { inline: true, propTables: [LeafletMap] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    basicMapDemo,
    propDocs,
  )
  .addWithInfo(
		boundsDemoTitle, 
		boundsDemo,
		propDocs,
	)
	.addWithInfo(
		fancyDemoTitle,
		fancyDescription, 
		fancyDemo,
		propDocs
	);
