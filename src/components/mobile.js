import React from 'react';
import Fade from 'react-reveal/Fade';

class Mobile extends React.Component {
  render(){
    return <div className="block mobile">
    		<div className="big_X">
				<img src={require('../data/images/Ajax blurred cross.svg')} alt="AJAX E-SPORTS"/>
    		</div>
			<div className="centerBlock">
				<div className="centerBlock_data">
					<div className="phone_block">
						<Fade bottom>
							<img className="phone" src={require('../data/images/Phone mock.svg')} alt="AJAX E-SPORTS"/>
						</Fade>
					</div>
				</div>
				<div className="centerBlock_data">
					<Fade bottom>
						<div className="centerBlock_title">become a founder of our future</div>
					</Fade>
					<Fade bottom>
						<div className="centerBlock_text">Do you have enough of what it takes to become a new ajax e-sport legend ?</div>
					</Fade>
					<a href={'http://kaleniuk.top/'}>
						<Fade bottom>
							<img className="appStore" src={require('../data/images/app-store-button.png')}/>
						</Fade>
					</a>
				</div>
			</div>
		</div>
  }
}

export default Mobile;