import React from 'react';
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  margin-inline: 20px;

`;

const ImgCard = ({ title, desc, price, createdAt, id }) => {
  return (
    <CardContainer >
      <div tabIndex={0}>
        <div className="card">
          <img
            src="/assets/MS11.jpg"
            alt="this is an img"
            className='card-image'
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default ImgCard;
