import React, { useState } from "react";
import styled from "styled-components";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import "../../App.scss";
import "./styles.scss";
const data = [
  {
    title: "Food",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna, invidunt dolor labore lorem kasd amet tempor, amet duo amet no aliquyam. Nonumy sea ea sed.",
  },
  {
    title: "Visa",
    content:
      "Dolor consetetur et duo invidunt no sit, sadipscing sed dolor elitr no diam nonumy. Stet ea et no ut ut,.",
  },
  {
    title: "Travel",
    content:
      "Et kasd lorem justo voluptua stet dolor eos labore eos. Lorem elitr aliquyam dolor nonumy ipsum lorem erat. Ea dolore tempor ea est magna, invidunt dolor labore lorem kasd amet tempor, amet duo amet no aliquyam. Nonumy sea ea sed.Et eos et lorem sit eirmod elitr. Dolores duo sea nonumy tempor tempor dolor labore, eos voluptua dolor amet sed.",
  },
  {
    title: "Hotel",
    content:
      "Sea sed nonumy dolores voluptua labore ipsum, sed dolore diam magna at, gubergren clita justo diam diam. Labore takimata vero.",
  },
  {
    title: "Rooms",
    content:
      "Lorem at eirmod diam consetetur clita labore elitr stet labore lorem. Clita lorem dolores et duo. Tempor vero nonumy erat.",
  },
  {
    title: "Beach",
    content:
      "Et voluptua takimata aliquyam sit ut clita, ipsum no eos consetetur tempor ut lorem. Est aliquyam invidunt consetetur nonumy. Sed.",
  },
  {
    title: "Summer",
    content:
      "Sea sed nonumy dolores voluptua labore ipsum, sed dolore diam magna at, gubergren clita justo diam diam. Labore takimata vero.",
  },
  {
    title: "Winter",
    content:
      "Lorem at eirmod diam consetetur clita labore elitr stet labore lorem. Clita lorem dolores et duo. Tempor vero nonumy erat.",
  },
  {
    title: "Accomodation",
    content:
      "Et voluptua takimata aliquyam sit ut clita, ipsum no eos consetetur tempor ut lorem. Est aliquyam invidunt consetetur nonumy. Sed.",
  },
];

const Tab = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 60px;
  cursor: pointer;
  border: 0;
  outline: 0;

  ${({ active }) =>
    active &&
    `
  background: white;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  width: "fit-content";
`;
function Tabs() {
  const [active1, setActive1] = useState(data[0].title);
  const [active2, setActive2] = useState(data[3].title);
  const [active3, setActive3] = useState(data[6].title);

  const [content1, setContent1] = useState(data[0].content);
  const [content2, setContent2] = useState(data[0].content);
  const [content3, setContent3] = useState(data[0].content);

  return (
    <div className="component element__tabs">
      <div className="container">
        <div className="row">
          <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12">
            <ButtonGroup>
              {data.slice(0, 3).map((type) => (
                <>
                  <Tab
                    key={type.title}
                    active={active1 === type.title}
                    onClick={() => (
                      setActive1(type.title), setContent1(type.content)
                    )}
                  >
                    {type.title}
                  </Tab>
                </>
              ))}
            </ButtonGroup>
            <p> {content1} </p>
          </div>
          <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12">
            <ButtonGroup>
              {data.slice(3, 6).map((type) => (
                <>
                  <Tab
                    key={type.title}
                    active={active2 === type.title}
                    onClick={() => (
                      setActive2(type.title), setContent2(type.content)
                    )}
                  >
                    {type.title}
                  </Tab>
                </>
              ))}
            </ButtonGroup>
            <p> {content2} </p>
          </div>
        </div>
      </div>
      <div className="container-fluid grey pt-5">
        <div className="container__grey ">
          <div className="row ">
            <div className="col col-xxl-12 col-xl-12 col-md-12 col-sm-12">
              <ButtonGroup>
                {data.slice(6, 9).map((type) => (
                  <>
                    <Tab
                      key={type.title}
                      active={active3 === type.title}
                      onClick={() => (
                        setActive3(type.title), setContent3(type.content)
                      )}
                    >
                      {type.title}
                    </Tab>
                  </>
                ))}
              </ButtonGroup>
              <p> {content3} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tabs;
