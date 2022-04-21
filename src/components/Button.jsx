import "./button.css";
import styled from "styled-components";
import { OmitProps } from "antd/lib/transfer/ListBody";

// export const Button = ({ children }) => {
//   return (<button className="btn">{children}</button>);
// };

const Button = styled.button`
  border: none;
  border-radius: 5px;
  color:${(prop)=>(prop.theme==="light"? "orange":"silver")};
  background-color:${(prop)=>
 (prop.theme==="light"? "yellow" : "red")
  };
  margin: 10px;
  /* &:hover {
    color: teal;
    background: white;
  } */
`;
export { Button };
