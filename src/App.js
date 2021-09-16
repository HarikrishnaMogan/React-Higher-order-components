import React from "react";
import WithBorder from "./Withborder";
import Withprofile from "./Withprofile";
import {compose} from "recompose";
class App extends React.Component{
    render(){
        console.log(this.props);
        return(
            <>
           <h1>Hariooo</h1>
            <p>{this.props.name}</p>
           </>
        );
    }
}

export default compose(WithBorder,Withprofile)(App); //compose library is used to nesting Multiple Hoc(higher order component)
//export default WithBorder(App);     // this is for using single Hoc(higher order component)


//these hoc are used to display some particular information on a selective components