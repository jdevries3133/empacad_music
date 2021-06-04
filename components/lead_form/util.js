import { API_BASE_URL } from "../../util/constants";

export const sendData = async (data) => {
  const res = await fetch(`${API_BASE_URL}/lead/`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: data.otherInstrument
      ? JSON.stringify({
          data,
          instrument: { name: data.otherInstrument },
        })
      : JSON.stringify({ ...data, instrument: { name: data.instrument } }),
  });
  return res;
};

export const validateData = (data) => {
  const errors = {};
  if (!data.name) errors["name"] = ["Please enter your name"];
  if (!data.email || !data.phone)
    errors["contact"] = ["Please enter either a phone number or email address"];
  if (data.instrument === "Default")
    errors["instrument"] = [
      'Please select an instrument. You may select "Other," and describe ' +
        "your instrument if it is not on the list",
    ];
  return errors;
};

export const isEmpty = (obj) =>
  // because Object.keys(new Date()).length === 0;
  // we have to do some additional check
  obj && // 👈 null and undefined check
  Object.keys(obj).length === 0 &&
  obj.constructor === Object;
