const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const randomString = () => Math.random().toString(36).slice(2);