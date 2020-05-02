import React, { Component } from 'react';
import BringChannelData from './BringChannelData'; 
import VideoList from "../LiveTemplateComponent/VideoList"; 
import VideoPlayer from "../LiveTemplateComponent/VideoPlayer"; 
import ChatBar from "../LiveTemplateComponent/ChatTemplate/ChatBar"; 

//const API_KEY = "AIzaSyAbHU2YayTtCVZw08IGVCni7uVVUitPhPs"; // 상우 API KEY
const API_KEY = "AIzaSyAuwZEvGnPgEkdiYMxey0RXsCfclb0vJ7k"; // 성건 API KEY 

class BestLive extends Component {

    constructor(props) {
        super(props);
        this.state = {
          videos: [],
          selectedVideo: null,
          playUrl : ''
        };
        this.ChannelData(); 
      }

      ChannelData() {
        BringChannelData({key: API_KEY}, videos => {
          this.setState({
            videos: videos,
            selectedVideo: videos[0],
            playUrl: ''
          });
        });
      }


    render() {
        console.log(this.state.videos); // 재생목록에서 긁어온 채널 정보 확인. 
    
     
        const playFlag = this.state.playUrl === '' ? false : true; 

        return (
            <>
            <div style={{ marginLeft: "25rem" }}>
                {playFlag ? (
                    <div style= {{ display : 'flex'}}>
                        <VideoPlayer playUrl={this.state.playUrl} />
                        <ChatBar />
                    </div>
                ) : 
                    (<VideoList
                        onVideoSelect={selectedVideo =>
                        this.setState({ selectedVideo })
                        }
                        videos={this.state.videos}
                        setPlay = {playUrl => {
                            this.setState({playUrl}) 
                        }}
                   />)}
            </div>
            </>
        )};
}

export default BestLive;