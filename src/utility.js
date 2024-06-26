/**
 * @file components/Utility.js
 * @authors Fisnik, Jerry
 * @copyright 2020 Fisnik
 */

export default function convertNumber(number){
		var nbr=number.toString();
		var breakPoint=nbr.length%3;
		var result="";		
		if((breakPoint===0)&&(nbr.length>=6)){
			breakPoint+=3;
		}
		for(var j=0; j<nbr.length; j++){
				if((j===breakPoint)&&(breakPoint!==0)){	
					result+=",";						
					breakPoint+=3;
				} 
				result+=nbr[j];
		}
		return result;
}

export const capitalize = (s) => {
	if (typeof s !== 'string') return ''
	return s.charAt(0).toUpperCase() + s.slice(1)
}