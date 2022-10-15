import * as React from 'react';
import { Box, Text, Image, useDisclosure, HStack, Button } from '@chakra-ui/react';
import { I } from 'components';
import Images from 'assets/images';
import { useAppDispatch, useAppSelector } from 'hooks';
import { DeleteIcon } from '@chakra-ui/icons';

import { deletePost } from '../../../../../../../lib/redux/slices/forum/post_actions/deletePost';
import CommentBox from './CommentBox';

interface UserForumsPropsI {
  id: number;
  name: string;
  msg: string;
  title: string;
  msgNo: number;
  // view: string;
  time: string;
}
const UserForumsCard: React.FC<UserForumsPropsI> = ({ id, name, msg, title, time, msgNo }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  // const postParam = useParams();
  const role = useAppSelector((state) => state.groupsReducer.role);
  const dispatch = useAppDispatch();
  const group = useAppSelector((state) => state.groupsReducer.activeGroup);
  // const isStandalone = postParam.postId ? parseInt(postParam.postId, 10) === id : false;
  // const navigate = useNavigate();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // React.useEffect(() => {
  //   if (isStandalone) {
  //     onOpen();
  //   }
  // }, [postParam]);

  const deletePostFromDb = async () => {
    if (!group) return;
    await dispatch(
      deletePost({ referenceType: 'Group', referenceId: group.id, postId: id }),
    ).unwrap();
  };

  // const navigateToPost = () => {
  //   navigate(`post/${id}`);
  // };
  const isCreator = role === 'Creator';

  return (
    // <>
    <Box
      // onClick={() => {
      //   if (!isCreator) return;
      // }}
      border="1px solid #D3E2F0"
      padding={{ sm: '16px', base: '10px' }}
      borderRadius="12px"
      marginTop="12px"
    >
      <Box display="flex" justifyContent="space-between" flexWrap={{ base: 'wrap', md: 'unset' }}>
        <Text color="#4E6070" fontSize={{ lgx: '18px', md: '14px' }} fontWeight="500">
          {title}
        </Text>
        <Box display="flex" alignItems="center" gap="10px">
          <Box display="flex" alignItems="center">
            <I.CommentIcon color="#B0C3D6" width="20px" height="20px" />
            <Text
              color="#B0C3D6"
              fontSize={{ lgx: '16px', base: '14px' }}
              fontWeight="500"
              marginLeft="3px"
            >
              {msgNo}
            </Text>
          </Box>
          {/* <Box display="flex" alignItems="center">
            <I.Eye color="#B0C3D6" width="20px" />
            <Text
              color="#B0C3D6"
              fontSize={{ lgx: '16px', base: '14px' }}
              fontWeight="500"
              marginLeft="3px"
            >
              {view}
            </Text>
          </Box> */}
          <Box display="flex" alignItems="center">
            <I.ClockIcon color="#B0C3D6" width="20px" />
            <Text
              color="#B0C3D6"
              fontSize={{ lgx: '16px', base: '14px' }}
              fontWeight="500"
              marginLeft="3px"
            >
              {time}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
        <Box
          display="flex"
          alignItems={{ base: 'start', md: 'center' }}
          flexWrap={{ base: 'wrap', md: 'unset' }}
        >
          <Image src={Images.group.ellipse} height="40px" width="40px" />
          <Box marginLeft={{ base: '6px', md: '12px' }}>
            <Text
              color="#728BA3"
              fontSize={{ lgx: '16px', sm: '14px', base: '12px' }}
              fontWeight="600"
            >
              {name}
            </Text>
            <Text
              color="#4E6070"
              fontSize={{ lgx: '16px', sm: '14px', base: '11px' }}
              fontWeight="500"
            >
              {msg}
            </Text>
          </Box>
        </Box>
        <Box>
          {/* {isCreator && (
            <HStack
              cursor="pointer"
              m="0 !important"
              justifyContent="flex-start"
              onClick={deletePostFromDb}
              alignItems="flex-start"
            >
              <DeleteIcon mr="10px" mb="5px" boxSize="15px" border="5px" color="#728BA3" />
            </HStack>
          )} */}

          <CommentBox postId={id}>
            <Button
              background="transparent"
              _hover={{ backgroundColor: 'transparent' }}
              padding="0"
            >
              <I.CommentIcon color="#728BA3" width="25px" height="25px" />
            </Button>
          </CommentBox>
        </Box>
      </Box>
    </Box>
    /* <ForumDetailModal open={isOpen} close={onClose} /> */
    /* </> */
  );
};
export default UserForumsCard;
