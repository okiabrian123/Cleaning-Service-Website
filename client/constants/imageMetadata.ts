// Image metadata for easy frontend access
// Auto-generated on: 2025-08-17
// Updated to match current assets structure

interface ImageMetadata {
  path: string;
  alt: string;
  category: string;
  type: string;
}

type NestedImageMetadata = {
  [key: string]: ImageMetadata | { [key: string]: ImageMetadata | { [key: string]: ImageMetadata } };
};

// Base interface for the data only
interface DesignImagesData {
  // Airbnb Cleaning Section
  airbnbCleaning: {
    rectangle3: ImageMetadata;
  };
  
  // Contact Section
  contact: {
    rectangle2: ImageMetadata;
  };
  
  // Footer Section
  footer: {
    social: {
      instagram: ImageMetadata;
      tiktok: ImageMetadata;
      twitter: ImageMetadata;
    };
  };
  
  // Header Section
  header: {
    background: ImageMetadata;
    logo: ImageMetadata;
  };
  
  // Move in/Move out Section
  moveInOut: {
    serviceImage: ImageMetadata;
  };
  
  // Office Cleaning Section
  officeCleaning: {
    imageSquare: ImageMetadata;
  };
  
  // Yeldy Green Logo
  logo: {
    yeldyGreen: ImageMetadata;
  };
  
  // Your Needs Section
  yourNeeds: {
    circleImage: {
      ellipse: ImageMetadata;
      antihistamines: ImageMetadata;
    };
    cleaning: ImageMetadata;
    dog: ImageMetadata;
  };
  
  // Residential Section
  residential: {
    imageSquare: ImageMetadata;
  };
}

// The actual data
const imagesData: DesignImagesData = {
  // Airbnb Cleaning Section
  airbnbCleaning: {
    rectangle3: {
      path: '/assets/Design/Airbnb_cleaning/Rectangle_3/Rectangle_3.png',
      alt: 'Airbnb Cleaning Service',
      category: 'airbnb',
      type: 'photo'
    }
  },
  
  // Contact Section
  contact: {
    rectangle2: {
      path: '/assets/Design/Contact/Rectangle_2/Rectangle_2.png',
      alt: 'Contact Information Panel',
      category: 'contact',
      type: 'panel'
    }
  },
  
  // Footer Section
  footer: {
    social: {
      instagram: {
        path: '/assets/Design/Footer/instagram_1/instagram_1.png',
        alt: 'Instagram',
        category: 'footer',
        type: 'socialIcon'
      },
      tiktok: {
        path: '/assets/Design/Footer/tik-tok_1/tik-tok_1.png',
        alt: 'TikTok',
        category: 'footer',
        type: 'socialIcon'
      },
      twitter: {
        path: '/assets/Design/Footer/twitter_1/twitter_1.png',
        alt: 'Twitter',
        category: 'footer',
        type: 'socialIcon'
      }
    }
  },
  
  // Header Section
  header: {
    background: {
      path: '/assets/Design/Header/Rectangle_1/Rectangle_1.png',
      alt: 'Header Background',
      category: 'header',
      type: 'background'
    },
    logo: {
      path: '/assets/Design/Header/YELDY_finaltransparent_1/YELDY_finaltransparent_1.png',
      alt: 'Yeldy Logo',
      category: 'header',
      type: 'logo'
    }
  },
  
  // Move in/Move out Section
  moveInOut: {
    serviceImage: {
      path: '/assets/Design/Move_in_move_out/Rectangle_3/Rectangle_3.png',
      alt: 'Move In/Move Out Cleaning Service',
      category: 'moveInOut',
      type: 'photo'
    }
  },
  
  // Office Cleaning Section
  officeCleaning: {
    imageSquare: {
      path: '/assets/Design/Office_Cleaning/Image_Square/Rectangle_3/Rectangle_3.png',
      alt: 'Office Cleaning Service',
      category: 'officeCleaning',
      type: 'photo'
    }
  },
  
  // Yeldy Green Logo
  logo: {
    yeldyGreen: {
      path: '/assets/Design/YELDYGREENPNG__1000___1000_px__1/YELDYGREENPNG__1000___1000_px__1.png',
      alt: 'Yeldy Green Logo',
      category: 'logo',
      type: 'logo'
    }
  },
  
  // Your Needs Section
  yourNeeds: {
    circleImage: {
      ellipse: {
        path: '/assets/Design/Your_needs/Circle_Image/Ellipse_2/Ellipse_2.svg',
        alt: 'Circle Decoration',
        category: 'yourNeeds',
        type: 'decoration'
      },
      antihistamines: {
        path: '/assets/Design/Your_needs/Circle_Image/antihistamines_1/antihistamines_1.png',
        alt: 'Antihistamines Icon',
        category: 'yourNeeds',
        type: 'icon'
      }
    },
    cleaning: {
      path: '/assets/Design/Your_needs/cleaning_1/cleaning_1.png',
      alt: 'Cleaning Service Icon',
      category: 'yourNeeds',
      type: 'icon'
    },
    dog: {
      path: '/assets/Design/Your_needs/dog_1/dog_1.png',
      alt: 'Pet Friendly Icon',
      category: 'yourNeeds',
      type: 'icon'
    }
  },
  
  // Residential Section
  residential: {
    imageSquare: {
      path: '/assets/Design/residential/Image_Square/Rectangle_3/Rectangle_3.png',
      alt: 'Residential Cleaning Service',
      category: 'residential',
      type: 'photo'
    }
  }
};

// Create a class to handle the images with helper methods
class DesignImages implements DesignImagesData {
  // Airbnb Cleaning Section
  airbnbCleaning: {
    rectangle3: ImageMetadata;
  };
  
  // Contact Section
  contact: {
    rectangle2: ImageMetadata;
  };
  
  // Footer Section
  footer: {
    social: {
      instagram: ImageMetadata;
      tiktok: ImageMetadata;
      twitter: ImageMetadata;
    };
  };
  
  // Header Section
  header: {
    background: ImageMetadata;
    logo: ImageMetadata;
  };
  
  // Move in/Move out Section
  moveInOut: {
    serviceImage: ImageMetadata;
  };
  
  // Office Cleaning Section
  officeCleaning: {
    imageSquare: ImageMetadata;
  };
  
  // Yeldy Green Logo
  logo: {
    yeldyGreen: ImageMetadata;
  };
  
  // Your Needs Section
  yourNeeds: {
    circleImage: {
      ellipse: ImageMetadata;
      antihistamines: ImageMetadata;
    };
    cleaning: ImageMetadata;
    dog: ImageMetadata;
  };
  
  // Residential Section
  residential: {
    imageSquare: ImageMetadata;
  };

  constructor() {
    // Copy all properties from imagesData
    Object.assign(this, imagesData);
  }
  
  // Helper function to get image by category and key
  getImage(category: keyof DesignImagesData, key: string): string {
    const categoryObj = this[category] as Record<string, any>;
    const item = categoryObj?.[key];
    return item?.path || '';
  }
  
  // Get all images in a category
  getCategoryImages(category: keyof DesignImagesData): NestedImageMetadata {
    return (this[category] as NestedImageMetadata) || {};
  }
}

// Export a singleton instance
export const designImages = new DesignImages();

// Example usage:
// import { designImages } from '@/constants/imageMetadata';
// const airbnbImage = designImages.airbnbCleaning.rectangle3.path;
// const logoPath = designImages.getImage('header', 'logo');
