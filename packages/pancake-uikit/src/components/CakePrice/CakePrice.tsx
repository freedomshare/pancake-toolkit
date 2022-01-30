import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  swapcryptoPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SwapcryptoPrice: React.FC<Props> = ({ swapcryptoPriceUsd, color = "textSubtle" }) => {
  return swapcryptoPriceUsd ? (
    <PriceLink
      href="https://thirsty-hugle-3daa6e.netlify.app/swap?outputCurrency=0x429199e68283bb1e193d38ba8e85dfbca4a973c9"
      target="_blank"
    >
      <LogoRound width="24px" mr="8px" />
      <Text color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
