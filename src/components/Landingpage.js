import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
  render(){
    return(
      <div style={{width: '100%', margin:'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}> 
            <img alt='my avatar' src='./myavatar.png' className='avatar-img' />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;