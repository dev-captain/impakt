import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { I, Common } from 'components';
import SidebarLinkItem from './SidebarLinkItem';

const Sidebar: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan991] = useMediaQuery('(max-width: 991px)');
  // TODO Sidebar UI
  const path = useLocation();
  React.useEffect(() => {
    if (!isLessThan991) {
      onClose();
    }
  }, [isLessThan991, onClose]);
  return (
    <>
      <VStack display={!isLessThan991 ? 'flex' : 'none'} width="100%">
        <SidebarLinkItem
          hide
          href=""
          onClose={onClose}
          title="General"
          isActive={path.pathname === '/dashboard'}
        >
          <I.DashboardIcon
            cursor="pointer"
            width="26px"
            height="23px"
            opacity={path.pathname === '/dashboard' ? '1' : '0.5'}
          />
        </SidebarLinkItem>

        <SidebarLinkItem
          hide
          href="referrals"
          onClose={onClose}
          title="Referrals"
          isActive={path.pathname === '/dashboard/referrals'}
        >
          <I.ReferralsIcon
            cursor="pointer"
            width="32px"
            height="32px"
            opacity={path.pathname === '/dashboard/referrals' ? '1' : '0.5'}
          />
        </SidebarLinkItem>

        <SidebarLinkItem
          hide
          href="reward-history"
          onClose={onClose}
          title="Reward history"
          isActive={path.pathname === '/dashboard/reward-history'}
        >
          <I.RewardIcon
            cursor="pointer"
            width="27px"
            height="27px"
            opacity={path.pathname === '/dashboard/reward-history' ? '1' : '0.5'}
          />
        </SidebarLinkItem>

        <SidebarLinkItem
          hide
          href="statistics"
          onClose={onClose}
          title="Statistics"
          isActive={path.pathname === '/dashboard/statistics'}
        >
          <I.ChatIcon
            cursor="pointer"
            width="27px"
            height="23px"
            opacity={path.pathname === '/dashboard/statistics' ? '1' : '0.5'}
          />
        </SidebarLinkItem>
      </VStack>
      <Box
        sx={{ width: '100%' }}
        className="menuSidebar"
        display={!isLessThan991 ? 'none' : 'flex'}
      >
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<I.DropIcon />}
            backgroundColor="rgba(28, 28, 40, 0.65)"
            border="1px solid #2e2b2b"
            borderRadius="16px"
            textAlign="left"
            h="64px"
            w="100%"
            _active={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
            _hover={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
            _focus={{ boxShadow: 'none' }}
          >
            Actions
          </MenuButton>
          <MenuList
            w="100%"
            minW="100%"
            color="#fff"
            backgroundColor="#060609"
            borderColor="#2e2b2b"
          >
            <MenuItem
              _active={{ backgroundColor: 'transparent' }}
              _focus={{ backgroundColor: 'transparent' }}
            >
              <SidebarLinkItem
                hide
                href=""
                onClose={onClose}
                title="General"
                isActive={path.pathname === '/dashboard'}
              >
                <I.DashboardIcon
                  cursor="pointer"
                  width="26px"
                  height="23px"
                  opacity={path.pathname === '/dashboard' ? '1' : '0.5'}
                />
              </SidebarLinkItem>
            </MenuItem>
            <MenuItem
              _active={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
              _focus={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
            >
              <SidebarLinkItem
                hide
                href="referrals"
                onClose={onClose}
                title="Referrals"
                isActive={path.pathname === '/dashboard/referrals'}
              >
                <I.ReferralsIcon
                  cursor="pointer"
                  width="32px"
                  height="32px"
                  opacity={path.pathname === '/dashboard/referrals' ? '1' : '0.5'}
                />
              </SidebarLinkItem>
            </MenuItem>
            <MenuItem
              _active={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
              _focus={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
            >
              <SidebarLinkItem
                hide
                href="reward-history"
                onClose={onClose}
                title="Reward history"
                isActive={path.pathname === '/dashboard/reward-history'}
              >
                <I.RewardIcon
                  cursor="pointer"
                  width="27px"
                  height="27px"
                  opacity={path.pathname === '/dashboard/reward-history' ? '1' : '0.5'}
                />
              </SidebarLinkItem>
            </MenuItem>
            <MenuItem
              _active={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
              _focus={{ backgroundColor: 'rgba(28, 28, 40, 0.65)' }}
            >
              <SidebarLinkItem
                hide
                href="statistics"
                onClose={onClose}
                title="Statistics"
                isActive={path.pathname === '/dashboard/statistics'}
              >
                <I.ChatIcon
                  cursor="pointer"
                  width="27px"
                  height="23px"
                  opacity={path.pathname === '/dashboard/statistics' ? '1' : '0.5'}
                />
              </SidebarLinkItem>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};
export default Sidebar;
