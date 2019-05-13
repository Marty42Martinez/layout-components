import React from 'react';

export default function Color() {
  const color = {
    name: 'darkorchid',
    hex: '#9932CC',
    rgb: {
      red: 153,
      green: 50,
      blue: 204
    }
  };

  return (
    <dl>
      <dt>Color Name</dt>
      <dd>{color.name}</dd>

      <dt>Hex Value</dt>
      <dd>{color.hex}</dd>

      <dt>RGB</dt>
      <dd>Red-{color.rgb.red}</dd>
      <dd>Green-{color.rgb.green}</dd>
      <dd>Blue-{color.rgb.blue}</dd>
    </dl>
  );
}
