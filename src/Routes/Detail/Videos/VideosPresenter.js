import React from "react";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet";

const VideoWrap = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Video = styled.iframe`
    margin-bottom: 20px;
`;

const NoVideo = styled.p`
    padding: 80px;
    text-align: center;
    font-size: 18px;
    color: #ff0000;
`

const Videos = ({result, loading, error , collection}) => 
        loading
        ? (<>
            <Helmet>
                <title>Loading | Nonfilx</title>
            </Helmet>
            <Loader/>
        </>)
        : (<VideoWrap>
                {result.videos.results
                && result.videos.results.length > 0
                ? result.videos.results.map(video => {
                    return <Video
                    width="790"
                    height="444"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube video player"
                    ></Video>
                })
                : <NoVideo>No Videos Yet</NoVideo>
                }
            </VideoWrap>)

export default Videos