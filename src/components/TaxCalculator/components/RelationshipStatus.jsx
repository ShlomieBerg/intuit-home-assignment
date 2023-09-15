import avatarMan from '../../../assets/simple-avatar.jpg';

const RelationshipStatus = () => {
    const statuses = {
        'single': { 'img': avatarMan },
        'married': {'img': avatarMan },
        'its complicated': {'img': avatarMan }
    }
    const createItems = () => {
        return Object.keys(statuses).map(status => {
            return (<div key={status} style={{ margin: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={statuses[status]['img']} alt={status} width='150px' height='150px' />
                        {status}
                    </div>)
        })
    }


    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            {createItems()}
        </div>
    )
}

export default RelationshipStatus;