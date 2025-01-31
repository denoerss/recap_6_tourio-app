import Link from "next/link";
import styled from "styled-components";
import { StyledImage } from "./StyledImage";

const Article = styled.article`
  border-radius: 2.5rem;
  padding: 1rem;
  background-color: lightgrey;
  border-bottom: 15px solid greenyellow;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
  margin-bottom: 20px;
`;

const Figure = styled.figure`
  color: black;
  position: relative;
  margin: 0;
  padding: 0;
  line-height: 0.6rem;
`;

const PlaceName = styled.figcaption`
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 15px;
`;

const PlaceCity = styled.p`
  font-size: 0.95rem;
  padding-top: 5px;
`;

export default function Card({ name, image, location, id }) {
  return (
    <Article>
      <Link href={`places/${id}`}>
        <Figure>
          <ImageContainer>
            <StyledImage
              src={image}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt=""
            />
          </ImageContainer>
          <PlaceName>{name}</PlaceName>
          <PlaceCity>{location}</PlaceCity>
        </Figure>
      </Link>
    </Article>
  );
}
