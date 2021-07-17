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
            year="2021 - present"
            description={`• Migrated the https://tray.io/documentation platform from Gatsby to Next.js. Improved build time (~80% faster), test coverage (~500 additional unit and integration tests ), and Google Core Web Vitals (100 SEO score on Lighthouse)\n\n• Reviewing and redesigning the frontend architecture of tray Embedded. Contributing to improving the overall code quality by migrating legacy packages into encapsulated libraries within a mono-repo using NX and yarn workspaces\n\n• Planning and delivering the new frontend interview task assignment as part of tray recruitment process\n\n• Mentoring Junior Engineers\n\n• Tech Stack: TypeScript, React, Apollo, GraphQL, Node.js, Next.js, Gatsby, Redux`}
          />
          <WorkItem
            position="Frontend Engineer"
            company="OVO Energy"
            year="2020 - 2021"
            description={`• Built an interactive map for Web, Android, and iOS using Mapbox and React Map GL to display all the locations within the UK where OVO communities have planted trees and the amount of carbon saved\n\n• Developed new features for Web, Android, and iOS on the Carbon Dashboard, a data visualization view where users can monitor their household CO2 emissions\n\n• Tech Stack: TypeScript, React, React Native, Redux, RxJS, Node.js`}
          />
          <WorkItem
            position="Frontend Developer"
            company="Noble"
            year="2019 - 2020"
            description={`• Worked on Noble Vision, a Dashboard that allows analysts to view real-time threats within their network\n\n• Migrated the codebase from class-based to functional components with React Hooks; migrated style libraries from global SCSS/Bootstrap to a modern and modular style architecture using CSS Modules and CSS-in-JS\n\n• Tech Stack: JavaScript, Electron, React, Redux, GraphQL, Apollo, Node.js`}
          />
        </ColumnWrapper>
        <ColumnWrapper>
          <WorkItem
            position="Junior Developer"
            company="London Borough of Hackney"
            year="2018 - 2019"
            description={`• Designed and developed the front-end of the Developer API Hub\n\n• Test-Driven Development of REST APIs using C# .NET Core 2.1\n\n• Tech Stack : TypeScript, Angular, C#, .NET Core`}
          />
          <WorkItem
            position="Project Officer"
            company="London Borough of Hackney"
            year="2016 - 2018"
            description="Planning, leading and delivering on Borough wide resident sustainment initiatives. Working with partnering services and organisations to develop and deliver awareness-raising programmes relating to resident sustainment for audiences of staff and residents."
          />
          <WorkItem
            position="Support Worker"
            company="LookAhead"
            year="2015 - 2016"
            description="Helped and supported vulnerable adults with a wide range of needs. Produced comprehensive and specific risk assessments/management plans. These were then regularly reviewed to minimise risk by identifying, reporting and following up any safeguarding concerns and incidents in line with policy guidelines."
          />
          {/* <WorkItem
            position="Assistant Psychologist"
            company="LookAhead"
            year="2016 - 2018"
            description="As part of my clinical training I conducted assessments and treatment to patients mainly in within personality disorder spectrums, psychosis and eating disorders, often in crisis/relapse."
          /> */}
        </ColumnWrapper>
      </WorkExperience>
    </Section>
  );
};

export default Work;
