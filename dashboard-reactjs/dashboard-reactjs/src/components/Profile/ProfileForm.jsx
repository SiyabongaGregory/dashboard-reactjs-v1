import React from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import "./ProfileForm.css";
import Typography from "@material-ui/core/Typography";

export default function ProfileForm() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-8">
              <div className="profile">
                <div className="form">
                  <h1>Profile</h1>
                  <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                    est ullamcorper eget nulla facilisi etiam dignissim diam.
                    Pulvinar elementum integer enim neque volutpat ac tincidunt.
                    Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                    sit amet volutpat consequat mauris.
                  </Typography>
                  <Form>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="with a placeholder"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input
                            id="examplePassword"
                            name="password"
                            placeholder="password placeholder"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label for="exampleAddress">Address</Label>
                      <Input
                        id="exampleAddress"
                        name="address"
                        placeholder="1234 Main St"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleAddress2">Address 2</Label>
                      <Input
                        id="exampleAddress2"
                        name="address2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleAddress2">Address 2</Label>
                      <Input
                        id="exampleAddress2"
                        name="address2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleAddress2">Address 2</Label>
                      <Input
                        id="exampleAddress2"
                        name="address2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </FormGroup>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="exampleCity">City</Label>
                          <Input id="exampleCity" name="city" />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup>
                          <Label for="exampleState">State</Label>
                          <Input id="exampleState" name="state" />
                        </FormGroup>
                      </Col>
                      <Col md={2}>
                        <FormGroup>
                          <Label for="exampleZip">Zip</Label>
                          <Input id="exampleZip" name="zip" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button className="submitButton" color="primary">
                      Save
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
