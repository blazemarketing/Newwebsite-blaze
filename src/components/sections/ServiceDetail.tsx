import React from 'react';
import { ArrowRight } from 'lucide-react';
// Import service components
import LLMSEOService from '../services/LLMSEOService';
import GoogleAdsService from '../services/GoogleAdsService';
import MetaAdsService from '../services/MetaAdsService';
import GraphicDesigningService from '../services/GraphicDesigningService';
import WebDevelopmentService from '../services/WebDevelopmentService';
import ThreeDRenderingService from '../services/3DRenderingService';

// Service component mapping
const serviceComponents = {
  'llm-seo': LLMSEOService,
  'google-ads': GoogleAdsService,
  'meta-ads': MetaAdsService,
  'graphic-designing': GraphicDesigningService,
  'web-development': WebDevelopmentService,
  '3d-rendering': ThreeDRenderingService,
};

interface ServiceDetailProps {
  slug?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug }) => {
  const serviceSlug = slug || '';
  const ServiceComponent = serviceComponents[serviceSlug as keyof typeof serviceComponents];
  
  if (!ServiceComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-6 text-gray-400">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <button 
            onClick={() => {
              window.location.hash = '';
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center px-6 py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors duration-300"
          >
            Back to Home <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }
  
  return <ServiceComponent />;
};

export default ServiceDetail;