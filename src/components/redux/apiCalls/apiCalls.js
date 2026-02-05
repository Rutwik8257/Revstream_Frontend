import axios from "axios";

// Automatically detect environment and set appropriate base URL
let baseUrl = process.env.NODE_ENV === 'production' 
  ? "http://revstreamapp-env.eba-xjftty88.eu-north-1.elasticbeanstalk.com"
  : "http://localhost:8080";
let token = localStorage.getItem("token");

// ===== AUTH / COMMON =====
export const addUser = async (data) => {
  const res = await axios.post(`${baseUrl}/api/registration`, data);
  return res.data;
};
export const addAddressCompany = async (payload, userId) => {
  const res = await axios.post(
    `${baseUrl}/api/address/${userId}`,
    payload,
  );
  return res.data;
};

// ===== USER DATA =====
export const getUser = async () => {
  const res = await axios.get(`${baseUrl}/api/company/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// ===== COMPANY PROFILE UPDATE =====
export const updateCompanyProfile = async (data) => {
  const res = await axios.put(`${baseUrl}/api/company/profile`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const sendEmail = async (data) => {
  const res = await axios.post(`${baseUrl}/api/email`, data);
  return res.data;
};

export const login = async (data) => {
  const res = await axios.post(`${baseUrl}/api/auth/login`, data);
  return res.data;
};

// ===== TASKS =====
export const addTask = async (data) => {
  const res = await axios.post(`${baseUrl}/api/tasks`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getTask = async () => {
  const res = await axios.get(`${baseUrl}/api/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// ===== WALLET =====
export const getWallet = async () => {
  const res = await axios.get(`${baseUrl}/api/wallet`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data; // ✅ IMPORTANT
};

export const addMoney = async (data) => {
  const res = await axios.post(`${baseUrl}/api/wallet/order-add-money`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const withdrawMoney = async (data) => {
  const res = await axios.post(`${baseUrl}/api/wallet/withdraw`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data; // ✅ IMPORTANT
};

// ===== TRANSACTIONS =====
export const getTransactions = async () => {
  const res = await axios.get(`${baseUrl}/api/wallet/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// ===== NOTIFICATIONS =====
export const saveNotificationSettings = async (data) => {
  const res = await axios.post(`${baseUrl}/api/notifications/settings`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// ===== SUPPORT / CONCERNS =====
export const raiseATicket = async (data) => {
  const res = await axios.post(`${baseUrl}/api/support-tickets`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
export const getRaiseTicket = async (dta) => {
  const res = await axios.get(`${baseUrl}/api/support-tickets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const concernsApi = async (data) => {
  const res = await axios.post(`${baseUrl}/api/concerns`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
export const getconcernsApi = async () => {
  const res = await axios.get(`${baseUrl}/api/concerns`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// ! Raise a ticket
