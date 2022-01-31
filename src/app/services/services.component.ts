import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  serviceName: any;
  serviceObj = {
    webdesign: {
      text: "66% of consumers would prefer to view website content that is beautifully designed to something plain. We do research about your business to make designs that are meaningful and well suited for your business needs. Well designed websites create unique brand value and trust about business in the minds of your prospective customers",
      img: "../../assets/FCD_Assets/Assets/web_design/Vector.svg",
      heading: "WEB DESIGN",
    },
    webdevelopmentanddomainhosting: {
      text: "66% of consumers would prefer to view website content that is beautifully designed to something plain. We do research about your business to make designs that are meaningful and well suited for your business needs. Well designed websites create unique brand value and trust about business in the minds of your prospective customers",
      img: "../../assets/FCD_Assets/Assets/web_dev/Vector.svg",
      heading: "WEB DEVELOPMENT & DOMAIN HOSTING",
    },
    seo: {
      text: "66% of consumers would prefer to view website content that is beautifully designed to something plain. We do research about your business to make designs that are meaningful and well suited for your business needs. Well designed websites create unique brand value and trust about business in the minds of your prospective customers",
      img: "../../assets/FCD_Assets/Assets/seo/Vector.svg",
      heading: "SEO",
    },
    googlelocallisting: {
      text: "66% of consumers would prefer to view website content that is beautifully designed to something plain. We do research about your business to make designs that are meaningful and well suited for your business needs. Well designed websites create unique brand value and trust about business in the minds of your prospective customers",
      img: "../../assets/FCD_Assets/Assets/google_local_listing/Vector.svg",
      heading: "GOOGLE LOCAL LISTING",
    },
    googleanalytics: {
      text: "66% of consumers would prefer to view website content that is beautifully designed to something plain. We do research about your business to make designs that are meaningful and well suited for your business needs. Well designed websites create unique brand value and trust about business in the minds of your prospective customers",
      img: "../../assets/FCD_Assets/Assets/google_analytics/Vector.svg",
      heading: "GOOGLE ANALYTICS",
    },
    googleads: {
      text: "66% of consumers would prefer to view website content that is beautifully designed to something plain. We do research about your business to make designs that are meaningful and well suited for your business needs. Well designed websites create unique brand value and trust about business in the minds of your prospective customers",
      img: "../../assets/FCD_Assets/Assets/google ads/Vector.png",
      heading: "GOOGLE ADS",
    },
    googlesearchinganddisplayads: {
      text: "66% of consumers would prefer to view website content that is beautifully designed to something plain. We do research about your business to make designs that are meaningful and well suited for your business needs. Well designed websites create unique brand value and trust about business in the minds of your prospective customers",
      img: "../../assets/FCD_Assets/Assets/google_search_and_display/Vector.svg",
      heading: "GOOGLE SEARCHING AND DISPLAY ADS",
    },
    socialmediamarketing: {
      text: "66% of consumers would prefer to view website content that is beautifully designed to something plain. We do research about your business to make designs that are meaningful and well suited for your business needs. Well designed websites create unique brand value and trust about business in the minds of your prospective customers",
      img: "../../assets/FCD_Assets/Assets/social_media/Group 14.svg",
      heading: "SOCIAL MEDIA MARKETING",
    },
    sem: {
      text: "66% of consumers would prefer to view website content that is beautifully designed to something plain. We do research about your business to make designs that are meaningful and well suited for your business needs. Well designed websites create unique brand value and trust about business in the minds of your prospective customers",
      img: "../../assets/FCD_Assets/Assets/sem/Vector.svg",
      heading: "SEM",
    },



  }
  ngOnInit(): void {
    this.serviceName = this.activatedRoute.snapshot.params.servicename
  }

}
