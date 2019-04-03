import React, { FormEvent } from "react";

interface InterestFormProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export const InterestForm: React.SFC<InterestFormProps> = props => {
  return (
    <form className={props.className} onSubmit={props.onSubmit}>
      <h3>Get started with a free offer!</h3>
      <div className="form-group">
        <input id="name" name="name" type="text" className="form-control" placeholder="Enter your name" required={true} />
      </div>
      <div className="form-group">
        <input
          id="address"
          name="address"
          type="text"
          className="form-control"
          placeholder="Enter your property address"
          required={true}
        />
      </div>
      <div className="form-group">
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          placeholder="Enter your email address"
          required={true}
        />
      </div>
      <div className="form-group">
        <input id="phone" name="phone" type="phone" className="form-control" placeholder="Enter your phone number" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Get an offer!
        </button>
      </div>
    </form>
  );
};
