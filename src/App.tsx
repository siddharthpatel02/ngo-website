import { count } from "console";
import React, { useRef, useState } from "react";
import "./App.scss";
import Content from "./layout/content/content";
import DonationForm from "./layout/DonationForm/donationForm";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";
import Introduction from "./layout/introduction/introduction";

function App() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const aboutRef = useRef<HTMLFormElement | null>(null);
  const [dom, setDom] = useState(false);

  return (
    <div className="App">
      <Header formRef={formRef} isIncluded={false} />
      <main>
        <Introduction aboutRef={aboutRef} />
        <Content formRef={formRef} />
        <DonationForm formRef={formRef} />
      </main>
      <Footer aboutRef={aboutRef} formRef={formRef} />
     
    </div>
  );
}

export default App;
