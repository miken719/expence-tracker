import { SERVER_URL } from "@/config";
const API_URL = SERVER_URL;
export const fetchExpense = async (date) => {
  const api = await fetch(`${API_URL}?sort=${date}`);

  const data = await api.json();

  return data;
};

export const fetchAddExpense = async (body) => {
  const api = await fetch(`${API_URL}/addExpense`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
  const data = await api.json();
  return data;
};
export const fetchDelete = async (id) => {
  const api = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await api.json();
  return data;
};
export const fetchFilter = async (searchText) => {
  const api = await fetch(`${API_URL}/filter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: searchText,
  });

  const data = await api.json();
  return data;
};
export const fetchUpdate = async (id, body) => {
  const api = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await api.json();
  return data;
};
export const fetchTotalBalance = async () => {
  const api = await fetch(`${API_URL}/totalexpenses`);

  const data = await api.json();

  return data;
};
export const fetchPostIncome = async (body) => {
  const api = await fetch(`${API_URL}/addincome`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });

  const data = await api.json();
  return data;
};

export const fetchIncomeBalance = async () => {
  const api = await fetch(`${API_URL}/income`);

  const data = await api.json();

  return data;
};
