"use client";
import { Link } from "@nextui-org/link";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-5 bg-background">
      <div className="flex items-center gap-1 text-current">
        <span className="text-default-600">Powered by</span>
        <Link
          href="https://drcode-group.com/tareq/public"
          target="_blank"
          className="text-primary"
        >
          Tareq Alloji
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
