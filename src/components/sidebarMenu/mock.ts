import { theme } from '../../styles/theme/generalColors';

export const sidebarMenuMock = [
  {
    title: 'Overview',
    icon: 'overview',
    color: theme.colors.secondaryDefault,
  },
  {
    title: 'Pages',
    icon: 'pages',
    iconWidth: 14,
    iconHeight: 19,
    subpages: ['Testing'],
  },
  {
    title: 'Sales',
    icon: 'shopping',
    iconWidth: 17,
    iconHeight: 19,
    subpages: ['Product List', 'Briling', 'Invoice'],
  },
  {
    title: 'Messages',
    icon: 'inbox',
    iconWidth: 17,
    iconHeight: 17,
  },
  {
    title: 'Authentication',
    icon: 'lock',
    iconWidth: 17,
    iconHeight: 19,
    subpages: ['Testing'],
  },
  {
    title: 'Docs',
    icon: 'clipboard',
    iconWidth: 14,
    iconHeight: 18,
  },
  {
    title: 'Components',
    icon: 'collection',
    iconWidth: 19,
    iconHeight: 16,
  },
  {
    title: 'Help',
    icon: 'support',
    iconWidth: 19,
    iconHeight: 16,
  },
];
