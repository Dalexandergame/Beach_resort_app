import React, { Component } from "react";
import defaultBcg from '../images/room-1.jpeg';
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";


export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return(
                <div className="error">
                    <h3>Room does not exist...</h3>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </div>
            )
        }
        return <div>hello from {room.name} page</div>;
    }
}