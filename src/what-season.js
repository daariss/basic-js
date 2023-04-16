const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let season;
  if (typeof(date)=="object" && date instanceof Date)
  {
      let mounth=date.getMonth(), year=date.getFullYear(), day=date.getDate();
      if (mounth==1 && day>29){
        season='Invalid date!';
      }
      if (mounth==0 || mounth==1 || mounth==11){
        season='winter';
      }
      if (mounth==2 || mounth==3 || mounth==4){
        season='spring';
      }
      if (mounth==5 || mounth==6 || mounth==7){
        season='summer';
      }
      if (mounth==8 || mounth==9 || mounth==10){
        season='autumn';
      }
      if (mounth>11 || day>31){
        season='Invalid date!';
      }
    }
    else if(typeof(date)!='object'){
      {
        season='Unable to determine the time of year!';
      }

    }
    // else if(date.getFullYear() != year && date.getMonth() != month && date.getDate() != day){
    //   season='Invalid date!';
    // }
    else{
      season='Invalid date!';
    }
  return season;
}

module.exports = {
  getSeason
};
