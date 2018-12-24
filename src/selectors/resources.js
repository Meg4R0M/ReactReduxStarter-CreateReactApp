import { createSelector } from 'reselect'
import lodash from "lodash"

export const getResourceList = state => state.resources.resourceList;

export const getContainsOneResourceList = state => {
  return state.resources.resourceList.filter(r => r.toString().indexOf('1') > -1)
};
export const getPrimeNumberResourceList = state => {
  return state.resources.resourceList.filter(r => isPrimeNumber(r))
};
// Un nombre premier doit etre supérieur a 1 et seul la division avec lui meme doit donner un reste de 0
function isPrimeNumber(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) { // Si un seul chiffre donne un reste !=0 alors il n'est pas premier
      return false;
    }
  }
  // Si il n'est divisible que par lui meme alors on vérifie qu'il est supérieur a 1
  return value > 1;
}

export const specialNumber = createSelector(
    getContainsOneResourceList,
    getPrimeNumberResourceList,
    (containsOne, primes) => {
      return lodash.intersection(containsOne, primes)
    }
);