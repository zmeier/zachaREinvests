import fetchPonyfill from "fetch-ponyfill";
const { fetch } = fetchPonyfill();

export const SELL_API_URL = "/api/sell";
export const CONTACT_US_API_URL = "/api/contact";

export const postForm = (submission: FormData, url: string) => {
  const formInputs: { [key: string]: any } = {};
  submission.forEach((value, key) => {
    formInputs[key] = value;
  });
  const submissionAsJson = JSON.stringify(formInputs);

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    credentials: "include",
    redirect: "follow",
    body: submissionAsJson,
  }).then((response: Response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new TypeError(response.statusText);
    }
  });
};
