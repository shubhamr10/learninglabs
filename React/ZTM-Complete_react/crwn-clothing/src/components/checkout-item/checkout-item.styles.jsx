import styled from "styled-components";

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const Price = styled.span`
`;

export const Arrow = styled.div`
`;

export const Values = styled.span``;

export const Quantity = styled.span`
  display: flex;

  ${Arrow}{
    cursor: pointer;
  }

  ${Values}{
    margin: 0 10px;
  }
`;

export const Name = styled.span``;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  ${Name},
  ${Quantity},
  ${Price}{
    width: 23%;
  }

`;