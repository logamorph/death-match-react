import React from 'react';
import { connect } from 'react-redux';
import WarriorDetail from 'warriorDetail';
import { chooseOpponents, notify, notifyClear } from 'actions';

export const Matchup = React.createClass({

  displayName: 'Matchup',

  propTypes: {
    opponent1: React.PropTypes.object,
    opponent2: React.PropTypes.object,
    socket: React.PropTypes.object,
    chooseOpponents: React.PropTypes.func,
    notify: React.PropTypes.func,
    notifyClear: React.PropTypes.func
  },

  render() {
    let matchup = (this.props.opponent1 && this.props.opponent2) ?
      <div>
        <h2 className="title title--large title--yellow main__title--first">Matchup!</h2>
        <h3 className="title title--medium title--yellow">Who wins??</h3>
        <span onClick={this.eventSelection.bind(this, this.props.opponent1)}>
          <WarriorDetail warrior={ this.props.opponent1 } />
        </span>
        <h3 className="title title--large title--yellow title--italic main__title--third">vs</h3>
        <span onClick={this.eventSelection.bind(this, this.props.opponent2)}>
          <WarriorDetail warrior={ this.props.opponent2 } onClick={this.eventSelection} />
        </span>
      </div> : null;
    
    return matchup; 

  },

  eventSelection(selectedWarrior) {
    this.props.socket.emit('warriorSelection', selectedWarrior.id);
    this.props.chooseOpponents();
  } 
  
});

const mapStateToProps = (store) => {
  return { 
    opponent1: store.warriors.opponent1,
    opponent2: store.warriors.opponent2
  };
}

const mapDispatchToProps = (dispatch) => {
  return { 
    chooseOpponents: () => {
      dispatch(chooseOpponents())
    },
    notify: (action) => {
      dispatch(action)
    },
    notifyClear: (id) => {
      dispatch(notifyClear(id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matchup);