import { Children, ReactNode } from "react";
import { 
    IconButton, 
    Box,
    CloseButton,
    Flex,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    useColorModeValue,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Icon
} from "@chakra-ui/react";
import { FiMenu, FiScissors, FiSettings, FiClipboard } from "react-icons/fi";
import { IconType } from "react-icons";
import Link from "next/link";
import logoImg from '../../assets/logo.png';
import Image from "next/image";

interface LinkItemProps {
    name: string;
    icon: IconType;
    href: string;
}

const linkItens: Array<LinkItemProps> = [
    {name: 'Agenda', icon: FiScissors, href: '/dashboard'},
    {name: 'Cortes', icon: FiClipboard, href: '/haircuts'},
    {name: 'Minha Conta', icon: FiSettings, href: '/profile'},
]

export function Sidebar({children}: {children: ReactNode}) {

    const {isOpen, onOpen, onClose} = useDisclosure();

    return(
        <Box minH={100} bg="black">
            <SidebarContent 
                onClose={() => onClose}
                display={{base: "none", md: "block"}}    
            />

            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
                onClose={onClose}
            >
                <DrawerContent>
                    <SidebarContent 
                        onClose={() => onClose()}
                        display={{base: "block", md: "none"}}
                    />
                </DrawerContent>

            </Drawer>

            <MobileNav onOpen={onOpen} />

            <Box ml={{base: 0, md: 60}}>
                {children}
            </Box>

        </Box>
    )
}

interface SidebarProps {
    onClose: () => void;
    display: BoxProps["display"];
}

const SidebarContent = ({onClose, display, ...rest}: SidebarProps) => {
    return(
        <Box
            bg="black"
            borderRight="1px"
            borderRightColor="gray.700"
            w={{base: "full", md: 60}}
            position="fixed"
            h="full"
            display={display}
            {...rest}
        >

            <Flex
                h="20"
                alignItems="center"
                justifyContent="space-between"
                mx="8"
            >
                <Link href="/dashboard">
                    <Flex cursor="pointer" userSelect="none" flexDirection="row">
                        <Text fontSize="1.5xl" color="white">Barbearia Vidal</Text>
                    </Flex>
                </Link>
                <CloseButton
                    display={{base: 'flex', md: 'none'}}
                    onClick={onClose}
                />
            </Flex>

            {linkItens.map(link => (
                <NavItem key={link.name} icon={link.icon} route={link.href}>
                    {link.name}
                </NavItem>
            ))}

        </Box>
    )
}

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactNode;
    route: string;
}

const NavItem = ({icon, children, route, ...rest}: NavItemProps) => {
    return(
        <Link href={route} style={{textDecoration: "none"}}>
        <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
                bg: "#1c1d29",
                color: "white"
            }}
            {...rest}
        >
            {icon && (
                <Icon 
                    mr={4}
                    fontSize="16"
                    as={icon} 
                    color="gray.400"
                    _groupHover={{
                        color: "white"
                    }}
                />
            )}
            <Text ml="4" fontSize="md" color="white">{children}</Text>
        </Flex>
    </Link>
    )
}

interface MobileProps {
    onOpen: () => void;
}

const MobileNav = ({onOpen}: MobileProps) => {
    return(
        <Flex
            ml={{base: 0, md: 60}}
            px={{base: 4, md: 24}}
            height="20"
            alignItems="center"
            bg={"black"}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent="flex-start"
            display={{base: "flex", md: "none"}}
        >
            <IconButton
                display={{base: "flex", md: "none"}}
                onClick={onOpen}
                icon={<FiMenu color="white"/>}
                variant="outline"
                aria-label="open menu"
            />

            <Flex flex={{base: 1, md: "auto"}} ml={8} display="flex" alignItems="center">
                <Text ml="4" fontSize="2xl" color="white">Barbearia Vidal</Text>
            </Flex>

        </Flex>
    )

}