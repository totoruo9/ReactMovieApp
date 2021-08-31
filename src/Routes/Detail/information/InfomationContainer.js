import { MovieApi, TVApi } from "api";
import React from "react";
import Infomation from "./InfomationPresenter";

class InfomationContainer extends React.Component {
    constructor(props){
        super(props);
        const {location:{pathname}} = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/"),
            collection: null
        };
    }

    async componentDidMount(){
        const {
            match:{
                params:{id}
            },
            history:{push},
        } = this.props;
        const {isMovie} = this.state;
        const parseId = parseInt(id);
        if(isNaN(parseId)){
            return push("/");
        }
        let result;
        let collection;
        try{
            if(isMovie){
                ({data:result} = await MovieApi.movieDetail(parseId));
                
                if(result.belongs_to_collection){
                    const {belongs_to_collection:{id:collectionId}} = result;
                    const {data: {parts}} = await MovieApi.collection(collectionId);
                    collection = parts;
                }
                
            }else{
                ({data:result} = await TVApi.showDetail(parseId));
            }
        }catch{
            this.setState({
                error:"Can't find anything."
            })
        }finally{
            this.setState({
                loading: false,
                result,
                collection
            })
        }
    }

    render(){
        const {result,error,loading, collection} = this.state;
        console.log(this.state);
        return (
            <Infomation
            result={result}
            error={error}
            loading={loading}
            collection = {collection}
            />
        )
    }
}

export default InfomationContainer;