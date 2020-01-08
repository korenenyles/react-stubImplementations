import React from "react";
import { getImages } from "../clientApi";

class ImageList extends React.Component {
  state = {
    imagesURI: []
  };

  componentDidMount() {
    getImages().then(getImagesResponse => {
      this.setState({ images: getImagesResponse.imageURI });
    });
  }

  render() {
    return (
      <>
        {this.state.images.map(imageURI => (
          <img src={imageURI} />
        ))}
      </>
    );
  }
}

export default ImageList;