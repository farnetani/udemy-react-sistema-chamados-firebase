import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  margin-left: 300px;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: #ff9000;
    border-radius: 10px;
    border: none;
    padding: 0 16px;
    height: 56px;
    color: #312e38;
    font-weight: bold;
    margin-top: 16px;
    transition: background 0.2s;

    color: #f4ede8;
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;

    &:hover {
      background: #ff9045;
    }
  }
`
