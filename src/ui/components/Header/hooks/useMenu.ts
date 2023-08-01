import { useState, useEffect } from 'react';

export enum ActiveOptionEnum {
  home = 'home',
  about = 'about',
  services = 'services',
  contact = 'contact',
  skills = 'skills',
}

const useMenu = () => {
  const [activeOption, setActiveOption] = useState<ActiveOptionEnum>(
    ActiveOptionEnum.home
  );

  const handleGoToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleGoToAbout = () => {
    const aboutScreenTop = document
      .getElementById('about-screen')
      ?.getBoundingClientRect().top;

    if (aboutScreenTop) {
      window.scrollTo({
        top: aboutScreenTop! - 64,
        behavior: 'smooth',
      });
    }
  };

  const handleGoToSkills = () => {
    const skillsScreenTop = document
      .getElementById('skills-container')
      ?.getBoundingClientRect().top;

    if (skillsScreenTop) {
      window.scrollTo({
        top: skillsScreenTop!,
        behavior: 'smooth',
      });
    }
  };

  const handleGoToServices = () => {
    const jobsScreenTop = document
      .getElementById('jobs-container')
      ?.getBoundingClientRect().top;

    if (jobsScreenTop) {
      window.scrollTo({
        top: jobsScreenTop! - 64,
        behavior: 'smooth',
      });
    }
  };
  const handleGoToContact = () => {
    const contactScreenTop = document
      .getElementById('contact-container')
      ?.getBoundingClientRect().top;

    if (contactScreenTop) {
      window.scrollTo({
        top: contactScreenTop! - 64,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const homeElement = document.getElementById('home-screen');
      const skillsElement = document.getElementById('skills-container');
      const aboutElement = document.getElementById('about-screen');
      const servicesElement = document.getElementById('jobs-container');
      const contactElement = document.getElementById('contact-container');

      const AMOUNT_TO_REMOVE_ON_SCROLL_COUNT = 64;

      console.log(homeElement?.getBoundingClientRect());

      if (
        homeElement?.getBoundingClientRect().top! -
          AMOUNT_TO_REMOVE_ON_SCROLL_COUNT <=
          0 &&
        aboutElement?.getBoundingClientRect().top! -
          AMOUNT_TO_REMOVE_ON_SCROLL_COUNT >
          0
      ) {
        setActiveOption(ActiveOptionEnum.home);
        return;
      }

      if (
        aboutElement?.getBoundingClientRect().top! -
          AMOUNT_TO_REMOVE_ON_SCROLL_COUNT <=
          0 &&
        skillsElement?.getBoundingClientRect().top! -
          AMOUNT_TO_REMOVE_ON_SCROLL_COUNT >
          0
      ) {
        setActiveOption(ActiveOptionEnum.about);
        return;
      }

      if (
        skillsElement?.getBoundingClientRect().top! -
          AMOUNT_TO_REMOVE_ON_SCROLL_COUNT <=
          0 &&
        servicesElement?.getBoundingClientRect().top! -
          AMOUNT_TO_REMOVE_ON_SCROLL_COUNT >
          0
      ) {
        setActiveOption(ActiveOptionEnum.skills);
        return;
      }

      if (
        servicesElement?.getBoundingClientRect().top! -
          AMOUNT_TO_REMOVE_ON_SCROLL_COUNT <=
          0 &&
        contactElement?.getBoundingClientRect().top! -
          AMOUNT_TO_REMOVE_ON_SCROLL_COUNT >
          0
      ) {
        setActiveOption(ActiveOptionEnum.services);
        return;
      }
      if (
        contactElement?.getBoundingClientRect().top! -
          AMOUNT_TO_REMOVE_ON_SCROLL_COUNT <=
        0
      ) {
        setActiveOption(ActiveOptionEnum.contact);
        return;
      }
    });
  }, []);

  return {
    items: {
      activeOption,
    },
    handlers: {
      handleGoToHome,
      handleGoToSkills,
      handleGoToAbout,
      handleGoToContact,
      handleGoToServices,
    },
  };
};

export default useMenu;
