export const redirect = (path) => window.location = path;

export const getData = (event, redirectPath) => {
  event.preventDefault();

  for (const input of event.target) {
    if (input.name && input.type !== 'checkbox') {
      localStorage.setItem(input.name, input.value);
    }
    else if (input.type === 'checkbox') {
      localStorage.setItem(input.name, input.checked);
    }
  }

  redirect(redirectPath);
}