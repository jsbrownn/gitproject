import UserAside from './UserAside/UserAside';
import RepositoriesSection from './RepositoriesSection/RepositoriesSection';

const UserPage = () => {
    return (
        <div className='user-page'>{
            <>
                <UserAside />
                <RepositoriesSection />
            </>
        }
        </div>
    );
}

export default UserPage;
