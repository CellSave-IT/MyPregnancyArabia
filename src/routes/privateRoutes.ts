import AdminDashboard from '../pages/admin/dashboard'
import AdminFaqs from '../pages/admin/faqs'
import AdminFaqsForm from '../pages/admin/faqs/form'
import AdminTestimonials from '../pages/admin/testimonials'
import AdminTestimonialsForm from '../pages/admin/testimonials/form'
import AdminPartners from '../pages/admin/partners'
import AdminPartnersForm from '../pages/admin/partners/form'
import AdminCommunitiesCategories from '../pages/admin/communityCategories'
import AdminCommunitiesCategoriesForm from '../pages/admin/communityCategories/form'
import AdminCommunities from '../pages/admin/communities'
import AdminCommunitiesForm from '../pages/admin/communities/form'
import AdminBlogs from '../pages/admin/blogs'
import AdminBlogsForm from '../pages/admin/blogs/form'
import AdminEnquiry from '../pages/admin/enquiry'
import AdminSubscribes from '../pages/admin/subscribes'
import AdminBabySizes from '../pages/admin/babySizes'
import AdminBabySizesForm from '../pages/admin/babySizes/form'
import AdminEvents from '../pages/admin/events'
import AdminEventsForm from '../pages/admin/events/form'
import AdminEventsGallery from '../pages/admin/events/gallery'
import AdminContactSetting from '../pages/admin/settings/contact'
import AdminSocialMediaSetting from '../pages/admin/settings/social'
import AdminBannerSetting from '../pages/admin/settings/banner'
import AdminEventRegistration from '../pages/admin/events/registration'
import AdminBabyFile from '../pages/admin/settings/baby'
import AdminAbout from '../pages/admin/settings/about'
import AdminUser from '../pages/admin/user'
import AdminUserForm from '../pages/admin/user/form'
import AdminDownloads from '../pages/admin/downloads'
import AdminPayment from '../pages/admin/settings/payment'
import AdminGalleries from '../pages/admin/galleries'
import AdminGalleriesForm from '../pages/admin/galleries/form'
const privateRoutes = [
  {
    Component: AdminDashboard,
    exact: true,
    path: '/admin/dashboard',
  },
  {
    Component: AdminTestimonials,
    exact: true,
    path: '/admin/testimonials',
  },
  {
    Component: AdminTestimonialsForm,
    exact: true,
    path: '/admin/testimonials/create',
  },
  {
    Component: AdminTestimonialsForm,
    exact: true,
    path: '/admin/testimonials/edit/:id',
  },
  {
    Component: AdminEvents,
    exact: true,
    path: '/admin/events',
  },
  {
    Component: AdminEventsForm,
    exact: true,
    path: '/admin/events/create',
  },
  {
    Component: AdminEventsForm,
    exact: true,
    path: '/admin/events/edit/:id',
  },
  {
    Component: AdminEventsGallery,
    exact: true,
    path: '/admin/events/gallery/:id',
  },
  {
    Component: AdminFaqs,
    exact: true,
    path: '/admin/faqs',
  },
  {
    Component: AdminFaqsForm,
    exact: true,
    path: '/admin/faqs/create',
  },
  {
    Component: AdminFaqsForm,
    exact: true,
    path: '/admin/faqs/edit/:id',
  },
  {
    Component: AdminPartners,
    exact: true,
    path: '/admin/partners',
  },
  {
    Component: AdminPartnersForm,
    exact: true,
    path: '/admin/partners/create',
  },
  {
    Component: AdminPartnersForm,
    exact: true,
    path: '/admin/partners/edit/:id',
  },
  {
    Component: AdminCommunitiesCategories,
    exact: true,
    path: '/admin/community/categories',
  },
  {
    Component: AdminCommunitiesCategoriesForm,
    exact: true,
    path: '/admin/community/categories/create',
  },
  {
    Component: AdminCommunitiesCategoriesForm,
    exact: true,
    path: '/admin/community/categories/edit/:id',
  },
  {
    Component: AdminCommunities,
    exact: true,
    path: '/admin/communities',
  },
  {
    Component: AdminCommunitiesForm,
    exact: true,
    path: '/admin/communities/create',
  },
  {
    Component: AdminCommunitiesForm,
    exact: true,
    path: '/admin/communities/edit/:id',
  },
  {
    Component: AdminBlogs,
    exact: true,
    path: '/admin/diaries',
  },
  {
    Component: AdminBlogsForm,
    exact: true,
    path: '/admin/diaries/create',
  },
  {
    Component: AdminBlogsForm,
    exact: true,
    path: '/admin/diaries/edit/:id',
  },
  {
    Component: AdminEnquiry,
    exact: true,
    path: '/admin/enquiry',
  },
  {
    Component: AdminSubscribes,
    exact: true,
    path: '/admin/subscribes',
  },
  {
    Component: AdminBabySizes,
    exact: true,
    path: '/admin/babySizes',
  },
  {
    Component: AdminBabySizesForm,
    exact: true,
    path: '/admin/babySizes/create',
  },
  {
    Component: AdminBabySizesForm,
    exact: true,
    path: '/admin/babySizes/edit/:id',
  },
  {
    Component: AdminEnquiry,
    exact: true,
    path: '/admin/enquiry',
  },
  {
    Component: AdminContactSetting,
    exact: true,
    path: '/admin/settings/contact',
  },
  {
    Component: AdminSocialMediaSetting,
    exact: true,
    path: '/admin/settings/social',
  },
  {
    Component: AdminBannerSetting,
    exact: true,
    path: '/admin/settings/banner',
  },
  {
    Component: AdminPayment,
    exact: true,
    path: '/admin/settings/payment',
  },
  {
    Component: AdminBabyFile,
    exact: true,
    path: '/admin/settings/baby-file',
  },
  {
    Component: AdminEventRegistration,
    exact: true,
    path: '/admin/events/registrations/:id',
  },
  {
    Component: AdminAbout,
    exact: true,
    path: '/admin/settings/about',
  },
  {
    Component: AdminUser,
    exact: true,
    path: '/admin/users',
  },
  {
    Component: AdminUserForm,
    exact: true,
    path: '/admin/users/create',
  },
  {
    Component: AdminUserForm,
    exact: true,
    path: '/admin/users/edit/:id',
  },
  {
    Component: AdminDownloads,
    exact: true,
    path: '/admin/downloads',
  },
  {
    Component: AdminGalleries,
    exact: true,
    path: '/admin/galleries',
  },
  {
    Component: AdminGalleriesForm,
    exact: true,
    path: '/admin/galleries/create',
  },
  {
    Component: AdminGalleriesForm,
    exact: true,
    path: '/admin/galleries/edit/:id',
  },
]

export default privateRoutes
