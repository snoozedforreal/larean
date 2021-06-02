import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import notFoundImg from '@src/assets/images/pages/not-found.svg';

import '@styles/base/pages/page-misc.scss';

const Error = () => {
    return (
        <div className='misc-wrapper'>
            <div className='misc-inner p-2 p-sm-3'>
                <div className='w-100 text-center'>
                    <div className='description'>
                        <img className='description-image' src={notFoundImg} alt='Not Found' />
                        <h2 className='description-title mt-2 mb-1'>Not Found</h2>
                        <p className='description-content'>
                            This page does not exist or has been moved to another address!
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
export default Error;
