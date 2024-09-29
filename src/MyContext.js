import React, { createContext, useContext } from 'react';

// ایجاد کانتکست
const MyContext = createContext();

// ایجاد Provider
export const MyProvider = ({ children }) => {
    const value = { future: 'someValue' }; // مقداردهی دلخواه
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// استفاده از کانتکست
export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider'); // پرتاب خطا
    }
    return context;
};