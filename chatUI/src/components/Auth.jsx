import '../styles/auth.scss';
import Form from 'react-bootstrap/Form';
import { Flex } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';


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
                    <Flex flexDirection={"column"} gap={"20px"} id='auth-flex'>
                        <button className="auth-btn" type="submit">Login</button>
                        <button className="auth-btn" type="submit">Register</button>
                    </Flex>
                    <Flex flexDirection={"row"} justifyContent={"center"} id='oauth-flex' gap={"20px"}>
                        <button><FcGoogle /></button>
                        <button><AiFillApple /></button>
                    </Flex>
                </Form>
            </div>
        </div>
    )
}

export default Auth;