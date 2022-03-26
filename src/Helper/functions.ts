export const capitalizeTheFirstLetterOfEachWord = (str: String) => {
  return str.replace(/(-|^)([^-]?)/g, function (_, prep, letter) {
    return (prep && ' ') + letter.toUpperCase();
  });
};

export const validateProductTitle = (title: string) => {
  if (title.length > 2) {
    return {isValid: true, error: ''};
  } else {
    return {isValid: false, error: 'Please enter valid title'};
  }
};

export const validatePrice = (price: string) => {
  const numbers = /^\d+$/;

  if (price !== '') {
    if (numbers.test(price)) {
      return {isValid: true, error: ''};
    } else {
      return {isValid: false, error: 'Please enter valid price'};
    }
  } else {
    return {isValid: false, error: 'Please enter valid price'};
  }
};
export const validateDescription = (description: string) => {
  if (description.length > 5) {
    return {isValid: true, error: ''};
  } else {
    return {
      isValid: false,
      error: 'Please enter valid description with minimum 10 characters',
    };
  }
};
export const validateImageLink = (imagelink: string) => {
  const url =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  if (imagelink !== '') {
    if (url.test(imagelink)) {
      return {isValid: true, error: ''};
    } else {
      return {isValid: false, error: 'Please enter valid Link for Image'};
    }
  } else {
    return {isValid: false, error: 'Please enter valid Link for Image'};
  }
};
export const deleteProduct = async (id: string) => {
  try {
    const fetchResponse = await fetch(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`,
      {
        method: 'DELETE',
      },
    );
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const createProductAndPost = async (
  title: string,
  selectedCategoryName: string,
  imageLink: string,
  price: number,
  description: string,
) => {
  const product = {
    name: title,
    price: price,
    category: selectedCategoryName,
    description: description,
    avatar: imageLink,
    developerEmail: 'taratam@gmail.com',
  };
  try {
    const fetchResponse = await fetch(
      'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      },
    );
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};
