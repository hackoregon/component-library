import React from 'react';
import styled from 'styled-components';

const Tag = props => (
  <a href={props.location}>{props.name}</a>
);

const styledTag = styled(Tag)`
    display: flex;
    padding: 6px 6px 6px 6px;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    transition: all .2s ease-in-out;
    font-size: 1em;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    border: 2px solid rgba(255, 255, 255, 1);
`;

export default styledTag;