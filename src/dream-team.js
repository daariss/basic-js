const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName=false;
  let arr=[];
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof(members)=='object' && members!=null){
    for(var i = 0; i < members.length; i++){
      if (typeof(members[i])=='string'){
        arr.push(members[i].trim()[0].toUpperCase());
      }
    }
    let arrS=arr.sort();
    teamName=arrS.join('');
}
  return teamName;
}

module.exports = {
  createDreamTeam
};
