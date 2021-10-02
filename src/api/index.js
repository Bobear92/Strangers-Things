import axios from "axios";
import { getToken } from "../auth";

const BASE = "https://strangers-things.herokuapp.com/api/2106-UNF-RM-WEB-PT";

//example of an api call with axios

export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      user: {
        username,
        password,
      },
    });
    return data;
  } catch (error) {
    console.error;
  }
}
export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      user: {
        username,
        password,
      },
    });
    return data;
  } catch (error) {
    console.error;
  }
}

export async function createPost(
  title,
  description,
  price,
  location,
  willDeliver,
  token
) {
  try {
    const { data } = await axios.post(
      `${BASE}/posts`,

      {
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        },
      },

      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return data.data.post;
  } catch (error) {
    console.error;
  }
}

export async function deletePost(id) {
  const token = getToken();

  try {
    const { data } = await axios.delete(
      `${BASE}/posts/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  } finally {
    location.reload();
  }
}

export async function message(message) {
  const token = getToken();

  try {
    const { data } = await axios.post(
      {
        message: {
          message: message,
        },
      },

      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
