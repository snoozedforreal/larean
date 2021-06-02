// ** Config
import themeConfig from '@configs/themeConfig';

const Footer = () => {
    return (
        <p className='clearfix mb-0'>
            <span className='float-md-left d-block d-md-inline-block mt-25'>
                &copy; {new Date().getFullYear()} <span>{themeConfig.app.appName}</span>, All rights
                Reserved.
            </span>
        </p>
    );
};

export default Footer;
