// Import React
import React from 'react';

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, CodePane, Fit, Fill, Image, Layout, Code, Appear } from 'spectacle';
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

const codeTheme = 'light';

const theme = createTheme({
  primary: 'wheat',
  secondary: '#202020',
  headersColor: '#202020',
  textColorLight: '#ffffff',
  textColorDark: '#202020',
  linkColor: '#4682b4',
  logoColor: '#E10098',
}, {
  primary: "Roboto Condensed",
  secondary: "Ubuntu",
  tertiary: "monospace"
});

const images = {
  gqlScheme: require('../assets/images/gql-schema.png'),
  oneCallGql: require('../assets/images/one-cal-gql.png'),
  bff: require('../assets/images/bff.jpg'),
  bff2: require('../assets/images/bff2.png'),
  falcorLogo: require('../assets/images/falcor-logo.svg')
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
            <ListItem>Who uses GraphQL?</ListItem>
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

        <Slide bgColor="black">
          <BlockQuote>
            <Quote textSize="56px">When we built Facebook's mobile applications, we needed a data-fetching API powerful enough to describe all of Facebook, yet simple and easy to learn so product developers can focus on building things quickly</Quote>
            <Cite>Lee Byron</Cite>
          </BlockQuote>
        </Slide>

        <Slide textColor="textColorDark">
          <CustomText>
            A GraphQL query is a string that is sent to a server to be interpreted and fulfilled, which then returns JSON back to the client.
          </CustomText>
          <div className="two-code-panes">
            <CodePane
              lang="graphql"
              textSize="1em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/1-gql-query.example')}
            />
            <CodePane
              lang="json"
              textSize="1em"
              theme={codeTheme}
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
            lang="graphql"
            textSize="0.8em"
            theme={codeTheme}
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
            lang="graphql"
            textSize="1.5em"
            theme={codeTheme}
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
              lang="graphql"
              textSize="1em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/3-gql-introspection.example')}
            />
            <CodePane
              lang="json"
              textSize="1em"
              theme={codeTheme}
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
            lang="graphql"
            textSize="1em"
            theme={codeTheme}
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

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Other Alternatives
          </Heading>
        </Slide>

        <Slide textColor="textColorDark">
          <CustomText>
            GraphQL is an alternative to REST for developing APIs, not a replacement.
          </CustomText>
          <CustomText>
            The main feature of GraphQL is to be able to send a query specifying only the information you need and get exactly that.
          </CustomText>
          <CustomText>
            But you can also achieve this using REST, from passing the name of the fields you want to use in the URL (implementing the parsing and returning logic yourself):
          </CustomText>
          <Margin />
          <Code textColor="#f25cc1">
            GET /books/1492030716?fields=title,pageCount
          </Code>
          <Margin/>
          <CustomText>
            And it is not difficult to implement. There are <Link href="https://jsonapi.org/implementations/" target="_blank">many JSON API libraries</Link> in many languages.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <CustomText>
            Do you want the benefits of using a schema and strong types in REST?
          </CustomText>
          <CustomText>
            Use <Link href="https://json-schema.org/" target="_blank">JSON schemas</Link>.
          </CustomText>
          <CustomText>
            There are <Link href="https://json-schema.org/implementations.html" target="_blank">many libraries that implement and support</Link> this specification too.
          </CustomText>
          <CustomText>
            Do you want to use a query language in REST APIs?
          </CustomText>
          <CustomText>
            Try <Link href="https://www.odata.org/" target="_blank">OData</Link>.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <Link href="https://netflix.github.io/falcor/" target="_blank">
            <Image src={images.falcorLogo} />
          </Link>
          <CustomText>
            A JavaScript library for efficient data fetching created by Netflix team.
          </CustomText>
          <CustomText>
            Falcor lets you represent all your remote data sources as a single domain model via a virtual JSON graph.
            You code the same way no matter where the data is, whether in memory on the client or over the network on the server.
          </CustomText>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            <Link href="https://graphql.org/code/" target="_blank">GraphQL Implementations</Link>
          </Heading>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            GraphQL Basics
          </Heading>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            GraphQL Schema
          </Heading>
          <CustomText>
            A GraphQL schema is at the center of any GraphQL server implementation and describes the functionality available to the clients which connect to it.
          </CustomText>
          <CustomText>
            The core building block within a schema is the <Code textColor="#f25cc1">type</Code>. Types provide a wide-range of functionality within a schema, including the ability to:
          </CustomText>
          <List>
            <Appear><ListItem>Create relationships between types (e.g. between a <Code textColor="#f25cc1">Book</Code> and an <Code textColor="#f25cc1">Author</Code>).</ListItem></Appear>
            <Appear><ListItem>Define which data-fetching (querying) and data-manipulation (mutating) operations can be executed by the client.</ListItem></Appear>
            <Appear><ListItem>If desired, self-explain what capabilities are available to the client via introspection.</ListItem></Appear>
          </List>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            GraphQL implements Schema Definition Language (SDL) to define a schema
          </Heading>
          <CustomText>
            In a simple example involving books and authors, the SDL might declare:
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="1.3em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/8-gql-sdl.graphql')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Scalar Types
          </Heading>
          <CustomText>
            Scalar types represent the leaves of an operation and always resolve to concrete data. The default scalar types which GraphQL offers are:
          </CustomText>
          <List>
            <ListItem><Code textColor="#f25cc1">Int</Code>: Signed 32‐bit integer</ListItem>
            <ListItem><Code textColor="#f25cc1">Float</Code>: Signed double-precision floating-point value</ListItem>
            <ListItem><Code textColor="#f25cc1">String</Code>: UTF‐8 character sequence</ListItem>
            <ListItem><Code textColor="#f25cc1">Boolean</Code>: true or false</ListItem>
            <ListItem><Code textColor="#f25cc1">ID</Code> (serialized as <Code textColor="#f25cc1">String</Code>): A unique identifier, often used to refetch an object or as the key for a cache. While serialized as a String, ID signifies that it is not intended to be human‐readable</ListItem>
          </List>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Object Types
          </Heading>
          <CustomText>
            The object type is the most common type used in a schema and represents a group of fields. Each field inside of an object type maps to another type, allowing nested types and circular references.
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="1.3em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/9-gql-object-types.graphql')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            The Query type
          </Heading>
          <CustomText>
            A GraphQL query is for fetching data and compares to the <Code textColor="#f25cc1">GET</Code> verb in REST-based APIs.
          </CustomText>
          <CustomText>
            The <Code textColor="#f25cc1">Query</Code> type is one of many root-level types which defines functionality (it doesn't actually trigger a query)
            for clients and acts as an entry-point to other more specific types within the schema.
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="1.3em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/10-gql-query-type.graphql')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <CustomText>
            Based on the SDL defined above, a client could request a list of all books and a separate list of all authors by sending a single <Code textColor="#f25cc1">query</Code> with exactly what it wishes to receive in return:
          </CustomText>
          <div className="two-code-panes">
            <CodePane
              lang="graphql"
              textSize="1.5em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/11-gql-query.graphql')}
            />
            <CodePane
              lang="json"
              textSize="1.5em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/12-gql-response.examaple')}
            />
          </div>
        </Slide>

        <Slide textColor="textColorDark">
          <CustomText>
            Thanks to the relationship between <Code textColor="#f25cc1">Book</Code> and <Code textColor="#f25cc1">Author</Code>, which is defined in the SDL above, such a <Code textColor="#f25cc1">query</Code> could be expressed as:
          </CustomText>
          <div className="two-code-panes">
            <CodePane
              lang="graphql"
              textSize="1.5em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/13-gql-query.graphql')}
            />
            <CodePane
              lang="json"
              textSize="1.5em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/14-gql-response.examaple')}
            />
          </div>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            The Mutation type
          </Heading>
          <CustomText>
            Mutations are operations sent to the server to create, update or delete data.
            These are comparable to the <Code textColor="#f25cc1">PUT</Code>, <Code textColor="#f25cc1">POST</Code>, <Code textColor="#f25cc1">PATCH</Code> and <Code textColor="#f25cc1">DELETE</Code> verbs on REST-based APIs.
            A GraphQL query is for fetching data and compares to the <Code textColor="#f25cc1">GET</Code> verb in REST-based APIs.
          </CustomText>
          <CustomText>
            Much like how the <Code textColor="#f25cc1">Query</Code> type defines the entry-points for data-fetching operations on a GraphQL server,
            the root-level <Code textColor="#f25cc1">Mutation</Code> type specifies the entry points for data-manipulation operations.
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="1.3em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/15-gql-mutation.graphql')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <CustomText>
            We request the book's title along with the name of the author. The result returned from this mutation would be:
          </CustomText>
          <div className="two-code-panes">
            <CodePane
              lang="graphql"
              textSize="1.5em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/16-gql-mutation.graphql')}
            />
            <CodePane
              lang="json"
              textSize="1.5em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/17-gql-response.example')}
            />
          </div>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Arguments
          </Heading>
          <CustomText>
            We have the ability to pass arguments to fields.
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="1.3em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/29-gql-arguments.graphql')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Operations with dynamic variables
          </Heading>
          <CustomText>
            Aliases let you rename the result of a field to anything you want.
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="0.8em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/30-gql-aliases.graphql')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Input Types
          </Heading>
          <CustomText>
            Input types are a special type in GraphQL which allows an object to be passed
            as an argument to both queries and mutations and is helpful when simple scalar types aren't sufficient.
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="1em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/18-gql-mutation.graphql')}
          />
          <Heading size={6} textColor="headersColor">
            vs
          </Heading>
          <CodePane
            lang="graphql"
            textSize="1em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/19-gql-mutation-with-input.graphql')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Custom scalars
          </Heading>
          <CustomText>
            The GraphQL specification includes the following default scalar types: <Code textColor="#f25cc1">Int</Code>, <Code textColor="#f25cc1">Float</Code>, <Code textColor="#f25cc1">String</Code>, <Code textColor="#f25cc1">Boolean</Code> and <Code textColor="#f25cc1">ID</Code>.
            While this covers most of the use cases, some need to support custom atomic data types (e.g. Date), or add validation to an existing type.
          </CustomText>
          <CustomText>
            The following is the example of the <Code textColor="#f25cc1">Date</Code> data type.
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="1em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/20-gql-custom-scalar-type.graphql')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Enums
          </Heading>
          <CustomText>
            An Enum is similar to a scalar type, but it can only be one of several values defined in the schema.
            Enums are most useful in a situation where the user must pick from a prescribed list of options.
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="0.7em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/21-gql-enum.graphql')}
          />
          <CodePane
            lang="graphql"
            textSize="0.7em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/22-gql-query-with-enum.graphql')}
          />
          <CustomText>
            A query might look like this:
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="0.7em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/23-gql-query-with-enum.graphql')}
          />
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Union type
          </Heading>
          <CustomText>
            The <Code textColor="#f25cc1">Union</Code> type indicates that a field can return more than one object type, but doesn't define specific fields itself.
          </CustomText>
          <div className="two-code-panes">
            <CodePane
              lang="graphql"
              textSize="1.3em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/24-gql-union.graphql')}
            />
            <CodePane
              lang="graphql"
              textSize="1.3em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/25-gql-union-query.graphql')}
            />
          </div>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Interface type
          </Heading>
          <CustomText>
            Interfaces are a powerful way to build and use GraphQL schemas through the use of abstract types.
            Abstract types can't be used directly in schema, but can be used as building blocks for creating explicit types.
          </CustomText>
          <div className="two-code-panes">
            <CodePane
              lang="graphql"
              textSize="0.8em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/26-gql-interface.graphql')}
            />
            <CodePane
              lang="graphql"
              textSize="0.8em"
              theme={codeTheme}
              contentEditable
              source={require('raw-loader!../assets/code-examples/27-gql-query-interface.graphql')}
            />
          </div>
        </Slide>

        <Slide textColor="textColorDark">
          <Heading size={5} textColor="headersColor">
            Documenting your schema
          </Heading>
          <CustomText>
            GraphQL supports providing markdown-enabled descriptions within the schema, which makes it easy for consumers of the API to discover a field and how to use it.
          </CustomText>
          <CodePane
            lang="graphql"
            textSize="0.9em"
            theme={codeTheme}
            contentEditable
            source={require('raw-loader!../assets/code-examples/28-gql-describing-types.graphql')}
          />
        </Slide>

        <List style={{ width: "50%", margin: "auto" }}>
          <ListItem>https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/</ListItem>
          <ListItem>https://samnewman.io/patterns/architectural/bff/</ListItem>
          <ListItem>https://medium.com/netflix-techblog/our-learnings-from-adopting-graphql-f099de39ae5f</ListItem>
          <ListItem>https://github.blog/2016-09-14-the-github-graphql-api/</ListItem>
          <ListItem>https://blog.logrocket.com/5-reasons-you-shouldnt-be-using-graphql-61c7846e7ed3/</ListItem>
          <ListItem>https://github.com/graphql/graphql-spec</ListItem>
          <ListItem>https://blog.apollographql.com/graphql-vs-falcor-4f1e9cbf7504</ListItem>
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
