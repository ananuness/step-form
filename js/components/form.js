export const redirect = (path) => window.location = path;

// export const getData = (event) => {
  
// }

export const storageData = (event) => {
  for (const input of event.target) {
    if (input.name && input.name !== 'noHouseNumber') {
      localStorage.setItem(input.name, input.value);
    }
  }
}