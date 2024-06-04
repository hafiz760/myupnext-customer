import LoadingLogo from '../assets/images/Newlogo.png';
import Image from 'next/image';

const PageLoading = () => {
    return (
        <div className="container w-screen h-screen grid place-items-center">
            <Image src={LoadingLogo} alt="Logo loading" />
        </div>
    )
}

export default PageLoading