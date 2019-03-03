import React from "react";
import Gallery from "react-photo-gallery";

export default class Followers extends React.Component {
  render() {
    return <Gallery photos={PHOTO_SET} />;
  }
}
const PHOTO_SET = [
  {
    src: "/static/images/bb.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/static/images/cc.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/static/images/cc.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/static/images/cc.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/static/images/cc.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/static/images/cc.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/static/images/cc.jpg",
    width: 1,
    height: 1
  }
];
