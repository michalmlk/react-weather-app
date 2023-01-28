import React from 'react'
import styled from 'styled-components'
import { Button } from "../../atoms/Button/Button.styles";

const SearchBarWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const SearchBarInput = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid transparent;
  padding-left: 10px;
  font-size: ${({theme}) => theme.fontSize.m};
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #ddd;
  }
`

export const SearchBar = ({onAction}) => {
    return (
        <SearchBarWrapper>
            <SearchBarInput placeholder="Type your city"/>
            <Button isPrimary onClick={onAction}>Check</Button>
        </SearchBarWrapper>
    )
}