import WorkItem from "components/WorkItem/WorkItem";
import React from "react";
import Heading2 from "shared/Heading2";
import { ColumnWrapper, Section, WorkExperience } from "./Work.styled";

interface Props {}

const Work = (props: Props) => {
  return (
    <Section id="work">
      <Heading2>My Experience</Heading2>
      <WorkExperience>
        <ColumnWrapper>
          <WorkItem
            position="Frontend Engineer"
            company="tray.io"
            year="01/2021 - present"
            description={`• Working on the migration of the Tray Documentation platform from Gatsby to Next.js. \n• Working on the Tray app and implementing new features using React, TypeScript, GraphQL, Redux.`}
          />
          <WorkItem
            position="Frontend Engineer"
            company="OVO Energy"
            year="06/2020 - 01/2021"
            description={`• Built an interactive Map using Mapbox and React Map GL to display all the locations within UK where OVO communities have planted trees and the amount of carbon saved. \n• Developed features for web and native mobile using React, React Native, TypeScript, RxJS, Redux, styled-components. Ensured quality outputs with high test coverage using Jest, React Testing Library, Cypress and Detox, BrowserStack. \n• Implemented and contributed to the internal Design System and ensuring cross-browser compatibility, WCAG compliance, and responsive designs for all devices and screens.`}
          />
          <WorkItem
            position="Frontend Engineer"
            company="Secret Escapes"
            year="03/2020 - 06/2020"
            description={`• Translation of interaction and visual designs into production quality front-end experiences, using Typescript, React (hooks), Apollo Client, GraphQL, Storybook, styled components. \n• Unit and Integration Testing using Jest, enzyme and react-testing-library. \n• Implementation of React Components using internal Design Language System as a reference. \n• Helping other developers adopt modern and lean front end engineering practises. \n• Optimisation of javascript build, test and deploy cycles to ensure maximum page load and runtime performance.`}
          />
          <WorkItem
            position="Frontend Developer"
            company="Noble"
            year="06/2019 - 02/2020"
            description={`• Develop new user-facing features both for web-app and Electron applications using React, Redux, GraphQL, Apollo. \n• Migrate the codebase from class based to functional components with React Hooks. \n• Migrate style libraries from global SCSS/Bootstrap to a modern and modular style architecture using CSS Modules and CSS-in-JS. \n• Build reusable code and libraries for future use. \n• Ensure the technical feasibility of UI/UX designs.`}
          />
        </ColumnWrapper>
        <ColumnWrapper>
          <WorkItem
            position="Junior Developer"
            company="London Borough of Hackney"
            year="12/2018 - 06/2019"
            description={`• Designed and developed the front-end of the Developer API Hub using Angular 7, SCSS and TypeScript. \n•Test Driven Development of RESTful APIs using C# .NET Core 2.1. \n• Worked with different stakeholders and presented demos and products to large audience.`}
          />
          <WorkItem
            position="Project Officer"
            company="London Borough of Hackney"
            year="09/2016 - 11/2018"
            description="Planning, leading and delivering on Borough wide resident sustainment initiatives. Working with partnering services and organisations to develop and deliver awareness-raising programmes relating to resident sustainment for audiences of staff and residents."
          />
          <WorkItem
            position="Support Worker"
            company="LookAhead"
            year="09/2016 - 11/2018"
            description="Helped and supported vulnerable adults with a wide range of needs. Produced comprehensive and specific risk assessments/management plans. These were then regularly reviewed to minimise risk by identifying, reporting and following up any safeguarding concerns and incidents in line with policy guidelines."
          />
          <WorkItem
            position="Assistant Psychologist"
            company="LookAhead"
            year="09/2016 - 11/2018"
            description="As part of my clinical training I conducted assessments and treatment to patients mainly in within personality disorder spectrums, psychosis and eating disorders, often in crisis/relapse."
          />
        </ColumnWrapper>
      </WorkExperience>
    </Section>
  );
};

export default Work;
