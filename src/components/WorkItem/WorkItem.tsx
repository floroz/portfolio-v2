import React, { useEffect, useRef, useState } from "react";
import {
  WorkExp,
  PRIcon,
  Position,
  Company,
  Year,
  Description,
  GitCommitIcon,
  GitCommitsContainer,
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
  const [numbersOfIconsToRender, setnumbersOfIconsToRender] = useState(10);

  useEffect(() => {
    if (!workExpRef.current) {
      return;
    }

    setnumbersOfIconsToRender(Math.round(workExpRef.current.clientHeight / 10));
  }, []);

  return (
    <WorkExp style={workItemStyles} {...others} ref={workExpRef}>
      <PRIcon />
      <GitTrails numberOfIcons={numbersOfIconsToRender} />
      <Position>{position}</Position>
      <Company>{company}</Company>
      <Year>{year}</Year>
      {description ? <Description>{description}</Description> : null}
    </WorkExp>
  );
};

export default WorkItem;
