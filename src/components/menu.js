import React from 'react';

const menuData = [
	"Home",
	"Founders",
	"Badges and coins",
	"Register",
	"play"
];

const parseMenu = () => {
	return menuData.map((el, key) => <div className="menu_link" key={key}>{el}</div>);
}

class Menu extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			menu: false
		}
	}
	menu(){
		this.setState({menu: (this.state.menu)?false:true});
	}
  	render(){
	    return <div className="menu" style={{width: (this.state.menu)?"100%":"90px"}}>
	    	<div className="sessin_buttons vertical">
	    		<div className={(this.state.menu)?"button":"button darkHover"}>Sign Up</div>
	    		<div className={(this.state.menu)?"button":"button darkHover"}>Sign In</div>
	    	</div>
	    	<div className={(this.state.menu)?"menuButton opened":"menuButton"} onClick={this.menu.bind(this)}>
	    		<div className="menu_logo">
	    			{(this.state.menu)
	    			?<img src={require('../data/images/Close icon.svg')} alt=""/>
	    			:<img src={require('../data/images/Menu button.svg')} alt=""/>
	    			}
	    		</div>
	    	</div>
	    	<div className={(this.state.menu)?"menuBlock show":"menuBlock"}>
	    		<div className="menu_top"></div>
	    		<div className="menu_center">
	    			<div className="menu_center_back">
	    				<div className="back_block">
	    					<img className="menu_ajax" src={require('../data/images/Ajax.png')} alt=""/>
							<img className="menu_shape" src={require('../data/images/Ajax Shape stars.svg')} alt=""/>
	    				</div>
	    				<img className="krest_menu" src={require('../data/images/White cross big.svg')} alt=""/>
	    			</div>
	    			<div className="block_menu_link">{parseMenu()}</div>
	    		</div>
	    		<div className="menu_footer">
	    			<div className="footer_title">contact</div>
	    			<div className="footer_line">
	    				<img className="tripple_cross" src={require('../data/images/Tripple cross.svg')} alt=""/>
	    				<div className="footer_left_nav">
		    				<div className="button">Privacy policy</div>
		    				<div className="button">Imprint</div>
		    			</div>
	    			</div>
	    			<div className="footer_socials">
	    				<div className="social_btn">
	    					<img src={require('../data/images/Facebook/White.svg')} alt=""/>
	    				</div>
	    				<div className="social_btn">
	    					<img src={require('../data/images/Instagram/White.svg')} alt=""/>
	    				</div>
	    				<div className="social_btn">
	    					<img src={require('../data/images/Twitter/White.svg')} alt=""/>
	    				</div>
	    			</div>
	    			
	    		</div>
	    	</div>
	    </div>
  	}
}

export default Menu;