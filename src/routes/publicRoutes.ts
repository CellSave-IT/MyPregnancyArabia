import Home from '../pages/front/home'
import About from '../pages/front/about'
import Faqs from '../pages/front/faqs'
import Testimonials from '../pages/front/testimonials'
import Gallery from '../pages/front/gallery'
import Events from '../pages/front/events'
import Contact from '../pages/front/contact'
import Communities from '../pages/front/communities'
import Diaries from '../pages/front/diaries'
import DiaryDetails from '../pages/front/diaries/single'
import CommunitiesFilter from '../pages/front/communities/filter'
import PastEventDetails from '../pages/front/events/pastSingle'
import UpcomingEventDetails from '../pages/front/events/upcomingSingle'
import CommunityDetails from '../pages/front/communities/single'
import BabySize from '../pages/front/babySize'
import GalleryDetails from '../pages/front/gallery/single'
const publicRoutes = [
  {
    Component: Home,
    exact: true,
    index: true,
  },
  {
    Component: About,
    exact: true,
    path: '/about',
  },
  {
    Component: Faqs,
    exact: true,
    path: '/faqs',
  },
  {
    Component: Testimonials,
    exact: true,
    path: '/testimonials',
  },
  {
    Component: Gallery,
    exact: true,
    path: '/gallery',
  },
  {
    Component: GalleryDetails,
    exact: true,
    path: '/gallery/:id',
  },
  {
    Component: Events,
    exact: true,
    path: '/events',
  },
  {
    Component: UpcomingEventDetails,
    exact: true,
    path: '/events/upcoming/:id',
  },
  {
    Component: PastEventDetails,
    exact: true,
    path: '/events/past/:id',
  },
  {
    Component: Contact,
    exact: true,
    path: '/contact',
  },
  {
    Component: Communities,
    exact: true,
    path: '/communities',
  },
  {
    Component: Diaries,
    exact: true,
    path: '/diaries',
  },
  {
    Component: DiaryDetails,
    exact: true,
    path: '/diaries/:id',
  },
  {
    Component: CommunitiesFilter,
    exact: true,
    path: '/communities/filter',
  },
  {
    Component: CommunityDetails,
    exact: true,
    path: '/communities/:id',
  },
  {
    Component: BabySize,
    exact: true,
    path: '/baby-size',
  },
]

export default publicRoutes
