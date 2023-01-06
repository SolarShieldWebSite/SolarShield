import { createContext, useState } from "react";
import useScrollBlock from "../lib/useScrollBlock";

export const SolarShieldContext = createContext();

export default function AppContext({ children }) {
  //Handle Hamburger Menu
  const [isToggle, setIsToggle] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  //Handle contact from
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [object, setObject] = useState("");

  const handleToggle = () => {
    setIsToggle(!isToggle);
    if (!isToggle) {
      blockScroll();
    } else {
      allowScroll();
    }
  };

  const footerSwitch = (param, object) => {
    switch (param) {
      case "glass_page":
        return object.glass_page;
      case "price_page":
        return object.price_page;
      case "covering_page":
        return object.covering_page;
      case "contact_page":
        return object.contact_page;
      case "tesla_page":
        return object.tesla_page;
    }
  };



  return (
    <SolarShieldContext.Provider
      value={{
        state: {
          isToggle: isToggle,
          name: name,
          email: email,
          message: message,
          phone: phone,
          submitted: submitted,
          object: object,
          setName,
          setEmail,
          setPhone,
          setMessage,
          setSubmitted,
          setObject,
        },
        handleToggle: handleToggle,
        footerSwitch: footerSwitch,
      }}
    >
      {children}
    </SolarShieldContext.Provider>
  );
}
