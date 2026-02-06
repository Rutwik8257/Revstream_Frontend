import axios from "axios";

const baseUrl = "https://www.revgoogle.com";

// helper function to always fetch latest token
const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// ===== AUTH / COMMON =====
export const addUser = async (data) => {
  const res = await axios.post(`${baseUrl}/api/registration`, data);
  return res.data;
};

export const addAddressCompany = async (payload, userId) => {
  const res = await axios.post(
    `${baseUrl}/api/address/${userId}`,
    payload
  );
  return res.data;
};

// ===== LOGIN =====
export const login = async (data) => {
  const res = await axios.post(`${baseUrl}/api/auth/login`, data);
  return res.data;
};

// ===== USER DATA =====
export const getUser = async () => {
  const res = await axios.get(`${baseUrl}/api/company/profile`, {
    headers: authHeader(),
  });
  return res.data;
};

// ===== COMPANY PROFILE =====
export const updateCompanyProfile = async (data) => {
  const res = await axios.put(`${baseUrl}/api/company/profile`, data, {
    headers: authHeader(),
  });
  return res.data;
};

export const sendEmail = async (data) => {
  const res = await axios.post(`${baseUrl}/api/email`, data);
  return res.data;
};

// ===== TASKS =====
export const addTask = async (data) => {
  const res = await axios.post(`${baseUrl}/api/tasks`, data, {
    headers: authHeader(),
  });
  return res.data;
};

export const getTask = async () => {
  const res = await axios.get(`${baseUrl}/api/tasks`, {
    headers: authHeader(),
  });
  return res.data;
};

// ===== WALLET =====
export const getWallet = async () => {
  const res = await axios.get(`${baseUrl}/api/wallet`, {
    headers: authHeader(),
  });
  return res.data;
};

export const addMoney = async (data) => {
  const res = await axios.post(
    `${baseUrl}/api/wallet/order-add-money`,
    data,
    { headers: authHeader() }
  );
  return res.data;
};

export const withdrawMoney = async (data) => {
  const res = await axios.post(
    `${baseUrl}/api/wallet/withdraw`,
    data,
    { headers: authHeader() }
  );
  return res.data;
};

// ===== TRANSACTIONS =====
export const getTransactions = async () => {
  const res = await axios.get(`${baseUrl}/api/wallet/transactions`, {
    headers: authHeader(),
  });
  return res.data;
};

// ===== NOTIFICATIONS =====
export const saveNotificationSettings = async (data) => {
  const res = await axios.post(
    `${baseUrl}/api/notifications/settings`,
    data,
    { headers: authHeader() }
  );
  return res.data;
};

// ===== SUPPORT =====
export const raiseATicket = async (data) => {
  const res = await axios.post(
    `${baseUrl}/api/support-tickets`,
    data,
    { headers: authHeader() }
  );
  return res.data;
};

export const getRaiseTicket = async () => {
  const res = await axios.get(`${baseUrl}/api/support-tickets`, {
    headers: authHeader(),
  });
  return res.data;
};

export const concernsApi = async (data) => {
  const res = await axios.post(
    `${baseUrl}/api/concerns`,
    data,
    { headers: authHeader() }
  );
  return res.data;
};

export const getconcernsApi = async () => {
  const res = await axios.get(`${baseUrl}/api/concerns`, {
    headers: authHeader(),
  });
  return res.data;
};
