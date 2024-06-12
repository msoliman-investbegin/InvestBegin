import { useAuth } from 'wasp/client/auth';
import { stripePayment } from 'wasp/client/operations';
import { TierIds, STRIPE_CUSTOMER_PORTAL_LINK } from '../../shared/constants';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { cn } from '../../shared/utils';
import BlogPageComponent from '../components/BlogPageComponent';

export const tiers = [
  {
    name: 'Hobby',
    id: TierIds.HOBBY,
    price: '$9.99',
    description: 'All you need to get started',
    features: ['Limited monthly usage', 'Basic support'],
  },
  {
    name: 'Pro',
    id: TierIds.PRO,
    price: '$19.99',
    description: 'Our most popular plan',
    features: ['Unlimited monthly usage', 'Priority customer support'],
    bestDeal: true,
  },
  {
    name: '10 Credits',
    id: TierIds.CREDITS,
    price: '$9.99',
    description: 'One-time purchase of 10 credits for your account',
    features: ['Use credits for e.g. OpenAI API calls', 'No expiration date'],
  },
];

const BlogsPage = () => {
  const [isStripePaymentLoading, setIsStripePaymentLoading] = useState<boolean | string>(false);

  const { data: user, isLoading: isUserLoading } = useAuth();

  const history = useHistory();

  async function handleBuyNowClick(tierId: string) {
    if (!user) {
      history.push('/login');
      return;
    }
    try {
      setIsStripePaymentLoading(tierId);
      let stripeResults = await stripePayment(tierId);

      if (stripeResults?.sessionUrl) {
        window.open(stripeResults.sessionUrl, '_self');
      }
    } catch (error: any) {
      console.error(error?.message ?? 'Something went wrong.');
    } finally {
      setIsStripePaymentLoading(false);
    }
  }

  // Define sample blog data
  const blogs: any = [
    {
      id: 1,
      title: 'Blog Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      title: 'Blog Title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    // Add more blogs as needed
  ];

  // State to keep track of selected blog
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  // Function to handle blog selection
  const handleBlogSelect = (blogId: any) => {
    setSelectedBlog(blogs.find((blog: any) => blog.id === blogId));
  };

  // Function to handle closing the blog details
  const handleCloseDetails = () => {
    setSelectedBlog(null);
  };

  return (
    <div className='py-10 lg:mt-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div id='pricing' className='mx-auto max-w-4xl text-center'>
          <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
            Welcome to Our <span className='text-yellow-500'>Blog</span>
          </h2>
        </div>
       

       <BlogPageComponent />
      </div>
    </div>
  );
};

export default BlogsPage;
