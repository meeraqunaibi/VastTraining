import { countryList } from "./data/countries.mjs";

let reverseCountryList = () => {
  const reversedCountries = countryList.reverse();
  return reversedCountries;
};

let findCountryByName = (countryName) => {
  const filterCountries = countryList.find((country) => country === countryName);
  return filterCountries;
};
let filterCountriesByName = (countrySubName) => {
  const filterCountries = countryList.filter((country) => country.match(countrySubName));
  return filterCountries;
};

let findCountryIndex = (countryName) => {
  const countryIndex = countryList.indexOf(countryName);
  return countryIndex;
};

let deleteCountryByName = (countryName) => {
  const index = findCountryIndex(countryName);
  countryList.splice(index, 1);
};

let getCountriesCount = () => {
  return countryList.length;
};

let isCountryExist = (countryName) => {
  const flag = countryList.includes(countryName);
  return flag;
};

let removeFirstCountry = () => {
  return countryList.shift();
};
let removeLastCountry = () => {
  return countryList.pop();
};
let getSubArrayFromCountryListArray = (startIndex, endIndex) => {
  return countryList.slice(startIndex, endIndex);
};
let combineTwoArrasOfCountries = (firstCountryArray, secondCountryArray) => {
  return firstCountryArray.concat(secondCountryArray);
};

console.log(findCountryIndex("Palestine"));
console.log(countryList);
reverseCountryList();
console.log(findCountryByName("Brazil"));
deleteCountryByName("France");
console.log(filterCountriesByName("al"));
console.log(getCountriesCount());
console.log(isCountryExist("Italy"));
console.log(findCountryByName("Jordan"));
console.log(removeLastCountry());
console.log(removeFirstCountry());
console.log(getCountriesCount());
let firstSub = getSubArrayFromCountryListArray(54, 57);
let secondSub = getSubArrayFromCountryListArray(58, 60);
console.log(combineTwoArrasOfCountries(firstSub, secondSub));
