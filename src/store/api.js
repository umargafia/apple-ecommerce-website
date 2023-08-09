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

    const newData = await response.json();
    return newData;
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
