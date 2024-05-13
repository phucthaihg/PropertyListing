import sampleAgents from "../data/sampleAgents";
import AgentDto from "../dtos/AgentDto";

class AgentService{
    getAgents(filter = {}){
        return new Promise((resolve) => {
            setTimeout(() => {
                let filteredAgents = sampleAgents;

                //status
                if (filter?.status) {
                    filteredAgents = filteredAgents.filter((listing) => listing.status === filter.status);
                }
    
                resolve(filteredAgents.map((listing) => new ListingDto(listing)));
            }, 1000);
        }); // Add a comma here
    }
    getAgentById(id){
        return new Promise((resolve) => {
            setTimeout(() => {
                const agent = sampleAgents.find((agent) => agent.id === id);
                resolve(new AgentDto(agent));
            }, 1000);
        });
    }
    deleteAgent(id){
        
    }
    createAgent(agent){
        
    }
    updateAgent(agent){
        
    }
}

export default AgentService;