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
    // { name: "Home", link: "#home" },
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
          <NavItems
            items={navItems}
            className="[&>a]:px-5 [&>a]:py-2 [&>a]:rounded-full [&>a]:transition-all [&>a]:duration-300 [&>a]:border [&>a]:border-transparent [&>a:hover]:bg-white/10 [&>a:hover]:backdrop-blur-md [&>a:hover]:border-white/30 [&>a:hover]:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          />
          <div className="flex items-center z-10 gap-4 font-bold">
            <NavbarButton
              as="a"
              href="https://drive.google.com/file/d/1Trvw2-85O7SUmUdjQX0Fg7hY2MRoJDMh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="relative px-8 py-3 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 text-white font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)] active:scale-95"
            >
              Resume
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="lg:hidden">
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-4 ">
              <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <DrawerTrigger>
                  <MobileNavToggle
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  />
                </DrawerTrigger>
                <DrawerContent className="bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/30 text-white font-bold shadow-2xl">
                  <DrawerHeader>
                    <DrawerDescription className="flex flex-col gap-3 pt-4 items-center">
                      {navItems.map(({ name, link }, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection(link.substring(1))}
                          className="text-lg text-white bg-white/10 backdrop-blur-md py-2 w-full max-w-xs text-center rounded-md hover:bg-white/20 transition-all duration-200"
                        >
                          {name}
                        </button>
                      ))}
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter className="flex">
                    <NavbarButton
                      as="a"
                      href="https://drive.google.com/file/d/1Trvw2-85O7SUmUdjQX0Fg7hY2MRoJDMh/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="w-full relative px-8 py-3 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/30 text-white font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)] active:scale-95"
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
