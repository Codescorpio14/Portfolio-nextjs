"use client";

const MainErrorPage = (error) => {
  return <div>{error.error.message}</div>;
};

export default MainErrorPage;
