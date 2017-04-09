import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const StyledLink = styled(Link)`
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

const Tag = props => (
  <StyledLink to={props.location}>{props.name}</StyledLink>
);

export default Tag;
