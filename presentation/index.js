// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Slide,
  Text,
  Quote
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
          <a
            style={{color:"#9999cc", textDecoration:"none", cursor:"pointer", margin:"168px 0 0", display:"block"}}>
            https://feychou.github.io/
          </a>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">FOR EVERYONE!</Heading>
          <Text size={6} textColor="primary">People who have never done it!</Text>
          <Text size={6} textColor="primary">People who did it and want to be reminded why they hated it!</Text>
          <img src="http://www.stickermotions.com/wp-content/uploads/2015/04/88831530358093871666.png" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="primary" caps>Why?</Heading>
          <List style={{listStylePosition:"outside"}}>
            <ListItem>Disregarded topic</ListItem>
            <ListItem>Partial information available</ListItem>
            <ListItem>Open source relevance</ListItem>
            <ListItem>Technical benefits (better codebases)</ListItem>
          </List>
          <img
            style={{position: "absolute", top:"0", left:"620px"}}
            src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.1997-6/p128x128/851577_387545871371297_1009837837_n.png?oh=700f4cef990cb692f25c654dbada34f0&oe=599E3341" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="quartenary">
          <Heading size={3} textColor="secondary" caps>Where to start?</Heading>
          <img style={{float:'right'}} src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.1997-6/p128x128/13995354_1762414107375270_392985100_n.png?oh=37c9f7a948e4a91888c220e13a321508&oe=599E40FD" />
          <List style={{listStylePosition:"outside"}}>
            <ListItem>Scaffolder?</ListItem>
            <ListItem>With great powers...</ListItem>
            <ListItem>Understand how to distribute it</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={5} textColor="primary" style={{textAlign:'left'}}>Bundle</Heading>
          <List style={{listStylePosition:"outside"}}>
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
          <img
            style={{position: "absolute", top:"530px", right:"95px"}}
            src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.1997-6/p128x128/10541000_364384157058223_1029961062_n.png?oh=e3f33101e84ca5319e9a13ed937f4348&oe=59C1AFBE" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={5} textColor="primary" style={{textAlign:'left'}}>No bundle (multiple files)</Heading>
          <List style={{listStylePosition:"outside"}}>
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
          <Text size={5} textColor="tertiary">Usage spec (named imports)</Text>
          <CodePane
            style={{margin:"20px auto", fontSize:"20px", display:"inline-block"}}
            lang="javascript"
            source={require("raw-loader!../assets/react-router-redux-import.example")} />
          <CodePane
            style={{margin:"20px auto", fontSize:"20px", display:"inline-block"}}
            lang="javascript"
            source={require("raw-loader!../assets/react-router-redux-index.example")} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Text size={5} textColor="tertiary">Usage spec (default imports)</Text>
          <CodePane
            style={{margin:"20px auto", fontSize:"20px", display:"inline-block"}}
            lang="javascript"
            source={require("raw-loader!../assets/react-router-redux-default.example")} />
          <CodePane
            style={{margin:"20px auto", fontSize:"20px", display:"inline-block"}}
            lang="javascript"
            source={require("raw-loader!../assets/react-router-redux-middleware.example")} />
          <Text size={5} fit textColor="tertiary">No more redundant code in the build with tree-shaking in webpack2!</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Text size={5} textColor="tertiary">Make it installable</Text>
          <img
            style={{position:"absolute", zIndex:"2", right:"90px", top:"165px"}}
            src="https://scontent-frx5-1.xx.fbcdn.net/v/t39.1997-6/p128x128/13679854_1411567525523670_120730489_n.png?oh=084c956db275e07427845cb96edb6849&oe=599D12EA" />
          <CodePane
            style={{margin:"20px auto", fontSize:"20px", display:"inline-block"}}
            lang="javascript"
            source={require("raw-loader!../assets/react-router-redux-package.example")} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="quartenary">
          <Heading size={5} textColor="secondary">Regarding style...</Heading>
          <List style={{listStylePosition:"outside"}}>
            <ListItem>CSS modules? Overhead for the consumer</ListItem>
            <ListItem>Use whatever prepocessor you like, but distribute compiled files</ListItem>
          </List>
          <img src="https://scontent-frx5-1.xx.fbcdn.net/v/t39.1997-6/p128x128/851580_387545598037991_1255650947_n.png?oh=038c83d17e5c1a1c5cc5803802cca404&oe=59BE027F"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">WHERE DO I PUT IT?</Heading>
          <List style={{listStylePosition:"outside"}}>
            <ListItem>Github (dist in repo)</ListItem>
            <ListItem>Publish on NPM (available at https://unpkg.com/package@version/file)</ListItem>
            <ListItem>Any CDN (for bundles)</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="quartenary">
          <Heading size={5} textColor="secondary">Library != One repo</Heading>
          <List style={{listStylePosition:"outside"}}>
            <ListItem>Repo with multiple packages</ListItem>
            <ListItem>Easier for testing, shared configs etc.</ListItem>
            <ListItem>Tools (Lerna)</ListItem>
          </List>
          <List textColor="tertiary" style={{listStylePosition:"outside"}}>
            <ListItem style={{fontSize:"2rem"}}>Impossible to install with github</ListItem>
            <ListItem style={{fontSize:"2rem"}}>Some tools expect one package.json to be in the folder root</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Text size={5} textColor="tertiary">Devs aren't adopting all this new tech just because it's new and fun.<br />They are doing it because they have to in order to survive.</Text>          
          <Text style={{fontSize:"1.5rem", float:"right", fontStyle:"italic"}} textColor="tertiary">Are we making the web too complicated?</Text>          
          <img
            style={{height:"450px"}}
            src="http://suptg.thisisnotatrueending.com/archive/45961040/images/1457811027282.png" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={3} textColor="secondary" caps>Reads and sources</Heading>
          <a
            style={{color:"#edeeef", textDecoration:"none", cursor:"pointer", marginBottom:"10px"}}
            target="__blank"
            href="http://seldo.com/weblog/2017/05/21/are_we_making_the_web_too_complicated">Are we making the web too complicated?</a><br />
          <a
            style={{color:"#edeeef", textDecoration:"none", cursor:"pointer", marginBottom:"10px"}}
            target="__blank"
            href="https://webpack.js.org/guides/author-libraries/">Authoring libraries in webpack</a><br />
          <a
            style={{color:"#edeeef", textDecoration:"none", cursor:"pointer", marginBottom:"10px"}}
            target="__blank"
            href="https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c">An Update on ES6 Modules in Node.js</a><br />
          <a
            style={{color:"#edeeef", textDecoration:"none", cursor:"pointer", marginBottom:"10px"}}
            target="__blank"
            href="http://jakewiesler.com/tree-shaking-es6-modules-in-webpack-2/">Tree-shaking ES6 modules in webpack2</a><br />
          <a
            style={{color:"#edeeef", textDecoration:"none", cursor:"pointer", marginBottom:"10px"}}
            target="__blank"href="https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281">Named vs default imports</a>
        </Slide>
      </Deck>
    );
  }
}
