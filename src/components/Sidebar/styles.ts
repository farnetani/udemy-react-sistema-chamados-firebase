import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 260px;
  background-color: #181c2e;
  position: fixed;
  height: 100%;
  overflow: auto;

  div {
    background: url('../../assets/cover.png');
    background-color: #181c2e;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    padding-top: 30px;
  }

  img {
    border-radius: 50%;
    display: block;
    margin: auto;
    width: 90px;
    height: 90px;
    -webkit-filter: drop-shadow(2px 3px 6px #121212);
    filter: drop-shadow(2px 3px 6px #121212);
    object-fit: cover;
  }

  a {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    padding: 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: ease-in-out 0.4s;
  }

  svg {
    margin-right: 0.5em;
  }

  a:hover {
    background-color: #121212;
    color: #fff;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
    div {
      display: none;
    }
    a {
      float: left;
    }
    a svg {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: auto;
    position: relative;
    background: #000;
  }
`

export const Content = styled.div`
  margin-left: 200px;
  padding: 1px 16px;

  @media screen and (max-width: 700px) {
    .Container {
      width: 100%;
      height: auto;
      position: relative;
    }

    div.content {
      margin-left: 0;
    }

    .Container a {
      float: left;
    }
    .Container div {
      display: none;
    }

    .Container a svg {
      display: none;
    }
  }

  @media screen and (max-width: 400px) {
    .Container a {
      text-align: center;
      float: none;
    }

    .Container a svg {
      display: none;
    }
  }
`
