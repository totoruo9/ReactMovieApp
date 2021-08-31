import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet";
import { Link, withRouter } from "react-router-dom";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background:url(${props => props.bgImage}) center;
    background-size:cover;
    filter: blur(3px);
    opacity: .5;
    z-index: 0;
`;

const Content = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    align-items: center;
    justify-content: center;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background:url(${props => props.bgImage}) center;
    background-size:cover;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h2`
    font-size: 70px;
    margin-bottom: 12px;
`;

const ItemContainer = styled.div`
`;

const Item = styled.span`
`;

const Divider = styled.span`
    margin: 0 8px;
    display: inline-block;
`;



const SelectArea = styled.div`
    display: flex;
    margin-top: 20px;
`;

const SelectBtn = styled(Link)`
    padding: 16px 32px;
    box-sizing: border-box;
    border:2px solid #fff;
    outline: none;
    &.on{
        background: #fff;
        color:#1c1c1c;
    };
    :first-child {
        border-right: 0;
    };
    background: ${props => props.selected ? "#fff" : "rgba(255,255,255,.15)"};
    color: ${props => props.selected ? "#333" : "#fff"};
`;



const DetailPresenter = withRouter(({location: {pathname}, result, loading, error , collection}) => (
    loading
    ? <>
        <Helmet>
            <title>Loading | Nonfilx</title>
        </Helmet>
        <Loader/>
    </>
    : (<Container>
        <Helmet>
            <title>{result.original_title ? result.original_title : result.original_name} | Nonfilx</title>
        </Helmet>
        <Backdrop
            bgImage={`${BASE_IMG_URL}${result.backdrop_path}`}
        />
        <Content>
            <Cover bgImage={result.poster_path ? `${BASE_IMG_URL}${result.poster_path}` : require("../../assets/noPoster.png")} />
            <Data>
                <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                <ItemContainer>
                    <Item>
                        {result.release_date
                        ? result.release_date.substring(0,4)
                        : result.first_air_date.substring(0,4)}
                    </Item>
                    <Divider>•</Divider>
                    <Item>
                        {result.runtime
                        ? result.runtime
                        : result.episode_run_time[0]}min
                    </Item>
                    <Divider>•</Divider>
                    <Item>
                        {result.genres
                        && result.genres.map((genre, index) =>
                            index === result.genres.length -1
                            ? genre.name
                            : `${genre.name} / `)}
                    </Item>
                    <Divider>•</Divider>
                    <Item>
                        {result.production_countries
                        && result.production_countries.length > 0
                        && result.production_countries.map((contury, index) => {
                            console.log(index);
                            return (index === result.production_countries.length -1
                            ? contury.name
                            : `${contury.name} / `)
                        })}
                    </Item>

                    <SelectArea>
                        <SelectBtn selected={pathname.split("/")[3] === "infomation"} to={`/${pathname.split("/")[1]}/${pathname.split("/")[2]}/infomation`}>Infomation</SelectBtn>
                        <SelectBtn selected={pathname.split("/")[3] === "teaser-trailer"} to={`/${pathname.split("/")[1]}/${pathname.split("/")[2]}/teaser-trailer`}>Teaser trailer</SelectBtn>
                    </SelectArea>
                </ItemContainer>
            </Data>
        </Content>
    </Container>)
));

DetailPresenter.propTypes = {
    result:PropTypes.object,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
}

export default DetailPresenter;