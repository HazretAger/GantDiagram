import { Wrapper } from '@/shared/ui/Wrapper';
import { EditPostModal, PostList } from '@/widgets/Post';
import { CreatePost } from '@/features/Post/ui/CreatePost/CreatePost';

const MainPage = () => {
    return (
        <Wrapper>
            <CreatePost />
            <PostList />
            <EditPostModal />
        </Wrapper>
    );
};

export default MainPage;
