import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  /* align-items: stretch; */
  align-items: center;
  justify-content: center;
  background-color: #101010;
`

export const Content = styled.div`
  background: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
  form {
    margin: 40px 0;
    width: 300px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
      color: #fff;
      font-size: 1.5rem;
    }
    button {
      background: #ff9000;
      border-radius: 10px;
      border: none;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      color: #312e38;
      font-weight: bold;
      margin-top: 16px;
      transition: background 0.2s;
      &:hover {
        background: #ff9045;
      }
    }
    a {
      color: #f4ede8;
      text-decoration: none;
      margin-top: 24px;
      display: block;
      transition: color 0.2s;
    }
  }
  > a {
    display: flex;
    align-items: center;
    color: #ff9000;
    text-decoration: none;
  }
`

export const LoginLogo = styled.div`
  display: flex;
  justify-content: center;
  background-color: #181c2e;
  width: 100%;

  img {
    padding: 20px;
    width: 170px;
    height: 130px;
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  // flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 5px 15px;
  margin-bottom: 10px;

  a {
    color: #f4ede8;
    text-decoration: none;
    margin-top: 14px;
    display: block;
    transition: color 0.2s;
  }
  a:hover {
    color: #ff9000;
    text-decoration: underline;
  }

  /* > a {
    display: flex;
    align-items: center;
    color: #ff9000;
    text-decoration: none;
  } */
`
