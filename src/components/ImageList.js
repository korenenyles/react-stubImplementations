import React from "react";
import { getImages } from "../clientApi";
class ImageList extends React.Component {
  state = {
    images: []
  };
  componentDidMount() {
    getImages().then(getImagesResponse => {
      // debugger;
      console.log(getImagesResponse);
      this.setState((state, props) => {
        return { images: getImagesResponse.imageURI };
      });
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