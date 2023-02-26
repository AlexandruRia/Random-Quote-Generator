import logo from './logo.svg';
import './App.css';
import React from 'react';
import  $ from 'jquery';


const quotes = {
  "Seneca": "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.",
  "George Orwell": "On the whole human beings want to be good, but not too good, and not quite all the time.",
  "Thomas Jefferson" : "I have the consolation of having added nothing to my private fortune during my public service, and of retiring with hands clean as they are empty.",
  "Mark Twain": "Whenever you find that you are on the side of the majority, it is time to reform.",
  "Aristotle": "The moral virtues, then, are produced in us neither by nature nor against nature. Nature, indeed, prepares in us the ground for their reception, but their complete formation is the product of habit.",
  "Honduran Proverb": "Grief shared is half grief; Joy shared is double joy.",
  "William Blake":"To see a world in a Grain of Sand, And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand, And eternity in an hour.",
  "Socrates": "Thou shouldst eat to live; not live to eat.",
  "Steve Jobs": "Innovation has nothing to do with how many R&D dollars you have. When Apple came up with the Mac, IBM was spending at least 100 times more on R&D. It's not about money. It's about the people you have, how you're led, and how much you get it.",
  "Ralph Waldo Emerson":"No great man ever complains of want of opportunity.",
  "Alan Alda": "The creative is the place where no one else has ever been. You have to leave the city of your comfort and go into the wilderness of your intuition. What you'll discover will be wonderful. What you'll discover will be yourself.",
  "Blaise Pascal": "Clarity of mind means clarity of passion, too; this is why a great and clear mind loves ardently and sees distinctly what it loves.",
  "Eugene Ionesco": "Ideologies separate us. Dreams and anguish bring us together.",
  "Yiddish Proverb": "A half-truth is a whole lie.",
  "Hindu Proverb": "Help thy brother's boat across, and lo! thine own has reached the shore."
};

const colors = ["primary","secondary","success","danger","warning","info","dark"];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0,
      colorIndex:0 
    }
     this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler() {
     this.setState(state => {
      if(state.colorIndex >= (Object.values(colors).length - 1)) {
        return {
                colorIndex: 0}
      } else {
      return {
              colorIndex: state.colorIndex + 1
             } }
    } )
    
    
    this.setState((state) => {
      let newQuote;
      do {
        newQuote = Math.floor(Math.random() * Object.values(quotes).length);
      } while(state.quoteIndex === newQuote)

        return {quoteIndex: newQuote}      
    } )
    
   $("#quote-box").addClass("animate__animated animate__fadeInLeft");
    setTimeout(() => {
      $("#quote-box").removeClass("animate__animated animate__fadeInLeft");
    }, 1000)
  }
  
  render() {
    return(
      <div className={"main-container container-fluid bg-" + colors[this.state.colorIndex]}>
        
        <div className="quote-container row d-flex justify-content-center align-items-center">
          <div className="bg-light text-black col-sm-4 container" id="quote-box">
            <div className="row text justify-content-center">
              <div className="text-quote-container col-sm-10">
                <p className={"text-"+ colors[this.state.colorIndex] + " text-center"} id="text"><i class="fa-solid fa-quote-left"></i><i>{Object.values(quotes)[this.state.quoteIndex]}</i></p>
               </div>
              <div className="author-container d-flex flex-row-reverse">
                <p className={"text-" + colors[this.state.colorIndex]} id="author">-{Object.keys(quotes)[this.state.quoteIndex]}</p>
              </div>
            </div>
            <div className="row test2">
              <div className="d-inline-flex justify-content-between align-items-end col col-sm-3">
                <a id="tweet-quote" href="twitter.com/intent/tweet"><button className={"btn btn-" + colors[this.state.colorIndex]}><i className="text-white fa-brands fa-twitter"></i></button></a>
                <button className={"text-white btn btn-" + colors[this.state.colorIndex]}><i className="text-white fa-brands fa-tumblr"></i></button>
              </div>

              <div className="d-inline-flex align-items-end flex-row-reverse col col-sm-9">
                <button className={"text-white btn btn-" + colors[this.state.colorIndex]} id="new-quote" onClick={this.clickHandler}>Create <i className="text-white fa-solid fa-paper-plane " ></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )};
}


export default App;
