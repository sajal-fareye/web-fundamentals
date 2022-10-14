
import React, {PureComponent} from "react";


export default class PrintList extends PureComponent{
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.user.map(e=>(
                            <li key={e.username}>
                                <div>{e.username}</div>
                                <div>{e.email}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
