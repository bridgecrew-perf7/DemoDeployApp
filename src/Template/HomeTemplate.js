import { Route } from "react-router-dom"
import HomeComponent from "../Components/HomeComponent"

export const HomeTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute)=> {
        return <div>
            <HomeComponent {...propsRoute} />
            <props.component {...propsRoute}/>
        </div>
    }}/>
}