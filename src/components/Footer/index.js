import React from 'react';
import * as S from './style';
import logo from '../../assets/images/nyt-logo-185x26.svg';
import topics from './content';

import { FaRegNewspaper,FaDraft2Digital,FaGamepad } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';


const Footer = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <img src={logo} alt="logo"></img>
        <p>Go to Home Page </p>
      </S.Header>

      <S.ExternalLinks>
        <S.Topics>
          {topics.map(topic => (
            <div key={topic.id}>
              <h4>{topic.title}</h4>
              {topic.content.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </div>
          ))}
        </S.Topics>

        <S.Subscribe>
          <h4>SUBSCRIBE</h4>

          <S.Subs>
            <FaRegNewspaper />
            <p>Home Delivery</p>
          </S.Subs>

          <S.Subs>
            <FaDraft2Digital />
            <p>Digital Subscriptions</p>
          </S.Subs>

          <S.Subs>
            <FaGamepad />
            <p>Games</p>
          </S.Subs>

          <S.Subs>
            <GiKnifeFork />
            <p>Cooking</p>
          </S.Subs>

          <p>Email Newsletters</p>
          <p>Corporate Subscriptions</p>
          <p>Education Rate</p>

          <S.Language>
            <p>Mobile Aplications</p>
            <p>Replica Edition</p>
            <p>Español</p>
            <p>中文网</p>
          </S.Language>

        </S.Subscribe>
      </S.ExternalLinks>

      <S.Footer>
        <span>© 2020 The New York Times Company </span>
        <span>NYTCo </span>
        <span>Contact Us </span>
        <span>Work with us</span>
        <span>Advertise </span>
        <span>T Brand Studio </span>
        <span>Your Ad Choices </span>
        <span>Privacy </span>
        <span>Terms of Service </span>
        <span>Terms of Sale </span>
        <span>Site Map </span>
        <span>Help </span>
        <span>Subscriptions </span>
      </S.Footer>
    </S.Wrapper>
  );
}

export default Footer;