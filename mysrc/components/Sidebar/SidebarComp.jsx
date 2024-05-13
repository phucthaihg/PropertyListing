import ListedAgentComp from "./ListedAgentComp";
import ContactAgentComp from "./ContactAgentComp";

import AgentService from "../../services/AgentService";
import { useEffect, useState } from "react";
import ListingCategories from "./ListingCategoriesComp";

const agentService = new AgentService();

const SidebarComp = ({ listing }) => {

    const [agent, setAgent] = useState([]);
    useEffect(() => {
        const getAgent = async () => {
            try {
                const agent = await agentService.getAgentById(listing.agentId);
                setAgent(agent);
            } catch (error) {
                console.error(error);
            }
        }
        getAgent();
    }, [listing.agentId]);

    if (agent !== null) {
        return (
            <>
                <div className="sidebar_listing_list">
                    <div className="sidebar_advanced_search_widget">
                        <div className="sl_creator">
                            <h4 className="mb25">Listed By</h4>
                            <ListedAgentComp agent={agent} />
                        </div>
                        {/* End .sl_creator */}
                        
                        <ContactAgentComp />
                    </div>
                </div>
                {/* End .sidebar_listing_list */}

                <div className="terms_condition_widget">
                    <h4 className="title">Categories Property</h4>
                    <div className="widget_list">
                        <ul className="list_details">
                            <ListingCategories />
                        </ul>
                    </div>
                </div>
                {/* End .Categories Property */}
            </>
        );
    } else {
        return (
            <div>
                <h1>Sidebar</h1>
            </div>
        );
    };
}

export default SidebarComp;