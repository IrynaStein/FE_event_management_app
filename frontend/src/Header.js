import Date from "./Date";
import Utility from "./Utility";
import { Segment } from "semantic-ui-react";

function Header() {
  return (
    <Segment.Inline>
      <Date/>
      <Utility/>
    </Segment.Inline>
  );
}

export default Header;
