import React, { useEffect, useRef, useState } from "react";
import useIconNumbers from "./use-icons-number";
import {
  WorkExp,
  PRIcon,
  Position,
  Company,
  Year,
  Description,
  GitCommitIcon,
  GitCommitsContainer,
  ReadMore,
} from "./WorkItem.styled";

interface Props {
  position: string;
  year: string;
  company: string;
  description?: string;
  workItemStyles?: React.CSSProperties;
}

const GitTrails = ({ numberOfIcons }) => {
  return (
    <GitCommitsContainer>
      {Array(numberOfIcons)
        .fill(undefined)
        .map((icon, index) => (
          <GitCommitIcon key={index} />
        ))}
    </GitCommitsContainer>
  );
};

const WorkItem = ({
  position,
  year,
  company,
  description,
  workItemStyles,
  ...others
}: Props) => {
  const workExpRef = useRef<HTMLDivElement>(null);
  const { numbersOfIconsToRender } = useIconNumbers(workExpRef);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const truncatedDescription = description.slice(0, 150).concat("...");

  return (
    <WorkExp style={workItemStyles} {...others} ref={workExpRef}>
      <PRIcon />
      <GitTrails numberOfIcons={numbersOfIconsToRender} />
      <Position>{position}</Position>
      <Company>{company}</Company>
      <Year>{year}</Year>
      <Description>
        {isDescriptionExpanded ? description : truncatedDescription}{" "}
        <ReadMore
          aria-label="expand section to read more"
          onClick={() => setIsDescriptionExpanded((prev) => !prev)}
        >
          {isDescriptionExpanded ? null : `Read more`}
        </ReadMore>
      </Description>
    </WorkExp>
  );
};

export default WorkItem;
