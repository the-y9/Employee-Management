import React, { createContext, useContext, useState } from "react";

// Data arrays (this can be moved to a separate file if needed)
const dept = [
  { id: 1, dname: "Frontend" },
  { id: 2, dname: "Backend" },
  { id: 3, dname: "AI" },
  { id: 4, dname: "DevOps" },
  { id: 5, dname: "QA" },
  { id: 6, dname: "UI/UX Design" },
  { id: 7, dname: "Mobile Development" },
  { id: 8, dname: "Data Science" },
  { id: 9, dname: "Cybersecurity" },
  { id: 10, dname: "Project Management" },
];

const designation = [
  { id: 1, dename: "Intern" },
  { id: 2, dename: "Junior Developer" },
  { id: 3, dename: "Developer" },
  { id: 4, dename: "Senior Developer" },
  { id: 5, dename: "Lead Developer" },
  { id: 6, dename: "Technical Architect" },
  { id: 7, dename: "Engineering Manager" },
  { id: 8, dename: "Product Manager" },
  { id: 9, dename: "Team Lead" },
  { id: 10, dename: "CTO" },
];

const tech_expertise = [
  { id: 1, level: "Beginner" },
  { id: 2, level: "Intermediate" },
  { id: 3, level: "Advanced" },
  { id: 4, level: "Proficient" },
  { id: 5, level: "Expert" },
  { id: 6, level: "Master" },
];

// Function to get a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate random data for employees
const generateData = () => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    ename: `Employee${index + 1}`,
    dept: getRandomElement(dept).dname,
    designation: getRandomElement(designation).dename,
    tech_expertise: getRandomElement(tech_expertise).level,
  }));
};

// Initial data in the store
const initialData = {
  data: generateData(),
  dept,
  designation,
  tech_expertise,
};

// Create Context
const StoreContext = createContext();

// Create Store Provider
export const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(initialData);

  const delEmployee = (id) => {
    const updatedData = store.data.filter((employee) => employee.id !== id);
    setStore({ ...store, data: updatedData });
  };

  return (
    <StoreContext.Provider value={{ store, setStore, delEmployee }}>
      {children}
    </StoreContext.Provider>
  );
};

// Custom Hook to use the Store Context
export const useStore = () => {
  return useContext(StoreContext);
};
