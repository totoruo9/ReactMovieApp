import { MovieApi, TVApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component{
    state={
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    };

    updateTerm = (event) => {
        const {target:{value}} = event;
        this.setState({
            searchTerm: value
        })
    }

    searchByTerm = async() => {
        const {searchTerm} = this.state;
        this.setState({loading:true});
        try{
            const {
                data:{ results: movieResults}
            } = await MovieApi.search(searchTerm);
            const {
                data: { results: tvResults}
            } = await TVApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            });
        }catch{
            this.setState({error: "Can't find results"});
        }finally{
            this.setState({loading:false});
        }
    }

    render(){
        const {movieResults,tvResults,searchTerm,loading,error} = this.state;
        console.log(this.state);
        return (
            <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            loading={loading}
            error={error}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm}
            />
        )
    }
}

export default SearchContainer;