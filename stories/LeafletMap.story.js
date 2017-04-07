import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { LeafletMap } from '../src';

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

const propDocs = { inline: true, propTables: [LeafletMap] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    basicMapDemo,
    propDocs,
  )
  .add(boundsDemoTitle, boundsDemo);
