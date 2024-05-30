import Login from '@/container/login';
import MultiStepRegister from '@/container/register/multi-step-register';
import Home from '@/container/home/home';
import Dashboard from '@/container/dashboard/dashboard';
import UserInfo from '@/container/user-info/user-info';
import IndustryTypeListing from '@/container/admin/industry-type-listing';
import EducationList from '@/container/admin/education-type/educaiton-type-list.html';
import WorkRoleList from '@/container/admin/work-role/work-role-list.html';
import LanguageList from '@/container/admin/languages/languages-list.html';
import SkillList from '@/container/admin/skill/skill-list.html';
import ProficiencyList from '@/container/admin/proficiency/proficiency-list.html';
import CountryList from '@/container/admin/locations/country/country-list.html';
import CityList from '@/container/admin/locations/city/city-list.html';
import Wizard from '@/container/wizard/wizard';
import CV from '@/container/cv/cv';

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
        element: <EducationList />,
        path: `${routePrefix}education-list`,
        title: 'EducationList',
        slug: 'education-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <WorkRoleList />,
        path: `${routePrefix}work-role-list`,
        title: 'WorkRoleList',
        slug: 'work-role-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <LanguageList />,
        path: `${routePrefix}language-list`,
        title: 'LanguageList',
        slug: 'language-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <SkillList />,
        path: `${routePrefix}skill-list`,
        title: 'SkillList',
        slug: 'skill-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <ProficiencyList />,
        path: `${routePrefix}proficiency-list`,
        title: 'ProficiencyList',
        slug: 'proficiency-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <CountryList />,
        path: `${routePrefix}country-list`,
        title: 'CountryList',
        slug: 'country-list',
        accessLevel: ['superAdmin', 'admin'],
        sidebar: { show: false, icon: '' },
    },
    {
        element: <CityList />,
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