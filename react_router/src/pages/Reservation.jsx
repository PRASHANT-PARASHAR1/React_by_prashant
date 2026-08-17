import React from "react";

function Reservation() {
  return (
    <section className="reservation-page">

      {/* Heading */}
      <div className="reservation-heading">
        <p>PARASHAR SIGNATURE</p>

        <h1>Reserve Your Table</h1>

        <span>
          A memorable dining experience awaits you
        </span>
      </div>


      <div className="reservation-container">

        {/* LEFT SIDE */}
        <div className="reservation-info">

          <div className="reservation-logo">
            <span>♛</span>
            <strong>PS</strong>
            <small>PARASHAR</small>
            <small>SIGNATURE</small>
          </div>

          <h2>A Table Awaits You</h2>

          <p>
            Welcome to Parashar Signature, Tappal.
            Enjoy delicious pure vegetarian food in an
            elegant and welcoming atmosphere.
          </p>

          <div className="reservation-points">

            <div>
              <span>🌿</span>
              <p>100% Pure Vegetarian</p>
            </div>

            <div>
              <span>✨</span>
              <p>Premium Fine Dining</p>
            </div>

            <div>
              <span>👨‍👩‍👧‍👦</span>
              <p>Perfect For Family Dining</p>
            </div>

            <div>
              <span>📍</span>
              <p>Tappal, Aligarh</p>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE - FORM */}
        <div className="reservation-form-box">

          <h2>Book Your Table</h2>

          <p>
            Fill in your details to reserve your table.
          </p>

          <form>

            <div className="reservation-input-row">

              <div>
                <label>Your Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label>Mobile Number</label>

                <input
                  type="tel"
                  placeholder="Enter mobile number"
                />
              </div>

            </div>


            <div className="reservation-input-row">

              <div>
                <label>Date</label>

                <input
                  type="date"
                />
              </div>

              <div>
                <label>Time</label>

                <input
                  type="time"
                />
              </div>

            </div>


            <div className="reservation-input-row">

              <div>
                <label>Number of Guests</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select Guests
                  </option>

                  <option value="1">
                    1 Guest
                  </option>

                  <option value="2">
                    2 Guests
                  </option>

                  <option value="3">
                    3 Guests
                  </option>

                  <option value="4">
                    4 Guests
                  </option>

                  <option value="5">
                    5 Guests
                  </option>

                  <option value="6">
                    6 Guests
                  </option>

                  <option value="7">
                    7 Guests
                  </option>

                  <option value="8">
                    8+ Guests
                  </option>
                </select>
              </div>


              <div>
                <label>Seating Preference</label>

                <select defaultValue="Indoor">

                  <option value="Indoor">
                    Indoor
                  </option>

                  <option value="Family Seating">
                    Family Seating
                  </option>

                  <option value="Outdoor">
                    Outdoor
                  </option>

                </select>
              </div>

            </div>


            <div>
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter email address"
              />
            </div>


            <div>
              <label>Special Request</label>

              <textarea
                rows="4"
                placeholder="Birthday, anniversary, special seating etc."
              />
            </div>


            <button type="submit">
              CONFIRM RESERVATION
            </button>

          </form>


          <div className="reservation-contact">

            <span>Need help?</span>

            <a href="tel:+917017178763">
              📞 +91 70171 78763
            </a>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="reservation-bottom">

        <p>PARASHAR SIGNATURE</p>

        <h2>
          Tappal, Aligarh, Uttar Pradesh
        </h2>

        <span>
          Open Monday - Sunday | 11:00 AM - 11:00 PM
        </span>

      </div>

    </section>
  );
}

export default Reservation;