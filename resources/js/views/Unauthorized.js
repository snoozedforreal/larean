import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import unauthorizedImg from '@src/assets/images/pages/unauthorized.svg';

import '@styles/base/pages/page-misc.scss';

const Unauthorized = () => {
    return (
        <div className='misc-wrapper'>
            <div className='misc-inner p-2 p-sm-3'>
                <div className='w-100 text-center'>
                    <div className='description'>
                        <img
                            className='description-image'
                            src={unauthorizedImg}
                            alt='Unauthorized'
                        />
                        <h2 className='description-title mt-2 mb-1'>Unauthorized</h2>
                        <p className='description-content'>
                            You do not have the correct permissions to view this page.
                        </p>
                        <Button.Ripple
                            tag={Link}
                            to='/'
                            color='primary'
                            className='btn-sm-block mt-2'>
                            Go Back
                        </Button.Ripple>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Unauthorized;
