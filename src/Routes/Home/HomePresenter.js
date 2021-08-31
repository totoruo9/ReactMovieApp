import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message"
import Poster from "Components/Poster";

const Conatiner = styled.div`
padding:30px 20px;
`;

const HomePresenter = ({nowPlaying,popular,upComming,loading,error}) => (
    <>
        <Helmet>
            <title>Movies | Nonflix</title>
        </Helmet>
    
        {loading ? <Loader />:
        <Conatiner>
            {
                nowPlaying
                && nowPlaying.length >0
                &&<Section title="Now Playing">
                    {nowPlaying.map(movie=>(
                        <Poster
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        imageUrl={movie.poster_path}
                        isMovie={true}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0,4)}
                        />
                    ))}
                </Section>
            }
            {
                upComming
                && upComming.length >0
                &&<Section title="UpComming">
                    {upComming.map(movie=>(
                        <Poster
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        imageUrl={movie.poster_path}
                        isMovie={true}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0,4)}
                        />
                    ))}
                </Section>
            }
            {
                popular
                && popular.length >0
                &&<Section title="Popular">
                    {popular.map(movie=>(
                        <Poster
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        imageUrl={movie.poster_path}
                        isMovie={true}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0,4)}
                        />
                    ))}
                </Section>
            }
            {error && <Message text={error} color={"#e74c3c"} />}
        </Conatiner>}
    </>
);

HomePresenter.propTypes = {
    nowPlaying:PropTypes.array,
    popular:PropTypes.array,
    upComming:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
}

export default HomePresenter;