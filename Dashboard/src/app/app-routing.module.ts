import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './esprit/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./esprit/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./esprit/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./esprit/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./esprit/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./esprit/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./esprit/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'session', loadChildren: () => import('./esprit/components/session/session.module').then(m => m.SessionModule) },
                    { path: 'service', loadChildren: () => import('./esprit/components/service/service.module').then(m => m.ServiceModule) },
                    { path: 'produit', loadChildren: () => import('./esprit/components/produit/produit.module').then(m => m.ProduitModule) },
                    { path: 'orders', loadChildren: () => import('./esprit/components/orders/orders.module').then(m => m.OrdersModule) },
                    { path: 'commandes', loadChildren: () => import('./esprit/components/commande/commande.module').then(m => m.CommandeModule) },
                    { path: 'activite', loadChildren: () => import('./esprit/components/activite/activite.module').then(m => m.ActiviteModule) },
                    { path: 'participerActivite', loadChildren: () => import('./esprit/components/activite-subs/activite-subs.module').then(m => m.ActiviteSubsModule) },
                    { path: 'profil/:id', loadChildren: () => import('./esprit/components/profil/profil.module').then(m => m.ProfilModule) },

                ]
            },
            { path: 'auth', loadChildren: () => import('./esprit/components/auth/auth.module').then(m => m.AuthModule) },

            { path: 'landing', loadChildren: () => import('./esprit/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
