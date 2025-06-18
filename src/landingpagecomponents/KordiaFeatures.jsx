import React from "react";

const KordiaFeatures = () => {
  return (
    <section class="bg-main-blue">
      <div class="mycontainer">
        <div class="row">
          <div class="col-lg-6">
            <div class="why-kordia d-flex align-items-center h-100">
              <div>
                <h2
                  style={{
                    fontSize: "60px", // Increase font size
                    letterSpacing: "2px", // Add gap between letters
                  }}
                  className="text-main-orange display-4  fw-semibold text-center text-sm-start text-uppercase font-bebas"
                >
                  Kordia Features
                </h2>
                <h2 class="text-white display-5 fw-semibold  text-center text-sm-start font-syne">
                  Your Event, Our Expertise!
                </h2>
                <p class="mt-4 text-light text-center text-sm-start text-lsm-16 font-poppins">
                  Kordia provides an all-in-one platform for effortlessly
                  managing events and discovering the perfect talent.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-5 mt-lg-0">
            <div class="row">
              <div class="col-sm-6 p-3">
                <div class="p-3 bg-feature-card h-100 rounded-3">
                  <h4 class="text-white fs-6 font-poppins">
                    Seamless Event Creation & Booking
                  </h4>
                  <ul class="text-white text-12 mt-3 font-poppins">
                    <li class="pb-2">
                      Event organizers can easily create events and specify
                      musical requirements.
                    </li>
                    <li class="pb-2">
                      Musicians can browse events, apply, and submit tailored
                      proposals directly.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 p-3">
                <div class="p-3 bg-feature-card h-100 rounded-3">
                  <h4 class="text-white fs-6 font-poppins">
                    Profile Showcase for Musicians
                  </h4>
                  <ul class="text-white text-12 mt-3 font-poppins">
                    <li class="pb-2">
                      Musicians can create detailed profiles showcasing their
                      talent, genres, band collaborations, portfolio, and event
                      interests.
                    </li>
                    <li class="pb-2">
                      Portfolio section allows for videos, images, and audio
                      clips, providing organizers a clear view of musicians’
                      skills.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 p-3">
                <div class="p-3 bg-feature-card h-100 rounded-3">
                  <h4 class="text-white fs-6 font-poppins">
                    Secure Payment Processing
                  </h4>
                  <ul class="text-white text-12 mt-3 font-poppins">
                    <li class="pb-2">
                      Kordia handles all payments with a structured timeline.
                    </li>
                    <li class="pb-2">
                      Payments are secured, with timely payouts to musicians and
                      reminders for organizers to ensure payment deadlines are
                      met.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 p-3">
                <div class="p-3 bg-feature-card h-100 rounded-3">
                  <h4 class="text-white fs-6 font-poppins">
                    Event Management Tools
                  </h4>
                  <ul class="text-white text-12 mt-3 font-poppins">
                    <li class="pb-2">
                      Organizers have access to tools to manage ongoing events,
                      view pending requests, and track booking statuses.
                    </li>
                    <li class="pb-2">
                      Musicians can track upcoming events, accepted gigs, and
                      apply for new opportunities.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 p-3">
                <div class="p-3 bg-feature-card h-100 rounded-3">
                  <h4 class="text-white fs-6 font-poppins">
                    Subscription Options for Musicians and Organizers
                  </h4>
                  <ul class="text-white text-12 mt-3 font-poppins">
                    <li class="pb-2">
                      Flexible subscription plans offer additional benefits such
                      as featured profile visibility, enhanced searchability,
                      and access to exclusive events.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 p-3">
                <div class="p-3 bg-feature-card h-100 rounded-3">
                  <h4 class="text-white fs-6 font-poppins">
                    Kordia Academy for Musicians
                  </h4>
                  <ul class="text-white text-12 mt-3 font-poppins">
                    <li class="pb-2">
                      Provides an option for musicians to package lessons and
                      reach students looking for music training.
                    </li>
                    <li class="pb-2">
                      Includes lesson packaging and scheduling tools for
                      teaching music theory, instrument training, and more.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 p-3">
                <div class="p-3 bg-feature-card h-100 rounded-3">
                  <h4 class="text-white fs-6 font-poppins">
                    Real-Time Chat for Seamless Communication
                  </h4>
                  <ul class="text-white text-12 mt-3 font-poppins">
                    <li class="pb-2">
                      Direct communication between musicians and event
                      organizers for quick responses, updates, and coordination.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6 p-3">
                <div class="p-3 bg-feature-card h-100 rounded-3">
                  <h4 class="text-white fs-6 font-poppins">
                    Review and Rating System
                  </h4>
                  <ul class="text-white text-12 mt-3 font-poppins">
                    <li class="pb-2">
                      After events, organizers and musicians can review and rate
                      each other, building credibility and trust within the
                      community.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KordiaFeatures;
