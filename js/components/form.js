export const redirect = (path) => window.location = path;

export const getData = (event) => {
  const data = {};

  for (const input of event.target) {
    if (input.name && input.name !== 'noHouseNumber') {
      data[input.name] = input.value;
    }
  }

  return data;
}

export const storageData = (property, data) => 
  localStorage.setItem(property, JSON.stringify(data));

export const getStoragedData = (property) => 
  JSON.parse(localStorage.getItem(property));