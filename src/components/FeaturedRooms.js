import React, { Component } from "react";
// import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  // static contextType = RoomContext;
  componentDidMount() {
    const {fetchRooms} = this.props;

    fetchRooms();
  }

  render() {
    const {appState} = this.props;
    const { loading, featuredRooms } = appState;
    const rooms = featuredRooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
