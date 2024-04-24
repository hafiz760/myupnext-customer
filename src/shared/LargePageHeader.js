const LargePageHeader = ({ bg, children }) => {
    return (
        <div style={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
            className="flex flex-col items-center justify-center py-32 rounded-3xl">
            {children}
        </div>
    )
}

export default LargePageHeader