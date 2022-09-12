import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUp";

export default function Newsletter() {
  useEffect(() => {
    document.title = "Newsletter";
  }, []);

  return (
    <div>
      <Navbar />
      <SignUpForm />
      <Footer />
    </div>
  );
}
