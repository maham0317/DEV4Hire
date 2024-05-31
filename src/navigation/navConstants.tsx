import Login from '@/container/login';
import MultiStepRegister from '@/container/register/multi-step-register';
import Home from '@/container/home/home';
import Dashboard from '@/container/dashboard/dashboard';
import UserInfo from '@/container/user-info/user-info';
import IndustryTypeListing from '@/container/admin/industry-type-listing';
import Wizard from '@/container/wizard/wizard';
import CV from '@/container/cv/cv';
import EducationTypeListing from '@/container/admin/education-type-listing';
import WorkRoleListing from '@/container/admin/work-role-listing';
import LanguageListing from '@/container/admin/language-listing';
import SkillListing from '@/container/admin/skill-listing';
import ProficiencyListing from '@/container/admin/proficiency-listing';
import CountryListing from '@/container/admin/locations-listing/country-listing';
import CityListing from '@/container/admin/locations-listing/city-listing';

const routePrefix = '/';

export const privateRoutes = [
    {
        element: <Dashboard />,
        path: `${routePrefix}*`,
        title: 'Dashboard',
        slug: 'dashboard',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <Home />,
        path: `${routePrefix}home`,
        title: 'Home',
        slug: 'home',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <UserInfo />,
        path: `${routePrefix}user-info`,
        title: 'UserInfo',
        slug: 'user-info',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <IndustryTypeListing />,
        path: `${routePrefix}industry-type-listing`,
        title: 'Industry Type Listing',
        slug: 'industry-type-listing',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <EducationTypeListing />,
        path: `${routePrefix}education-list`,
        title: 'EducationList',
        slug: 'education-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <WorkRoleListing />,
        path: `${routePrefix}work-role-list`,
        title: 'WorkRoleList',
        slug: 'work-role-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <LanguageListing />,
        path: `${routePrefix}language-list`,
        title: 'LanguageList',
        slug: 'language-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <SkillListing />,
        path: `${routePrefix}skill-list`,
        title: 'SkillList',
        slug: 'skill-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <ProficiencyListing />,
        path: `${routePrefix}proficiency-list`,
        title: 'ProficiencyList',
        slug: 'proficiency-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <CountryListing />,
        path: `${routePrefix}country-list`,
        title: 'CountryList',
        slug: 'country-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <CityListing />,
        path: `${routePrefix}city-list`,
        title: 'CityList',
        slug: 'city-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <Wizard />,
        path: `${routePrefix}wizard`,
        title: 'Wizard',
        slug: 'wizard',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <CV />,
        path: `${routePrefix}cv`,
        title: 'CV',
        slug: 'cv',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    }
];

export const publicRoutes = [
    {
        element: <Login />,
        path: `${routePrefix}*`,
        title: 'Login',
        slug: 'login',
        sidebar: { show: false, icon: '' }
    },
    {
        element: <MultiStepRegister />,
        path: `${routePrefix}/register`,
        title: 'MultiStepRegister',
        slug: 'multistepregister',
        sidebar: { show: false, icon: '' }
    }
];