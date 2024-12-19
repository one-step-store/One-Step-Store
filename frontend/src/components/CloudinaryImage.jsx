// src/components/CloudinaryImage.js
import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const CloudinaryImage = ({ publicId }) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'di5xtc8ty' } });

  const img = cld
    .image(publicId) 
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return <AdvancedImage cldImg={img} />;
};

export default CloudinaryImage;