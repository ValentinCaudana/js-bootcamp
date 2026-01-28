const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://random-word-api.herokuapp.com/word?number=${wordCount}`,
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.join(" ");
  } else {
    throw new Error("Unable to get puzzle");
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation();
  // return getCountry(location.country)
  const country = await getCountry(location.country);
  return country;
}

const getCountry = async (countryCode) => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=cca2,name")
  
  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.cca2 === countryCode);
  } else {
    throw new Error("Unable to fetch data");
  }
}

const getLocation = async () => {
  const response = await fetch("https://ipinfo.io/json?token=6d0c7866a5894c")

  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch location')
  }
}

export { getPuzzle as default}