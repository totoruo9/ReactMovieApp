import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message"
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
    padding: 30px 20px;
`;

const Form = styled.form`
    margin-bottom:50px;
    width: 100%;
`;

const Input = styled.input`
    all:unset;
    font-size:28px;
    width: 100%;
`;

const SearchPresenter = ({movieResults,tvResults,loading,error,handleSubmit,searchTerm,updateTerm}) => (
    <Container>
        <Helmet>
            <title>Search| Nonflix</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movie or TV Shows..." value={searchTerm} onChange={updateTerm} />
        </Form>
        {(
            loading
            ? <Loader/>
            : <>
                {
                    movieResults
                    && movieResults.length > 0
                    && (<Section title="Movie Result">
                        {movieResults.map(movie => (
                            <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0,4)}
                            />
                        ))}
                    </Section>)
                }
                {
                    tvResults
                    && tvResults.length > 0
                    && (<Section title="TV Result">
                        {tvResults.map(show => (
                            <Poster
                            key={show.id}
                            id={show.id}
                            title={show.original_name}
                            imageUrl={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0,4)}
                            />
                        ))}
                    </Section>)
                }
                {error && <Message text={error} color={"#e74c3c"} />}
                {tvResults&&movieResults&&tvResults.length===0&&movieResults.length===0&&<Message text={`Nothing Found`} color={"#95a5a6"} />}
            </>
        )}
    </Container>
);

SearchPresenter.propTypes = {
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string,
    searchTerm:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired,
    updateTerm:PropTypes.func.isRequired
}

export default SearchPresenter;