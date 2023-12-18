import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error storing data to localStorage:", error);
    }
  };

  return [storedValue, setValue];
};

export const options = [
  {
    value: "Менторство та консультації",
    label: "Менторство та консультації",
  },
  { value: "Діагностика", label: "Діагностика" },
  { value: "Стратегії", label: "Стратегії" },
  { value: "Навчання", label: "Навчання" },
  { value: "Інше", label: "Інше" },
];

export default useLocalStorage;
