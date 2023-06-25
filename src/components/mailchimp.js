import React from "react"
import Mailchimp from "react-mailchimp-form"

const MailchimpForm = () => {
  return (
    <div>
      <Mailchimp
        action="https://boredable.us21.list-manage.com/subscribe/post?u=8f48a4302ee5bf6db90954fcd&amp;id=21bd9e332a&amp;f_id=00a459e1f0"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Your Email Address",
            type: "email",
            required: true,
          },
        ]}
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "Please enter a valid email address.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "Join The Waitlist",
        }}
        className="mailchimp-form"
      />
    </div>
  )
}

export default MailchimpForm
