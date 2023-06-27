import React from "react"
import { useForm } from "@formcarry/react"

function MyFormcarry() {
  // Call the "useForm" hook in your function component
  const { state, submit } = useForm({
    id: "4N5byQUjIo",
  })

  return (
    <div>
      <div className="grid gap-0 grid-cols-6">
        <div className="col-span-1 h-5 bg-violet mt-auto"></div>
        <div className="col-span-1 h-5 bg-violet  mt-auto"></div>
        <div className="col-span-1 h-10 bg-violet"></div>
        <div className="col-span-1 h-5 bg-violet"></div>
        <div className="col-span-1 h-5 bg-violet mt-5"></div>
      </div>
      <div className="bg-violet px-8 py-8">
        {state.submitted ? (
          <>
            <div className="text-xl text-lime text-center">
              Thank you! Your message has been sent! <br />
              I'll try to respond within the next 24-48 hours!
            </div>
          </>
        ) : (
          <form onSubmit={submit}>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-lime bg-transparent border-0 border-b-2 border-plum appearance-none focus:outline-none focus:ring-0 focus:border-lime peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-lg text-plum duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-sm"
              >
                Name
              </label>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="organization"
                id="floating_organization"
                className="block py-2.5 px-0 w-full text-sm text-lime bg-transparent border-0 border-b-2 border-plum appearance-none focus:outline-none focus:ring-0 focus:border-lime peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_organization"
                className="peer-focus:font-medium absolute text-lg text-plum duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-sm"
              >
                Organization
              </label>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-lime bg-transparent border-0 border-b-2 border-plum appearance-none focus:outline-none focus:ring-0 focus:border-lime peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-lg text-plum duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-sm"
              >
                Email address
              </label>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="referral"
                id="floating_referral"
                className="block py-2.5 px-0 w-full text-sm text-lime bg-transparent border-0 border-b-2 border-plum appearance-none focus:outline-none focus:ring-0 focus:border-lime peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_referral"
                className="peer-focus:font-medium absolute text-lg text-plum duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-sm"
              >
                Referral
              </label>
              <p className="pt-1">
                Were you refered to me by a previous client? I would love to
                know who!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2 lg:col-span-1">
                <label
                  htmlFor="budget"
                  class="block mb-2 text-lg font-medium text-white"
                >
                  Select your budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="bg-violet border border-plum text-plum text-lg focus:ring-lime focus:border-lime block w-full p-2.5"
                >
                  <option value="$5-8k">$4000-$8000</option>
                  <option value="$8-12k">$8000-$12,000</option>
                  <option value="$12k+">$12,000+</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <label
                  htmlFor="timeframe"
                  class="block mb-2 text-lg font-medium text-white"
                >
                  Select your timeframe
                </label>
                <select
                  id="timeframe"
                  name="timeframe"
                  className="bg-violet border border-plum text-plum text-lg focus:ring-lime focus:border-lime block w-full p-2.5"
                >
                  <option value="0-3 months">0-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="9+ months">9+ months</option>
                </select>
              </div>
            </div>
            <p className="pt-1 mb-8">
              Generally, I no longer accept projects under $4000. However, I
              review all proposals that come my way and occasionally take on
              smaller, interesting projects!
            </p>

            <div className="mb-4">
              <label
                htmlFor="message"
                class="block mb-2 text-lg font-medium text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="bg-violet border border-plum text-plum text-lg focus:outline-none focus:ring-0 focus:border-lime block w-full p-2.5 placeholder:text-plum"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary text-lg">
              Send Message
            </button>
          </form>
        )}
      </div>
      <div className="grid gap-0 grid-cols-6">
        <div className="col-span-1 h-5 bg-violet"></div>
        <div className="col-span-1 h-5 bg-violet"></div>
        <div className="col-span-1 h-10 bg-violet"></div>
        <div className="col-span-1 h-5 bg-violet"></div>
        <div className="col-span-1 h-5"></div>
        <div className="col-span-1 h-5 bg-violet"></div>
      </div>
    </div>
  )
}

export default MyFormcarry