import React, { useState } from "react";
import styled from "styled-components";

const Main = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <Wrapper>
      <p>I’m a frontend developer in Jersey City, NJ.</p>
      <p>
        I currently work at{" "}
        <Link target="_blank" href="https://www.yieldstreet.com/">
          Yieldstreet
        </Link>
        , a fintech startup, where I have had the opportunity to work with a
        variety of teams on many different parts of the{" "}
        <Link target="_blank" href="https://www.yieldstreet.com/">
          site
        </Link>
        , as well as the internal tools, our{" "}
        <Link
          target="_blank"
          href="https://www.yieldstreet.com/signup-quiz/lifestyle"
        >
          sign-up quiz,
        </Link>{" "}
        and a{" "}
        <Link target="_blank" href="https://yieldstreetprismfund.com/">
          speciality investment site.
        </Link>
      </p>
      <p>
        I am highly proficient in React, Redux, Typescript, (and of course
        vanilla Javascript), and have a sharp attention to detail when building
        responsive and mobile-friendly sites. I also have experience with
        Gatsby, Express, SQL, jQuery, Node.js, and MongoDB.
      </p>
      <p>I am extremely dedicated and a fastidious learner.</p>
      {!showResume && (
        <ResumeWrapper>
          <ResumeQuickLook onClick={() => setShowResume(true)}>
            <Arrow>&#9658;</Arrow>My resume at a glance:
          </ResumeQuickLook>
        </ResumeWrapper>
      )}
      {showResume && (
        <ResumeWrapper>
          <ResumeQuickLook onClick={() => setShowResume(false)}>
            <Arrow>&#9660;</Arrow>My resume at a glance:
          </ResumeQuickLook>
          <ul>
            <ResumeItem>
              <li>
                Software Engineer,{" "}
                <Link target="_blank" href="https://www.yieldstreet.com/">
                  Yieldstreet
                </Link>
              </li>
              <Timeframe>Nov 2019 - Present</Timeframe>
            </ResumeItem>

            <ResumeItem>
              <li>
                Category Manager,{" "}
                <Link target="_blank" href="https://www.walmart.com/">
                  Walmart eCommerce
                </Link>
              </li>
              <Timeframe>April 2019 - Oct 2019</Timeframe>
            </ResumeItem>

            <ResumeItem>
              <li>
                Business Analyst (I, II, Lead),{" "}
                <Link target="_blank" href="https://www.walmart.com/">
                  Walmart eCommerce
                </Link>{" "}
                and formerly{" "}
                <Link
                  target="_blank"
                  href="https://corporate.walmart.com/newsroom/2016/09/19/walmart-completes-acquisition-of-jet-com-inc"
                >
                  Jet.com
                </Link>
              </li>
              <Timeframe>Mar 2016 - Mar 2019</Timeframe>
            </ResumeItem>

            <ResumeItem>
              <li>
                Operations Coordinator,{" "}
                <Link
                  target="_blank"
                  href="https://www.prnewswire.com/news-releases/junior-explorers-subscription-program-inspires-kids-to-explore-share-and-protect-the-planet-282388771.html"
                >
                  Junior Explorers
                </Link>
              </li>
              <Timeframe>June 2015 - Feb 2016</Timeframe>
            </ResumeItem>

            <ResumeItem>
              <Education>Education</Education>
            </ResumeItem>

            <ResumeItem>
              <li>Rutgers University, Software Engineering Bootcamp</li>
            </ResumeItem>
            <ResumeItem>
              <li>Columbia University, MA in Conservation Biology</li>
            </ResumeItem>
            <ResumeItem>
              <li>Connecticut College, BA in Biology</li>
            </ResumeItem>
          </ul>
        </ResumeWrapper>
      )}
      <ContactLink
        target="_blank"
        href="https://www.linkedin.com/in/erica-f-walsh/"
      >
        LinkedIn
      </ContactLink>
      <ContactLink target="_blank" href="https://github.com/ericafwalsh">
        GitHub
      </ContactLink>
      <ContactLink href="mailto:erica.f.walsh@gmail.com">Email</ContactLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10vh 10vw;
  max-width: 600px;
  font-family: "Lato", sans-serif;
`;

const Link = styled.a`
  color: black;
  font-weight: 700;
`;

const ContactLink = styled(Link)`
  margin-right: 10px;
`;

const ResumeQuickLook = styled.div`
  cursor: pointer;
`;

const ResumeWrapper = styled.div`
  margin-bottom: 40px;
  cursor: pointer;
`;

const Arrow = styled.span`
  margin-right: 16px;
`;

const ResumeItem = styled.div`
  margin-bottom: 10px;
`;

const Timeframe = styled.i`
  font-size: 14px;
`;

const Education = styled.strong`
  font-size: 14px;
`;

export default Main;
