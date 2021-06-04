import { Link } from 'react-router-dom';
import InputPasswordToggle from '@components/input-password-toggle';
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap';
import '@styles/base/pages/page-auth.scss';
import sideImg from '@src/assets/images/pages/login.svg';

// ** Config
import themeConfig from '@configs/themeConfig';

const Login = () => {
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
                        <Form className='auth-login-form' onSubmit={e => e.preventDefault()}>
                            <FormGroup className='form-title mb-2'>
                                <img src={themeConfig.app.appLogoImage} alt='Larean' />
                                <h3 className='mt-2'>
                                    Log in to your{' '}
                                    <span className='text-primary'>{themeConfig.app.appName}</span>{' '}
                                    account
                                </h3>
                            </FormGroup>
                            <FormGroup>
                                <Label className='form-label' for='email'>
                                    Email
                                </Label>
                                <Input
                                    type='email'
                                    id='email'
                                    placeholder='johndoe@example.com'
                                    autoFocus
                                />
                            </FormGroup>
                            <FormGroup>
                                <div className='d-flex justify-content-between'>
                                    <Label className='form-label' for='password'>
                                        Password
                                    </Label>
                                </div>
                                <InputPasswordToggle
                                    className='input-group-merge'
                                    placeholder='Password'
                                    id='password'
                                />
                            </FormGroup>
                            <FormGroup>
                                <CustomInput
                                    type='checkbox'
                                    className='custom-control-Primary'
                                    id='rememberMe'
                                    label='Remember me'
                                />
                            </FormGroup>
                            <Button.Ripple tag={Link} to='/' color='primary' block>
                                Login
                            </Button.Ripple>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
