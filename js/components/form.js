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

export const storageObject = (property, object) => 
  localStorage.setItem(property, JSON.stringify(object));