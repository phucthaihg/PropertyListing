class AgentDto {
    constructor(agent) {
        this.id = agent.id;
        this.username = agent.username;
        this.fullname = agent.fullname;
        this.email = agent.email;
        this.phone = agent.phone;
        this.workPhone = agent.workPhone;
        this.fax = agent.fax;
        this.photo = agent.photo;
        this.status = agent.status;
    }
}

export default AgentDto;