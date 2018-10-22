import axios from "axios";

export const FETCH_CONTACTS = "fetch_contacts";
export const FETCH_CONTACT = "fetch_contact";
export const CREATE_POST = "create_post";

const ROOT_URL = "https://jsonplaceholder.typicode.com";

export function fetchContacts() {
  const request = axios.get(`${ROOT_URL}/users`);

  return {
    type: FETCH_CONTACTS,
    payload: request
  };
}

export function fetchContact(id) {
  const request = axios.get(`${ROOT_URL}/users/${id}`);

  return {
    type: FETCH_CONTACT,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts`, values)
    .then(() => callback());

  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);

  return {
    type: CREATE_POST,
    payload: request
  };
}
