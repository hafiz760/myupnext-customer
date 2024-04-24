import { Modal } from "antd";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import AppImg from '@/assets/images/app.png';
import { createStyles, useTheme } from 'antd-style';

const useStyle = createStyles(({ token }) => ({
    'my-modal-body': {
        background: '#ee5931',
        borderRadius: '20px'
    },
    'my-modal-content': {
        padding: 0,
        borderRadius: '20px',
        background: '#ee5931',
    },
}));

const AppModal = ({ open, setOpen }) => {

    const { styles } = useStyle();
    const token = useTheme();

    const classNames = {
        body: styles['my-modal-body'],
        content: styles['my-modal-content'],
    };
    const modalStyles = {
        body: {
            borderRadius: 20,
        },
        content: {
            padding: 0,
            borderRadius: 20,
        },
    };

    return (
        <Modal
            title={null}
            centered
            open={open}
            onCancel={() => setOpen(false)}
            width={1000}
            footer={null}
            maskClosable={false}
            classNames={classNames}
            styles={modalStyles}
        >
            <div className="grid grid-cols-2 h-[500px]">
                <div className="container p-10 grid place-items-center">
                    <h4 className="text-white text-5xl">Get 5% off your 1st app booking</h4>
                    <p className="text-white text-[20px] mt-5">Booking's better on the app. Use promo code "BetterOnApp" to save!</p>
                    <div className="flex items-center justify-start gap-5 my-10">
                        <div className="flex items-center justify-start gap-4 bg-black rounded-3xl px-5 py-2">
                            <FaApple className="text-[30px] text-white" />
                            <div>
                                <p className="text-white text-[12px] font-semibold">Download on the</p>
                                <p className="text-white text-[16px] font-bold">App Store</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-4 bg-black rounded-3xl px-5 py-2">
                            <IoLogoGooglePlaystore className="text-[30px] text-white" />
                            <div>
                                <p className="text-white text-[12px] font-semibold">Get It on</p>
                                <p className="text-white text-[16px] font-bold">Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${AppImg.src})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '20px' }}>
                </div>
            </div>
        </Modal>
    )
}

export default AppModal