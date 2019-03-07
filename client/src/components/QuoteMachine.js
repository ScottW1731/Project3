// eslint-disable-next-line
import React, { Component, Fragment } from "react";
import { random } from "lodash";

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(data => data.json())
    .then(quotes => this.setState({ quotes }, () => {
      this.setState({ selectedQuoteIndex: this.selectQuoteIndex()})
    }));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      // eslint-disable-next-line
      return;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }
  selectQuoteIndex(){
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length -1);
  }

  render() {
    console.log(this.state.selectedQuoteIndex);
    return (
      <div className ="App" id="quote-result">
      {this.selectedQuote ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}` : ""}
      {/* <button type ="Submit" clickHandler = {this.nextQuoteClickHandler}>Next Quote</button>   */}
      </div>
    );
  }


//     constructor() {
//       super();
//       this.state = {
//         quote: {
//           content: "",
//           link: "",
//           title: ""
//         },
//         hasQuote: false
//       }
//       this.END_POINT = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=4";
//     }
  
//     getRandomQuote = event => {
//       fetch(this.END_POINT)
//       .then(response => response.json())
//       .then(data => {
//         if (data[0].content && data[0].title && data[0].link) {
//           let { quote }= this.state;
//           let quoteData = data[0];
//           quote.content = quoteData.content;
//           quote.link = quoteData.link;
//           quote.title = quoteData.title;
//           this.setState({ quote }, () => {
//             if (this.state.hasQuote === false) {
//               this.setState({ hasQuote: true })
//             }
//           })
//         }
//         else {
//           return console.error("Not quote has been found 404")
//         }
//         console.log(data)
//       })
//     }
  
// renderQuote = ()=> {
//   const { title, content, link } = this.state.quote;
//   return (
//     <div className ="quote-result" onClick = {() => this.shareOnTwitter(title, link)}>     
//       <h1>{title}</h1>
//       <h2>{content}</h2>
//       <hr />
//     </div>
//   )
// }

// shareOnTwitter = (text, url) => {
//   window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

// }

//     render() {
//       const { hasQuote } = this.state;
//       return (
//         <Fragment>
//           <br />
//           <h1>Quote Testing</h1>
//           <button onClick={this.getRandomQuote}>
//           Click to see the Quote of The Day
//           </button>
//           <br />
//           {hasQuote === true ? 
//             this.renderQuote()
//             : "no quote yet"}
//         </Fragment>
//       )
//     }
//   }
}
  export default QuoteMachine;