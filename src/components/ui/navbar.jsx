"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function NavbarDemo({ children }) {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact Me", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll smoothly to section by id and close drawer
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="w-full relative z-10">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="hidden lg:flex">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center z-10 gap-4 font-bold">
            {/* <ModeToggle /> */}
            <NavbarButton
              variant="primary"
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white/30 hover:border-white/50"
            >
              <a
                href="https://drive.google.com/file/d/1_vkSr8AT5B56rL3zPel53NNv6v5pDUD4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center"
              >
                Resume
              </a>
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="lg:hidden">
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-4">
              <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <DrawerTrigger>
                  <MobileNavToggle
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerDescription className="flex flex-col gap-3 pt-4 items-center">
                      {navItems.map(({ name, link }, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection(link.substring(1))}
                          className="text-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:bg-gray-900 py-2 w-full max-w-xs text-center rounded-md transition-colors duration-200"
                        >
                          {name}
                        </button>
                      ))}
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter className="flex">
                    <NavbarButton
                      as="a"
                      href="https://drive.google.com/file/d/1_vkSr8AT5B56rL3zPel53NNv6v5pDUD4/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white/30 hover:border-white/50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Resume
                    </NavbarButton>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </MobileNavHeader>
        </MobileNav>
      </Navbar>

      {children}
    </div>
  );
}
