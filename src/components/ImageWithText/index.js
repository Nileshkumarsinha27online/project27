import React,{Component} from 'react';
import './styles.scss';
var logo=require('./logo.png');
export default class ImageWithText extends Component{
	render(){
		return(
			<div className='nameContainer'>
				<img src={logo}/>
				<span className='companyTitle'>Gajanan Infra Engineering Pvt. Ltd.</span>
			</div>

			)
	}
}