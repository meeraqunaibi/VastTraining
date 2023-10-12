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

let addNewCountry = (newCountry) => {
  countryList.push(newCountry);
};

let addNewCity = (country, newCity) => {
  for (let i = 0; i < countryList.length; i++) {
    if (countryList[i].name === country) {
      countryList[i].cities.push(newCity);
      return countryList[i];
    }
  }
};

let editCountry = (newCountry) => {
  let countryIndex = findCountryIndex(newCountry.name);
  if (countryIndex > -1) {
    countryList.splice(countryIndex, 1, newCountry);
  } else {
    console.log("The country with the given id is not exist");
  }
};

let listCountries = () => {
  countryList.map((country) => {
    console.log(country.name);
  });
};

let searchByCity = (city) => {
  for (let i = 0; i < countryList.length; i++) {
    for (const element of countryList[i]["cities"]) {
      if (element === city) return countryList[i];
    }
  }
};

let deleteCityInCountry = (city) => {
  let country = searchByCity(city);
  let cityIndex = country.cities.findIndex((element) => {
    return element == city;
  });
  country.cities.splice(cityIndex, 1);
  return country;
};

let listCities = (countryName) => {
  let countryObject = findCountryByName(countryName);
  for (let i = 0; i < countryObject["cities"].length; i++) {
    console.log(countryObject["cities"][i]);
  }
};

