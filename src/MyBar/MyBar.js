import React from 'react';
import { Motion, spring } from 'react-motion';
import d3 from 'd3';
import './MyBar.css';

const MyBar = (props) => {
  const { data } = props;
  console.log(data);
  let height;
  if (data.length !== 0) {
    height = (data.length + 1) * 50;
  } else height = 0;

  const wrapperStyle = {
    backgroundColor: '#ccc',
    position: 'relative',
    width: 800,
    height,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  };

  const blockStyle = {
    position: 'absolute',
    height: 50,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  };

  const spanStyle = {
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top: '25%',
    left: '10px',
    fontWeight: 'bold',
    fontSize: '14pt',
  };

  const makeBars = (x) => {
    const bars = data.map((item, i) =>
      <div
        key={i}
        style={Object.assign({}, blockStyle, {
          scale: 0.05,
          transform: `translate3d(${x}px, 0, 0)`,
          width: data[i].Contributions / data[i].Scale,
          top: (i * 50) + 25,
          backgroundColor: i % 2 === 0 ? 'orange' : 'red',
        })}
      ><span style={spanStyle}>{data[i].Year}</span></div>,
    );
    return bars;
  };

  return (
    <div>
      <Motion
        defaultStyle={{
          x: -800,
        }}
        style={{
          x: spring(0, { stiffness: 60, damping: 16 }),
        }}
      >
        {({ x }) =>
          <div style={wrapperStyle}>
            {makeBars(x)}
          </div>
        }
      </Motion>
    </div>
  );
};

MyBar.displayName = 'MyBar';

export default MyBar;
