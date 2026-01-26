import React from 'react';
import { Button, Card } from 'react-bootstrap';

function RandomQuotes() {
  // Local JSON of quotes — curated from scientists, physicists, and programmers
  const quotes = [
  { "content": "What I cannot create, I do not understand.", "author": "Richard Feynman" },
  { "content": "The first principle is that you must not fool yourself—and you are the easiest person to fool.", "author": "Richard Feynman" },
  { "content": "If you want to understand how something works, build it.", "author": "Yann LeCun" },
  { "content": "Intelligence is the ability to adapt to change.", "author": "Stephen Hawking" },
  { "content": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", "author": "Stephen Hawking" },
  { "content": "Talk is cheap. Show me the code.", "author": "Linus Torvalds" },
  { "content": "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.", "author": "Linus Torvalds" },
  { "content": "Imagination is more important than knowledge.", "author": "Albert Einstein" },
  { "content": "Life is like riding a bicycle. To keep your balance, you must keep moving.", "author": "Albert Einstein" },
  { "content": "In God we trust. All others must bring data.", "author": "W. Edwards Deming" },
  { "content": "An expert is a person who has made all the mistakes that can be made in a very narrow field.", "author": "Niels Bohr" },
  { "content": "Prediction is very difficult, especially about the future.", "author": "Niels Bohr" },
  { "content": "Programs must be written for people to read, and only incidentally for machines to execute.", "author": "Harold Abelson" },
  { "content": "Premature optimization is the root of all evil.", "author": "Donald Knuth" },
  { "content": "You have to work on the right problem.", "author": "Donald Knuth" },
  { "content": "Simplicity is prerequisite for reliability.", "author": "Edsger W. Dijkstra" },
  { "content": "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.", "author": "Edsger W. Dijkstra" },
  { "content": "The purpose of computing is insight, not numbers.", "author": "Richard Hamming" },
  { "content": "The art of doing mathematics consists in finding that special case which contains all the germs of generality.", "author": "David Hilbert" },
  { "content": "We can only see a short distance ahead, but we can see plenty there that needs to be done.", "author": "Alan Turing" },
  { "content": "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.", "author": "Alan Turing" },
  { "content": "Stay hungry, stay foolish.", "author": "Steve Jobs" },
  { "content": "Innovation distinguishes between a leader and a follower.", "author": "Steve Jobs" },
  { "content": "Any sufficiently advanced technology is indistinguishable from magic.", "author": "Arthur C. Clarke" },
  { "content": "The best way to predict the future is to invent it.", "author": "Alan Kay" },
  { "content": "The science of today is the technology of tomorrow.", "author": "Edward Teller" },
  { "content": "Learning never exhausts the mind.", "author": "Leonardo da Vinci" },
  { "content": "If I have seen further it is by standing on the shoulders of Giants.", "author": "Isaac Newton" },
  { "content": "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.", "author": "Isaac Newton" },
  { "content": "The more I study science, the more I believe in God.", "author": "Albert Einstein" },
  { "content": "Mathematics is the language in which God has written the universe.", "author": "Galileo Galilei" },
  { "content": "Measure what can be measured, and make measurable what cannot be measured.", "author": "Galileo Galilei" },
  { "content": "We cannot solve our problems with the same thinking we used when we created them.", "author": "Albert Einstein" },
  { "content": "Science is the acceptance of what works and the rejection of what does not. That needs more courage than we might think.", "author": "Jacob Bronowski" },
  { "content": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "author": "Nelson Mandela" },
  { "content": "Without data, you’re just another person with an opinion.", "author": "W. Edwards Deming" },
  { "content": "Science is organized knowledge. Wisdom is organized life.", "author": "Immanuel Kant" },
  { "content": "Nature uses as little as possible of anything.", "author": "Johannes Kepler" },
  { "content": "Everything should be made as simple as possible, but not simpler.", "author": "Albert Einstein" },
  { "content": "The universe doesn’t allow perfection.", "author": "Stephen Hawking" },
  { "content": "The greatest value of a picture is when it forces us to notice what we never expected to see.", "author": "John Tukey" },
  { "content": "Data is the new oil.", "author": "Clive Humby" },
  { "content": "Facts are stubborn, but statistics are pliable.", "author": "Mark Twain" },
  { "content": "Don’t let the noise of others’ opinions drown out your own inner voice.", "author": "Steve Jobs" },
  { "content": "Some people call this artificial intelligence, but the reality is this technology will enhance us. So instead of artificial intelligence, I think we'll augment our intelligence.", "author": "Ginni Rometty" },
  { "content": "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.", "author": "Bill Gates" },
  { "content": "Your most unhappy customers are your greatest source of learning.", "author": "Bill Gates" },
  { "content": "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.", "author": "Bill Gates" },
  { "content": "To err is human, but to really foul things up you need a computer.", "author": "Paul Ehrlich" },
  { "content": "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. The other way is to make it so complicated that there are no obvious deficiencies.", "author": "C.A.R. Hoare" },
  { "content": "Inside every large program is a small program trying to get out.", "author": "C.A.R. Hoare" },
  { "content": "Do not worry about your difficulties in mathematics. I can assure you mine are still greater.", "author": "Albert Einstein" },
  { "content": "The best thing about a boolean is even if you are wrong, you are only off by a bit.", "author": "Anonymous" },
  { "content": "Mathematics is the queen of the sciences.", "author": "Carl Friedrich Gauss" },
  { "content": "Pure mathematics is, in its way, the poetry of logical ideas.", "author": "Albert Einstein" },
  { "content": "Computers are useless. They can only give you answers.", "author": "Pablo Picasso" },
  { "content": "Controlling complexity is the essence of computer programming.", "author": "Brian Kernighan" },
  { "content": "Experience is the name everyone gives to their mistakes.", "author": "Oscar Wilde" },
  { "content": "Good design adds value faster than it adds cost.", "author": "Thomas C. Gale" },
  { "content": "The function of good software is to make the complex appear simple.", "author": "Grady Booch" },
  { "content": "Computers are good at following instructions, but not at reading your mind.", "author": "Donald Knuth" },
  { "content": "Science knows no country, because knowledge belongs to humanity.", "author": "Louis Pasteur" },
  { "content": "Chance favors the prepared mind.", "author": "Louis Pasteur" },
  { "content": "Nothing in life is to be feared, it is only to be understood.", "author": "Marie Curie" },
  { "content": "Be less curious about people and more curious about ideas.", "author": "Marie Curie" },
  { "content": "Science is simply the word we use to describe a method of organizing our curiosity.", "author": "Tim Minchin" },
  { "content": "Research is what I'm doing when I don't know what I'm doing.", "author": "Wernher von Braun" },
  { "content": "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.", "author": "Carl Sagan" },
  { "content": "Somewhere, something incredible is waiting to be known.", "author": "Carl Sagan" },
  { "content": "Absence of evidence is not evidence of absence.", "author": "Carl Sagan" },
  { "content": "If you wish to make an apple pie from scratch, you must first invent the universe.", "author": "Carl Sagan" },
  { "content": "Science is a way of thinking much more than it is a body of knowledge.", "author": "Carl Sagan" },
  { "content": "The cosmos is within us. We are made of star-stuff.", "author": "Carl Sagan" },
  { "content": "We are stuck with technology when what we really want is just stuff that works.", "author": "Douglas Adams" },
  { "content": "I love deadlines. I like the whooshing sound they make as they fly by.", "author": "Douglas Adams" },
  { "content": "There is no reason anyone would want a computer in their home.", "author": "Ken Olsen" },
  { "content": "The limits of my language mean the limits of my world.", "author": "Ludwig Wittgenstein" },
  { "content": "You can’t solve a problem on the same level that it was created.", "author": "Albert Einstein" },
  { "content": "First, solve the problem. Then, write the code.", "author": "John Johnson" },
  { "content": "A language that doesn’t affect the way you think about programming is not worth knowing.", "author": "Alan Perlis" },
  { "content": "Simplicity is the soul of efficiency.", "author": "Austin Freeman" },
  { "content": "The computer was born to solve problems that did not exist before.", "author": "Bill Gates" },
  { "content": "The only way to learn a new programming language is by writing programs in it.", "author": "Dennis Ritchie" },
  { "content": "Before software can be reusable it first has to be usable.", "author": "Ralph Johnson" },
  { "content": "Without requirements or design, programming is the art of adding bugs to an empty text file.", "author": "Louis Srygley" },
  { "content": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", "author": "Edsger Dijkstra" },
  { "content": "Programs are meant to be read by humans and only incidentally for computers to execute.", "author": "Donald Knuth" },
  { "content": "Simple things should be simple, complex things should be possible.", "author": "Alan Kay" },
  { "content": "A clever person solves a problem. A wise person avoids it.", "author": "Albert Einstein" },
  { "content": "Never memorize something that you can look up.", "author": "Albert Einstein" },
  { "content": "The scientist is not a person who gives the right answers, he’s one who asks the right questions.", "author": "Claude Lévi-Strauss" },
  { "content": "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'", "author": "Isaac Asimov" },
  { "content": "Science is magic that works.", "author": "Kurt Vonnegut" },
  { "content": "If you think you understand quantum mechanics, you don't understand quantum mechanics.", "author": "Richard Feynman" },
  { "content": "It always seems impossible until it’s done.", "author": "Nelson Mandela" },
  { "content": "Data beats emotions.", "author": "Sean Rad" },
  { "content": "Every contact leaves a trace.", "author": "Edmond Locard" },
  { "content": "The good thing about science is that it’s true whether or not you believe in it.", "author": "Neil deGrasse Tyson" },
  { "content": "Curiosity is the essence of our existence.", "author": "Gene Cernan" },
  { "content": "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.", "author": "Bill Gates" },
  { "content": "Do not confine your children to your own learning, for they were born in another time.", "author": "Hebrew Proverb" },
  { "content": "We become what we behold. We shape our tools and then our tools shape us.", "author": "Marshall McLuhan" }
]
;

  // Initialize with a random quote
  const [randomQuote, setRandomQuote] = React.useState(() => {
    const randIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randIndex];
  });

  // Get a new random quote
  const getNewQuote = () => {
    const randIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randIndex]);
  };

  return (
    <div className="quote-card">
      <Card className="quote-card-main">
        <Card.Header className="quote-header">Wisdom from Science & Code</Card.Header>
        <Card.Body className="quote-card-body">
          <blockquote className="blockquote mb-0">
            <p className="quote-card-text">&quot;{randomQuote.content}&quot;</p>
            <footer className="blockquote-footer">
              <h5 className="quote-card-title">- {randomQuote.author || "Unknown"}</h5>
            </footer>
          </blockquote>
          <Button onClick={getNewQuote} variant="light">New Quote</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RandomQuotes;
