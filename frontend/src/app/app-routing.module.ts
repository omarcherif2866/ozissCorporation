import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { About1Component } from './components/pages/about1/about1.component';
import { About2Component } from './components/pages/about2/about2.component';
import { About3Component } from './components/pages/about3/about3.component';
import { BigDataAnalyticsDemoComponent } from './components/pages/big-data-analytics-demo/big-data-analytics-demo.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DigitalAgencyDemoComponent } from './components/pages/digital-agency-demo/digital-agency-demo.component';
import { DigitalAgencyPortfolioDemoComponent } from './components/pages/digital-agency-portfolio-demo/digital-agency-portfolio-demo.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { FeaturesDetailsComponent } from './components/pages/features-details/features-details.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoStaticImageComponent } from './components/pages/home-demo-static-image/home-demo-static-image.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { IotDemoComponent } from './components/pages/iot-demo/iot-demo.component';
import { MachineLearningDemoComponent } from './components/pages/machine-learning-demo/machine-learning-demo.component';
import { MachineLearningDemo2Component } from './components/pages/machine-learning-demo2/machine-learning-demo2.component';
import { PcRepairDemoComponent } from './components/pages/pc-repair-demo/pc-repair-demo.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { TeamComponent } from './components/pages/team/team.component';
import { WebHostingDemoComponent } from './components/pages/web-hosting-demo/web-hosting-demo.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SigninComponent } from './components/pages/signin/signin.component';

const routes: Routes = [
    { path: '', component: PcRepairDemoComponent },
    { path: 'index-2', component: HomeDemoTwoComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'index-3', component: WebHostingDemoComponent },
    { path: 'index-4', component: PcRepairDemoComponent },
    { path: 'index-5', component: IotDemoComponent },
    { path: 'index-6', component: MachineLearningDemoComponent },
    { path: 'index-7', component: MachineLearningDemo2Component },
    { path: 'index-8', component: DigitalAgencyDemoComponent },
    { path: 'index-9', component: DigitalAgencyPortfolioDemoComponent },
    { path: 'index-10', component: BigDataAnalyticsDemoComponent },
    { path: 'index-11', component: HomeDemoStaticImageComponent },
    { path: 'about-1', component: About1Component },
    { path: 'about-2', component: About2Component },
    { path: 'about-3', component: About3Component },
    { path: 'features', component: FeaturesComponent },
    { path: 'features-details', component: FeaturesDetailsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'services-details/:id', component: ServicesDetailsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects-details', component: ProjectsDetailsComponent },
    { path: 'team', component: TeamComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products-details/:id', component: ProductsDetailsComponent }, 
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'blog-grid', component: BlogGridComponent },
    { path: 'blog-right-sidebar', component: BlogRightSidebarComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'contact', component: ContactComponent },
    // Here add new pages component

    { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }