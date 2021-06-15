import { API_BASE_URL } from "../../util/constants";

export const sendData = async (data) => {
  // need to filter out empty strings
  const preppedData = {};
  if (data.name) preppedData["name"] = data.name;
  if (data.email) preppedData["email"] = data.email;
  if (data.phone) preppedData["phone"] = data.phone;
  if (data.instrument) preppedData["instrument"] = { name: data.instrument };
  if (data.otherInstrument)
    preppedData["instrument"] = { name: data.otherInstrument };

  const res = await fetch(`${API_BASE_URL}/lead/`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preppedData),
  });
  return res;
};

export const validateData = (data) => {
  const errors = {};
  if (!data.name) errors["name"] = "Please enter your name.";
  if (!(data.email || data.phone)) {
    errors["email"] =
      "Please provide an email or phone number so that we can get in touch!";
    errors["phone"] =
      "Please provide a phone number or email so that we can get in touch!";
  }
  if (!data.instrument || data.instrument === "Default")
    errors["instrument"] =
      'Please select an instrument. You may select "Other," and describe ' +
      "your instrument if it is not on the list.";

  if (data.instrument === "Other" && !data.otherInstrument) {
    errors["otherInstrument"] =
      "Please describe the instrument you would like to donate.";
  }

  return errors;
};

export const isEmpty = (obj) =>
  // because Object.keys(new Date()).length === 0;
  // we have to do some additional check
  obj && // 👈 null and undefined check
  Object.keys(obj).length === 0 &&
  obj.constructor === Object;
