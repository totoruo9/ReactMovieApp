import Loader from "Components/Loader";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";


const InfoWrap = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CompanyLogoWrap = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin:20px 0;
`;

const CompanyLogo = styled.img`
    max-width: 100px;
    margin-left: 20px;
`;

const GoHompage = styled.a`
    margin-top: 20px;
    display: inline-block;
    color: #fff;
    padding: 6px 16px;
    border: 2px solid #fff;
    border-radius: 6px;
    background-color: rgba(255,255,255,.15);
`;

const Collections = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Collection = styled.div`
    width: 200px;
    padding: 10px;
    img {
        width: 100%;
        margin-bottom: 8px;
    }
    p{
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
    }
`;

const Overview = styled.p`
    margin-top:20px;
    font-size: 12px;
    color: rgba(255,255,255,.7);
    line-height: 1.5;
    width: 50%;
`;

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";

const Infomation = ({result, loading, error , collection}) => {
    return (loading
    ? <>
        <Helmet>
            <title>Loading | Nonfilx</title>
        </Helmet>
        <Loader/>
    </>
    : (<InfoWrap>
        <Overview>
            {result.overview}
        </Overview>
        {result.homepage
        &&<GoHompage href={result.homepage} target="_blank">
            Go site →
            </GoHompage>}
        
        <CompanyLogoWrap>
            {result.production_companies
            && result.production_companies.length > 0
            && result.production_companies.map(company => {
                return (
                    company.logo_path
                    ? <CompanyLogo src={BASE_IMG_URL+company.logo_path}/>
                    : company.name
                )
            })}
        </CompanyLogoWrap>

        <Collections>
            {collection
            && collection.length > 0
            && collection.map(part => {
            return (
                <Collection>
                    <img src={BASE_IMG_URL+part.poster_path} />
                    <h3>{part.original_title}</h3>
                    <p>
                        <span>{part.release_date}</span>
                        <span>⭐️{part.vote_average}</span>
                    </p>
                </Collection>
            )
            })}

            {result.seasons
            && result.seasons.length > 0
            && result.seasons.map(season => {
                return <Collection>
                    {season.poster_path
                    ? <img src={BASE_IMG_URL+season.poster_path} alt={season.name}/>
                    : <img src={require("../../../assets/noPoster.png").default} alt="no-images" />}
                    <h3>{season.name}</h3>
                    <p>
                        <span>{season.air_date}</span>
                    </p>
                </Collection>
            })}
        </Collections>
    </InfoWrap>))
}

export default Infomation