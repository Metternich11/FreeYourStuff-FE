import React, { Component } from 'react';
import Stuff from '../Stuff/Stuff';
import { connect } from 'react-redux';
import Loading from '../Loading/Loading';

import './StuffList.css';

class StuffList extends Component {

  render () {
    if (!this.props.gifts) return <Loading />

    else

    return (
      <div className="stuffList">
        <h2> Find a gift </h2>
        {this.props.gifts.map(item => {
          return <Stuff key={item._id} data={item} myLocation={this.props.location}/>
        })}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({

})

const mapStateToProps = (state) => ({

  gifts: state.gifts,
  location: state.location,
  loading: state.loading,
  sorted: state.sorted

})


export default connect(mapStateToProps, mapDispatchToProps)(StuffList);
