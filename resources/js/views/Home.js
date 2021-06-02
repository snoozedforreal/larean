import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Kick Start Your Project !!! 🚀</CardTitle>
                </CardHeader>
                <CardBody>
                    <CardText>
                        We used the <strong>Vuexy - React Admin Dashboard Template</strong> in this
                        project so please make sure to read the{' '}
                        <CardLink
                            href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/'
                            target='_blank'>
                            Documentation
                        </CardLink>{' '}
                        to understand where to go from here.
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Home;
