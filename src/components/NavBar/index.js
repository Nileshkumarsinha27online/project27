import React,{Component} from 'react';
import './styles.scss';
export default class NavMenu extends Component{
	render(){
		return(
		<div className='navContainer'>
			<ul className='navList'>
				<li>Home</li>
				<li>Company Profile</li>
				<li>Management</li>
				<li>Products</li>
				<li>Our Clients</li>
				<li>Contact Us</li>
			</ul>
		</div>
	);

	}
}