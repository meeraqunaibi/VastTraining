import { countryList } from "./data/countries.mjs";

let reverseCountryList = () => {
  const reversedCountries = countryList.reverse();
  return reversedCountries;
};

let sortCountryList = () => {
  const reversedCountries = countryList.sort();
  return reversedCountries;
};

let findCountryIndex = (countryName) => {
  let countryIndex = countryList.findIndex((country) => {
    return country.name == countryName;
  });
  return countryIndex;
};
let findCountryByName = (countryName) => {
  const filterCountries = countryList.find(
    (country) => country.name === countryName
  );
  return filterCountries;
};
let filterCountriesByName = (countrySubName) => {
  const filterCountries = countryList.filter((country) =>
    country.name.match(countrySubName)
  );
  return filterCountries;
};
let deleteCountryByName = (countryName) => {
  const index = findCountryIndex(countryName);
  countryList.splice(index, 1);
};

let getCountriesCount = () => {
  return countryList.length;
};

let isCountryExist = (countryName) => {
  let flag = findCountryByName(countryName);
  return !flag ? false : true;
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

console.log(reverseCountryList());
console.log(sortCountryList());
console.log(findCountryIndex("Yemen"));
console.log(findCountryByName("Brazil"));
console.log(filterCountriesByName("al"));
console.log(getCountriesCount());
deleteCountryByName("France");
console.log(isCountryExist("Palestine"));
console.log(removeLastCountry());
console.log(removeFirstCountry());
console.log(getCountriesCount());
let firstSub = getSubArrayFromCountryListArray(54, 57);
let secondSub = getSubArrayFromCountryListArray(58, 60);
console.log(combineTwoArrasOfCountries(firstSub, secondSub));
