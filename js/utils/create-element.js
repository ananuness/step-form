export const createElementFromString = (tag, attributes, content) => {
	const element = document.createElement(tag);

	Object.keys(attributes).forEach(attribute => {
		element.setAttribute(attribute, attributes[attribute]);
	});

	element.innerHTML = content;

	return element;
}