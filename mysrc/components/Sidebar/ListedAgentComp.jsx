const ListedAgentComp = ({ agent }) => {
    return (
        <>
            <div className="media d-flex">
                <img
                    className="me-3"
                    src={agent.photo}
                    alt="lc1.png"
                />
                <div className="media-body">
                    <h5 className="mt-0 mb0">{agent.fullname}</h5>
                    <p className="mb0">{agent.phone}</p>
                    <p className="mb0">{agent.email}</p>
                    <a className="text-thm" href="#">
                        View My Listing
                    </a>
                </div>
            </div>
        </>
    );
}

export default ListedAgentComp;