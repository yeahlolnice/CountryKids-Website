import {Form, Button} from "react-bootstrap";

function Contact() {

    const handleEmail = (event) => {
        let name = event.target.parentElement[0].value
        let phoneNumber = event.target.parentElement[1].value
        let inquiry = event.target.parentElement[2].value
        let body = `Name: ${name} | Phone Number: ${phoneNumber}%0D%0A Hi, I'm interested in getting in contact about:%0D%0A${inquiry} %0D%0A %0D%0A`
        window.open(`mailto:TaylorsEmail?subject=Country%20Kids%20Inquiry&body=${body}`)
    };

  return (
    <div className="contactDiv" id="Contact">
      <h1>Get in contact with us!</h1>
      <Form handleSubmit={handleEmail}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Enquiries</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enquiries"/>
        </Form.Group>

        <Button variant="primary" onClick={handleEmail}>
          Email Us
        </Button>
      </Form>
    </div>
  );
}
export default Contact;
