import React from "react"; 
import ReactDOM from "react-dom/client";



/*

Header - 
    logo
    nav items   
Body
    search 
    resturant container
        resturant card
            img
            name
            rating
            cuisine
            delivery time
Footer
    copyright
    links
    contact
    address


*/


const Header=()=>{
    return(
        <div className="header">

            <div className="logo-container">
                <img className="logo" src="https://e7.pngegg.com/pngimages/496/109/png-clipart-gold-colored-triangle-logo-nail-art-june-triangulo-neon-angle-rectangle-thumbnail.png" alt="logo of brand" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="cart-logo"><img src="data:image/png;base64,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" alt="cart-logo" /></li>
                </ul>
            </div>
        </div>

    )
}

const styleCard={                   //this is a js object
    backgroundColor:"#f0f0f0",
};

const resList=[
    {
      "info": {
        "id": "61111",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/bfb0152f-c33e-424e-9dd8-191013640306_61111.jpg",
        "locality": "Beta 2",
        "areaName": "Greater Noida",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "2.6K+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 5.8,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "5.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹200 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/pizza-hut-beta-2-greater-noida-rest61111",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "628113",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/09f37716-6cf2-490e-8df2-ac4d010d6b1e_628113.JPG",
        "locality": "Commercial Belt",
        "areaName": "Sunrise Tower",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 4.1,
        "parentId": "2",
        "avgRatingString": "4.1",
        "totalRatingsString": "1.9K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 6.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹119"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/subway-commercial-belt-sunrise-tower-rest628113",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "438956",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "F Block",
        "areaName": "Surajpur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.6",
        "totalRatingsString": "63",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 6.7,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "6.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-25 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/baskin-robbins-ice-cream-desserts-f-block-surajpur-rest438956",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "362954",
        "name": "Burger Singh (Big Punjabi Burgers)",
        "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
        "locality": "Alpha 1",
        "areaName": "Alpha 1",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "American",
          "Indian",
          "Snacks",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "375065",
        "avgRatingString": "4.3",
        "totalRatingsString": "8.4K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 6.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 05:29:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹98"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/burger-singh-big-punjabi-burgers-alpha-1-rest362954",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "750407",
        "name": "Daily Kitchen - Homely Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/8a1d8aae-63c3-4033-a8b4-5d0eac490c8f_750407.JPG",
        "locality": "Gamma 1",
        "areaName": "Jagat Farm",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Home Food",
          "Indian",
          "North Indian",
          "Thalis"
        ],
        "avgRating": 4.4,
        "parentId": "444382",
        "avgRatingString": "4.4",
        "totalRatingsString": "651",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/daily-kitchen-homely-meals-gamma-1-jagat-farm-rest750407",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "643843",
        "name": "WeFit - Protein Bowls, Salads & Sandwiches",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/60b9076b-ec03-472c-9a86-fea17ae0aafe_643843.JPG",
        "locality": "Jagat Farm",
        "areaName": "BJ Mart",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Keto",
          "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "355285",
        "avgRatingString": "4.6",
        "totalRatingsString": "266",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/wefit-protein-bowls-salads-and-sandwiches-jagat-farm-bj-mart-rest643843",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "78041",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/24badc96-e293-444e-be18-52d5f5ae9b74_78041.jpg",
        "locality": "Gamma Shopping Mall",
        "areaName": "Gamma 1",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.2,
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "20K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/burger-king-gamma-shopping-mall-gamma-1-rest78041",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "39126",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/907859fd-2ff6-4257-a829-7c3adba9a17b_39126.JPG",
        "locality": "Ansal Plaza Mall",
        "areaName": "Knowledge Park",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.2,
        "parentId": "547",
        "avgRatingString": "4.2",
        "totalRatingsString": "8.9K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/kfc-ansal-plaza-mall-knowledge-park-rest39126",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "253985",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f3507e7a-f122-4696-8e44-6f98b30473fa_253985.JPG",
        "locality": "Ansal Plaza Mall",
        "areaName": "Knowledge Park",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "14K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹49"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/mcdonalds-ansal-plaza-mall-knowledge-park-rest253985",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "543042",
        "name": "NH1 Bowls - Highway To North",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/ad2857f0-8edd-4c26-8a9a-ee427fc111de_543042.jpg",
        "locality": "Gamma 1",
        "areaName": "Greater Noida",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Home Food"
        ],
        "avgRating": 4.6,
        "parentId": "22452",
        "avgRatingString": "4.6",
        "totalRatingsString": "695",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/nh1-bowls-highway-to-north-gamma-1-greater-noida-rest543042",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "303249",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/04595628-2246-4eb1-9960-1cc2d4f71337_303249.jpg",
        "locality": "Alpha 2",
        "areaName": "KB Complex, Alpha-2, Greater Noida",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "1040",
        "avgRatingString": "4.4",
        "totalRatingsString": "3.1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 6.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/theobroma-alpha-2-kb-complex-alpha-2-greater-noida-rest303249",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "543038",
        "name": "BOX8 - Desi Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/306d0478-1225-4314-a376-ffd2f0425701_543038.jpg",
        "locality": "Gamma 1",
        "areaName": "Greater Noida",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Thalis",
          "Home Food"
        ],
        "avgRating": 4.5,
        "parentId": "10655",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.7K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/box8-desi-meals-gamma-1-greater-noida-rest543038",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "699612",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/00b69ab2-93c6-42bf-98be-00be6582da56_699612.JPG",
        "locality": "TRADEX TOWER-II",
        "areaName": "Gautam Buddha Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.1K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/the-belgian-waffle-co-tradex-tower-ii-gautam-buddha-nagar-rest699612",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "426714",
        "name": "Bakingo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/7/df892960-14ec-4b4e-8ff9-dc4e5a280277_426714.jpg",
        "locality": "Alpha 2",
        "areaName": "Greater Noida",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Bakery"
        ],
        "avgRating": 4.6,
        "parentId": "3818",
        "avgRatingString": "4.6",
        "totalRatingsString": "6.5K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 6.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-25 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/bakingo-alpha-2-greater-noida-rest426714",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "362737",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/7eb58f19-5909-46d1-b890-1b4ad6e50e0e_362737.jpg",
        "locality": "Sector alpha 2",
        "areaName": "Greater Noida",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.7",
        "totalRatingsString": "2.1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 6.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-25 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹36"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/nic-ice-creams-sector-alpha-2-greater-noida-rest362737",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "595300",
        "name": "Wow! Momo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/03416d1d-1b49-476e-b87d-96e78c931e94_595300.JPG",
        "locality": "Alpha 1",
        "areaName": "Alpha 1",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "1776",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.2K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 5.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Momos.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Momos.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.7",
            "ratingCount": "132"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/wow-momo-alpha-1-rest595300",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "462273",
        "name": "Cheesecake & Co.",
        "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
        "locality": "Delta 1",
        "areaName": "Greater Noida",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "387417",
        "avgRatingString": "4.6",
        "totalRatingsString": "1.5K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 7.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/cheesecake-and-co-delta-1-greater-noida-rest462273",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "543043",
        "name": "ZAZA Mughal Biryani",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/6c3a10e1-f257-4d56-bbc2-03fc37130549_543043.jpg",
        "locality": "Gamma 1",
        "areaName": "Greater Noida",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Awadhi"
        ],
        "avgRating": 4.5,
        "parentId": "22473",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.1K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/zaza-mughal-biryani-gamma-1-greater-noida-rest543043",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "622214",
        "name": "MOJO Pizza - 2X Toppings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/52bcd0a2-ab1c-4bec-9659-64d7a19a3abf_622214.jpg",
        "locality": "Jagat Farm",
        "areaName": "Greater Noida",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "11329",
        "avgRatingString": "4.6",
        "totalRatingsString": "799",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-26 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/mojo-pizza-2x-toppings-jagat-farm-greater-noida-rest622214",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "101584",
        "name": "Oven Story Pizza - Standout Toppings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/1/2e339f76-29f2-4199-837c-0fcb9de2e69f_101584.jpg",
        "locality": "Shivam Plaza",
        "areaName": "Delta I",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.7,
        "parentId": "3534",
        "avgRatingString": "4.7",
        "totalRatingsString": "4.9K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 7.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-25 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-61ebcaa2-de8b-4fc8-b031-28a0a7755988"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/noida-1/oven-story-pizza-standout-toppings-shivam-plaza-delta-i-rest101584",
        "type": "WEBLINK"
      }
    }
  ]


