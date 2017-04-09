import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import { LeafletMapboxMap } from '../src';
import Shapes from '../src/LeafletMapboxMap/Shapes.js'

/**
 * pointing to hosted leaflet images for now,
 * we probably won't use defaults in real projects anyways
 */
L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

const displayName = 'LeafletMapboxMap';
const description = 'Stylized LeafletMapboxMaplet Map. Currently using the toner-lite tiles from Stamen Design, but could be adapted to any tiles'
const fancyDescription = 'Stylized LeafletMapboxMaplet Map. Currently using the toner-lite tiles from Stamen Design, but could be adapted to any files. To stylize individual regions defined in your GeoJSON file, youll need to reference the properties of the GeoJSON layer. In this example GeoJSON that would be Analysis-A';

const portland = [45.54362, -122.676482];

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
  <LeafletMapboxMap {...boundsMapProps} >
    <Marker position={portland}>
      <Popup>
        <span>You should be zoomed to me ;)</span>
      </Popup>
    </Marker>
  </LeafletMapboxMap>
);

const fancyDemoTitle = 'Stylized Portland Map with GeoJSON';

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
};

const fancyStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

const fancyDemo = () => (
  <LeafletMapboxMap {...fancyMapProps} >
		<GeoJSON style={fancyStyle} data={Shapes}/>
  </LeafletMapboxMap>
);

const propDocs = { inline: true, propTables: [LeafletMapboxMap] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
		boundsDemoTitle,
		description, 
		boundsDemo,
		propDocs,
	)
	.addWithInfo(
		fancyDemoTitle,
		description, 
		fancyDemo,
		propDocs
	);
