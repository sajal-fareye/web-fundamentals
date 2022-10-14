
import React, {PureComponent} from "react";


export default class PrintList extends PureComponent{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <div>
                            <div>username</div>
                        </div>
                    </li>
                </ul>
                <ul>
                    {
                        this.props.user.map(e=>(
                            <li key={e.username}>
                                <div>{e.username}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
