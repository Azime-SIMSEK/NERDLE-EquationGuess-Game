import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function List() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="img2.webp" />
        <Card.Body>
          <Card.Title>What is Nerdle?</Card.Title>
          <Card.Text>
          "Nerdle" seems to be the name of the component or application you're working on. 
          It's likely a project or exercise where you're implementing a grid-based number 
          puzzle or game. The component you've shared contains functionality for inputting
           numbers into a grid and checking if the entered sequence matches a hidden equation.
            The name "Nerdle" itself might not have a specific meaning outside of your project 
            context.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="img3.png" />
        <Card.Body>
          <Card.Title>How Can win the game?</Card.Title>
          <Card.Text>
          To win the game, you typically need to solve the puzzle or meet the objective set by the game. 
          In the case of the "Nerdle" game you're working on, it seems like the objective is to correctly
           guess the hidden equation.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="nerdle.png" />
        <Card.Body>
          <Card.Title>What learning?</Card.Title>
          <Card.Text>
          1-Interactive Gameplay: Create a game that allows kids to actively participate and engage with math concepts.
           This could involve solving puzzles, answering questions, or completing challenges that require mathematical reasoning.
          2-Progressive Difficulty: Design the game to have different levels or stages that gradually increase in difficulty.
           Start with simple math concepts and gradually introduce more complex ones as players progress.
          3-Educational Content: Ensure that the game content aligns with educational objectives. Incorporate math concepts such as
           addition, subtraction, multiplication, division, fractions, geometry, and more into the gameplay.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}


export default List;