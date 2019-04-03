import "whatwg-fetch";

const CONTACT_US_URL = "/api/contact";

export const postContactUsForm = (submission: FormData) => {
  const formInputs: { [key: string]: any; } = {};
  submission.forEach((value, key) => {formInputs[key] = value;});
  const submissionAsJson = JSON.stringify(formInputs);

  fetch(CONTACT_US_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    credentials: "include",
    redirect: "follow",
    body: submissionAsJson
  }).then((response: Response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new TypeError(response.statusText);
    }
  });
};
