import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { HeartFilledIcon } from "./HeartFilledIcon";
import Logout from "./Logout";

const NavbarComponent = () => {
  return (
    <Navbar className="shadow-md">
      <NavbarBrand>
        <Link href="/Home" className="font-bold text-inherit">
          Home
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="default"
            href="/Home/Orders"
            variant="flat"
            className="text-sm font-normal text-default-600 bg-default-100"
            startContent={<HeartFilledIcon className="text-danger" />}
          >
            My orders
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Logout />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
