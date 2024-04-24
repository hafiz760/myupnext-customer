import CustomButton from "@/shared/CustomButton"

const Partnership = () => {
    return (
        <div className="container my-[100px] py-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <p className="text-primary">Partnerships</p>
                    <h4 className="text-[25px] font-bold">Proudly Partnered With</h4>
                </div>
                <div className="flex items-center justify-end">
                    <CustomButton colored>Get Started</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Partnership