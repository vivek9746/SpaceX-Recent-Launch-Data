import React from "react";
import { Carousel } from "react-bootstrap";
import Styles from "../components/gallery.module.css";
const Gallery = () => {
  const imgArr = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/145a4477029515.5c7bcf54cc7f2.png",
    "https://cdn.vox-cdn.com/thumbor/1-YAlR7xGDpi7YnPLvX8lAza5HM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20033175/spacex.jpg",
    "https://cms.qz.com/wp-content/uploads/2018/03/spacex-falcon-9-elon-musk-50-launch.jpg?quality=75&strip=all&w=1600&h=900&crop=1",
    "https://images.unsplash.com/photo-1541185934-01b600ea069c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://cdn.hipwallpaper.com/i/94/67/6pM5zl.jpg"
  ];

  return (
    <div>
      <Carousel interval={2000}>
        {imgArr.map((imageUrl) => {
          return (
            <Carousel.Item>
              <div className={Styles.InnerContainer}>
                <img src={imageUrl} className={Styles.InnerContainer} />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;
