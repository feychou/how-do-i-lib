// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


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
          <Text size={6} textColor="primary">People who have never done!</Text>
          <Text size={6} textColor="primary">People who did it and want to be reminded why they hated it!</Text>
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
          <img style={{float:'right'}} src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.1997-6/p128x128/13995354_1762414107375270_392985100_n.png?oh=37c9f7a948e4a91888c220e13a321508&oe=599E40FD" />
          <List>
            <ListItem>Scaffolder?</ListItem>
            <ListItem>With great powers...</ListItem>
            <ListItem>Understand how to distribute it</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={5} textColor="primary" style={{textAlign:'left'}}>Bundle</Heading>
          <List>
            <ListItem>Feasible for small libraries</ListItem>
            <ListItem>One output file</ListItem>
            <ListItem>Possible to use directly in the browser (script tag, requirejs)</ListItem>
            <ListItem>Best minified</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Text size={6} textColor="primary">A module bundler can come to the rescue!</Text>
          <CodePane
            style={{fontSize:"20px"}}
            lang="javascript"
            source={require("raw-loader!../assets/webpack-output-lib.example")} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={5} textColor="primary" style={{textAlign:'left'}}>No bundle (multiple files)</Heading>
          <List>
            <ListItem>Complex libraries</ListItem>
            <ListItem>Lib consisting of multiple files</ListItem>
            <ListItem>Usage spec to be defined</ListItem>
            <ListItem>Pkg manager installation (yarn, npm)</ListItem>
            <ListItem>Library as a dependency in another (webpack) bundle</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={3} fit textColor="tertiary">react-router-redux example</Heading>
          <Text size={5} textColor="tertiary">Src vs lib</Text>
          <CodePane
            style={{margin:"10px auto", fontSize:"20px", minWidth:"47%", width:"47%", float: "left", display:"inline-block"}}
            lang="javascript"
            source={require("raw-loader!../assets/react-router-redux-src.example")} />
          <CodePane
            style={{margin:"10px auto", fontSize:"20px", minWidth:"47%", width:"47%", display:"inline-block"}}
            lang="javascript"
            source={require("raw-loader!../assets/react-router-redux-lib.example")} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Text size={5} textColor="tertiary">Usage spec</Text>
          <CodePane
            style={{margin:"20px auto", fontSize:"20px", display:"inline-block"}}
            lang="javascript"
            source={require("raw-loader!../assets/react-router-redux-import.example")} />
          <CodePane
            style={{margin:"20px auto", fontSize:"20px", display:"inline-block"}}
            lang="javascript"
            source={require("raw-loader!../assets/react-router-redux-index.example")} />
        </Slide>
      </Deck>
    );
  }
}
