import React, { useEffect } from "react";
import FormContact from "../components/FormContact";
import headerBg from "../img/header3.jpg";
import ScrollReveal from "scrollreveal";

export default function Contact() {
  useEffect(() => {
    ScrollReveal().reveal(".formContainer", { origin: "bottom" });
    ScrollReveal().reveal(".userBox", { origin: "left" });
    ScrollReveal().reveal(".btn", { origin: "right" });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${headerBg})`,
      }}
    >
      <FormContact />
    </div>
  );
}
