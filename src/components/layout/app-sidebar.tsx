
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { GraduationCap, LayoutDashboard, BookOpenText, HandCoins, Sparkles, HeartHandshake, LogOut, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/courses', label: 'College Courses', icon: BookOpenText },
  { href: '/financial-aid', label: 'Financial Aid', icon: HandCoins },
  { href: '/recommendations', label: 'Personalized Recs', icon: Sparkles },
  { href: '/wellbeing', label: 'Wellbeing', icon: HeartHandshake },
  { href: '/profile', label: 'My Profile', icon: User },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2" aria-label="EduConnect Kenya Home">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            EduConnect
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label, side: 'right', align: 'center' }}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  <a>
                    <item.icon className="h-5 w-5" />
                    <span className="truncate">{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
             <SidebarMenuButton
                asChild
                tooltip={{ children: 'Logout', side: 'right', align: 'center' }}
              >
              <button type="button" className="w-full">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
