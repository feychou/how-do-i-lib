// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#edeeef",
  secondary: "pink",
  tertiary: "#9999cc",
  quartenary: "#70DBDB"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" style={{position:"relative"}}>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Javacript: how do I even lib?
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary" style={{position:"absolute", top:"44px", left:"37%"}}>
            Javacript: how do I even lib?
          </Heading>
          <Text textColor="tertiary" size={2} margin="10px 0 0" bold fit style={{position:"absolute", top:"90px", left:"29%"}}>Creating and consuming third party libs in Javacript</Text>
          <img src="https://avatars3.githubusercontent.com/u/1609297?v=3&s=460" width="200" height="200" style={{float:'left', margin:'10px 0 0'}} />
          <Text margin="168px 0 0" textColor="tertiary" size={6}>
            https://feychou.github.io/
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">FOR EVERYONE!</Heading>
          <Text size={6} textColor="secondary">People who have never done!</Text>
          <Text size={6} textColor="secondary">People who did it and want to be reminded why they hated it!</Text>
          <img src="http://www.stickermotions.com/wp-content/uploads/2015/04/88831530358093871666.png" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="primary" caps>Why?</Heading>
          <List>
            <ListItem>Disregarded topic</ListItem>
            <ListItem>Partial information available</ListItem>
            <ListItem>Open source relevance</ListItem>
            <ListItem>Technical benefits (better codebases)</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="quartenary">
          <Heading size={3} textColor="secondary" caps>Where to start?</Heading>
          <List>
            <ListItem>Scaffolder?</ListItem>
            <ListItem>Consider the responsibility</ListItem>
            <ListItem>Understand how to distribute it</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
