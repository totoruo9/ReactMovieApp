import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    background: url(${props => props.bgUrl}) center;
    background-size: contain;
    height:180px;
    border-radius: 4px;
    margin-bottom: 8px;
    transition: opacity .1s ease-out;
`;

const Rating = styled.span`
    bottom: 5px;
    left: 5px;
    position: absolute;
    opacity: 0;
    transition: opacity .1s ease-out;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover{
        ${Image}{
            opacity: 0.4;
        }
        ${Rating}{
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 4px;
`;

const Year = styled.span`   
    font-size:10px;
    color: rgba(255,255,255,.5);
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie=false})=>(
    <Link to={isMovie ? `/movie/${id}`: `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={
                        imageUrl
                        ? "https://image.tmdb.org/t/p/w300"+imageUrl
                        : require("../assets/noPoster.png").default
                    }
                />
                <Rating>
                    <span role="img" aria-label="rating">
                        🌟
                    </span>
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title.length > 18 ? title.substring(0,18)+"..." : title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
)

Poster.propTypes = {
    id:PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;