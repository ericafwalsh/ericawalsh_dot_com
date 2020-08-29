import React, { useState } from "react";
import styled from "styled-components";

import { Modal } from "antd";
import stellaLuna from "../../assets/stellaluna.jpg";

const Main = () => {
  const [showResume, setShowResume] = useState(false),
    [showCats, setShowCats] = useState(false);

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
        I am highly proficient in React, Redux, Typescript (and vanilla
        Javascript), and have a sharp attention to detail when building
        responsive sites. I also have experience with Gatsby, SQL, jQuery,
        Node.js, MongoDB, Styled Components, Jest, Enzyme and Figma.
      </p>
      <p>
        Apart from coding, I really enjoy running, true crime podcasts, bird
        watching, and curling up with a book and my two black cats,{" "}
        <StellaLuna
        // onClick={() => setShowCats(true)}
        >
          Stella and Luna.
        </StellaLuna>
      </p>
      {/* {showCats && (
        <Modal
          visible={showCats}
          onCancel={() => setShowCats(false)}
          footer={null}
        >
          <Image src={stellaLuna} alt="two black cats" />
        </Modal>
      )} */}

      <ResumeWrapper>
        <ResumeQuickLook onClick={() => setShowResume(!showResume)}>
          <Arrow>{String.fromCharCode(!showResume ? 9658 : 9660)}</Arrow>
          My resume at a glance:
        </ResumeQuickLook>
        {showResume && (
          <Resume>
            <ResumeLeftColumn>
              <ResumeItem>
                <Title>Professional Experience</Title>
              </ResumeItem>
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
            </ResumeLeftColumn>
            <ResumeRightColumn>
              <ResumeItem>
                <Title>Education</Title>
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
            </ResumeRightColumn>
          </Resume>
        )}
      </ResumeWrapper>
      <ContactLink
        target="_blank"
        href="https://www.linkedin.com/in/erica-f-walsh/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </ContactLink>
      <ContactLink target="_blank" href="https://github.com/ericafwalsh">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </ContactLink>
      <ContactLink href="mailto:erica.f.walsh@gmail.com">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </ContactLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10vh 10vw;
  max-width: 700px;
  font-family: "Lato", sans-serif;
`;

const Link = styled.a`
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;
`;

const ContactLink = styled(Link)`
  margin-right: 20px;
`;

const ResumeQuickLook = styled.div`
  cursor: pointer;
`;

const ResumeWrapper = styled.div`
  margin-bottom: 35px;
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

const Title = styled.strong`
  font-size: 14px;
`;

const ResumeLeftColumn = styled.ul``;

const ResumeRightColumn = styled.ul``;

const Resume = styled.div`
  display: flex;
`;

const StellaLuna = styled.span`
  cursor: pointer;
`;

const Image = styled.img`
  height: 30%;
`;

export default Main;
