import React from 'react';
const crossImage = require('../data/images/XMLID_90_.svg');

const generate_cross = (size, img) => {
	let crossArray = new Array(size).fill(2);
	let isCrosses = crossArray.map((el, key) => <div className="cross" id={"cross_"+key} key={key}><img src={img}/></div> );
	console.log(isCrosses);
	return isCrosses
}

const randomInteger = (min, max) =>{
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

class Main extends React.Component {
	render(){
		return <div className="block main">
			<div className="logotype left top">
				<a href={"/"}>
					<img src={require('../data/images/Ajax logo.svg')} alt="AJAX E-SPORTS"/>
				</a>
			</div>
			<div className="share_buttons vertical">
	    		<div className="button">SHARE</div>
	    	</div>
			<div className="centerBlock">
				<div className="centerBlock_data relative">
					<div className="crosses">
						{generate_cross(9, crossImage)}
					</div>
					<div className="centerBlock_title">AJAX E-SPORT APP GET READY FOR A RUMBLE</div>
					<div className="centerBlock_text">Do you have enough of what it takes to become a new ajax e-sport legend ?</div>
				</div>
				<div className="centerBlock_data">
					<div className="logotype_block">
						<img className="ajax" src={require('../data/images/Ajax.svg')} alt="AJAX E-SPORTS"/>
						<img className="shape" src={require('../data/images/Ajax Shape stars.svg')} alt="AJAX E-SPORTS"/>
						<div className="vertical_line">
							<div className="verical_line_end">
								<img className="shape" src={require('../data/images/Group 4.svg')} alt="AJAX E-SPORTS"/>
							</div>
						</div>
					</div>
				</div>
				<div className="icon_block">
					<img src={require('../data/images/Tripple cross.svg')} alt=""/>
				</div>
			</div>
			<div className="scrollArrow absolute horisontalCenter">
				<img src={require('../data/images/Scroll arrow.svg')} alt="AJAX E-SPORTS"/>
			</div>
		</div>
	}
}

export default Main;