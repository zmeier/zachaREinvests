import React, { FormEventHandler } from "react";

interface InterestFormProps {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  className?: string;
}

export const InterestForm: React.SFC<InterestFormProps> = props => {
  return (
    <form className={props.className} onSubmit={props.onSubmit}>
      <h3>Get started with a free offer!</h3>
      <div className="form-group">
        <input name="owner-name" type="text" className="form-control" placeholder="Enter your name" required={true} />
      </div>
      <div className="form-group">
        <input
          name="property-address"
          type="text"
          className="form-control"
          placeholder="Enter your property address"
          required={true}
        />
      </div>
      <div className="form-group">
        <input
          name="owner-email-address"
          type="email"
          className="form-control"
          placeholder="Enter your email address"
          required={true}
        />
      </div>
      <div className="form-group">
        <input name="owner-phone" type="phone" className="form-control" placeholder="Enter your phone number" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Get an offer!
        </button>
      </div>
    </form>
  );
};
