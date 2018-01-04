/**
 * @Author: Guoxing.han 
 * @Date: 2017-12-08 17:27:43 
 * @version 0.0.1 
 */

export const isEmptyObject = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}