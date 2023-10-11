import { country_list } from "./data/countries.mjs";

let reverseCountryList = () => {
  const reversedCountries = country_list.reverse();
  return reversedCountries;
};

let findCountryByName = (s) => {
  const filterCountries = country_list.find((country) => country === s);
  return filterCountries;
};
let filterCountriesByName = (s) => {
  const filterCountries = country_list.filter((country) => country.match(s));
  return filterCountries;
};

let findCountryIndex = (s) => {
  const countryIndex = country_list.indexOf(s);
  return countryIndex;
};

let deleteCountryByName = (name) => {
  const index = findCountryIndex(name);
  country_list.splice(index, 1);
};

let getCountriesCount = () => {
  return country_list.length;
};

let isCountryExist = (s) => {
  const flag = country_list.includes(s);
  return flag;
};

let removeFirstCountry = () => {
  return country_list.shift();
};
let removeLastCountry = () => {
  return country_list.pop();
};
let getSubArrayFromCountryListArray = (start, end) => {
  return country_list.slice(start, end);
};
let combineTwoArrasOfCountries = (firstArray, secondArray) => {
  return firstArray.concat(secondArray);
};

console.log(findCountryIndex("Palestine"));
console.log(country_list);
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
