const BaseUrl = 'http://localhost:4000/api/v1/';

export const sendRequest = async ({ url, data, method, token }) => {
  try {
    const response = await fetch(`${BaseUrl}${url}`, {
      method: method ? method : 'get',
      headers: {
        'Content-Type': 'application/json',
        [token && 'Authorization']: token && `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response) {
      const newData = await response.json();
      return newData;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const LoginUser = async ({ data }) => {
  const response = await sendRequest({
    url: `users/login`,
    method: `POST`,
    data: {
      identifier: data.email,
      password: data.password,
    },
  });

  return response;
};

export const SignUpUser = async ({ data }) => {
  const response = await sendRequest({
    url: `users/signup`,
    method: `POST`,
    data: {
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      passwordConfirm: data.confirmPassword,
    },
  });

  return response;
};

export const AddToCart = async ({ data, token }) => {
  const response = await sendRequest({
    url: `cart/create`,
    method: `POST`,
    data,
    token,
  });
  return response;
};

export const getCarts = async ({ token }) => {
  const response = await sendRequest({
    url: `cart`,
    token,
  });
  return response;
};

export const removeCarts = async ({ token, cartID }) => {
  const response = await sendRequest({
    url: `cart/remove`,
    token,
    method: `DELETE`,
    data: {
      cartID,
    },
  });
  console.log(response);
  return response;
};

export const getAddress = async ({ token }) => {
  const response = await sendRequest({
    url: `users/getAddress`,
    token,
  });

  return response;
};

export const updateAddress = async ({ token, addressData }) => {
  const response = await sendRequest({
    url: `users/updateAddress`,
    token,
    method: `PATCH`,
    data: addressData,
  });

  return response;
};

export const createAddress = async ({ token, addressData }) => {
  const response = await sendRequest({
    url: `users/createAddress`,
    token,
    method: `POST`,
    data: addressData,
  });
  return response;
};
