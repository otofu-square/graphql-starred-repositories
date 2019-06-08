import * as React from "react";

interface Props {
  url: string;
  nameWithOwner: string;
  description: string;
  primaryLanguageName: string;
}

export const Repository: React.FC<Props> = ({
  url,
  nameWithOwner,
  description,
  primaryLanguageName
}) => (
  <li>
    <p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {nameWithOwner}
      </a>
    </p>
    <p>{description}</p>
    <p>{primaryLanguageName}</p>
  </li>
);
