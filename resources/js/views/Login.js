import { useSkin } from '@hooks/useSkin';
import { Link } from 'react-router-dom';
import InputPasswordToggle from '@components/input-password-toggle';
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap';
import '@styles/base/pages/page-auth.scss';
import sideImg from '@src/assets/images/pages/login.svg';

const Login = () => {
    const [skin] = useSkin();

    return (
        <div className='auth-wrapper auth-v2'>
            <Row className='auth-inner m-0'>
                <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
                    <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
                        <img className='img-fluid' src={sideImg} alt='Login V2' />
                    </div>
                </Col>
                <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
                    <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                        <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
                            <FormGroup></FormGroup>
                            <FormGroup>
                                <Label className='form-label' for='login-email'>
                                    Email
                                </Label>
                                <Input
                                    type='email'
                                    id='login-email'
                                    placeholder='john@example.com'
                                    autoFocus
                                />
                            </FormGroup>
                            <FormGroup>
                                <div className='d-flex justify-content-between'>
                                    <Label className='form-label' for='login-password'>
                                        Password
                                    </Label>
                                </div>
                                <InputPasswordToggle
                                    className='input-group-merge'
                                    id='login-password'
                                />
                            </FormGroup>
                            <FormGroup>
                                <CustomInput
                                    type='checkbox'
                                    className='custom-control-Primary'
                                    id='remember-me'
                                    label='Remember me'
                                />
                            </FormGroup>
                            <Button.Ripple tag={Link} to='/' color='primary' block>
                                Sign in
                            </Button.Ripple>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
