import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import { Header } from './../Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
