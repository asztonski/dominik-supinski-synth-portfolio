/** @jsxImportSource @emotion/react */
import { useContext, useState, useEffect } from "react";
import { AppContext } from "@/api/AppContext";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { theme } from "@/api/theme";

const ContactSvg = ({ observer, inView }) => {
  const { stage, mouseCoord, isMobile } = useContext(AppContext);
  const [active, setActive] = useState(false);

  let mouseX = mouseCoord.x / 150;
  let mouseY = mouseCoord.y / 150;

  useEffect(() => {
    if (!isMobile) {
      if (stage === 4) {
        setActive(true);
      }
    }
  }, [stage]);

  useEffect(() => {
    if (isMobile) {
      if (inView) {
        setActive(true);
      }
    }
  });

  return (
    <StyledSvgBox
      ref={observer}
      className={`${active === true ? "active" : ""}`}
    >
      <svg viewBox="0 0 575 896" width="575px" height="896px">
        <path
          className="path grey"
          fill-rule="evenodd"
          stroke="rgb(46, 46, 46)"
          stroke-width="2px"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          d="M255.999,256.999 C255.999,256.999 199.249,234.999 192.999,250.999 C186.749,266.999 210.249,260.999 227.999,260.999 C245.749,260.999 277.249,252.999 252.999,241.999 C228.749,230.999 246.249,222.999 215.999,222.999 C185.749,222.999 155.249,222.999 162.999,229.999 C170.749,236.999 240.249,233.999 269.999,239.999 C299.749,245.999 323.249,288.999 301.999,345.999 C280.749,402.999 266.249,329.999 231.999,321.999 C197.749,313.999 341.249,225.999 336.999,307.999 C333.749,355.999 350.249,362.999 371.0,310.999 C391.749,258.999 377.249,247.999 360.999,260.999 C344.750,273.999 344.249,313.999 352.999,300.999 C361.749,287.999 364.249,271.999 332.999,256.999 C314.749,247.999 336.249,173.999 296.0,130.999 C255.749,87.999 254.249,73.999 206.0,93.999 C157.749,113.999 176.249,120.999 141.999,110.999 C107.749,100.999 66.249,97.999 65.999,127.999 C65.749,157.999 76.249,206.999 70.999,217.999 C65.749,228.999 72.249,234.999 90.999,235.999 C109.749,236.999 125.249,242.999 121.999,237.999 C118.749,232.999 87.249,209.999 78.999,220.999 C70.749,231.999 68.249,247.999 75.999,257.999 C83.749,267.999 112.250,258.999 116.999,255.999 C121.749,252.999 105.249,241.999 87.999,248.999 C70.749,255.999 64.249,281.999 67.999,317.999 C71.749,353.999 99.249,373.999 117.999,373.999 C136.749,373.999 213.689,368.4 209.999,373.999 C207.999,377.249 179.219,387.731 152.999,388.999 C121.999,390.499 95.560,362.777 113.999,362.999 C134.749,363.249 143.874,365.499 155.999,363.999 C168.124,362.499 209.874,366.249 217.999,364.999 C226.124,363.749 213.874,386.499 181.999,398.999 C150.124,411.499 127.874,400.499 121.999,391.999 C116.124,383.499 137.624,392.249 155.999,392.999 C168.624,393.999 149.374,422.249 160.999,444.999 C172.624,467.749 138.624,484.999 125.999,455.999 C113.374,426.999 102.124,405.499 91.999,390.999 C81.874,376.499 83.624,340.999 101.999,319.999 C116.124,303.249 100.124,325.999 118.999,338.999 C137.874,351.999 144.624,340.999 155.999,337.999 C167.374,334.999 182.624,330.249 153.999,330.999 C125.374,331.749 115.374,339.749 117.999,322.999 C120.624,306.249 136.624,244.999 124.999,220.999 C113.374,196.999 57.156,106.359 74.999,66.999 C92.843,27.640 199.406,-14.390 185.999,28.999 C172.593,72.390 168.906,100.859 214.999,57.999 C261.93,15.140 391.906,40.109 376.999,136.999 C362.93,233.890 443.531,262.109 372.999,354.999 C348.968,392.890 381.531,458.609 369.999,459.999 C358.468,461.390 305.531,483.609 255.999,537.999 C206.468,592.390 160.31,623.109 160.999,608.999 C161.968,594.890 190.531,567.109 180.999,535.999 C171.468,504.890 214.31,507.109 250.999,457.999 C287.968,408.890 309.31,378.609 288.999,391.999 C268.968,405.390 219.531,463.109 181.999,469.999 C144.468,476.890 160.531,476.109 166.999,515.999 C173.468,555.890 176.531,542.109 171.999,555.999 C167.468,569.890 71.531,713.609 69.999,809.999 C68.468,906.390 203.31,773.609 345.999,722.999 C488.968,672.390 585.31,888.109 491.999,842.999 C398.968,797.890 425.31,809.609 446.0,661.999 C466.968,514.390 415.31,526.109 409.999,491.999 C404.968,457.890 368.531,447.609 359.999,437.999 C351.468,428.390 364.531,400.109 393.999,356.999 C423.468,313.890 419.31,281.609 369.999,204.999 C333.968,151.890 343.531,106.609 361.999,114.999 C380.468,123.390 359.531,145.109 402.999,180.999 C446.468,216.890 466.531,258.609 443.999,334.999 C421.468,411.390 408.31,455.109 466.999,520.999 C514.968,576.890 533.531,646.859 525.999,699.999 C530.468,731.140 515.531,696.859 493.999,637.999 C472.468,579.140 431.531,567.859 373.999,624.999 C316.468,682.140 178.31,833.859 153.999,772.999 C129.968,712.140 277.531,541.859 307.999,450.999 "
        />
        <path
          className="path blue"
          fill-rule="evenodd"
          stroke="rgb(7, 6, 183)"
          stroke-width="2px"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          fill="none"
          d="M34.999,241.999 C45.989,201.296 40.342,201.287 31.254,176.860 C18.575,142.782 44.880,24.457 166.638,4.579 C288.397,-15.299 416.816,47.176 422.260,200.525 C436.224,256.374 484.982,247.855 488.532,335.889 C501.550,399.311 529.479,411.617 514.94,458.947 C511.17,489.238 523.798,537.514 533.29,556.446 C542.260,575.378 530.425,636.907 554.804,686.131 C564.982,713.582 580.366,871.251 569.5,888.290 C569.5,888.290 62.868,896.810 62.496,893.23 C62.125,889.237 56.241,780.790 71.964,740.87 C99.995,660.572 169.479,553.607 169.479,553.607 L152.437,476.932 C152.437,476.932 136.714,478.825 121.195,452.320 C105.675,425.816 48.134,361.447 53.443,314.117 C54.19,267.734 26.999,287.999 34.999,241.999 Z"
          style={{ transform: `translate(${-mouseX}px, ${-mouseY}px)` }}
        />
        <path
          className="path red"
          fill-rule="evenodd"
          stroke="rgb(232, 9, 46)"
          stroke-width="2px"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          fill="none"
          d="M1.254,176.860 C1.254,140.500 14.880,24.457 136.638,4.579 C258.397,-15.299 386.816,47.176 392.260,200.525 C406.224,256.374 454.982,247.855 458.532,335.889 C471.550,399.311 499.479,411.617 484.94,458.947 C481.17,489.238 493.798,537.514 503.29,556.446 C512.260,575.378 500.425,636.907 524.804,686.131 C534.982,713.582 550.366,871.251 539.5,888.290 C539.5,888.290 32.868,896.810 32.496,893.23 C32.125,889.237 26.241,780.790 41.964,740.87 C69.995,660.572 139.479,553.607 139.479,553.607 L122.437,476.932 C122.437,476.932 106.714,478.825 91.195,452.320 C75.675,425.816 28.134,361.447 33.443,314.117 C34.19,267.734 1.254,221.860 1.254,176.860 Z"
          style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
        />
      </svg>
    </StyledSvgBox>
  );
};

//   Animations

const greyPath = keyframes`
from {
    stroke-dasharray: 7950;
    stroke-dashoffset: 7960;
}
to {
    stroke-dasharray: 7950;
    stroke-dashoffset: 0;
}
`;

const StyledSvgBox = styled.div`
  svg {
    path {
      transition: 0.2s ease;
    }
    .grey {
      stroke-dasharray: 7950;
      stroke-dashoffset: 7960;
      animation-delay: 1s;
      transition: 0.2s ease;
      animation-duration: 14s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
  }
  &.active {
    .grey {
      animation-name: ${greyPath};
    }
  }
  @media (max-width: ${theme.breakpoints.md}) {
    position: relative;
    bottom: -1rem;
  }
`;

export default ContactSvg;
