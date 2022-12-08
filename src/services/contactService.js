import axios from "axios";

const SERVCER_URL = "http://localhost:9000";

export const getAllContacts = () => {
  const url = `${SERVCER_URL}/contacts`;
  return axios.get(url);
};

export const getContact = (contactId) => {
  const url = `${SERVCER_URL}/contacts/${contactId}`;
  return axios.get(url);
};

export const getAllGroups = () => {
  const url = `${SERVCER_URL}/groups`;
  return axios.get(url);
};

export const getGroup = (groupId) => {
  const url = `${SERVCER_URL}/groups/${groupId}`;
  return axios.get(url);
};

export const createContact = (contact) => {
  const url = `${SERVCER_URL}/contacts`;
  return axios.post(url,contact);
};

export const updateContacts = (contactId,contact) => {
  const url = `${SERVCER_URL}/contacts/${contactId}`;
  return axios.put(url,contact);
};

export const deleteConatact = (contactId) => {
  const url = `${SERVCER_URL}/contacts/${contactId}`;
  return axios.delete(url);
};