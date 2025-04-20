import React from 'react';
const urlRegex = /\[(?<text>[^[\]]+)\]\((?<link>[^()]+)\)/g;

export default function injectLinks(s: string): React.JSX.Element {
  const urlStrings = s.matchAll(urlRegex);
  if (urlStrings === null) {
    return <span>{s}</span>;
  }
  let index = 0;
  const elements: React.JSX.Element[] = [];
  for (const urlString of urlStrings) {
    const foundIndex = s.indexOf(urlString[0], index);
    elements.push(<span key={index}>{s.slice(index, foundIndex)}</span>);
    elements.push(
      <span key={foundIndex}>
        <a href={urlString.groups?.link} target='_blank'>
          {urlString.groups?.text}
        </a>
      </span>,
    );

    index = foundIndex + urlString[0].length;
  }
  elements.push(<span key={index}>{s.slice(index)}</span>);
  return <span>{elements}</span>;
}
