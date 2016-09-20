import React from 'react'

import Header from 'header';
import WarriorsList from 'warriorsList';
import Leaderboard from 'leaderboard';
import Matchup from 'matchup';
import NotificationList from 'notificationList';

export default React.createClass({

  displayName: 'Content',

  propTypes: {
      socket: React.PropTypes.object.isRequired
  },

  render() {
    return ( 
		<div className="container-fluid">
			<div className="row row--no-gutter">
				<div className="col-xs-12">
					<Header />
				</div>
			</div>
			<div className="row row--no-gutter">
				<aside className="sidebar col-xs-12 col-md-4 col-lg-3">
					<WarriorsList />
					<Leaderboard />
				</aside>
				<div className="main col-xs-12 col-md-8 col-lg-9">
					<NotificationList />
					<Matchup socket={this.props.socket}/>
				</div>
			</div>
		</div>
    );
  }

});

