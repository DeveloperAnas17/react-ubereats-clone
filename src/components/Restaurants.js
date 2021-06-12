import styled from "styled-components";

// import image1 from "../assets/image1.png";
// import image2 from "../assets/image2.png";

const StyledWrapper = styled.div`
  /* display: flex; */
`;

const StyledCard = styled.div`
  border-top: 20px solid #f6f6f6;
  padding: 20px;
  background-color: red;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: white;
  align-items: center;
  min-width: 40%;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  text-align: center;
  font-size: 1.15rem;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 20px;
`;

// const StyledSubtitle = styled.div`
//   font-size: 1rem;
// `;

// const StyledRating = styled.div`
//   background: #eeeeee;
//   color: black;
//   height: 30px;
//   border-radius: 15px;
//   padding: 0 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: bold;
// `;

const Wrapper = ({ title, image, calories }) => {
  return (
    <StyledWrapper>
      <StyledCard>
        <StyledImage src={image} />
        <StyledRow>
          <div>
            <StyledTitle>{title}</StyledTitle>
          </div>
          {/* <StyledRating>4.5</StyledRating> */}
        </StyledRow>
      </StyledCard>
    </StyledWrapper>
  );
};

export default Wrapper;