const ResturantCard=({resturantData})=>{
    
    //const {resturantData}=props;
    /*
    we can also modify the code so that we do not need to write the complex code like resturantData.info.name
    we just have to add this 

    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        deliveryTime,
    }= resturantData?.info
    */
    return(
        <div className="res-card" style={styleCard}> 
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resturantData.info.cloudinaryImageId} alt="resturant-image" />
            <h3>{resturantData.info.name}</h3>
            <h4>{resturantData.info.cuisines.join(", ")}</h4>
            <h4>{resturantData.info.avgRating}</h4>
            <h4>{resturantData.info.deliveryTime}</h4>
        </div>
    )
}


const Body=()=>{
    return(
        <div className="Body">
            <div className="search">Search</div>
            <div className="Resturant-Conatiner">
               {/* 
                <ResturantCard resturantData={resList[0]}/>
                <ResturantCard resturantData={resList[1]}/>
                <ResturantCard resturantData={resList[2]}/>
                <ResturantCard resturantData={resList[3]}/>
                <ResturantCard resturantData={resList[4]}/>
                <ResturantCard resturantData={resList[5]}/>
                <ResturantCard resturantData={resList[6]}/>
                <ResturantCard resturantData={resList[7]}/>
                <ResturantCard resturantData={resList[8]}/>
                <ResturantCard resturantData={resList[9]}/>
                <ResturantCard resturantData={resList[10]}/>


                we can use a loop instead

                like for while ext

                but here we will use map function

                */}

                {resList.map((resturant) => (<ResturantCard key={resturant.info.id} resturantData={resturant}/>))}
            </div>
        </div>
    )
}

const Footer=()=>{
    return(
        <div className="Footer-Container">
            <div className="Footer-Logo">
                <img src="https://e7.pngegg.com/pngimages/496/109/png-clipart-gold-colored-triangle-logo-nail-art-june-triangulo-neon-angle-rectangle-thumbnail.png" alt="footer-logo" />
            </div>
            <div>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="copyright">
                <h5>Copyright @ 2025</h5>
            </div>
        </div>
    )
};

const AppLayout=()=>{
    return(
        <div classname="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}




const root=ReactDOM.createRoot(document.getElementById("heading"));
root.render(<AppLayout/>);

