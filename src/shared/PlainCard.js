const PlainCard = ({ children, customClass }) => {
    return (
        <div className={`bg-white w-full h-full p-5 rounded-2xl ${customClass && customClass}`}>
            {children}
        </div>
    )
}

export default PlainCard