import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const MenuCard = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="text-center my-3 mx-2">
      <div className="mb-4">
        <Image
          src={props.imageUrl}
          fluid
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>£ {props.price}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
