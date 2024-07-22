import { Wrapper } from '@/shared/ui/Wrapper';
import { EditPostModal, PostList } from '@/widgets/Post';
import { CreatePost } from '@/features/Post/ui/CreatePost/CreatePost';
import { Header } from '@/widgets/Header';
import { Panel } from '@/widgets/Panel';

const MainPage = () => {
    return (
        <Wrapper>
            <Header />
            <Panel />
        </Wrapper>
    );
};

export default MainPage;
