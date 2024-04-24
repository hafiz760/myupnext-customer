import { Tabs } from "antd";
import SelectRooms from "./SelectRooms";
import NearrbyAttractions from "./NearrbyAttractions";
import AllFacilities from "./AllFacilities";
import Policy from "./Policy";

const AllDetails = () => {

    const allTabs = ['Select Room', 'Nearby Attractions', 'Facilities', 'Policies'];

    const tabData = {
        "Select Room": <SelectRooms />,
        "Nearby Attractions": <NearrbyAttractions />,
        "Facilities": <AllFacilities />,
        "Policies": <Policy />,
    };

    return (
        <div className="my-10">
            <Tabs
                defaultActiveKey="0"
                tabPosition="left"
                size="large"
                style={{
                    height: '100%',
                }}
                items={allTabs.map((tab, i) => {
                    const id = String(i);
                    return {
                        label: `${tab}`,
                        key: id,
                        children: tabData[tab],
                    };
                })}
            />
        </div>
    )
}

export default AllDetails