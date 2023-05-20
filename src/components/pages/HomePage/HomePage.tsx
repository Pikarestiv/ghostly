import React from "react";
// import AppLayout from "@temps/AppLayout";
import AppLayout from "../../templates/AppLayout";

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to the Home Page
        </h1>
      </div>
    </AppLayout>
  );
};

export default HomePage;
