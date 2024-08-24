import { usePathname } from 'next/navigation';

import { Bell, Brain, Briefcase, CalendarSearch, CalendarPlus, Home, Settings, Shell, User } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: <Shell size={20} />,
      active: pathname === '/dashboard',
      position: 'top',
    },
    {
      name: 'AI Summaries',
      href: '/dashboard/summaries',
      icon: <Brain size={20} />,
      active: isNavItemActive(pathname, '/dashboard/summaries'),
      position: 'top',
    },
    {
      name: 'Class Notifications',
      href: '/dashboard/notifications',
      icon: <Bell size={20} />,
      active: isNavItemActive(pathname, '/dashboard/notifications'),
      position: 'top',
    },
    {
      name: 'Assignments',
      href: '/dashboard/assignments',
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, '/dashboard/assignments'),
      position: 'top',
    },
    {
        name: 'Calendar',
        href: '/dashboard/calendar',
        icon: <CalendarSearch size={20} />,
        active: isNavItemActive(pathname, '/dashboard/calendar'),
        position: 'top',
    },
    {
        name: 'Scheduler',
        href: '/dashboard/scheduler',
        icon: <CalendarPlus size={20} />,
        active: isNavItemActive(pathname, '/dashboard/scheduler'),
        position: 'top',
    },
    {
      name: 'Profile',
      href: '/dashboard/account',
      icon: <User size={20} />,
      active: isNavItemActive(pathname, '/dashboard/account'),
      position: 'bottom',
    },
  ];
};