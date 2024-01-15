import React, { HtmlHTMLAttributes, useRef, useState } from "react";
import RadioButton from "../../components/button/radioButton/radioButton";
import "./donationForm.scss";
import { db } from "../../utility/firebase/firebase";
import { ref, set, push } from "firebase/database";

function DonationForm({
  formRef,
}: {
  formRef: React.MutableRefObject<HTMLFormElement | null>;
}) {
  const [amount, setAmount] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [pan, setPan] = useState<string>("");
  const [mobileValidation, setMobileValidation] = useState<boolean>(false);

  const radioButtonRef = useRef(null);
  const radioButtonRef2 = useRef(null);
  const radioButtonRef3 = useRef(null);

  const resetRadioButton = (): void => {
    if (
      radioButtonRef.current &&
      (radioButtonRef.current as HTMLInputElement).checked
    ) {
      (radioButtonRef.current as HTMLInputElement).checked = false;
    }
    if (
      radioButtonRef2.current &&
      (radioButtonRef2.current as HTMLInputElement).checked
    ) {
      (radioButtonRef2.current as HTMLInputElement).checked = false;
    }
    if (
      radioButtonRef3.current &&
      (radioButtonRef3.current as HTMLInputElement).checked
    ) {
      (radioButtonRef3.current as HTMLInputElement).checked = false;
    }
  };

  const resetValues = (): void => {
    setAmount("");
    setName("");
    setAddress("");
    setEmail("");
    setMobile("");
    setPan("");
  };

  const writeUserData = (
    name: string,
    email: string,
    address: string,
    amount: string,
    pan: string,
    mobile: string
  ): void => {
    const newUserId = push(ref(db, "users")).key;
    console.log(new Date());

    set(ref(db, "users/" + newUserId), {
      name: name,
      email: email,
      address: address,
      amount: amount,
      panNumber: pan,
      contact: mobile,
      timestamp: new Date().toString(),
    })
      .then(() => resetValues())
      .catch((error) => console.error("Operation failed:", error));
  };
  const selectAmount = (amount: string) => {
    setAmount(amount);
  };
  return (
    <section ref={formRef} className="donation-container">
      <div className="donation-container__form">
        <div className="heading-secondary donation-container__form__heading">
          Join the Movement
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (mobile.length === 10) {
              writeUserData(name, email, address, amount, pan, mobile);
            }
          }}
          className="form"
        >
          <div className="form__group">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
              id="name"
              className="form__input"
              type="text"
              placeholder="full name"
            />
            <label htmlFor="name" className="form__label">
              full name
            </label>
          </div>
          <div className="form__group">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
              id="email"
              className="form__input"
              type="email"
              placeholder="email"
            />
            <label htmlFor="email" className="form__label">
              email
            </label>
          </div>
          <div className="form__group">
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
              required
              id="address"
              className="form__input"
              type="text"
              placeholder="address"
            />
            <label htmlFor="address" className="form__label">
              address
            </label>
          </div>
          <div className="form__group">
            <input
              style={{
                borderBottom: mobileValidation ? " 3px solid red" : undefined,
              }}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  setMobile(e.target.value);
                  if (e.target.value.length < 10) {
                    setMobileValidation(true);
                  } else {
                    setMobileValidation(false);
                  }
                }
              }}
              value={mobile}
              required
              id="mobile-number"
              className="form__input"
              type="number"
              placeholder="phone number"
              inputMode="numeric"
            />
            <label htmlFor="mobile-number" className="form__label">
              phone number
            </label>
          </div>
          <div className="form__group form__group--width form__group--gap">
            <input
              onChange={(e) => {
                setPan(e.target.value);
              }}
              value={pan}
              style={{ textTransform: "uppercase" }}
              required
              id="pan"
              className="form__input"
              type="text"
              placeholder="pan number"
            />
            <label htmlFor="pan" className="form__label">
              pan number
            </label>
          </div>
          <div className="form__group form__group--width">
            <input
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                console.log("Input value changed:", e.target.value);
                resetRadioButton();
              }}
              required
              id="amount"
              className="form__input"
              type="number"
              placeholder="amount"
              inputMode="numeric"
            />
            <label htmlFor="amount" className="form__label">
              amount
            </label>
          </div>
          <div className="donation-container__form__radio-btn">
            <RadioButton
              buttonRef={radioButtonRef}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className={"donation-container__form__radio-btn--item"}
              id="amount1"
              label="&#x20B9;
              500/-"
              name="amount"
              value={500}
            ></RadioButton>
            <RadioButton
              buttonRef={radioButtonRef2}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className={"donation-container__form__radio-btn--item"}
              id="amount2"
              label="&#x20B9;
              1000"
              name="amount"
              value={1000}
            ></RadioButton>
            <RadioButton
              buttonRef={radioButtonRef3}
              onChange={(e) => {
                selectAmount(e.target.value);
              }}
              className={"donation-container__form__radio-btn--item"}
              id="amount3"
              label="&#x20B9;
              5000"
              name="amount"
              value={5000}
            ></RadioButton>
            {/* <RadioButton
              className={["donation-container__form__radio-btn__item"]}
              id="amount4"
              label="10000"
              name="amount"
              value={10000}
            ></RadioButton> */}
          </div>
          <div className="form__button__container">
            <button type="submit" className="form__button">
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default DonationForm;
