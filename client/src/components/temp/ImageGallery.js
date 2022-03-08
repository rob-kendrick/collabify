import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';
function ImageGallery() {
  const [imageIds, setImageIds] = useState([]);

  // async function loadImages() {

  //     const res = await fetch('http://localhost:4000/cloudapi/upload')
  //     .then(result =>result.json)
  //     .then(res =>console.log(res))
  //     .then(resu => setImageIds(resu)
  //     .catch(err => console.log(err))

  // }

  // useEffect(() => {
  //   loadImages();
  // }, []);

  return (
    <div>
      <h3>Image Gallery</h3>
      {imageIds &&
        imageIds.map((item, index) => {
          return (
            <div>
              <Image
                key={index}
                cloudName="rkendrick"
                publicId={item}
                width="300"
                crop="scale"
              />
            </div>
          );
        })}
    </div>
  );
}

export default ImageGallery;
