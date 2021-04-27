import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class HomePageCursor extends Component {
    render() {
        return (
            // 自動播放 無限循環 設定4秒 可滑動 下方幻燈片開關 右上角圖片計數開關
            <Carousel autoPlay infiniteLoop interval="4000" swipeable showThumbs={false} showStatus={false}>
                <div>
                    <img src="images/cursor/index-00.jpg" alt ="imgErr"/>
                </div>
                <div>
                    <img src="images/cursor/index-02.jpg" alt ="imgErr"/>
                </div>
                <div>
                    <img src="images/cursor/index-03.jpg" alt ="imgErr"/>
                </div>
                <div>
                    <img src="images/cursor/index-05.jpg" alt ="imgErr"/>
                </div>
                <div>
                    <img src="images/cursor/index-06.jpg" alt ="imgErr"/>
                </div>
            </Carousel>
        );
    }
}

export default HomePageCursor;