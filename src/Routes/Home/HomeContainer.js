import { MovieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component{
    state={
        nowPlaying: null,
        upComming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount(){
        try{
            const {data:{results:nowPlaying}} = await MovieApi.nowPlaying();
            const {data:{results:upComming}} = await MovieApi.upComming();
            const {data:{results:popular}} = await MovieApi.popular();
            
            this.setState({
                nowPlaying,
                upComming,
                popular
            })
        }catch(error){
            this.setState({
                error:"Can't find movie information"
            })
        }finally{
            this.setState({
                loading: false
            })
        }
    }

    render(){
        const {nowPlaying,upComming,popular,error,loading} = this.state;
        return (
            <HomePresenter
            nowPlaying={nowPlaying}
            upComming={upComming}
            popular={popular}
            error={error}
            loading={loading}
            />
        )
    }
}

export default HomeContainer;