// Import React
import React from 'react';

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, CodePane, Fit, Fill, Image, Layout } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

// Import Components
import { ReactLogo } from './components/ReactLogo';
import { CustomText } from './components/CustomText';
import { Margin } from './components/Margin';
import { CustomLink as Link } from './components/CustomLink';
import { Emphasize } from './components/Emphasize';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('./index.css');

const theme = createTheme({
  primary: '#f5f6f8',
  secondary: '#202020',
  headersColor: '#202020',
  textColorLight: '#ffffff',
  textColorDark: '#202020',
  linkColor: '#4682b4',
  logoColor: "#E10098"
}, {
  primary: 'Montserrat'
});

const images = {
  gqlScheme: require('../assets/images/gql-schema.png'),
  oneCallGql: require('../assets/images/one-cal-gql.png'),
  bff: require('../assets/images/bff.jpg'),
  bff2: require('../assets/images/bff2.png'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'fade', 'slide', 'spin']} transitionDuration={500} theme={theme} contentWidth={1200}>
        <Slide>
          <ReactLogo />
          <Heading size={1} textColor="logoColor" style={{ fontWeight: 500 }}>
            GraphQL Introduction
          </Heading>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={3} textColor="headersColor" >
            Agenda
          </Heading>
          <List>
            <ListItem>What's GraphQL?</ListItem>
            <ListItem>Why GraphQL?</ListItem>
            <ListItem>GraphQL vs REST</ListItem>
            <ListItem>Alternatives</ListItem>
            <ListItem>Who uses GraphQL</ListItem>
            <ListItem>GraphQL Basics</ListItem>
            <ListItem>Demo</ListItem>
            <ListItem>Conclusions</ListItem>
          </List>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            A query language for your API
          </Heading>
          <CustomText>
            GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
          </CustomText>
          <CustomText>
            GraphQL provides a complete and understandable description of the data in your API,
            gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time,
            and enables powerful developer tools.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <CustomText>
            GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.
          </CustomText>
          <CustomText>
            On 7 November 2018, the GraphQL project was moved from Facebook to the newly-established GraphQL Foundation,
            hosted by the non-profit Linux Foundation.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <CustomText>
            A GraphQL query is a string that is sent to a server to be interpreted and fulfilled, which then returns JSON back to the client.
          </CustomText>
          <div className="two-code-panes">
            <CodePane
              lang="js"
              textSize="0.9em"
              theme="light"
              contentEditable
              source={require('raw-loader!../assets/code-examples/1-gql-query.example')}
            />
            <CodePane
              lang="js"
              textSize="0.9em"
              theme="light"
              contentEditable
              source={require('raw-loader!../assets/code-examples/2-gql-response.example')}
            />
          </div>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Why GraphQL?
          </Heading>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 Good fit for complex systems and microservices
          </Heading>
          <Image src={images.gqlScheme}/>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 Backend for Frontend
          </Heading>
          {/*<Image src={images.bff}/>*/}
          <Image width={700} src={images.bff2}/>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 Fetching data with a single API call
          </Heading>
          <Image src={images.oneCallGql}/>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 Hierarchical
          </Heading>
          <CodePane
            lang="js"
            textSize="0.7em"
            theme="light"
            contentEditable
            source={require('raw-loader!../assets/code-examples/6-gql-hierarchical.example')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 No over- and under-fetching problems
          </Heading>
          <CustomText>
            REST responses are known for either containing too much data or not enough of it, creating the need for another request.
            GraphQL solves this efficiency problem by fetching the exact data in a single request.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 Validation and type checking out-of-the-box
          </Heading>
          <CodePane
            lang="js"
            textSize="0.9em"
            theme="light"
            contentEditable
            source={require('raw-loader!../assets/code-examples/5-gql-schema.example')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 Autogenerating API documentation
          </Heading>
          <div className="two-code-panes">
            <CodePane
              lang="js"
              textSize="0.9em"
              theme="light"
              contentEditable
              source={require('raw-loader!../assets/code-examples/3-gql-introspection.example')}
            />
            <CodePane
              lang="js"
              textSize="0.9em"
              theme="light"
              contentEditable
              source={require('raw-loader!../assets/code-examples/4-gql-introspection-response.example')}
            />
          </div>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 API evolution without versioning
          </Heading>
          <CustomText>
            GraphQL eliminates the need for versioning by deprecating APIs on a field level.
            Aging fields can be later removed from the schema without impacting the existing queries.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 Code-sharing
          </Heading>
          <CodePane
            lang="js"
            textSize="0.9em"
            theme="light"
            contentEditable
            source={require('raw-loader!../assets/code-examples/7-gql-fragment.example')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 Detailed error messages
          </Heading>
          <CustomText>
            If there is an error while processing GraphQL queries,
            the backend will provide a detailed error message including all the resolvers and referring to the exact query part at fault.
          </CustomText>
          <CustomText>
            GraphQL error messages don’t have a particular standard, so you can choose – be it a stack trace, an application-specific error code, or just plain text.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👍 Subscriptions
          </Heading>
          <CustomText>
            Subscriptions allow clients to receive real-time messages from the server.
            GraphQL subscriptions can be used for automatically sending notifications to the client when a new comment or data is added, or a message is received.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            GraphQL disadvantages
          </Heading>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👎 Performance issues with complex queries
          </Heading>
          <CustomText>
            While enabling clients to request exactly what they need, GraphQL query can encounter performance issues if a client asks for too many nested fields at once.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👎 Overkill for small applications
          </Heading>
          <CustomText>
            While GraphQL is the right solution for multiple microservices, you’d better go for REST architecture in case of a simple app.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👎 Web caching complexity
          </Heading>
          <CustomText>
            Due to having only one endpoint with many different queries, it’s much harder to use this HTTP caching with a GraphQL API.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            👎 File uploading
          </Heading>
          <CustomText>
            Since GraphQL doesn’t understand files, a file uploading feature is not included in its specification.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            <Link href={"https://graphql.org/users/"} target="_blank">Who uses GraphQL?</Link>
          </Heading>
        </Slide>

        <List style={{ width: "50%", margin: "auto" }}>
          <ListItem>https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/</ListItem>
          <ListItem>https://samnewman.io/patterns/architectural/bff/</ListItem>
          <ListItem>https://medium.com/netflix-techblog/our-learnings-from-adopting-graphql-f099de39ae5f</ListItem>
          <ListItem>https://github.blog/2016-09-14-the-github-graphql-api/</ListItem>
        </List>


        <Slide>
          <Heading size={1} textColor="secondary">
            Thank you!
          </Heading>
          <CustomText textAlign="center">Mykola Pelekh</CustomText>
        </Slide>

        <Slide>
          <Heading size={1} textColor="secondary">
            Questions?
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
