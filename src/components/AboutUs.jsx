import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutUs = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutUs() {
  const { bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutUs className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Us</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <h3>Senior Pastor: Chase Buchanan</h3>
                <p>Chase and his wife, Abby, have been married 14+ years.</p>
                <p>They have two kids:  Hudson and Olivia.</p>
                <p>Chase answered his call into the ministry in 2008 when he became the Youth Pastor at Lake Overholser Church of the Nazarene.  He served as Youth Pastor with enthusiasm until 2014, when he was called to be the Senior Pastor of New Day.  Along with that call, Chase and Abby have a deep passion to reach the people of Surrey Hills and the OKC metro area with the love of Christ.<br /><br />Chase has a  Bachelor's Degree in Theology and Ministry with a focus on Pastoral Leadership from, Nazarene Bible College.  Along with that, he minored in Church History and received his Master's Degree in Divinity.   He graduated and was ordained in 2015.</p>
              </Container>
            </Col>
            <Col className="d-flex flex-column text-center">
              <Container>
                <h3>Associate Pastor/Youth: Jared Burch</h3>
                <p>Jared and his wife, Sondra have been married since 2010.<p/>
                <p>They have 3 boys: Zander (2012), Jaxon (2014), and Mason (2017).</p></p>
                <p>Jared has a Bachelor’s Degree in Theology and Ministry from Southern Nazarene University. He was ordained in the Church of the Nazarene in 2009.  Jared’s call to ministry led him to Lake View Park Church of the Nazarene in Oklahoma City in 2002 where he went on to spend 15 years as Youth Pastor. In 2017, his call led him to New Day where he leads the youth and acts in an Associate roll. Jared has a passion for helping others discover their calls and find ways to put their faith into practice.</p>
                <p>Jared loves the Ohio State Buckeyes, Vernor’s Ginger Ale, and perfecting his carpentry skills. He has been on Sportscenter and makes an appearance in the Blockbuster hit, I Can Only Imagine. His greatest joy, though, comes with spending time with his family!</p>
              </Container>
            </Col>
          </Row>
        </Container>
      </StyledAboutUs>
    </Element>
  );
}
