import React from 'react';

import PreloaderBlock from './components/preloader';
import MenuBlock from './components/menu';
import MainBlock from './components/main';
import MobileBlock from './components/mobile';

class AppicationContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loaded: false
		}
	}
	componentDidMount(){
		setTimeout(() => {
			this.setState({loaded: true});
		}, 3000)
	}
  render(){
    return <div className={(this.state.loaded)?"content isLoaded":"content"}>
    	{(this.state.loaded)?null:<PreloaderBlock/>}
		<MenuBlock/>
		<MainBlock/>
		<MobileBlock/>
    </div>
  }
}

export default AppicationContent;