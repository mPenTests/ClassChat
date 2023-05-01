import '../styles/auth.scss';
import Form from 'react-bootstrap/Form';
import { Flex, Stack } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';


function Auth() {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <Form>
                    <h3 id="formTitle">Login to MarkNet</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control required type="email" placeholder="Member Name" />
                      <Form.Text className="text-muted">
                            Greetings from Marko!
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>
                    <Stack direction={"row"} gap={"5px"} id='auth-btns' marginTop={"50px"}>
                        <button className="auth-btn" type="submit">Login</button>
                        <button className="auth-btn" type="submit">Register</button>
                    </Stack>
                </Form>
                <hr />
                <Flex flexDirection={"row"} justifyContent={"center"} id='oauth-flex' gap={"20px"}>
                    <button>Continue with <FcGoogle id='google'/></button>
                </Flex>
            </div>
        </div>
    )
}

export default Auth;